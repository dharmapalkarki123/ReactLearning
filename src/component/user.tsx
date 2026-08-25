import { useParams } from "react-router";
import MyList from "../reuseableComponent/MyList";
import Alert from "../reuseableComponent/Alert";

function User(){

   const cityList=["Pune","Mumbai","Nagpur",]
  const {userId}=useParams<{userId:string}>();


  return <>
    <h1>Hello -<br />
    user id={userId}
    </h1>
    <br />
    <MyList listItem={cityList} ></MyList>
    <hr />
    <Alert alertClassName="alert-danger" alertTitle="Error" alertMessage="This is error alert"></Alert>
  </>

}

export default User;