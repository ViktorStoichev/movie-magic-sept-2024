import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        minLength: [10, 'Email is too short!'],
        validate: [/@[A-Za-z0-9]+.[A-Za-z0-9]+$/, 'Invalid email address!']
    },
    password: {
        type: String,
        minLength: [6, 'Your password is too short!'],
        validate: [/^[A-Za-z0-9]+$/, 'Invalid password characters!']
    }
});

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
});

const User = model('User', userSchema);

export default User;
