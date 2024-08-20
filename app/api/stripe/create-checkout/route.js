import { NextResponse } from "next/server";
import { createCheckout } from "@/lib/stripe";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "@/app/lib/db";

// This function is used to create a Stripe Checkout Session (one-time payment or subscription)
// It's called by the <ButtonCheckout /> component
// Users must be authenticated. It will prefill the Checkout data with their email and/or credit card (if any)
export async function POST(req) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  try {
    const body = await req.json();

    const { priceId, mode, successUrl, cancelUrl } = body;

    if (!priceId) {
      return NextResponse.json(
        { error: "Price ID is required" },
        { status: 400 }
      );
    } else if (!successUrl || !cancelUrl) {
      return NextResponse.json(
        { error: "Success and cancel URLs are required" },
        { status: 400 }
      );
    } else if (!body.mode) {
      return NextResponse.json(
        {
          error:
            "Mode is required (either 'payment' for one-time payments or 'subscription' for recurring subscription)",
        },
        { status: 400 }
      );
    }

    // Search for a profile with unique ID equals to the user session ID (in table called 'profiles')
    // const { data } = await supabase
    //   .from("user")
    //   .select("*")
    //   .eq("id", user?.id)
    //   .single();
    
    const { data } = await prisma.user.findUnique({
      where: {
        id: user.id
      },
    })

    // If no profile found, create one. This is used to store the Stripe customer ID
    if (!data) {
      await prisma.user.update({
        where: { 
          id: user.id
        },
        data: {
          price_id: body.priceId,
        }
      })
      // await supabase.from("user").insert([
      //   {
      //     id: user?.id,
      //     email: user?.email,
      //     price_id: body.priceId,
      //   },
      // ]);
    }

    const stripeSessionURL = await createCheckout({
      priceId,
      mode,
      successUrl,
      cancelUrl,
      clientReferenceId: user?.id,
      user: {
        email: user?.email,
        // If the user has already purchased, it will automatically prefill it's credit card
        customerId: data?.customer_id,
      },
      // If you send coupons from the frontend, you can pass it here
      // couponId: body.couponId,
    });

    return NextResponse.json({ url: stripeSessionURL });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e?.message }, { status: 500 });
  }
}
