require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workout");

const PORT = process.env.PORT;
// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutRoutes);

// // routes
// app.get('/', (req,res)=>{
//     res.json({mssg:'Welcome to the app'})
// })

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(PORT, () => {
      console.log(`connected to db & listening on port ${PORT}!!!`);
    });
  })
  .catch((error) => {
    console.log("error", error);
  });
