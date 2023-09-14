const router = require('express').Router();
let Fundraiser = require('../models/fundraiser.model');

router.route('/').get((req, res) => {
  Fundraiser.find()
    .then(fundraiser => res.json(fundraiser))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const fundraiserName = req.body.fundraiserName;
  const date = Date.parse(req.body.date);
  const location = req.body.location;
  const description = req.body.description;
  const poster = req.body.poster;
  const instagram = req.body.instagram;
  const signUp = req.body.signUp; 
  const addToCalendar = req.body.addToCalendar; 

  const newFundraiser = new Fundraiser({
    fundraiserName,
    date,
    location,
    description,
    poster, 
    instagram,
    signUp,
    addToCalendar,
  });

  newFundraiser.save()
  .then(() => res.json('Fundraiser added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Fundraiser.findById(req.params.id)
    .then(fundraiser => res.json(fundraiser))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Fundraiser.findByIdAndDelete(req.params.id)
    .then(() => res.json('Fundraiser deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Fundraiser.findById(req.params.id)
    .then(fundraiser => {
        fundraiser.fundraiserName = req.body.fundraiserName;
        fundraiser.date = Date.parse(req.body.date);
        fundraiser.location = req.body.location;
        fundraiser.description = req.body.description;
        fundraiser.poster = req.body.poster;
        fundraiser.instagram = req.body.instagram;
        fundraiser.signUp = req.body.signUp; 
        fundraiser.addToCalendar = req.body.addToCalendar; 
        
        fundraiser.save()
        .then(() => res.json('Fundraiser updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;