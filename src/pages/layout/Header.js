import React from 'react'
import './Header.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PercentIcon from '@mui/icons-material/Percent';
import SupportIcon from '@mui/icons-material/Support';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { Outlet,Link} from "react-router-dom";
function Header() {
    return (
        <>
        <div className='mhead'>
        <div className='header'>
             <div className='row'>
                    <div className='col-4'>
                        <Link to='/'>
                        <a href="#" className="logo"><svg class="_8pSp-" viewBox="0 0 16 25" height="49" width="34" fill="#fc8019"><path d="M15.5397581,11.1409928 C15.6509608,10.509712 15.5235868,10.0243137 15.1951696,9.77089093 C14.7011461,9.38969453 13.9591625,9.18240372 12.1918981,9.18240372 C10.8843181,9.18240372 9.48050894,9.18382005 8.88067307,9.18351656 C8.824972,9.17259055 8.62352934,9.10693329 8.6159428,8.86342483 L8.60775734,4.99753828 C8.60755774,4.75352397 8.80231214,4.55503473 9.04308494,4.55452889 C9.28425707,4.55412423 9.47990987,4.75190531 9.4801096,4.99571727 C9.4801096,4.99571727 9.48609894,7.09432117 9.48669787,7.84012275 C9.48669787,7.91215351 9.52822427,8.08029271 9.69013694,8.12409793 C10.745764,8.40908477 16.0819961,8.20068119 15.9990433,7.22017265 C15.5462467,3.15296419 12.1495732,0 8.02559027,0 C6.72689454,0 5.497376,0.313010053 4.40860776,0.868112227 C1.80303074,2.22496121 -0.0474859557,4.9636474 0.000928137643,8.12703176 C0.0352672176,10.3690901 1.49467783,14.3542524 2.38809268,14.9457747 C2.7998621,15.2186215 3.34210002,15.1176569 5.7669976,15.1176569 C6.86664654,15.1176569 7.89062974,15.1212989 8.39383694,15.1236259 C8.44614414,15.1335401 8.72045734,15.1971741 8.72045734,15.4525191 L8.726846,18.391212 C8.72744507,18.6353275 8.53249094,18.8337155 8.2913188,18.8338167 C8.050546,18.8342213 7.85499294,18.6366427 7.85459374,18.3927295 C7.85459374,18.3927295 7.8760556,17.2135293 7.8760556,16.7737573 C7.8760556,16.6719836 7.88334267,16.4971673 7.59006307,16.3649424 C6.6241768,15.929824 3.48764179,16.1924529 3.31165404,16.6725905 C3.24427359,16.8573211 3.5949514,17.5713563 4.13479358,18.4869157 C5.93330254,21.3601537 7.6990696,23.6004924 7.98456307,23.9589263 C8.00223174,23.9744048 8.0192016,23.9886693 8.03437467,24 
                        C8.26985694,23.7099548 14.5488164,16.7550415 15.5397581,11.1409928 Z" id="Swiggy_Filled"></path></svg></a></Link>
                       <div className='location' >
                       <span className='district'> hyderabad</span>
                            <span className='state'>,telangana,India</span>
                            <span className='downarrow'><KeyboardArrowDownIcon></KeyboardArrowDownIcon></span>   
                            </div>
                       </div>
                    <div className='col-8'>
                        <ul className='nav justify-content headeritems'>
                              <Link to='search'><li className='nav-item'><button><a className="nav-link" href='#'>
                                  <SearchIcon className='search_icon'></SearchIcon>Search</a></button></li></Link>
                               <Link to='offers'><li className='nav-item'><button><a className="nav-link" href='#'><PercentIcon className='offer_icon'></PercentIcon>
                                 <span>Offers</span>
                                 <span>New</span>
                                </a></button>
                              </li></Link> 
                              <Link to='help'>
                              <li className='nav-item'><button><a className="nav-link" href='#' >
                                  <SupportIcon className='help_icon'></SupportIcon>Help </a></button>
                              </li></Link>
                              <Link to='signin'>
                              <li className='nav-item'><button><a className="nav-link" href='#' >
                                  <PersonOutlineIcon className='signin_icon'></PersonOutlineIcon>Signin</a></button>
                              </li></Link>
                              <Link to='cart'>
                             <li className='nav-item'><button><a className="nav-link" href='#' >
                                  <LocalAtmIcon className='cart_icon'></LocalAtmIcon>Cart</a></button>
                              </li>
                              </Link>

                        </ul>
                    </div>
             </div>
        </div>
        </div>
        <Outlet />
    </>
    )
}

export default Header
