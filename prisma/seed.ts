import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync("12345678", salt);

  const isVerified = bcrypt.compareSync("12345678", hash);
    await prisma.user.create({
      data: { username: "Astha", password:hash},
    });

    console.log(isVerified);

}

main();
