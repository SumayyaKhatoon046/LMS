import { useEffect, useState } from "react";

import {
  getCourses,
  deleteCourse,
} from "../../services/adminService";

const ManageCourses = () => {

  const [courses,setCourses]=useState([]);

  useEffect(()=>{

    fetchCourses();

  },[]);

  const fetchCourses=async()=>{

    const data=await getCourses();

    setCourses(data.courses);

  };

  const handleDelete=async(id)=>{

    if(!window.confirm("Delete Course?")) return;

    await deleteCourse(id);

    fetchCourses();

  };

  return(

<div className="p-8">

<h1 className="text-3xl font-bold mb-6">

Manage Courses

</h1>

<table className="w-full">

<thead>

<tr>

<th>Title</th>

<th>Instructor</th>

<th>Students</th>

<th>Action</th>

</tr>

</thead>

<tbody>

{courses.map((course)=>(

<tr key={course._id}>

<td>{course.title}</td>

<td>{course.instructor?.name}</td>

<td>{course.studentsEnrolled?.length}</td>

<td>

<button

onClick={()=>handleDelete(course._id)}

className="bg-red-600 text-white px-4 py-2 rounded"

>

Delete

</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

);

};

export default ManageCourses;