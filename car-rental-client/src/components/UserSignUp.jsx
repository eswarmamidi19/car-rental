import React, { useReducer } from 'react'
import im1 from '../asserts/im1.svg'
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
function UserSignUp() {
    const[state,dispatch]=useReducer(reducerFunction,{userName:"",email:"",password:"",rePassword:""})
  return (
    <>
    <div className='Login'>
      <section>
  <div className=" d-flex align-items-center ">
    <div className="container ">
      <div className="row "></div>
    <div className="col-md-12 d-flex justify-content-center align-items-center mt-2 ">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div >
          <div className="card d-flex justify-content-center align-items-center mt-1" style={{background:"transparent",border:"none"}}>
            <div className="card-img d-flex justify-content-center align-items-center">
            <img src={im1} class="img-fluid" style={{height:"200px"}}  />
            </div>
            <div className="card-body p-5 col-11 mb-5" style={{background:"rgb(179, 247, 179)",borderRadius:"20px"}}>
              <form>
                <div className="form-outline mb-4">
                <label className="form-label" for="form3"><b>UserName</b></label>
                  <input type="text" required placeholder="username"className="form-control form-control-lg" onChange={(e)=>dispatch({type:'change_userName',payload:e.target.value})}/>
                  <p>{state.userName}</p>
                </div>
                <div className="form-outline mb-4">
                <label className="form-label" for="form3"><b>Email</b></label>
                  <input type="email" required placeholder="enter email here"className="form-control form-control-lg" onChange={(e)=>dispatch({type:'change_email',payload:e.target.value})}/>
                  <p>{state.userName+"   "+state.email}</p>
                </div>
                <div className="form-outline mb-4">
                <label className="form-label"  for="form3"><b>Password</b></label>
                  <input type="password" placeholder="password" required className="form-control form-control-lg" />
                </div>
                <div className="form-outline mb-4">
                <label className="form-label"  for="form3"><b>confirm Password</b></label>
                  <input type="password" placeholder="confirm password" required className="form-control form-control-lg" />
                 
                </div>
                <div className="d-flex justify-content-center">
                  <button type="button"
                    className="btn  btn-block btn-lg  text-body"  style={{ backgroundColor:"#FF961F" ,fontSize:"22px"}}>SignUp</button>
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

export default UserSignUp
