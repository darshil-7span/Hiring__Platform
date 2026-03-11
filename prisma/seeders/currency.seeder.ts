import prisma from "../../src/config/prisma";

export async function seedCurrencies() {
  console.log("📌 Seeding currencies...");

  await prisma.currency.createMany({
    data: [
      { name: "Indian", code: "INR", symbol: "RUPEE" },
      { name: "USA", code: "USD", symbol: "DOLLAR" },
    ],
    skipDuplicates: true,
  });

  const currencies = {
    inr: await prisma.currency.findFirst({ where: { code: "INR" } }),
    usd: await prisma.currency.findFirst({ where: { code: "USD" } }),
  };

  console.log("✅ Currencies seeded");
  return currencies;
}
