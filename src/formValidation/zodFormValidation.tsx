
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { useForm } from "react-hook-form";
import z from "zod";



const registerFormSchema=z.object({
   email:z.string().min(5, "Email must be at least 5 characters long").email("Invalid email address"),
   username:z.string().min(3, "Username must be at least 3 characters long"),
   mobile: z.string().min(10, "Mobile number must be at least 10 characters long").max(10, "Mobile number must be at most 15 characters long"),

  


})

type RegisterFormType=z.infer<typeof registerFormSchema>;

function zodFormValidation() {

  const{register,handleSubmit,formState:{errors}}= useForm<RegisterFormType>({
    resolver:zodResolver(registerFormSchema )
  })

  const onSaveUser=(data:RegisterFormType)=>{
    debugger
    console.log(data);
  }

  return <div>
    <form onSubmit={handleSubmit(onSaveUser)}>
          <div className="row">
            <div className="col-4">
              <label htmlFor="">Email</label>
              <input type="text" className="form-control" {...register("email")}/>

            </div>


             <div className="col-4">
              <label htmlFor="">User Name</label>
              <input type="text" className="form-control" {...register("username")}/>

            </div>


            <div className="col-4">
              <label htmlFor="">Mobile Number</label>
              <input type="text" className="form-control" {...register("mobile")}/>

            </div>





          </div>

    
      <button type="submit" >Save Users</button>

    </form>

  
  </div>



}

export default zodFormValidation;