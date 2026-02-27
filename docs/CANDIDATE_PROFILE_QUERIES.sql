-- ================================================
-- CANDIDATE PROFILE - SQL QUERIES
-- ================================================

-- ================================================
-- 1. VIEW ALL CANDIDATES WITH THEIR PROFILES
-- ================================================
SELECT 
    u.id AS user_id,
    u.name AS candidate_name,
    u.email,
    u.phone_number,
    u.is_active,
    r.role_name,
    cp.qualification,
    cp.experience_years,
    cp.resume_url,
    s.name AS state_name,
    c.name AS city_name,
    cp.created_at,
    cp.updated_at
FROM 
    "User" u
INNER JOIN 
    "Role" r ON u.role_id = r.id
LEFT JOIN 
    "CandidateProfile" cp ON u.id = cp.user_id
LEFT JOIN 
    "State" s ON cp.state_id = s.id
LEFT JOIN 
    "City" c ON cp.city_id = c.id
WHERE 
    r.role_name = 'candidate'
ORDER BY 
    u.created_at DESC;


-- ================================================
-- 2. GET SPECIFIC CANDIDATE PROFILE BY USER ID
-- ================================================
SELECT 
    u.id,
    u.name,
    u.email,
    u.phone_number,
    cp.qualification,
    cp.experience_years,
    cp.resume_url,
    cp.state_id,
    s.name AS state_name,
    cp.city_id,
    c.name AS city_name,
    cp.created_at AS profile_created,
    cp.updated_at AS profile_updated
FROM 
    "User" u
INNER JOIN 
    "CandidateProfile" cp ON u.id = cp.user_id
LEFT JOIN 
    "State" s ON cp.state_id = s.id
LEFT JOIN 
    "City" c ON cp.city_id = c.id
WHERE 
    u.id = 3;  -- Replace with actual user_id


-- ================================================
-- 3. GET SPECIFIC CANDIDATE BY EMAIL
-- ================================================
SELECT 
    u.id,
    u.name,
    u.email,
    u.phone_number,
    cp.qualification,
    cp.experience_years,
    cp.resume_url,
    s.name AS state_name,
    c.name AS city_name
FROM 
    "User" u
LEFT JOIN 
    "CandidateProfile" cp ON u.id = cp.user_id
LEFT JOIN 
    "State" s ON cp.state_id = s.id
LEFT JOIN 
    "City" c ON cp.city_id = c.id
WHERE 
    u.email = 'test@example.com';  -- Replace with actual email


-- ================================================
-- 4. CHECK IF CANDIDATE PROFILE EXISTS
-- ================================================
SELECT 
    user_id,
    CASE 
        WHEN user_id IS NOT NULL THEN 'Profile Exists'
        ELSE 'No Profile'
    END AS status
FROM 
    "CandidateProfile"
WHERE 
    user_id = 3;  -- Replace with actual user_id


-- ================================================
-- 5. COUNT CANDIDATES WITH COMPLETE PROFILES
-- ================================================
SELECT 
    COUNT(*) AS total_candidates,
    COUNT(cp.qualification) AS with_qualification,
    COUNT(cp.experience_years) AS with_experience,
    COUNT(cp.resume_url) AS with_resume,
    COUNT(cp.state_id) AS with_location
FROM 
    "User" u
INNER JOIN 
    "Role" r ON u.role_id = r.id
LEFT JOIN 
    "CandidateProfile" cp ON u.id = cp.user_id
WHERE 
    r.role_name = 'candidate';


-- ================================================
-- 6. CANDIDATES WITH INCOMPLETE PROFILES
-- ================================================
SELECT 
    u.id,
    u.name,
    u.email,
    CASE 
        WHEN cp.qualification IS NULL THEN 'Missing Qualification'
        WHEN cp.experience_years IS NULL THEN 'Missing Experience'
        WHEN cp.resume_url IS NULL THEN 'Missing Resume'
        WHEN cp.state_id IS NULL THEN 'Missing Location'
        ELSE 'Complete Profile'
    END AS profile_status
FROM 
    "User" u
INNER JOIN 
    "Role" r ON u.role_id = r.id
LEFT JOIN 
    "CandidateProfile" cp ON u.id = cp.user_id
WHERE 
    r.role_name = 'candidate'
    AND (
        cp.qualification IS NULL 
        OR cp.experience_years IS NULL 
        OR cp.resume_url IS NULL
        OR cp.state_id IS NULL
    );


-- ================================================
-- 7. CANDIDATES BY EXPERIENCE LEVEL
-- ================================================
SELECT 
    CASE 
        WHEN cp.experience_years = 0 THEN 'Fresher'
        WHEN cp.experience_years BETWEEN 1 AND 2 THEN 'Junior (1-2 years)'
        WHEN cp.experience_years BETWEEN 3 AND 5 THEN 'Mid-Level (3-5 years)'
        WHEN cp.experience_years BETWEEN 6 AND 10 THEN 'Senior (6-10 years)'
        WHEN cp.experience_years > 10 THEN 'Expert (10+ years)'
        ELSE 'Not Specified'
    END AS experience_level,
    COUNT(*) AS candidate_count
FROM 
    "User" u
INNER JOIN 
    "Role" r ON u.role_id = r.id
LEFT JOIN 
    "CandidateProfile" cp ON u.id = cp.user_id
WHERE 
    r.role_name = 'candidate'
GROUP BY 
    experience_level
ORDER BY 
    MIN(cp.experience_years) NULLS LAST;


-- ================================================
-- 8. CANDIDATES BY LOCATION (CITY)
-- ================================================
SELECT 
    c.name AS city_name,
    s.name AS state_name,
    COUNT(cp.user_id) AS candidate_count
FROM 
    "CandidateProfile" cp
INNER JOIN 
    "City" c ON cp.city_id = c.id
INNER JOIN 
    "State" s ON cp.state_id = s.id
GROUP BY 
    c.name, s.name
ORDER BY 
    candidate_count DESC;


-- ================================================
-- 9. RECENTLY UPDATED CANDIDATE PROFILES
-- ================================================
SELECT 
    u.id,
    u.name,
    u.email,
    cp.qualification,
    cp.experience_years,
    cp.updated_at AS last_updated
FROM 
    "User" u
INNER JOIN 
    "CandidateProfile" cp ON u.id = cp.user_id
WHERE 
    cp.updated_at > cp.created_at  -- Profile has been updated
ORDER BY 
    cp.updated_at DESC
LIMIT 10;


-- ================================================
-- 10. INSERT NEW CANDIDATE PROFILE (Manual Entry)
-- ================================================
-- First, get the user_id of the candidate
-- Then insert profile data

INSERT INTO "CandidateProfile" (
    user_id,
    state_id,
    city_id,
    qualification,
    experience_years,
    resume_url,
    created_at,
    updated_at
) VALUES (
    3,  -- user_id from User table
    1,  -- state_id (e.g., Gujarat)
    1,  -- city_id (e.g., Ahmedabad)
    'B.Tech Computer Science',
    3,
    'https://example.com/resume.pdf',
    NOW(),
    NOW()
)
ON CONFLICT (user_id) DO NOTHING;  -- Prevent duplicates


-- ================================================
-- 11. UPDATE CANDIDATE PROFILE
-- ================================================
UPDATE "CandidateProfile"
SET 
    qualification = 'M.Tech Computer Science',
    experience_years = 5,
    resume_url = 'https://example.com/new-resume.pdf',
    state_id = 1,
    city_id = 1,
    updated_at = NOW()
WHERE 
    user_id = 3;  -- Replace with actual user_id


-- ================================================
-- 12. DELETE CANDIDATE PROFILE (Keep User)
-- ================================================
-- This only deletes the profile, not the user
DELETE FROM "CandidateProfile"
WHERE user_id = 3;  -- Replace with actual user_id


-- ================================================
-- 13. SEARCH CANDIDATES BY QUALIFICATION
-- ================================================
SELECT 
    u.id,
    u.name,
    u.email,
    cp.qualification,
    cp.experience_years
FROM 
    "User" u
INNER JOIN 
    "CandidateProfile" cp ON u.id = cp.user_id
WHERE 
    cp.qualification ILIKE '%computer%'  -- Case-insensitive search
    OR cp.qualification ILIKE '%engineer%'
ORDER BY 
    cp.experience_years DESC;


-- ================================================
-- 14. CANDIDATES WITH SPECIFIC EXPERIENCE RANGE
-- ================================================
SELECT 
    u.id,
    u.name,
    u.email,
    cp.qualification,
    cp.experience_years,
    c.name AS city
FROM 
    "User" u
INNER JOIN 
    "CandidateProfile" cp ON u.id = cp.user_id
LEFT JOIN 
    "City" c ON cp.city_id = c.id
WHERE 
    cp.experience_years BETWEEN 3 AND 5  -- 3-5 years experience
    AND u.is_active = true
ORDER BY 
    cp.experience_years ASC;


-- ================================================
-- 15. CANDIDATES WITHOUT PROFILE
-- ================================================
-- Users who are candidates but don't have a profile entry
SELECT 
    u.id,
    u.name,
    u.email,
    u.created_at,
    'No Profile Created' AS status
FROM 
    "User" u
INNER JOIN 
    "Role" r ON u.role_id = r.id
LEFT JOIN 
    "CandidateProfile" cp ON u.id = cp.user_id
WHERE 
    r.role_name = 'candidate'
    AND cp.user_id IS NULL;


-- ================================================
-- 16. FULL CANDIDATE DETAILS WITH ALL RELATIONS
-- ================================================
SELECT 
    u.id AS user_id,
    u.name AS candidate_name,
    u.email,
    u.phone_number,
    u.is_active,
    u.created_at AS user_created,
    r.role_name,
    co.name AS country_name,
    cp.qualification,
    cp.experience_years,
    cp.resume_url,
    s.name AS state_name,
    c.name AS city_name,
    cp.created_at AS profile_created,
    cp.updated_at AS profile_updated
FROM 
    "User" u
INNER JOIN 
    "Role" r ON u.role_id = r.id
LEFT JOIN 
    "Country" co ON u.country_id = co.id
LEFT JOIN 
    "CandidateProfile" cp ON u.id = cp.user_id
LEFT JOIN 
    "State" s ON cp.state_id = s.id
LEFT JOIN 
    "City" c ON cp.city_id = c.id
WHERE 
    u.id = 3;  -- Replace with actual user_id


-- ================================================
-- 17. PROFILE COMPLETION PERCENTAGE
-- ================================================
SELECT 
    u.id,
    u.name,
    u.email,
    (
        CASE WHEN cp.qualification IS NOT NULL THEN 20 ELSE 0 END +
        CASE WHEN cp.experience_years IS NOT NULL THEN 20 ELSE 0 END +
        CASE WHEN cp.resume_url IS NOT NULL THEN 20 ELSE 0 END +
        CASE WHEN cp.state_id IS NOT NULL THEN 20 ELSE 0 END +
        CASE WHEN cp.city_id IS NOT NULL THEN 20 ELSE 0 END
    ) AS profile_completion_percentage
FROM 
    "User" u
LEFT JOIN 
    "CandidateProfile" cp ON u.id = cp.user_id
INNER JOIN 
    "Role" r ON u.role_id = r.id
WHERE 
    r.role_name = 'candidate'
ORDER BY 
    profile_completion_percentage DESC;


-- ================================================
-- HOW TO RUN THESE QUERIES
-- ================================================

-- Option 1: Using psql command line
-- psql -U postgres -d Hiring_Platform -f CANDIDATE_PROFILE_QUERIES.sql

-- Option 2: Using Prisma Studio (Visual Database Browser)
-- npx prisma studio

-- Option 3: Using psql interactive mode
-- psql -U postgres -d Hiring_Platform
-- Then paste individual queries

-- Option 4: Using DBeaver / pgAdmin (GUI tools)
-- Connect to database and run queries

-- ================================================
-- QUICK TEST QUERIES
-- ================================================

-- Check if profiles are being created on registration
SELECT COUNT(*) FROM "CandidateProfile";

-- View last 5 registered candidates
SELECT u.id, u.name, u.email, u.created_at 
FROM "User" u 
INNER JOIN "Role" r ON u.role_id = r.id 
WHERE r.role_name = 'candidate' 
ORDER BY u.created_at DESC 
LIMIT 5;

-- Check profile for specific user
SELECT * FROM "CandidateProfile" WHERE user_id = 3;
