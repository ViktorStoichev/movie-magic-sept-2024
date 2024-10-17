import User from "../models/User.js"
import bcrypt from 'bcrypt';
import jwt from "../lib/jwt.js";

const register = async (email, password) => {
    const userCount = await User.countDocuments({ email });

    if (userCount > 0) {
        throw new Error('User already exists!');
    }
    
    return User.create({ email, password }) ;
}

const login = async (email, password) => {
    // Validate user
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('User does not exist!');
    }

    // Validate password
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Password is not correct!');
    }

    // Generate jwt token
    const payload = {
        _id: user._id,
        email,
    }

    const token = await jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2h' });

    return token;
}

export const authService = {
    register,
    login
}