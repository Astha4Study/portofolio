import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const GET = async () => {
  const username = "Astha";
  const password = "12345678";

  const user = await prisma.user.findFirst({ where: { username: username } });
  const isvalid = bcrypt.compareSync(password, user?.password!)

  return Response.json({ login: "success", user,isvalid });
};
