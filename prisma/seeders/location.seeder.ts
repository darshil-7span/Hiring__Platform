import prisma from "../../src/config/prisma";

export async function seedLocations() {
  console.log("📌 Seeding locations...");

  // India
  let countryIndia = await prisma.country.findFirst({
    where: { iso_code: "IN" },
  });

  if (!countryIndia) {
    countryIndia = await prisma.country.create({
      data: { name: "India", iso_code: "IN" },
    });
  }

  // USA
  let countryUSA = await prisma.country.findFirst({
    where: { iso_code: "US" },
  });

  if (!countryUSA) {
    countryUSA = await prisma.country.create({
      data: { name: "United States", iso_code: "US" },
    });
  }

  // Gujarat State
  let stateGujarat = await prisma.state.findFirst({
    where: { name: "Gujarat", country_id: countryIndia.id },
  });

  if (!stateGujarat) {
    stateGujarat = await prisma.state.create({
      data: { name: "Gujarat", country_id: countryIndia.id },
    });
  }

  // Maharashtra State
  let stateMaharashtra = await prisma.state.findFirst({
    where: { name: "Maharashtra", country_id: countryIndia.id },
  });

  if (!stateMaharashtra) {
    stateMaharashtra = await prisma.state.create({
      data: { name: "Maharashtra", country_id: countryIndia.id },
    });
  }

  // California State
  let stateCalifornia = await prisma.state.findFirst({
    where: { name: "California", country_id: countryUSA.id },
  });

  if (!stateCalifornia) {
    stateCalifornia = await prisma.state.create({
      data: { name: "California", country_id: countryUSA.id },
    });
  }

  // Ahmedabad City
  let cityAhmedabad = await prisma.city.findFirst({
    where: { name: "Ahmedabad", state_id: stateGujarat.id },
  });

  if (!cityAhmedabad) {
    cityAhmedabad = await prisma.city.create({
      data: { name: "Ahmedabad", state_id: stateGujarat.id },
    });
  }

  // Mumbai City
  let cityMumbai = await prisma.city.findFirst({
    where: { name: "Mumbai", state_id: stateMaharashtra.id },
  });

  if (!cityMumbai) {
    cityMumbai = await prisma.city.create({
      data: { name: "Mumbai", state_id: stateMaharashtra.id },
    });
  }

  // San Francisco City
  let citySanFrancisco = await prisma.city.findFirst({
    where: { name: "San Francisco", state_id: stateCalifornia.id },
  });

  if (!citySanFrancisco) {
    citySanFrancisco = await prisma.city.create({
      data: { name: "San Francisco", state_id: stateCalifornia.id },
    });
  }

  console.log("✅ Locations seeded");

  return {
    countries: { india: countryIndia, usa: countryUSA },
    states: { gujarat: stateGujarat, maharashtra: stateMaharashtra, california: stateCalifornia },
    cities: { ahmedabad: cityAhmedabad, mumbai: cityMumbai, sanFrancisco: citySanFrancisco },
  };
}
