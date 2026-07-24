import { useState } from "react";

function UseState(){

  let  courseName="React JS";


  const changeCourse=()=>{
    debugger;
    courseName="React JS 2.0";
    console.log(courseName);
  }

  const [courseVideoLength, setCourseVideoLength] = useState("0");

  const [productPrice,setProductPrice]=useState<number>(1200);



  const changeProductPrice=(event:any)=>{

    debugger;
    
    setProductPrice(event.target.value);
    
  }








  const changeCourseVideoLength=()=>{
    setCourseVideoLength("10");
  }

  return <div>
        <p>{courseName}</p>
        <p>{courseVideoLength}</p>
        <button onClick={changeCourse}>Chnage course name</button>
        <button onClick={changeCourseVideoLength}>Change video length</button>
        <br />
        <p>Product Price: {productPrice}</p>
        <input type="text" onChange={(event)=>changeProductPrice(event)} />


        



  </div>

}

export default UseState;