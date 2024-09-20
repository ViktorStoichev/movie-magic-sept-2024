import { Router } from "express";
import movieService from "../services/movie-service.js";

const router = Router();

// URL: /movies/create
router.get('/create', (req, res) => {
    res.render('movies/create');
});

router.post('/create', async (req, res) => {
    const movieData = req.body;

    // TODO: save movie data
    await movieService.create(movieData);

    res.redirect('/');
});

router.get('/:movieId/details', async (req, res) => {
    const movieId = req.params.movieId
    const movie = await movieService.getOne(movieId);

    res.render('movies/details', { movie });
});

export default router;