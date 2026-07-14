const Quiz = require("../models/Quiz");
const QuizResult = require("../models/QuizResult");

exports.createQuiz = async (req, res) => {

    try {

       const {
    course,
    lecture,
    title,
    questions,
    passingMarks
} = req.body;

        const quiz = await Quiz.create({
    course,
    lecture,
    title,
    questions,
    passingMarks
});

        res.status(201).json({
            message: "Quiz Created Successfully",
            quiz
        });

    } catch(error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// Get All Quizzes API
exports.getAllQuizzes = async (req, res) => {

    try {

        const quizzes = await Quiz.find();

        res.status(200).json({
            success: true,
            quizzes
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Get Single Quiz API
exports.getQuizById = async (req, res) => {

    try {

        const quiz = await Quiz.findById(req.params.id);

        if (!quiz) {
            return res.status(404).json({
                message: "Quiz Not Found"
            });
        }

        res.status(200).json(quiz);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Update Quiz API
exports.updateQuiz = async (req, res) => {

    try {

        const quiz = await Quiz.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );


        if (!quiz) {
            return res.status(404).json({
                message: "Quiz Not Found"
            });
        }


        res.status(200).json({

            message: "Quiz Updated Successfully",
            quiz: {
                _id: quiz._id,
                title: quiz.title,
                course: quiz.course
            }

        });


    } catch(error) {

        res.status(500).json({
            message: error.message
        });

    }

};

//delete quiz
exports.deleteQuiz = async (req, res) => {

    try {

        const quiz = await Quiz.findByIdAndDelete(req.params.id);

        if (!quiz) {
            return res.status(404).json({
                message: "Quiz Not Found"
            });
        }

        res.status(200).json({
            message: "Quiz Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


exports.submitQuiz = async (req, res) => {

    try {

        const { quizId, answers } = req.body;

        const quiz = await Quiz.findById(quizId);

        if (!quiz) {
            return res.status(404).json({
                success: false,
                message: "Quiz Not Found"
            });
        }

        let score = 0;

        quiz.questions.forEach((question) => {

            const userAnswer = answers.find(
                ans => ans.questionId == question._id
            );

            if (
                userAnswer &&
                userAnswer.answer === question.correctAnswer
            ) {
                score++;
            }

        });

        const percentage = Math.round(
            (score / quiz.questions.length) * 100
        );

        const passed = percentage >= quiz.passingMarks;

        await QuizResult.create({

            user: req.user._id,
            quiz: quizId,
            score,
            totalQuestions: quiz.questions.length

        });

        // ==========================
        // PASS LOGIC
        // ==========================

        if (passed) {

            let progress = await Progress.findOne({
                user: req.user._id,
                course: quiz.course
            });

            if (!progress) {

                progress = await Progress.create({

                    user: req.user._id,
                    course: quiz.course,
                    completedLectures: [],
                    unlockedLectures: [],
                    passedQuizzes: []

                });

            }

            // Save passed quiz
            if (!progress.passedQuizzes.includes(quiz._id)) {

                progress.passedQuizzes.push(quiz._id);

            }

            // Current lecture complete
            if (!progress.completedLectures.includes(quiz.lecture)) {

                progress.completedLectures.push(
                    quiz.lecture
                );

            }

            // Unlock next lecture

            const currentLecture =
                await Lecture.findById(quiz.lecture);

            const nextLecture =
                await Lecture.findOne({

                    module: currentLecture.module,

                    order: currentLecture.order + 1

                });

            if (
                nextLecture &&
                !progress.unlockedLectures.includes(
                    nextLecture._id
                )
            ) {

                progress.unlockedLectures.push(
                    nextLecture._id
                );

            }

            progress.currentLecture =
                nextLecture
                    ? nextLecture._id
                    : quiz.lecture;

            const totalLectures =
                await Lecture.countDocuments({
                    course: quiz.course
                });

            progress.progressPercentage =
                Math.round(
                    (
                        progress.completedLectures.length /
                        totalLectures
                    ) * 100
                );

            await progress.save();

        }

        res.status(200).json({

            success: true,

            message: passed
                ? "Quiz Passed"
                : "Quiz Failed",

            passed,

            score,

            percentage,

            totalQuestions:
                quiz.questions.length

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};



exports.getMyResults = async (req, res) => {

    try {

        const results = await QuizResult.find({
            user: req.user._id
        })
        .populate("quiz", "title");


        res.status(200).json({
            success: true,
            results
        });


    } catch(error) {

        res.status(500).json({
            message: error.message
        });

    }

};


exports.getAllQuizResults = async (req, res) => {

    try {

        const results = await QuizResult.find()
            .populate("user", "name email")
            .populate("quiz", "title");


        const formattedResults = results.map((result) => {

            return {

                student: result.user.name,
                email: result.user.email,
                quiz: result.quiz.title,
                score: result.score,
                totalQuestions: result.totalQuestions,
                percentage: Math.round(
                    (result.score / result.totalQuestions) * 100
                )

            };

        });


        res.status(200).json({
            success: true,
            results: formattedResults
        });


    } catch(error) {

        res.status(500).json({
            message: error.message
        });

    }

};


exports.getQuizByLecture = async (req, res) => {

    try {

        const quiz = await Quiz.findOne({
            lecture: req.params.lectureId
        });

        if (!quiz) {
            return res.status(404).json({
                message: "Quiz Not Found"
            });
        }

        res.status(200).json(quiz);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};