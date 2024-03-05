import { recommendProductsToUserController } from '../controllers/index.js';
import { findProductsInCategory, userMostRecentPurchase } from '../services/index.js';
import recommendationRoutes from './recommendation/index.js';

export default function(app) {
    app.get('/', async(req, res, next) => {
        return res.json({
            success: true,
            message: 'Success',
            data: null
        })
    })
    app.use('/api/v1/recommendations', recommendationRoutes);
    app.post('/api/v1/auth');
    // app.get('/api/v1/recommendations/:userId', async(req, res, next) => {
    //     try {
    //         console.log("Here")
    //         const userId = req.params.userId;
    //         // Assuming a function that finds the most recent purchase for a user
    //         const mostRecentPurchase = await userMostRecentPurchase(userId);
    //         if (!mostRecentPurchase) {
    //             return res.status(404).json({ error: 'No recent purchases found for this user.' });
    //         }
    //         // Assuming a function that finds products in the same category as the most recent purchase
    //         const recommendedProducts = await findProductsInCategory(mostRecentPurchase.category);
    //         const recommendedProductIds = recommendedProducts.map(product => product.id);
    //         res.json({ recommendedProductIds });
    //     } catch (error) {
    //         console.error('Error fetching recommendations:', error);
    //         res.status(500).json({ error: 'Internal server error' });
    //     }
    // });
}
