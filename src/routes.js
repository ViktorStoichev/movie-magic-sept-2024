import { Router } from 'express';

import homeController from './controllers/home-controller.js';
import movieController from './controllers/movie-controller.js';
import castController from './controllers/cast-controller.js';

const router = Router();

router.use(homeController);
router.use('/movies', movieController);
router.use('/cast', castController);
router.all('*', (req, res) => {
    res.render('404');
})

export default router;
