
import 'bootstrap/dist/css/bootstrap.min.css';
import UserSignUp from "./components/UserSignUp";
import UserDashBoard from './components/UserDashBoard';
import { Routes,Route } from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import { Container,Col,Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import img1 from './asserts/im1.svg'
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import NavBar from './components/NavBar';
import React, { useReducer } from 'react'
function App() {
   const[token, setToken]=useState(null)
   const navigate = useNavigate();
  const [users,SetUsers] = useState(null);
  const [userName,setUserName] = useState("");
  const[password,setPassword] = useState("")
  const[state,dispatch]=useReducer(reducerFunction,{userName:"",email:"",password:"",rePassword:""})
  useEffect(()=>{
    axios.get('http://localhost:5000/login').then((res)=>{SetUsers(res.data) ; console.log(res.data)})
  },[])
  let verify=(nn,pp)=>{
         
    for(let i=0;i<users.length;i++){
      if(users[i].name===nn && users[i].password===pp){
        localStorage.setItem('token',users[i].name)
        setToken(localStorage.getItem('token'))

      }
      
      
    } 
      
 }
 function reducerFunction(state,action){
  switch(action.type){
      case'change_userName':{
          return {...state,userName:action.payload}
      }
      case'change_email':{
          return {...state,email:action.payload}
      }
      case'change_password':{
          return {...state,password:action.payload}
      }
      case'change_rePassword':{
          return {...state,rePassword:action.payload}
      }

  }
}
  return (
    <div className="App">

     {localStorage.getItem('token')?<UserDashBoard name={token}/> : <div className='Login'>
      <section>
          <Container fluid>
          <NavBar/>
              <Row>
                <Col md={6}>
                <div className=" d-flex align-items-center ">
    <div className="container ">
      <div className="row "> <Col md={12} ><div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}><h1>user-Login</h1></div></Col></div>
    <div className="col-md-11 d-flex justify-content-center align-items-center mt-2 ">
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
                </Col>
                <Col md={6}>
                <div className='Login'>
      <section>
  <div className=" d-flex align-items-center ">
    <div className="container ">
      <div className="row "><div className="row "> <Col md={12} ><div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}><h1>user-SignUp</h1></div></Col></div></div>
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
                  <input type="text" required placeholder="username"className="form-control form-control-lg" onChange={(e)=>dispatch({type:'change_userName',payload:e.target.value})}/>
                  
                </div>
                <div className="form-outline mb-4">
                <label className="form-label" for="form3"><b>Email</b></label>
                  <input type="email" required placeholder="enter email here"className="form-control form-control-lg" onChange={(e)=>dispatch({type:'change_email',payload:e.target.value})}/>
                   
                </div>
                <div className="form-outline mb-4">
                <label className="form-label"  for="form3"><b>Password</b></label>
                  <input type="password" placeholder="password" required className="form-control form-control-lg" onChange={(e)=>{dispatch({type:'change_password',payload:e.target.value})}}/>
                </div>
                <div className="form-outline mb-4">
                <label className="form-label"  for="form3"><b>confirm Password</b></label>
                  <input type="password" placeholder="confirm password" required className="form-control form-control-lg" onChange={(e)=>{dispatch({type:'change_rePassword',payload:e.target.value})}} />
                   
                </div>
                <div className="d-flex justify-content-center">
                  <button type="button"
                    className="btn  btn-block btn-lg  text-body"  style={{ backgroundColor:"#FF961F" ,fontSize:"22px"}} onClick={(e)=>{
                      e.preventDefault();
                      axios.post('http://localhost:5000/signup',{name:state.userName,email:state.email,password:state.password})
                      dispatch({type:'change_userName',payload:""})
                      dispatch({type:'change_password',payload:""})
                      dispatch({type:'change_email',payload:""})
                    }}>SignUp</button>
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
                </Col>
              </Row>
          </Container>
      </section>

    </div>
 }
      {/* <Container>
          <Row>
             <Col md={6}>
              <LoginComponent/>
             </Col>
             <Col md={6}><UserSignUp/></Col>
          </Row>
      </Container>
          <Routes>
        <Route path='/users' element={<UserDashBoard/>}></Route>
      </Routes> */}
      <Routes>
        <Route path='/users' element={<UserDashBoard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
