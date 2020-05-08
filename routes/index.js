const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const postController = require('../controllers/postController');
const auth = require('../middlewares/auth')

const upload = require('../configs/uploads')

/* GET home page. */

router.get("/", authController.create);

router.get("/login", authController.create);
router.post("/login", authController.store);

router.get("/registro", userController.create);
router.post("/registro", userController.store);

router.get("/publicar", auth, postController.create);
router.post("/publicar", upload.any(), postController.store);

router.get("/home", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
