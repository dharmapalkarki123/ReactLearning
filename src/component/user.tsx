import { useParams } from "react-router";

function User(){

  const {userId}=useParams<{userId:string}>();


  return <>
    <h1>Hello -<br />
    user id={userId}
    </h1>
  </>

}

export default User;