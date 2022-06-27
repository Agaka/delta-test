const express = require("express")
const router = express.Router();
const StudentController = require("../controllers/StudentController")
const multer = require('multer')
const path = require('path');

const storage = multer.diskStorage({ 
    destination: path.join(__dirname, '..','public', 'upload'),
    filename: (req, file, cb) => {
        cb(null, Date.now().toString() + "_" + file.originalname)
    }
});
const upload = multer({storage}); 

router.post("/student",upload.single('image'), StudentController.create) 
router.get("/student", StudentController.index) 
router.get("/student/:id", StudentController.findStudent)     
router.put("/student/:id",upload.single('image'), StudentController.edit)     
router.delete("/student/:id", StudentController.remove)     


module.exports = router; 