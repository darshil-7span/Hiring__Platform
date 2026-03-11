import prisma from "../../src/config/prisma";

interface SeedProfilesParams {
  users: {
    recruiters: any[];
    candidates: any[];
  };
  locations: {
    states: any;
    cities: any;
  };
}

export async function seedProfiles({ users, locations }: SeedProfilesParams) {
  console.log("📌 Seeding profiles...");

  // Recruiter Profile 1
  await prisma.recruiterProfile.upsert({
    where: { user_id: users.recruiters[0].id },
    update: {},
    create: {
      user_id: users.recruiters[0].id,
      designation: "Senior Talent Acquisition Manager",
      state_id: locations.states.gujarat.id,
      city_id: locations.cities.ahmedabad.id,
    },
  });

  // Recruiter Profile 2
  await prisma.recruiterProfile.upsert({
    where: { user_id: users.recruiters[1].id },
    update: {},
    create: {
      user_id: users.recruiters[1].id,
      designation: "HR Lead",
      state_id: locations.states.california.id,
      city_id: locations.cities.sanFrancisco.id,
    },
  });

  // Candidate Profile 1
  await prisma.candidateProfile.upsert({
    where: { user_id: users.candidates[0].id },
    update: {},
    create: {
      user_id: users.candidates[0].id,
      state_id: locations.states.gujarat.id,
      city_id: locations.cities.ahmedabad.id,
      qualification: "B.Tech in Computer Science",
      experience_years: 3,
      resume_url: "https://example.com/resumes/bob-resume.pdf",
    },
  });

  // Candidate Profile 2
  await prisma.candidateProfile.upsert({
    where: { user_id: users.candidates[1].id },
    update: {},
    create: {
      user_id: users.candidates[1].id,
      state_id: locations.states.maharashtra.id,
      city_id: locations.cities.mumbai.id,
      qualification: "M.Tech in Software Engineering",
      experience_years: 5,
      resume_url: "https://example.com/resumes/sarah-resume.pdf",
    },
  });

  console.log("✅ Profiles seeded");
}
