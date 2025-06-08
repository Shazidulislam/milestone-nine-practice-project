import React, {  useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const Register = () => {

  const {createUser , setUser , updateUser} = useContext(AuthContext)//context 
  const [error , setError] = useState("") // register error
  const [register , setRegister] = useState(false) // 
  const navigate = useNavigate();   // register navigate
  const [nameError , setNameError] = useState("")
  const handleRegister=(e)=>{
     e.preventDefault()
     const name = e.target.name.value;
     const potho = e.target.potho.value;
     const email = e.target.email.value;
     const password = e.target.password.value;
     if(name.length < 5){
      setNameError("Name should be logn then 5 charaters")
      return
     }
     setError("")
     setRegister(false)
     navigate("/")
     createUser(email , password)
     .then((userCredential)=>{
      const user = userCredential.user
      updateUser({displayName:name , photoURL:potho})
      .then(()=>{
      setUser({...user ,displayName:name , photoURL:potho })
      setRegister(true)
      })
      .catch((error) => {
        // An error occurred
        // ...
        console.log(error)
        setUser(user)
      });
    
     })
     .catch(error=>{
          const errorMessage = error.message;
          setError(errorMessage)

     })

     console.log( name , potho , email , password)

  }
    return (
<div className='flex justify-center items-center min-h-screen '>
    
    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl py-8 px-6">
      <div className="card-body">
      <h1 className="text-2xl font-semibold text-[#403F3F] text-center ">Register your account</h1>
        <div className='divider'></div>
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label font-bold text-[#403F3F]">Your Name</label>
          <input type="text" name='name' required className="input w-full" placeholder="Your Name" />
          {
            nameError && <p className='font-medium text-error'>{nameError}</p>
          }
          <label className="label font-bold text-[#403F3F]">Potho Url</label>
          <input type="text" name='potho' required className="input w-full" placeholder="Potho url" />
          <label className="label font-bold text-[#403F3F]">Email address</label>
          <input type="email" name='email' required className="input w-full"  placeholder="Enter your email" />
          <label className="label  font-bold text-[#403F3F]">Password</label>
          <input type="password" name='password' required className="input w-full" placeholder="Enter your password" />
          <button type='submit' className="btn bg-[#403F3F] text-base-100 mt-4">Register</button>
            <span className='text-[#706F6F ] font-medium text-center pt-5'>Already have a account ?<Link  className="text-[#FF8C47] font-bold hover:underline" to={"/auth/login"}>Log In</Link></span>
         
        </form>
        {
          error ? <p>{error}</p> : ""
        }
        {
          register ? <p>User register successfully</p> : ''
        }
      </div>
    </div>
</div>
    );
};

export default Register;