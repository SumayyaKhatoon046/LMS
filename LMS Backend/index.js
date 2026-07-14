require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dns= require("dns");
const cors = require("cors");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const moduleRoutes = require("./routes/moduleRoutes");
const authRoutes=require("./routes/authRoutes");
const courseRoutes=require("./routes/courseRoutes");
const userRoutes = require("./routes/userRoutes");
const lectureRoutes = require("./routes/lectureRoutes");
const progressRoutes = require("./routes/progressRoutes");
const quizRoutes = require("./routes/quizRoutes");
const certificateRoutes = require("./routes/certificateRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const assignmentRoutes = require("./routes/assignmentRoutes");
const submissionRoutes = require("./routes/submissionRoutes");
const noteRoutes = require("./routes/noteRoutes");
const resourceRoutes = require("./routes/resourceRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const adminRoutes = require("./routes/adminRoutes");


app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/modules", moduleRoutes);
app.use("/api/lectures", lectureRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/quizzes", quizRoutes);
app.use("/api/certificates", certificateRoutes);
app.use("/api/teacher", teacherRoutes);
app.use("/api/assignments", assignmentRoutes);
app.use("/api/submissions", submissionRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/resources", resourceRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/admin", adminRoutes);





app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Atlas Connected");
})
.catch((err) => {
    console.log(err);
});




// Test Route
app.get("/", (req, res) => {
    res.send("LMS Backend Running");
});

app.listen(5000, () => {
    console.log("Server Started on Port 5000");
});


console.log(process.env.EMAIL);
console.log(process.env.EMAIL_PASSWORD);