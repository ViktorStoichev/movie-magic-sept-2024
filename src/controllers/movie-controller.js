import { Router } from "express";

const router = Router();

// URL: /movies/create
router.get('/create', (req, res) => {
    res.render('movies/create');
});

router.post('/create', (req, res) => {
    const movieData = req.body;

    console.log(movieData);
    
    
})

export default router;