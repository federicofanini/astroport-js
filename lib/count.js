import { prisma } from "@/app/lib/db";

export async function usersLeft() {
  try {
    // Count the number of users in the database
    const userCount = await prisma.user.count();

    // Perform the calculation 100 - userCount
    const remainingUsers = 88 - userCount;

    return remainingUsers;
  } catch (error) {
    console.error('Error counting users:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}