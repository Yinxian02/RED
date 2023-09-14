const router = require('express').Router();
let Project = require('../models/project.model');

router.route('/').get((req, res) => {
  Project.find()
    .then(project => res.json(project))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const projectName = req.body.projectName;
  const year = Number(req.body.year);
  const location = req.body.location;
  const description = req.body.description;
  const picture = req.body.picture;
  const youtube = req.body.youtube; 
  const report = req.body.report; 

  const newProject = new Project({
    projectName,
    year,
    location,
    description,
    picture,
    youtube,
    report,
  });

  newProject.save()
  .then(() => res.json('Project added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Project.findById(req.params.id)
    .then(project => res.json(project))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Project.findByIdAndDelete(req.params.id)
    .then(() => res.json('Project deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Project.findById(req.params.id)
    .then(project => {
        project.projectName = req.body.projectName;
        project.year = Number(req.body.year);
        project.location = req.body.location;
        project.description = req.body.description;
        project.picture = req.body.picture;
        project.youtube = req.body.youtube; 
        project.report = req.body.report; 
        
        project.save()
        .then(() => res.json('Project updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;


