import {useEffect,useState} from 'react';

function useEffectEx(){


 const [courseName,setCourseName]=useState("Angular JS");
 const [courseVideoLength,setCourseVideoLength]=useState<number>(0);

  useEffect(()=>{
   
    console.log("Plain UseEffect");
  });

  useEffect(()=>{
    alert("UseEffect with dependency array");
    console.log("UseEffect with empty dependency array");
  },[]);

  const changeCourseName=()=>{

   setCourseName("React JS");


  }

  const changeVideoLength=()=>{
    setCourseVideoLength(10);
  }


  return <div>
    <h5>Use Effect</h5>
    <p>{courseName}</p>
    <button onClick={changeCourseName}>Change Course Name</button>
    <br/>
    <br/>
    <p>{courseVideoLength}</p>
    <button onClick={changeVideoLength}>Change Course Video Length</button>
  </div>

}

export default useEffectEx;