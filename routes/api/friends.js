const express = require('express');
const router = express.Router();
const friendsCtrl = require('../../controllers/friends');
const multer = require('multer')
const upload = multer();

// /*---------- Public Routes ----------*/

router.post('/', upload.single('photo'), friendsCtrl.create);
router.get('/', friendsCtrl.index)


/*---------- Protected Routes ----------*/

module.exports = router;