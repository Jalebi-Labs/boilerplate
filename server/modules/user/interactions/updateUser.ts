import prisma from "../../../../utils/prisma"
import { UserProfile } from '@prisma/client'

export type UpdateUserArgs = {
  name?: string,
}

export default async function updateUser(userId: UserProfile['id'], args: UpdateUserArgs): Promise<void> {
  await prisma.userProfile.update({
    where: {
      id: userId,
    },
    data: {
      ...args
    }
  })
}