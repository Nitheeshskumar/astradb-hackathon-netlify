import React from 'react'
import signupimg from '../Assets/create-account.svg'
import uuid from "node-uuid";
import { createUser } from '../Services/UserServices';
import { toast } from 'react-toastify';
import Toast from '../Components/Toast';

const Signup=({setIsSignup})=>{
  const Email = React.useRef('')
const Pswd = React.useRef('')
const Name= React.useRef('')
const valPswd=pswd=>{
 return Boolean (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.exec(pswd))
}
  const handleSignup=(e)=>{
    e.preventDefault()
if(!valPswd(Pswd.current.value)){
  toast.error('Invalid Password !')
//   const id = toast.loading("Please wait...")
// //do something else
// setTimeout(() => {
//   toast.update(id, { render: "All is good", type: "success", isLoading: false });
// }, 1000);

  return
}
    const payload={
      name:Name.current.value,
      email:Email.current.value,
      password:Pswd.current.value,
      id:uuid.v1(),
      todos:[]
    }
    toast.promise(createUser(payload), {
  pending: 'Creating User',
  success: 'User Created. Login to Continue 👌',
  error:  {render({data}){
    return data.response.data + '🤯'}}
}).then(res=>{console.log(res);
  setIsSignup(false)
})

  }


    return  <div className="create-account">
    <form className="form-signup needs-validation" onSubmit={handleSignup} >
      <img className="mb-4" src={signupimg} width="72" height="72" alt="Create Account"/>
      <h1 className="h3 mb-3 font-weight-normal">Create an account</h1>

<div className="row">
        <div className="col-md mb-3">
          <input
            type="text"
            className="form-control"
            id="userName"
            placeholder="User Name"
  ref={Name}
            required
          />
          <div className="invalid-feedback">Valid name is required.</div>
        </div>
      </div>
      <div className="row">
        <div className="col-md mb-3">
          <input
            type="text"
            className="form-control"
            id="emailId"
            placeholder="Email address"
            required
            ref={Email}
          />
          <div className="invalid-feedback">Valid email is required.</div>
        </div>
      </div>

      <div className="row">
        <div className="col-md mb-3 text-start lh-sm">
          <input
            type="text"
            className="form-control"
            id="act-password"
            placeholder="New password"
            required
            ref={Pswd}
         />
        <span className="notes">Password should be Minimum eight characters, at least one letter, one number and one special character</span>
          <div className="invalid-feedback">Valid Password is required.</div>
        </div>
      </div>
      <button className="btn btn-lg btn-primary btn-block" type="submit">
       Sign Up
      </button>
    </form>
    <Toast/>
  </div>
}

export default Signup


