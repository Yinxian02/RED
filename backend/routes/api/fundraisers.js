const router = require('express').Router();
let Fundraiser = require('../../models/fundraiser.model');
const ROLES_LIST = require('../../config/rolesList');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/').get(verifyRoles(ROLES_LIST.Admin), async(req, res) => {
  Fundraiser.find()
    .then(fundraiser => res.json(fundraiser))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(verifyRoles(ROLES_LIST.Admin), (req, res) => {
  console.log(req.body.fundraiser)
  const fundraiserName = req.body.fundraiser.fundraiserName;
  const date = Date.parse(req.body.fundraiser.date);
  const location = req.body.fundraiser.location;
  const description = req.body.fundraiser.description;
  const poster = req.body.fundraiser.poster;
  const signUp = req.body.fundraiser.signUp; 

  const newFundraiser = new Fundraiser({
    fundraiserName,
    date,
    location,
    description,
    poster, 
    signUp,
  });

  newFundraiser.save()
  .then(() => res.json('Fundraiser added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get(verifyRoles(ROLES_LIST.Admin), (req, res) => {
    Fundraiser.findById(req.params.id)
    .then(fundraiser => res.json(fundraiser))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete(verifyRoles(ROLES_LIST.Admin), (req, res) => {
    Fundraiser.findByIdAndDelete(req.params.id)
    .then(() => res.json('Fundraiser deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post(verifyRoles(ROLES_LIST.Admin), (req, res) => {
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