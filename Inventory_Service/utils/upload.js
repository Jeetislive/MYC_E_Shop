// import multer from "multer"
// import path from "path";

// // Configure storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // Save files in /uploads
//   },
//   filename: function (req, file, cb) {
//     cb(null,  Date.now() + path.extname(file.originalname)); // Unique name
//   }
// });

// const upload = multer({ storage: storage, fileFilter: (req, file, cb) => {
//     const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
//     if (!allowedTypes.includes(file.mimetype)) {
//       return cb(new Error('Only images are allowed!'), false);
//     }
//     cb(null, true);
//   }});
// export default upload;

import multer from "multer";
import path from "path";

// Configure storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Save files in /uploads
  },
  filename: function (req, file, cb) {
    // Generate unique filename: Date.now() + original name + extension
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

// Configure multer with storage and file type filter
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error('Only images are allowed!'), false);
    }
    cb(null, true);
  },
});

export default upload;

