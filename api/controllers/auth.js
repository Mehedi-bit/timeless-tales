import { db } from "../db.js";
import bcrypt from 'bcrypt';

export const register = (req, res) => {

    // CHECK EXISTING USER AND CREATE USER
    const q = "SELECT * FROM users WHERE email = ? OR username = ?"
    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err) return res.json(err);
        if (data.length) return res.status(409).json("User already exists!");
        
        // Hash the password and create a user
        const saltRounds = 10;
        const plainPassword = req.body.password;
        
        bcrypt.hash(plainPassword, saltRounds, function(err, hash) {
            // Insert the non-existing user into Database
            const q = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)";
            const values = [
                req.body.username,
                req.body.email,
                hash,
            ];
            console.log(values);
            
            db.query(q, [values], (err, data) => {
                if (err) return res.json(err);
                return res.status(200).json("User has been created");
            })
        });
            
    })
    
}
export const login = (req, res) => {

}
export const logout = (req, res) => {

}