const User = require("../models/User");
const Course = require("../models/Course");
const Progress = require("../models/Progress");
const QuizResult = require("../models/QuizResult");
const Lecture = require("../models/Lecture");
const cloudinary = require("../config/cloudinary");


exports.getStudentDashboard = async (req, res) => {

    try {

        const user = await User.findById(req.user._id);


        if (!user) {
            return res.status(404).json({
                message: "User Not Found"
            });
        }


        const progress = await Progress.find({
            user: req.user._id
        })
        .populate("course", "title");


        const quizResults = await QuizResult.find({
            user: req.user._id
        })
        .populate("quiz", "title");



        const formattedProgress = await Promise.all(
            progress.map(async (item) => {


                const totalLectures = await Lecture.countDocuments({
                    course: item.course._id
                });


                const completedLectures = item.completedLectures.length;


                const progressPercentage = totalLectures === 0 
                    ? 0 
                    : Math.round(
                        (completedLectures / totalLectures) * 100
                    );


                return {

                    course: item.course.title,

                    totalLectures,

                    completedLectures,

                    progressPercentage

                };

            })
        );



        const formattedQuizResults = quizResults.map((item) => {

            return {

                quiz: item.quiz.title,

                score: item.score,

                totalQuestions: item.totalQuestions,

                percentage: Math.round(
                    (item.score / item.totalQuestions) * 100
                )

            };

        });



        res.status(200).json({

            success: true,

            dashboard: {

                name: user.name,

                email: user.email,

                courses: formattedProgress,

                quizResults: formattedQuizResults

            }

        });



    } catch(error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// ==========================
// Update Profile
// ==========================
exports.updateProfile = async (req, res) => {
  try {
    const { name, phone, location, bio, specialization } = req.body;

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.name = name || user.name;
    user.phone = phone || user.phone;
    user.location = location || user.location;
    user.bio = bio || user.bio;
    user.specialization = specialization || user.specialization;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Profile Updated Successfully",
      user,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};




// ============================
// Upload Profile Image
// ============================
exports.uploadProfileImage = async (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload an image",
      });
    }

    const user = await User.findById(req.user._id);

    user.profileImage = req.file.path;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Profile Image Updated Successfully",
      image: user.profileImage,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// =====================================
// Add To Wishlist
// =====================================

exports.addToWishlist = async (req, res) => {

  try {

    const user = await User.findById(req.user._id);

    const course = await Course.findById(req.params.courseId);

    if (!course) {

      return res.status(404).json({
        success: false,
        message: "Course Not Found"
      });

    }

    if (!user.wishlist) {
  user.wishlist = [];
}

if (
  user.wishlist.some(
    (id) => id.toString() === course._id.toString()
  )
) {
  return res.status(400).json({
    success: false,
    message: "Course Already In Wishlist",
  });
}
    user.wishlist.push(course._id);

    await user.save();

    res.status(200).json({

      success: true,

      message: "Added To Wishlist"

    });

  }

  catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};


// =====================================
// Get Wishlist
// =====================================

exports.getWishlist = async (req, res) => {

  try {

    const user = await User.findById(req.user._id)
      .populate("wishlist");

    res.status(200).json({

      success: true,

      wishlist: user.wishlist

    });

  }

  catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};


// =====================================
// Remove Wishlist
// =====================================

exports.removeFromWishlist = async (req, res) => {

  try {

    const user = await User.findById(req.user._id);

    user.wishlist = user.wishlist.filter(

      (id) => id.toString() !== req.params.courseId

    );

    await user.save();

    res.status(200).json({

      success: true,

      message: "Removed From Wishlist"

    });

  }

  catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};