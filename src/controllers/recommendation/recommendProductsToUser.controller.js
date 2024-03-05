import { findProductsInCategory, findUserById, userMostRecentPurchase } from "../../services/index.js";

export default async(req, res, next) => {
    try {
        console.log("Here")
        const userId = req.params.userId;
        // ensuring user exists
        const userExists = await findUserById(userId)
        if(!userExists) return res.json({ 
            success: false,
            message: 'User not found.',
            data: null
        })
        // Assuming a function that finds the most recent purchase for a user
        const mostRecentPurchase = await userMostRecentPurchase(userId);
        if (!mostRecentPurchase) {
            return res.status(404).json({ error: 'No recent purchases found for this user.' });
        }
        // Assuming a function that finds products in the same category as the most recent purchase
        const recommendedProducts = await findProductsInCategory(mostRecentPurchase.category);
        const recommendedProductIds = recommendedProducts.map(product => product.id);
        res.json({ success: true, message: "Products recommended!!!", data:recommendedProductIds });
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// NOTE: in optimizing this process we implement cache system such as redis and collaborative filtering
