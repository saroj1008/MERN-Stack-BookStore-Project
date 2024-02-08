const User = require('../models/Users');
const PRIVATE_KEY = '98450'; // Replace with your actual private key
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userFindFromList = await User.findOne({ email });

        if (!userFindFromList) {
            return res.status(401).json({ success: false, data: "Invalid credentials, email" });
        }

        // If the password doesn't match with the stored password for the user, send an error response to the client
        const isPasswordMatch = await bcrypt.compare(password, userFindFromList.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ success: false, data: "Invalid credentials, password" });
        }

        // Generate a JWT token using the user's information and send it back to the client
        const token = jwt.sign({
            firstName: userFindFromList.firstName,
            lastName: userFindFromList.lastName,
            email: userFindFromList.email,
            role: userFindFromList.role,
            _id: userFindFromList._id,
            // Add other information to be included in the JWT token
        }, PRIVATE_KEY);

        res.status(200).json({
            success: true, token, data: {
                firstName: userFindFromList.firstName,
                lastName: userFindFromList.lastName,
                email: userFindFromList.email,
                role: userFindFromList.role,
                _id: userFindFromList._id
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

const signUp = async (req, res) => {
    try {
        // Validate the request body data here if needed

        const hashedPassword = await bcrypt.hash(req.body.password, 8);
        const newMemberSignupData = { ...req.body, password: hashedPassword };
        const user = new User(newMemberSignupData);

        await user.save();
        res.status(201).json({ success: true, message: "User created successfully", data: user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

module.exports = { signIn, signUp };


// const User = require('../models/Users');
// const PRIVATE_KEY = 1008;
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const signIn = async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const userFindFromList = await User.findOne({ email });
//         console.log("userFing", userFindFromList);
//         if (!userFindFromList) {
//             return res.status(401).send({ success: false, data: "Invalid credentials, email" });
//         }

//         // If the password doesn't match with the stored password for the user, send an error response to the client
//         if (!bcrypt.compareSync(password, userFindFromList.password)) {
//             return res.status(401).send({ success: false, data: "Invalid credentials,password" });
//         }

//         // Generate a JWT token using the owner's information and send it back to the client
//         const token = jwt.sign({
//             firstName: userFindFromList.firstName,
//             lastName: userFindFromList.lastName,
//             email: userFindFromList.email,
//             role: userFindFromList.role,
//             _id: userFindFromList._id

//             // Add other information to be included in the JWT token
//         }, PRIVATE_KEY);

//         // const { _id, email, firstName, lastName, role } = userFindFromList;
//         // res.json({ _id, email, firstName, lastName, role });
//         // Send a success response to the client with the generated token
//         // res.status(200).send({ success: true, token, id: itemFindFromUserList._id, name: itemFindFromUserList.firstName });
//         res.status(200).send({ success: true, data: token });
//     } catch (error) {
//         console.error(error);
//     }
// };

// const signUp = async (req, res) => {
//     try {
//         const hashedPassword = await bcrypt.hash(req.body.password, 8);
//         const newMemberSignupData = { ...req.body, password: hashedPassword };
//         const user = new User(newMemberSignupData);

//         await user.save();
//         return res.status(201).json({ success: true, message: "User created successfully", data: user });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ success: false, message: "Internal Server Error" });
//     }
// };


// /* testing:
// const signUp = async (req, res) => {
//     try {
//         const user = new User(req.body); // Use object destructuring if needed
//         await user.save();
//         return res.status(201).json({ success: true, message: "User created successfully", data: user });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ success: false, message: "Internal Server Error" });
//     }
// };
// */

// /*
// const signIn = async (req, res) => {
//     try {
//         const admin = await User.findOne({email: req.body.email, password: req.body.password}); // Use object destructuring if needed
//         if(admin === null) {
//            return  res.status(400).send("Not Match");
//         }
//         const {_id, email, firstName, lastName, role} = admin;
//         res.json({_id, email, firstName, lastName, role});
//     } catch (error) {
//         console.error(error);
//     }
// };

// */

// module.exports = { signIn, signUp };