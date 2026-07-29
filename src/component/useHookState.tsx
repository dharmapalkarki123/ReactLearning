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

const [student,setStudent]=useState<IsStudent>({name:"Ramesh",city:"Pune",isActive:true});


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

  const addMPCity=()=>{

    setCityList(["Bhopal","Indore","Gwalior"]);
  }


  const onChnageName=(event:any)=>{
    setStudent(oldData=>({...oldData,name:event.target.value}));
  }

  const onChnageCity=(event:any)=>{
    setStudent(oldData=>({...oldData,city:event.target.value}));
  }


  return <div>
        <p>{courseName}</p>
        <br/>
        <input type="text" onChange={(eve)=>(onChnageName(eve))} placeholder="Name" />

        <input type="text" onChange={(eve)=>(onChnageCity(eve))} placeholder="City" />



        <p>{student.name}--{student.city}</p>

        <input type="text" onChange={(eve)=>(onCityNameChnage(eve))} placeholder="Enter city name" />
        <button onClick={addCity}>Add City</button>
        <button onClick={addMPCity}>Add MP City</button>
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

interface IsStudent{
  name:string;
  city:string;
  isActive?:boolean;
}