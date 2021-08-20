const { Router } = require('express');
const router = Router();

const stuffsCTRL = require('../controllers/stuffs.controllers.js');

//CRUD
//CREATE - READ - UPDATE - DELETE

router.get('/', stuffsCTRL.getStuffs);
router.get('/id/:id', stuffsCTRL.getStuff);
router.get('/name/:name', stuffsCTRL.getStuffName);
router.get('/movements/:idStuff', stuffsCTRL.getMovements);
router.post('/movements/', stuffsCTRL.createMovements);
router.post('/', stuffsCTRL.createStuffs);
router.put('/:id', stuffsCTRL.editStuffs);
router.delete('/:id', stuffsCTRL.deleteStuffs);

module.exports = router;
