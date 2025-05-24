const express = require("express");
const {
  createProduct,
  getaProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  addToWishlist,
  rating,
  uploadExcel,
  pcategory,
} = require("../controller/productCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", authMiddleware, isAdmin, createProduct);
router.post("/upload-excel",authMiddleware,isAdmin,upload.single("file"), uploadExcel);
router.get("/category",pcategory)

router.get("/:id", getaProduct);
router.put("/wishlist", authMiddleware, addToWishlist);
router.put("/rating", authMiddleware, rating);

router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);

router.get("/", getAllProduct);

module.exports = router;
