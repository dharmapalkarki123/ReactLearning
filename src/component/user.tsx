import { useParams } from "react-router";
import MyList from "../reuseableComponent/MyList";

function User(){

   const cityList=["Pune","Mumbai","Nagpur",]
  const {userId}=useParams<{userId:string}>();


  return <>
    <h1>Hello -<br />
    user id={userId}
    </h1>
    <br />
    <MyList listItem={cityList} ></MyList>
  </>

}

export default User;