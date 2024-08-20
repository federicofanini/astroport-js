"use server"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "./lib/db";
import { redirect } from "next/navigation";

export async function updateUserAccess({ customerId, priceId, userId }) {
  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        customer_id: customerId,
        price_id: priceId,
        has_access: true,
      },
    });

    return { 
      success: console.log("Successfully updated user access!"), 
      updatedUser,
    };
  } catch (error) {
    console.error('Error updating user:', error);
    return { success: false, error: 'Failed to update user' };
  }
}

export async function updateUsernames(prevState, formData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const github_username = formData.get("github_username") 
  const discord_username = formData.get("discord_username") 
  try {
    const github = await prisma.user.update({
      where: { id: user.id },
      data: {
        github_username: github_username,
        discord_username: discord_username,
      },
    });

    return {
      message: "Success!",
      status: "green",
      github
    };
  } catch (error) {
    console.error('Error updating username:', error);
    return { success: false, error: 'Failed to update username' };
  }
}

export async function user() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login");
  }

  return user;
}