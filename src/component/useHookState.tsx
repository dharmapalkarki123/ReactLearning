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

  const [isActive,setIsActive]=useState<boolean>(false);

  const [cityList,setCityList]=useState<string[]>(["Pune","Mumbai","Delhi"]);

  const [cityName,setCityName]=useState<string>("");


  const changeProductPrice=(event:any)=>{

    debugger;
    
    setProductPrice(event.target.value);
    
  }








  const changeCourseVideoLength=()=>{
    setCourseVideoLength("10");
  }


const onActiveChange=(event:any)=>{

  setIsActive(event.target.checked);

}

   const onCityNameChnage=(event:any)=>{
  setCityName(event.target.value);
  
}


  const addCity=()=>{


    setCityList(oldCityList => [...oldCityList,cityName]);



  }



  return <div>
        <p>{courseName}</p>
        <br/>
        <input type="text" onChange={(eve)=>(onCityNameChnage(eve))} placeholder="Enter city name" />
        <button onClick={addCity}>Add City</button>
        <p>City List:{cityList}</p>
        <p>{courseVideoLength}</p>
        <button onClick={changeCourse}>Chnage course name</button>
        <button onClick={changeCourseVideoLength}>Change video length</button>
        <br />
        <p>Product Price: {productPrice}</p>
        <input type="text" onChange={(event)=>changeProductPrice(event)} />
        <br/>
        <p>Is Active:{isActive? 'checked':'unchecked'}</p>
        <br/>
        <input type="checkbox" onChange={(event)=>onActiveChange(event)}  />


        



  </div>

}

export default UseState;