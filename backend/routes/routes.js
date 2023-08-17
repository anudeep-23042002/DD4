const express = require('express');
const {homepage,fetchdonations,createfoodpost,volunteer,setdonated,deletepost,setpickup,fetchpickups}
=require('../controllers/foodcontrollers');
const requireAuth = require('../middleware/requireAuth');
const router=express.Router();
router.use(requireAuth);

router.delete('/:id',deletepost)

router.get('/',homepage)

router.post('/',createfoodpost)

router.get('/donations',fetchdonations)

router.get('/pickups',fetchpickups)

router.post('/:id',setpickup)

router.get('/:id',setdonated)



router.post('/volunteer',volunteer)

module.exports=router;