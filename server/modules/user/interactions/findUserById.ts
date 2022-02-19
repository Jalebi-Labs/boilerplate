import prisma from "@/utils/prisma";

export default async function findUserById(userId: string) {
  const user = await prisma.userProfile.findUnique({
    where: {
      id: userId,
    }
  })

  if (!user) {
    throw new Error(`User with ID (${userId}) not found`)
  }

  return user;
}