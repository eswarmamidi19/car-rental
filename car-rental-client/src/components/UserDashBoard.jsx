import React from 'react'
import SideBarComponent from './SideBarComponent'
import { Routes,Route } from 'react-router-dom'
import ViewCars from './ViewCars'
import Transactions from './Transactions'
import FeedBack from './FeedBack'
import Modifications from './Modifications'
import UserCurrentStatus from './UserCurrentStatus'


function UserDashBoard(props) {
  return (
    <div>
      <SideBarComponent/>
     
      <Routes>
      <Route path='/' element={<ViewCars/>}> </Route>
        <Route path='/users/viewVechicles' element={<ViewCars/>}> </Route>
        <Route path='/users/transcations' element={<Transactions/>}> </Route>
        <Route path='/users/FeedBack' element={<FeedBack/>}> </Route>
        <Route path='/users/modification' element={<Modifications/>}>  </Route>
        <Route path='/users/currentStatus' element={<UserCurrentStatus/>}> </Route>
      </Routes>
    </div>
  )
}

export default UserDashBoard
