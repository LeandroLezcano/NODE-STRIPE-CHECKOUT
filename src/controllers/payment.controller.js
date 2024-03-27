import Stripe from "stripe";
import { STRIPE_KEY_SECRET } from '../routes/config.js'

const stripe = new Stripe(STRIPE_KEY_SECRET);

export const createSession = async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    product_data: {
                        name: 'MacBook',
                        description: 'MacBook M1'
                    },
                    currency: 'usd',
                    unit_amount: 90000,
                },
                quantity: 1,
            },
            {
                price_data: {
                    product_data: {
                        name: 'Iphone 15',
                        description: 'Iphone 15 128gb'
                    },
                    currency: 'usd',
                    unit_amount: 70000,
                },
                quantity: 2,
            },
        ],
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
    })
    return res.json(session)
}