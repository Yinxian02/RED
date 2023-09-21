const router = require('express').Router();
let Project = require('../../models/project.model');
const ROLES_LIST = require('../../config/rolesList');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/').get(verifyRoles(ROLES_LIST.Admin), async(req, res) => {
  Project.find()
    .then(project => res.json(project))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(verifyRoles(ROLES_LIST.Admin), (req, res) => {
  const projectName = req.body.project.projectName;
  const year = Number(req.body.project.year);
  const location = req.body.project.location;
  const description = req.body.project.description;
  const picture = req.body.project.picture;
  const youtube = req.body.project.youtube; 
  const report = req.body.project.report; 

  const newProject = new Project({
    projectName,
    year,
    location,
    description,
    picture,
    youtube,
    report,
  });
  // console.log(newProject)
  newProject.save()
  .then(() => res.json('Project added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get(verifyRoles(ROLES_LIST.Admin), (req, res) => {
    Project.findById(req.params.id)
    .then(project => res.json(project))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete(verifyRoles(ROLES_LIST.Admin), (req, res) => {
    Project.findByIdAndDelete(req.params.id)
    .then(() => res.json('Project deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post(verifyRoles(ROLES_LIST.Admin), (req, res) => {
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


