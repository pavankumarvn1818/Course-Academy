// import multer from "multer";
// import { v4 as uuid } from "uuid";

// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, "uploads");
//   },
//   filename(req, file, cb) {
//     const id = uuid();

//     const extName = file.originalname.split(".").pop();

//     const fileName = `${id}.${extName}`;

//     cb(null, fileName);
//   },
// });

// export const uploadFiles = multer({ storage }).single("file");


import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    return {
      folder: file.mimetype.startsWith("video") ? "lms/lectures" : "lms/courses",
      resource_type: "auto",
      allowed_formats: ["jpg", "png", "jpeg", "mp4", "mov", "avi", "webm", "pdf"],
    };
  },
});

export const uploadFiles = multer({ 
  storage,
  fileFilter: (req, file, cb) => {
    console.log("=== MULTER FILE FILTER ===");
    console.log("File:", file);
    cb(null, true);
  }
}).single("file");

// Add error handling wrapper
export const handleUploadError = (err, req, res, next) => {
  console.error("=== MULTER ERROR ===");
  console.error(err);
  
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ message: err.message });
  }
  
  res.status(500).json({ 
    message: "File upload failed", 
    error: err.message 
  });
};