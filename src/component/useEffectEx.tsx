import {useEffect,useState} from 'react';

function UseEffectEx(){

 const [courseName,setCourseName]=useState("Angular JS");
 const [courseVideoLength,setCourseVideoLength]=useState<number>(0);

  useEffect(()=>{
    console.log("Plain UseEffect");
  }, []);

  useEffect(()=>{
    alert("UseEffect with dependency array");
    console.log("UseEffect with empty dependency array");
  },[]);


  useEffect(()=>{
    console.log("UseEffect with dependency array=>courseName");

  },[courseName]);

  useEffect(()=>{
    console.log("UseEffect with dependency array=>Coursevideos");

  },[courseVideoLength]);

  const changeCourseName=()=>{

   setCourseName("React JS");


  }

  const changeVideoLength=()=>{
    setCourseVideoLength(10);
  }
  const changeCourseVideos=(length:number)=>{
    setCourseVideoLength(length);
  }


  return <div>
    <h5>Use Effect</h5>
    <p>{courseName}</p>
    <button onClick={changeCourseName}>Change Course Name</button>
    <br/>
    <br/>
    <p>{courseVideoLength}</p>
    <button onClick={changeVideoLength}>Change Course Video Length</button>
    <button onClick={()=>changeCourseVideos(10)}>Change Course Videos</button>
     <button onClick={()=>changeCourseVideos(20)}>Change Course Videos</button>
      <button onClick={()=>changeCourseVideos(30)}>Change Course Videos</button>
  </div>

}

export default UseEffectEx;