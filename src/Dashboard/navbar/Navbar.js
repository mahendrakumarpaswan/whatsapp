import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import "./navbar.css"
import axios  from 'axios';
import { Link } from 'react-router-dom'

//************ images path work start *************/
import logo from "../image/logo.png"
import sLogo from "../image/logo-small.png"
import closes from "../image/icons/closes.svg"
import search from "../image/icons/search.svg"
import us1 from "../image/flags/us1.png"
import us from "../image/flags/us.png"
import fr from "../image/flags/fr.png"
import es from "../image/flags/es.png"
import de from "../image/flags/de.png"
import notificationB from "../image/icons/notification-bing.svg"
import avatar02 from "../image/profiles/avatar-02.jpg"
import avatar03 from "../image/profiles/avatar-03.jpg"
import avatar06 from "../image/profiles/avatar-06.jpg"
import avatar17 from "../image/profiles/avatar-17.jpg"
import avatar13 from "../image/profiles/avatar-13.jpg"
import avator1 from "../image/profiles/avator1.jpg"
import logOut from "../image/icons/log-out.svg"
//************ images path work end *************/

const Navbar = () => {

    let navigate = useNavigate();
    const [show,setShow] = useState(false);

    const userAdmin = () =>{
           console.log("--Hey-- user log out testing--");
           setShow(!show)

    }

    // const userLogout = () =>{
    //   localStorage.removeItem("user");
    //   navigate("/");
    //   console.log("get localStorage...",localStorage.removeItem("user"));
    //    try{
    //    }catch(e){
    //    }

    // }

       
    const userLogout = async () => {
      // Retrieve the token from local storage
      let token = localStorage.getItem("user");
    
      // Check if the token exists
      if (token) {
        try {
          console.log('token...', token);
    
          // Make a request to the logout API endpoint with the headers
          const response = await axios.get("http://localhost:8009/subUserLogout", {
            headers: {
              'Authorization': token,
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          });
    
          console.log('Token check response:', response);
          // Process the response or perform any necessary actions
        } catch (error) {
          // Handle any errors that occur during the token check process
          console.log("Error checking token:", error);
        }
      } else {
        // Handle the case where the token doesn't exist
        console.log("Token doesn't exist. User is not logged in.");
      }
    };
  

/*<Link to="" class="logo"><img src={logo} alt='' /></Link>*/

  return (
    <div>
      {/********** top navbar start *************/}
      <div class="header">

        <div class="header-left active">
          <Link to="" className="logo"><img src="/static/media/logo-light.2e64647df259e3b82830.png" alt=""/></Link>
          <Link to="" class="logo-small">
            <img src={sLogo} alt='' />
          </Link>
          <Link to="" id="toggle_btn"></Link>
        </div>

        <Link id="mobile_btn" class="mobile_btn" to="#sidebar">
          <span class="bar-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </Link>

        <ul class="nav user-menu">

          <li class="nav-item">
            <div class="top-nav-search">
              <Link to=""
                class="responsive-search">
                <i class="fa fa-search"></i>
              </Link>
              <form action="#">
                <div class="searchinputs">
                  <input type="text" placeholder="Search Here ..." />
                    <div class="search-addon">
                      <span><img src={closes} alt='' /></span>
                    </div>
                </div>
                <Link class="btn" id="searchdiv">
                  <img src={search} alt='' />
                </Link>
              </form>
            </div>
          </li>

          <li class="nav-item dropdown has-arrow flag-nav">
            <Link class="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="" role="button">
              <img src={us1} height={20} alt='' />
            </Link>
            <div class="dropdown-menu dropdown-menu-right">
              <Link to="" class="dropdown-item">
                <img src={us} height={16} alt='' /> English
              </Link>
              <Link to="" class="dropdown-item">
                <img src={fr} height={16} alt='' /> French
              </Link>
              <Link top="" class="dropdown-item">
                <img src={es} height={16} alt='' /> Spanish
              </Link>
              <Link to="" class="dropdown-item">
                <img src={de} height={16} alt='' /> German
              </Link>
            </div>
          </li>

          <li class="nav-item dropdown">
            <Link to=""
              class="dropdown-toggle nav-link"
              data-bs-toggle="dropdown">
              <img src={notificationB} alt='' />
                <span class="badge rounded-pill">4</span>
            </Link>
            <div class="dropdown-menu notifications">
              <div class="topnav-dropdown-header">
                <span class="notification-title">Notifications</span>
                <Link to="" class="clear-noti">
                  Clear All </Link>
              </div>
              <div class="noti-content">
                <ul class="notification-list">
                  <li class="notification-message">
                    <Link to="">
                      <div class="media d-flex">
                        <span
                          class="avatar flex-shrink-0">
                          <img src={avatar02} alt='' />
                        </span>
                        <div
                          class="media-body flex-grow-1">
                          <p class="noti-details"><span
                            class="noti-title">John
                            Doe</span> added new
                            task <span
                              class="noti-title">Patient
                              appointment booking</span></p>
                          <p class="noti-time"><span
                            class="notification-time">4
                            mins ago</span></p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li class="notification-message">
                    <Link to="">
                      <div class="media d-flex">
                        <span
                          class="avatar flex-shrink-0">
                          <img src={avatar03} alt='' />
                        </span>
                        <div
                          class="media-body flex-grow-1">
                          <p class="noti-details"><span
                            class="noti-title">Tarah
                            Shropshire</span>
                            changed the task name
                            <span class="noti-title">Appointment
                              booking with payment
                              gateway</span></p>
                          <p class="noti-time"><span
                            class="notification-time">6
                            mins ago</span></p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li class="notification-message">
                    <Link to="">
                      <div class="media d-flex">
                        <span
                          class="avatar flex-shrink-0">
                          <img src={avatar06} alt='' />
                        </span>
                        <div
                          class="media-body flex-grow-1">
                          <p class="noti-details"><span
                            class="noti-title">Misty
                            Tison</span> added
                            <span class="noti-title">Domenic
                              Houston</span> and
                            <span class="noti-title">Claire
                              Mapes</span> to
                            project <span
                              class="noti-title">Doctor
                              available module</span></p>
                          <p class="noti-time"><span
                            class="notification-time">8
                            mins ago</span></p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li class="notification-message">
                    <Link to="">
                      <div class="media d-flex">
                        <span
                          class="avatar flex-shrink-0">
                          <img src={avatar17} alt='' />
                        </span>
                        <div
                          class="media-body flex-grow-1">
                          <p class="noti-details"><span
                            class="noti-title">Rolland
                            Webber</span>
                            completed task <span
                              class="noti-title">Patient
                              and Doctor video
                              conferencing</span></p>
                          <p class="noti-time"><span
                            class="notification-time">12
                            mins ago</span></p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li class="notification-message">
                    <Link to="">
                      <div class="media d-flex">
                        <span
                          class="avatar flex-shrink-0">
                          <img src={avatar13} alt='' />
                        </span>
                        <div
                          class="media-body flex-grow-1">
                          <p class="noti-details"><span
                            class="noti-title">Bernardo
                            Galaviz</span> added
                            new task <span
                              class="noti-title">Private
                              chat module</span></p>
                          <p class="noti-time"><span
                            class="notification-time">2
                            days ago</span></p>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div class="topnav-dropdown-footer">
                <Link to="">View all Notifications</Link>
              </div>
            </div>
          </li>

          <li class="nav-item dropdown has-arrow main-drop">
            <Link 
              class="dropdown-toggle nav-link userset"
              data-bs-toggle="dropdown">
              <span class="user-img">
                <img src={avator1} alt='' onClick={()=>userAdmin()} />
                <span class="status online"></span></span>
            </Link>
            {show &&  <div class="dropdown-menu menu-drop-user">
            <div class="profilename">
              <div class="profileset">
                <span class="user-img">
                  <img src={avator1} alt='' />
                  <span class="status online"></span></span>
                <div class="profilesets">
                  <h6>John Doe</h6>
                  <h5>Admin</h5>
                </div>
              </div>
              <hr class="m-0"></hr>
                <Link class="dropdown-item" to=""> <i
                  class="me-2" data-feather="user"></i> My
                  Profile</Link>
                <Link class="dropdown-item"
                  to=""><i class="me-2"
                    data-feather="settings"></i>Settings</Link>
                <hr class="m-0"></hr>
                  <Link class="dropdown-item logout pb-0" to="">
                      <img src={logOut} alt='' class="me-2" /> Logout
                      </Link>
                </div>
            </div>}
          
              
            <div class="dropdown-menu menu-drop-user">
              <div class="profilename">
                <div class="profileset">
                  <span class="user-img">
                    <img src={avator1} alt='' />
                    <span class="status online"></span></span>
                  <div class="profilesets">
                    <h6>John Doe</h6>
                    <h5>Admin</h5>
                  </div>
                </div>
                <hr class="m-0"></hr>
                  <Link class="dropdown-item" to=""> <i
                    class="me-2" data-feather="user"></i> My
                    Profile</Link>
                  <Link class="dropdown-item"
                    to=""><i class="me-2"
                      data-feather="settings"></i>Settings</Link>
                  <hr class="m-0"></hr>
                    <Link class="dropdown-item logout pb-0" to="">
                        <img src={logOut} alt='' class="me-2" /> Logout
                        </Link>
                  </div>
              </div>
          </li>
        </ul>

        <div class="dropdown mobile-user-menu">
          <Link to=""
            class="nav-link dropdown-toggle"
            data-bs-toggle="dropdown" aria-expanded="false"><i
              class="fa fa-ellipsis-v"></i></Link>
          <div class="dropdown-menu dropdown-menu-right">
            <Link class="dropdown-item" to="">My Profile</Link>
            <Link class="dropdown-item" to="">Settings</Link>
            <Link class="dropdown-item" to="">Logout</Link>
          </div>
        </div>

      </div>
      {/********** top navbar end *************/}
    </div>
  )
}

export default Navbar
