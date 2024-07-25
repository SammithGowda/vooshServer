require('dotenv').config()
require('./module/userModule')
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const { signUp, login } = require("./routes/authRoutes");
const { createTask, getTask, deleteTask, updateTask } = require('./routes/taskRoute');
app.post('/login', login)
app.get('/getTask', getTask)
app.post('/signup', signUp)
app.post('/createTask', createTask)
app.delete('/deleteTask/:_id', deleteTask)
app.put('/updateTask/:_id', updateTask)
// app.use(authRoute);
const PORT = 3000;
const userName = process.env.MONGODB_USER
const password = process.env.MONGODB_PASS
const mongoUri = `mongodb+srv://${userName}:${password}@vooshcluster.flaqyg0.mongodb.net/?retryWrites=true&w=majority&appName=vooshCluster`





async function mongooseConnection() {
    try {
        mongoose.connect(mongoUri);
        mongoose.connection.on("connected", () => {
            console.log(`DB connection successfully Done`);
        })

        mongoose.connection.on("error", (err) => {
            console.log(`DB connection failed got error ${err}`);
        })
    } catch (error) {
        console.log(`Error while establishing Mdb Connection${error}`);
    }
}








//connection trigger
mongooseConnection()
app.listen(PORT, () => {
    console.log(`App Running on Port ${PORT}`)
})