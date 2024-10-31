import express from 'express';
const router = express.Router();

router.get('/ProductData', (req, res) => {
    
    try {
        if (global.Products_Data) {
            res.json(global.Products_Data);
        } else {
            res.status(404).send('No product data found');
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send('SERVER ERROR');
    }
})

export default router;
