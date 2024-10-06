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

        console.log(decodedToken);

        return next();
    } catch (error) {
        res.clearCookie('auth');

        res.redirect('/auth/login');
        
    }

    // Add user data to request
}