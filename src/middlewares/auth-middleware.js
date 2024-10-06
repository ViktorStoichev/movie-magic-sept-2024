import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    // Check if there is a token in the request
    const token = req.cookies['auth'];

    if (!token) {
        return next();
    };

    // Validate token
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        const user = {
            _id: decodedToken._id,
            email: decodedToken.email
        }

        req.user = user;
        res.locals.userEmail = user.email;
        res.locals.userId = user._id;
        res.locals.isAuthenticated = true;

        return next();
    } catch (error) {
        res.clearCookie('auth');

        res.redirect('/auth/login');
        
    }

    // Add user data to request
}