
// import TryCatch from "../middlewares/TryCatch.js";
// import { Courses } from "../models/Courses.js";
// import { Lecture } from "../models/Lecture.js";
// import { User } from "../models/User.js";
// import cloudinary from "./../config/cloudinary.js";

// /* ============================
//    CREATE COURSE
// ============================ */
// export const createCourse = async (req, res) => {
//   try {
//     console.log("=== CREATE COURSE STARTED ===");
//     console.log("FILE:", req.file);
//     console.log("BODY:", req.body);

//     if (!req.file) {
//       return res.status(400).json({ message: "Course image is required" });
//     }

//     const { title, description, category, createdBy, duration, price } = req.body;

//     const course = await Courses.create({
//       title,
//       description,
//       category,
//       createdBy,
//       duration,
//       price,
//       image: req.file.path,
//       imagePublicId: req.file.filename,
//     });

//     res.status(201).json({ 
//       message: "Course Created Successfully",
//       course 
//     });

//   } catch (error) {
//     console.error("=== ERROR DETAILS ===");
//     console.error("Message:", error.message);
//     console.error("Stack:", error.stack);
    
//     res.status(500).json({ 
//       message: "Failed to create course",
//       error: error.message
//     });
//   }
// };
// /* ============================
//    ADD LECTURE
// ============================ */

// export const addLectures = TryCatch(async (req, res) => {
//   const course = await Courses.findById(req.params.id);

//   if (!course) {
//     return res.status(404).json({
//       message: "No Course with this id",
//     });
//   }

//   const { title, description } = req.body;
//   const file = req.file;

//   const lecture = await Lecture.create({
//     title,
//     description,
//     video: file?.path,              
//     videoPublicId: file?.filename,  
//     course: course._id,
//   });

//   res.status(201).json({
//     message: "Lecture Added",
//     lecture,
//   });
// });

// /* ============================
//    DELETE LECTURE
// ============================ */

// export const deleteLecture = TryCatch(async (req, res) => {
//   const lecture = await Lecture.findById(req.params.id);

//   if (!lecture) {
//     return res.status(404).json({
//       message: "Lecture not found",
//     });
//   }

//   await cloudinary.uploader.destroy(lecture.videoPublicId, {
//     resource_type: "video",
//   });

//   await lecture.deleteOne();

//   res.json({
//     message: "Lecture Deleted Successfully",
//   });
// });

// /* ============================
//    DELETE COURSE
// ============================ */

// export const deleteCourse = TryCatch(async (req, res) => {
//   const course = await Courses.findById(req.params.id);

//   if (!course) {
//     return res.status(404).json({
//       message: "Course not found",
//     });
//   }

//   const lectures = await Lecture.find({ course: course._id });

//   await Promise.all(
//     lectures.map(async (lecture) => {
//       await cloudinary.uploader.destroy(lecture.videoPublicId, {
//         resource_type: "video",
//       });
//     })
//   );

//   await cloudinary.uploader.destroy(course.imagePublicId);

//   await Lecture.deleteMany({ course: course._id });

//   await course.deleteOne();

//   await User.updateMany({}, { $pull: { subscription: req.params.id } });

//   res.json({
//     message: "Course Deleted Successfully",
//   });
// });

// /* ============================
//    SYSTEM STATS
// ============================ */

// export const getAllStats = TryCatch(async (req, res) => {
//   const totalCoures = await Courses.countDocuments();
//   const totalLectures = await Lecture.countDocuments();
//   const totalUsers = await User.countDocuments();

//   res.json({
//     stats: {
//       totalCoures,
//       totalLectures,
//       totalUsers,
//     },
//   });
// });

// /* ============================
//    GET ALL USERS
// ============================ */

// export const getAllUser = TryCatch(async (req, res) => {
//   const users = await User.find({ _id: { $ne: req.user._id } }).select("-password");

//   res.json({ users });
// });

// /* ============================
//    UPDATE USER ROLE
// ============================ */

// export const updateRole = TryCatch(async (req, res) => {
//   if (req.user.mainrole !== "superadmin") {
//     return res.status(403).json({
//       message: "This endpoint is restricted to superadmin",
//     });
//   }

//   const user = await User.findById(req.params.id);

//   if (!user) {
//     return res.status(404).json({
//       message: "User not found",
//     });
//   }

//   if (user.role === "user") {
//     user.role = "admin";
//     await user.save();

//     return res.status(200).json({
//       message: "Role updated to admin",
//     });
//   }

//   if (user.role === "admin") {
//     user.role = "user";
//     await user.save();

//     return res.status(200).json({
//       message: "Role updated to user",
//     });
//   }
// });



import TryCatch from "../middlewares/TryCatch.js";
import { Courses } from "../models/Courses.js";
import { Lecture } from "../models/Lecture.js";
import { User } from "../models/User.js";
import cloudinary from "./../config/cloudinary.js";

/* ============================
   CREATE COURSE
============================ */
export const createCourse = async (req, res) => {
  try {
    console.log("=== CREATE COURSE STARTED ===");
    console.log("FILE:", req.file);
    console.log("BODY:", req.body);

    if (!req.file) {
      return res.status(400).json({ message: "Course image is required" });
    }

    const { title, description, category, createdBy, duration, price } = req.body;

    const course = await Courses.create({
      title,
      description,
      category,
      createdBy,
      duration,
      price,
      image: req.file.path,
      imagePublicId: req.file.filename,
    });

    res.status(201).json({ 
      message: "Course Created Successfully",
      course 
    });

  } catch (error) {
    console.error("=== ERROR DETAILS ===");
    console.error("Message:", error.message);
    console.error("Stack:", error.stack);
    
    res.status(500).json({ 
      message: "Failed to create course",
      error: error.message
    });
  }
};
/* ============================
   ADD LECTURE
============================ */

export const addLectures = TryCatch(async (req, res) => {
  const course = await Courses.findById(req.params.id);

  if (!course) {
    return res.status(404).json({
      message: "No Course with this id",
    });
  }

  const { title, description } = req.body;
  const file = req.file;

  const lecture = await Lecture.create({
    title,
    description,
    video: file?.path,              
    videoPublicId: file?.filename,  
    course: course._id,
  });

  res.status(201).json({
    message: "Lecture Added",
    lecture,
  });
});

/* ============================
   DELETE LECTURE
============================ */

export const deleteLecture = TryCatch(async (req, res) => {
  const lecture = await Lecture.findById(req.params.id);

  if (!lecture) {
    return res.status(404).json({
      message: "Lecture not found",
    });
  }

  await cloudinary.uploader.destroy(lecture.videoPublicId, {
    resource_type: "video",
  });

  await lecture.deleteOne();

  res.json({
    message: "Lecture Deleted Successfully",
  });
});

/* ============================
   DELETE COURSE
============================ */

export const deleteCourse = TryCatch(async (req, res) => {
  const course = await Courses.findById(req.params.id);

  if (!course) {
    return res.status(404).json({
      message: "Course not found",
    });
  }

  const lectures = await Lecture.find({ course: course._id });

  await Promise.all(
    lectures.map(async (lecture) => {
      await cloudinary.uploader.destroy(lecture.videoPublicId, {
        resource_type: "video",
      });
    })
  );

  await cloudinary.uploader.destroy(course.imagePublicId);

  await Lecture.deleteMany({ course: course._id });

  await course.deleteOne();

  await User.updateMany({}, { $pull: { subscription: req.params.id } });

  res.json({
    message: "Course Deleted Successfully",
  });
});

/* ============================
   SYSTEM STATS
============================ */

export const getAllStats = TryCatch(async (req, res) => {
  const totalCoures = await Courses.countDocuments();
  const totalLectures = await Lecture.countDocuments();
  const totalUsers = await User.countDocuments();

  res.json({
    stats: {
      totalCoures,
      totalLectures,
      totalUsers,
    },
  });
});

/* ============================
   GET ALL USERS
============================ */

export const getAllUser = TryCatch(async (req, res) => {
  const users = await User.find({ _id: { $ne: req.user._id } }).select("-password");

  res.json({ users });
});

/* ============================
   UPDATE USER ROLE
============================ */

export const updateRole = TryCatch(async (req, res) => {
  if (req.user.mainrole !== "superadmin") {
    return res.status(403).json({
      message: "This endpoint is restricted to superadmin",
    });
  }

  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  if (user.role === "user") {
    user.role = "admin";
    await user.save();

    return res.status(200).json({
      message: "Role updated to admin",
    });
  }

  if (user.role === "admin") {
    user.role = "user";
    await user.save();

    return res.status(200).json({
      message: "Role updated to user",
    });
  }
});
