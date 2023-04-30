import React, { useEffect } from 'react'
import img1 from '../asserts/im1.svg'
import { useNavigate,Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
// import ViewCars from './ViewCars';
// import Transactions from './Transactions';
// import FeedBack from './FeedBack';
// import Modifications from './Modifications';
// import UserCurrentStatus from './UserCurrentStatus';
// import UserDashBoard from './UserDashBoard';
function LoginComponent() {
  const navigate = useNavigate();
  const [users,SetUsers] = useState(null);
  const [userName,setUserName] = useState("");
  const[password,setPassword] = useState("")
  useEffect(()=>{
    axios.get('http://localhost:5000/login').then((res)=>SetUsers(res.data))
  },[])
  let verify=(nn,pp)=>{
         
    for(let i=0;i<users.length;i++){
      if(users[i].name===nn && users[i].password===pp){
        localStorage.setItem('token',users[i].name)
        console.log("hell0");
         navigate('/users')
         localStorage.removeItem('token')
      }
      
      
    } 
      
 }
  return (
    <>
    <div className='Login'>
      <section>
  <div className=" d-flex align-items-center ">
    <div className="container ">
      <div className="row ">
</div>
    <div className="col-md-12 d-flex justify-content-center align-items-center mt-2 ">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div >
          <div className="card d-flex justify-content-center align-items-center mt-1" style={{background:"transparent",border:"none"}}>
            <div className="card-img d-flex justify-content-center align-items-center">
            <img src={img1} class="img-fluid" style={{height:"200px"}}  />
            </div>
            <div className="card-body p-5 col-11 mb-5" style={{background:"rgb(179, 247, 179)",borderRadius:"20px"}}>
              <form>
                <div className="form-outline mb-4">
                <label className="form-label" for="form3"><b>UserName</b></label>
                  <input type="email" required placeholder="username"className="form-control form-control-lg" onChange={(e)=>setUserName(e.target.value)}/>
                </div>
                <div className="form-outline mb-4">
                <label className="form-label"  for="form3"><b>Password</b></label>
                  <input type="password" placeholder="password" required className="form-control form-control-lg" onChange={(e)=>setPassword(e.target.value)} />
                  <div class="row"><a href="#"  className="pass_text mt-2" style={{ textDecoration: "none" }}>Forgot password?</a></div>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="button"
                    className="btn  btn-block btn-lg  text-body"  style={{ backgroundColor:"#FF961F" ,fontSize:"22px"}} onClick={()=>verify(userName,password)}>Login</button>
                </div>

              </form>

            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</section>

    </div>
 
   
    </>
      
   
  )
}

export default LoginComponent
