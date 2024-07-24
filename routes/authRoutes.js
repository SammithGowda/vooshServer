const User = require('../module/userModule')

const signUp = async (req, res) => {
    const { email, password, firstName, lastName, confirmPassword } = req.body
    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ data: 'User with this email already exists' });
        }
        const user = new User({ email, password, firstName, lastName, confirmPassword })
        await user.save();
        res.status(201).json({ message: "User created successfully" })
    } catch (error) {
        console.log(`Error in signup catch block ${error}`)
        res.status(401).send({ Error: error })
    }
}

const login = async (req, res) => {
    const { email, password } = req.body
    try {
        console.log("in server signup try block");

        if (!email || !password) {
            return res.status(422).send({ error: "Must provide email and password !" })
        }

        const user = await User.findOne({ email });



        if (!user) {
            return res.status(401).send({ data: "Invalid email or password !" })
        }

        if (user.password !== password) {
            return res.status(401).send({ data: "Invalid email or password!" });
        }

        res.status(201).json({ message: user })
    } catch (error) {
        console.log(`Error in signup catch block ${error}`)
        res.status(401).send({ Error: error })
    }
}

module.exports = { signUp, login };