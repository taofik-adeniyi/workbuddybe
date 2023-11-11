const express = require('express')
const { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout } = require('../controllers/workout')
const router = express.Router()

// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)

//POST a new workout
router.post('/', (req, res)=>{
    createWorkout(req,res)
})

//DELETE a workout
router.delete('/:id',deleteWorkout)

//UPDATE a workout
router.patch('/:id',updateWorkout)


module.exports = router

// nI5iyRYE8vfDQtfH password to mongo atlas db
//bidemi64 as username