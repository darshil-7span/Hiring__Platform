-- ================================================
-- RECRUITER PROFILE - SQL QUERIES
-- ================================================

-- ================================================
-- 1. VIEW ALL RECRUITERS WITH THEIR PROFILES
-- ================================================
SELECT 
    u.id AS user_id,
    u.name AS recruiter_name,
    u.email,
    u.phone_number,
    u.is_active,
    r.role_name,
    rp.designation,
    s.name AS state_name,
    c.name AS city_name,
    rp.created_at,
    rp.updated_at
FROM 
    "User" u
INNER JOIN 
    "Role" r ON u.role_id = r.id
LEFT JOIN 
    "RecruiterProfile" rp ON u.id = rp.user_id
LEFT JOIN 
    "State" s ON rp.state_id = s.id
LEFT JOIN 
    "City" c ON rp.city_id = c.id
WHERE 
    r.role_name = 'recruiter'
ORDER BY 
    u.created_at DESC;


-- ================================================
-- 2. GET SPECIFIC RECRUITER PROFILE BY USER ID
-- ================================================
SELECT 
    u.id,
    u.name,
    u.email,
    u.phone_number,
    rp.designation,
    rp.state_id,
    s.name AS state_name,
    rp.city_id,
    c.name AS city_name,
    rp.created_at AS profile_created,
    rp.updated_at AS profile_updated
FROM 
    "User" u
INNER JOIN 
    "RecruiterProfile" rp ON u.id = rp.user_id
LEFT JOIN 
    "State" s ON rp.state_id = s.id
LEFT JOIN 
    "City" c ON rp.city_id = c.id
WHERE 
    u.id = 2;  -- Replace with actual user_id


-- ================================================
-- 3. UPDATE RECRUITER PROFILE
-- ================================================
UPDATE "RecruiterProfile"
SET 
    designation = 'Senior HR Manager',
    state_id = 1,
    city_id = 1,
    updated_at = NOW()
WHERE 
    user_id = 2;  -- Replace with actual user_id


-- ================================================
-- 4. RECRUITERS BY LOCATION
-- ================================================
SELECT 
    c.name AS city_name,
    s.name AS state_name,
    COUNT(rp.user_id) AS recruiter_count
FROM 
    "RecruiterProfile" rp
INNER JOIN 
    "City" c ON rp.city_id = c.id
INNER JOIN 
    "State" s ON rp.state_id = s.id
GROUP BY 
    c.name, s.name
ORDER BY 
    recruiter_count DESC;


-- ================================================
-- 5. RECRUITERS WITH INCOMPLETE PROFILES
-- ================================================
SELECT 
    u.id,
    u.name,
    u.email,
    CASE 
        WHEN rp.designation IS NULL THEN 'Missing Designation'
        WHEN rp.state_id IS NULL THEN 'Missing Location'
        ELSE 'Complete Profile'
    END AS profile_status
FROM 
    "User" u
INNER JOIN 
    "Role" r ON u.role_id = r.id
LEFT JOIN 
    "RecruiterProfile" rp ON u.id = rp.user_id
WHERE 
    r.role_name = 'recruiter'
    AND (rp.designation IS NULL OR rp.state_id IS NULL);


-- ================================================
-- COMBINED USER QUERIES (Both Candidate & Recruiter)
-- ================================================

-- View all users with their profiles
SELECT 
    u.id,
    u.name,
    u.email,
    r.role_name,
    COALESCE(cp.qualification, rp.designation) AS profile_info,
    COALESCE(s1.name, s2.name) AS state_name,
    COALESCE(c1.name, c2.name) AS city_name
FROM 
    "User" u
INNER JOIN 
    "Role" r ON u.role_id = r.id
LEFT JOIN 
    "CandidateProfile" cp ON u.id = cp.user_id AND r.role_name = 'candidate'
LEFT JOIN 
    "RecruiterProfile" rp ON u.id = rp.user_id AND r.role_name = 'recruiter'
LEFT JOIN 
    "State" s1 ON cp.state_id = s1.id
LEFT JOIN 
    "State" s2 ON rp.state_id = s2.id
LEFT JOIN 
    "City" c1 ON cp.city_id = c1.id
LEFT JOIN 
    "City" c2 ON rp.city_id = c2.id
WHERE 
    r.role_name IN ('candidate', 'recruiter')
ORDER BY 
    u.created_at DESC;
