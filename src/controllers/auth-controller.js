import { Router } from "express";
import { authService } from "../services/auth-service.js";

const router = Router();

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', (req, res) => {
    const { email, password, rePassword } = req.body;

    authService.register(email, password);
    res.redirect('/auth/login');
});

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    

    res.redirect('/');
});

export default router;