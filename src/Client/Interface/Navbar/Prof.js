import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { User } from '../../../User/User';
import { SignOut } from '../../REDUX/ReduxMain.js/Registration';

function Prof({ subscribe, setsubscribe, setnavState }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { userData } = User()

  const goProfile = () => {
    navigate(`/Profile/${userData?._id}`);
    // window.location.reload()
  }

  const logout = () => {
    dispatch(SignOut())
    navigate('/Login');
    // window.location.reload()
  }
  // console.log(userData._id, 'from profs')
  /* {`/Profile/${userData?._id}`} */
  return (
    <div>
      <div className="ml-3 md:ml-0 relative">
        <div onClick={() => { setsubscribe(!subscribe); setnavState(false) }}>
          {/* <button type="button" className="bg-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true"> */}
          {/* <i className="bi bi-gear-fill text-white ml-11 md:text-2xl"></i> */}
          <i className="bi bi-bell-fill text-white ml-11 md:text-2xl"></i>
          <span className="sr-only">Open user menu</span>
          {/* <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" /> */}
          {/* </button> */}
        </div>



        <div onClick={() => setsubscribe(false)} className={subscribe ? 'origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none' : 'hidden'} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
          <div onClick={goProfile} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</div>
          <Link to='#' className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</Link>
          <div onClick={logout} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</div>
        </div>

        {/* {
            user && arr.map((elem, i)=>{
              if (elem.user.admin) {
                return (
                  <>
                  <Link key={i} to='/Admin'><button className='text-white'><i key={elem.user.id} class="bi bi-person-workspace"></i></button></Link>
                </>
               )
              }
              
            })
           
          } */}
      </div>
    </div>
  )
}

export default Prof