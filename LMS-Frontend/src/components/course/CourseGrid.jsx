import CourseCard from "./CourseCard";

const CourseGrid = ({ courses }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
      {courses.map((course) => (
        <CourseCard
          key={course._id}
          course={course}
          
        />
      ))}
    </div>
  );
};

export default CourseGrid;