import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/db";
import { unstable_noStore as noStore } from "next/cache";
import { generateUsername } from "unique-username-generator";

export async function GET(req) {
    noStore();
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || user === null || !user.id) {
        throw new Error("Something went wrong...");
    }

    let dbUser = await prisma.user.findUnique({
        where: {
          id: user.id,
        },
    });

    if (!dbUser) {
        dbUser = await prisma.user.create({
          data: {
            id: user.id,
            email: user.email ?? "",
            firstName: user.given_name ?? "",
            lastName: user.family_name ?? "",
            imageUrl: user.picture,
            username: generateUsername(".", 0, 15),
            customer_id: "",
            price_id: ""
          },
        });
    }

    return NextResponse.redirect(
        process.env.NODE_ENV === "development" 
        ? "http://localhost:3000/pricing" 
        : "https://astroport.it/pricing")
}