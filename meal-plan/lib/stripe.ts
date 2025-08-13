import Stripe from "stripe";

// STRIPE_SECRET

export const stripe = new Stripe(process.env.STRIPE_SECRET);
