const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const creator = req.body.creator;
  const age = req.body.age;
  const number = req.body.number;
  const durationHours = Number(req.body.durationHours);
  const durationMins = Number(req.body.durationMins);
  const materials = req.body.materials;
  const instructions = req.body.instructions;
  const youtube = req.body.youtube;
  const picture = req.body.picture;

  const newExercise = new Exercise({
    title,
    creator,
    age,
    number,
    durationHours,
    durationMins,
    materials,
    instructions,
    youtube,
    picture,
  });

  newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.title = req.body.title;
      exercise.creator = req.body.creator;
      exercise.age = req.body.age;
      exercise.number = req.body.number;
      exercise.durationHours = Number(req.body.durationHours);
      exercise.durationMins = Number(req.body.durationMins);
      exercise.materials = req.body.materials;
      exercise.instructions = req.body.instructions;
      exercise.youtube = req.body.youtube;
      exercise.picture = req.body.picture;

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;