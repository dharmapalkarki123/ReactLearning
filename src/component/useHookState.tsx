import { useState } from "react";

function UseState(){

  let  courseName="React JS";


  const changeCourse=()=>{
    debugger;
    courseName="React JS 2.0";
    console.log(courseName);
  }

  const [courseVideoLength, setCourseVideoLength] = useState("0");

  const changeCourseVideoLength=()=>{
    setCourseVideoLength("10");
  }

  return <div>
        <p>{courseName}</p>
        <p>{courseVideoLength}</p>
        <button onClick={changeCourse}>Chnage course name</button>
        <button onClick={changeCourseVideoLength}>Change video length</button>


        



  </div>

}

export default UseState;