import { Router } from "express";
import movieService from "../services/movie-service.js";
import castService from "../services/cast-service.js";

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
    console.log(req.user?.email);
    
    const movieId = req.params.movieId
    const movie = await movieService.getOne(movieId).lean();

    res.render('movies/details', { movie });
});

router.get('/search', async (req, res) => {
    const filter = req.query;
    const movies = await movieService.getAll(filter).lean();
    

    res.render('home', { isSearch: true, movies, filter });
});

router.get('/:movieId/attach', async (req, res) => {
    const movie = await movieService.getOne(req.params.movieId).lean();
    const casts = await castService.getAllWithout(movie.casts).lean();
    res.render('movies/attach', { movie, casts });
});

router.post('/:movieId/attach', async (req, res) => {
    const movieId = req.params.movieId;
    const castId = req.body.cast;
    const character = req.body.character;

    await movieService.attach(movieId, castId, character);    

    res.redirect(`/movies/${movieId}/details`);
})

export default router;