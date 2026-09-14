
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

 return <div className="form-container">
    <form onSubmit={handleSubmit(onSaveUser)} className="form-card">

      <h2 className="form-title">Register User</h2>

      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          className="form-input"
          {...register("email")}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>

      <div className="form-group">
        <label>User Name</label>
        <input
          type="text"
          className="form-input"
          {...register("username")}
        />
        {errors.username && <p className="error">{errors.username.message}</p>}
      </div>

      <div className="form-group">
        <label>Mobile Number</label>
        <input
          type="text"
          className="form-input"
          {...register("mobile")}
        />
        {errors.mobile && <p className="error">{errors.mobile.message}</p>}
      </div>

      <button type="submit" className="submit-btn">
        Save User
      </button>

    </form>
  </div>

}
export default zodFormValidation;