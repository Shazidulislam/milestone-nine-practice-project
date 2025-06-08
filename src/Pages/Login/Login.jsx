import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const Login = () => {
  const {signInUser }= use(AuthContext)
  const [userError , setUserError] = useState("")
  const [login , setLogin]=useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)
  // 
  const handleLoginWithEmailAndPasswprd=(e)=>{
    e.preventDefault()
      const email = e.target.email.value;
      const password = e.target.password.value;
      setUserError("")
      setLogin(false)

      signInUser(email , password)
      .then((result)=>{
        console.log(result.user)
        setLogin(true)
      navigate(`${location.state ? location.state :"/"}`)

      })
      .catch(error=>{
        console.log(error)
        setUserError(error.message)
      })

      console.log(email,password)
  }
    return (
<div className='flex justify-center items-center min-h-screen '>
    
    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl py-8 px-4">
      <div className="card-body">
      <h1 className="text-2xl font-semibold text-[#403F3F] text-center ">Login your account</h1>
        <div className='divider'></div>
        <form onSubmit={handleLoginWithEmailAndPasswprd} className="fieldset">
          <label className="label font-bold text-[#403F3F]">Email address</label>
          <input type="email" name='email' className="input w-full" placeholder="Email" />
          <label className="label  font-bold text-[#403F3F]">Password</label>
          <input type="password" name='password' className="input w-full" placeholder="Password" />
          <Link className='font-bold text-[#403F3F]'>Forget Password</Link>
          <button type='submit' className="btn bg-[#403F3F] text-base-100 mt-4">Login</button>
         <span className='text-[#706F6F ] font-medium text-center pt-5'>Dont’t Have An Account ?<Link  className="text-[#FF8C47] hover:underline font-bold" to={"/auth/register"}> Register</Link></span>
        </form>
        {
          userError && <p className='text-red-500 font-semibold'>{userError}</p>
        }
        {
          login ? <p className='text-green-500 font-semibold'>User Login successfully</p>:""
        }
      </div>
    </div>

</div>

   
    );
};

export default Login;