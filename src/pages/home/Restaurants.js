
import React from 'react'
import './Restaurants.css'
import StarIcon from '@mui/icons-material/Star';
import {Outlet,Link} from "react-router-dom";
function Restaurants() {
    return (
        <div class='rest'>
             <div className='row'>
                 <div className='col-3 res'>
                       <div className='eachres'>
                           <Link to="restaurant">
                           <div className='each'>
                             <div>
                             <img class="restimg" alt="Winni Cakes &amp; More"
                             src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ywbmzjek5p1l63efdwei"></img>
                             </div>
                             <div className='resttitle'>
                                  winni cakes and more
                             </div>
                             <div className='restsub'>
                                  biriyani
                             </div>
                             <div className='restdetails'>
                                  <div className='restrating'>
                                      <span><StarIcon color="white" className='staricon' fontSize='small'/></span>
                                      <span>3.5</span>
                                  </div>
                                  <div>.</div>
                                  <div className='restdeliverytime'>
                                      35 MIN
                                  </div>
                                  <div>.</div>
                                  <div className='restoffer'>
                                      100 FOR TWO
                                  </div>
                             </div>
                             <div className='specialoffer'>
                                   <span>20% off | use TRYNEW</span>
                             </div>            
                             </div> 
                             </Link> 
                       </div>
                       
                 </div>
                 <div className='col-3 res'>
                       <div className='eachres'>
                       <div className='each'>
                             <div>
                             <img class="restimg" alt="pizza duamo &amp; More"
                             src="https://ik.imagekit.io/vagdevi17/Screenshot_2022-04-13_132513_uqw396PD1H.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649836591008"></img>
                             </div>
                             <div className='resttitle'>
                                  Pizza Hut
                             </div>
                             <div className='restsub'>
                                  Pizza
                             </div>
                             <div className='restdetails'>
                                  <div className='restrating'>
                                      <span><StarIcon color="white" className='staricon' fontSize='small'/></span>
                                      <span>4</span>
                                  </div>
                                  <div>.</div>
                                  <div className='restdeliverytime'>
                                      20 MIN
                                  </div>
                                  <div>.</div>
                                  <div className='restoffer'>
                                      Regular 170
                                      Large   500
                                  </div>
                             </div>
                             <div className='specialoffer'>
                                   <span>30% off | use TRYNEW</span>
                             </div>            
                             </div> 

                       </div>
                 </div>
                 <div className='col-3 res'>
                       <div className='eachres'>
                       <div className='each'>
                             <div>
                             <img class="restimg" alt="Winni Cakes &amp; More"
                             src="https://ik.imagekit.io/vagdevi17/Screenshot_2022-04-13_134025_FcXtrhtj_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649837451528"></img>
                             </div>
                             <div className='resttitle'>
                                  Metropolian Grill
                             </div>
                             <div className='restsub'>
                                  Chicken
                             </div>
                             <div className='restdetails'>
                                  <div className='restrating'>
                                      <span><StarIcon color="white" className='staricon' fontSize='small'/></span>
                                      <span>4.6</span>
                                  </div>
                                  <div>.</div>
                                  <div className='restdeliverytime'>
                                      35 MIN
                                  </div>
                                  <div>.</div>
                                  <div className='restoffer'>
                                      180 FOR TWO
                                  </div>
                             </div>
                             <div className='specialoffer'>
                                   <span>15% off | use TRYNEW</span>
                             </div>            
                             </div>

                       </div>
                 </div>
                 <div className='col-3 res'>
                         <div className='eachres'>
                         <div className='each'>
                             <div>
                             <img class="restimg" alt="Winni Cakes &amp; More"
                             src="https://ik.imagekit.io/vagdevi17/Screenshot_2022-04-13_135131_GheNUvPqp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649838116171"></img>
                             </div>
                             <div className='resttitle'>
                                  Risotto
                             </div>
                             <div className='restsub'>
                                  Italian
                             </div>
                             <div className='restdetails'>
                                  <div className='restrating'>
                                      <span><StarIcon color="white" className='staricon' fontSize='small'/></span>
                                      <span>4</span>
                                  </div>
                                  <div>.</div>
                                  <div className='restdeliverytime'>
                                      40 MIN
                                  </div>
                                  <div>.</div>
                                  <div className='restoffer'>
                                      499 for one
                                  </div>
                             </div>
                             <div className='specialoffer'>
                                   <span>20% off | use TRYNEW</span>
                             </div>            
                             </div> 

                         </div>
                 </div>
                 <div className='col-3 res'>
                         <div className='eachres'>
                         <div className='each'>
                             <div>
                             <img class="restimg" alt="Winni Cakes &amp; More"
                             src="https://ik.imagekit.io/vagdevi17/Screenshot_2022-04-13_204704_TS_9fyZwD.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649863056937"></img>
                             </div>
                             <div className='resttitle'>
                                  Udippi
                             </div>
                             <div className='restsub'>
                                  South Indian Foods
                             </div>
                             <div className='restdetails'>
                                  <div className='restrating'>
                                      <span><StarIcon color="white" className='staricon' fontSize='small'/></span>
                                      <span>5</span>
                                  </div>
                                  <div>.</div>
                                  <div className='restdeliverytime'>
                                      25 MIN
                                  </div>
                                  <div>.</div>
                                  <div className='restoffer'>
                                      150 for one
                                  </div>
                             </div>
                             <div className='specialoffer'>
                                   <span>20% off | use TRYNEW</span>
                             </div>            
                             </div>

                         </div>
                 </div>
                 <div className='col-3 res'>
                         <div className='eachres'>
                         <div className='each'>
                             <div>
                             <img class="restimg" alt="Winni Cakes &amp; More"
                             src="https://ik.imagekit.io/vagdevi17/Screenshot_2022-04-13_205428_xhZ3RAXjO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649863492457"></img>
                             </div>
                             <div className='resttitle'>
                                  Milkshake Factory
                             </div>
                             <div className='restsub'>
                                  Milkshakes
                             </div>
                             <div className='restdetails'>
                                  <div className='restrating'>
                                      <span><StarIcon color="white" className='staricon' fontSize='small'/></span>
                                      <span>4.8</span>
                                  </div>
                                  <div>.</div>
                                  <div className='restdeliverytime'>
                                      35 MIN
                                  </div>
                                  <div>.</div>
                                  <div className='restoffer'>
                                      129 FOR One
                                  </div>
                             </div>
                             <div className='specialoffer'>
                                   <span>10% off | use TRYNEW</span>
                             </div>            
                             </div> 

                         </div>
                 </div>
                 <div className='col-3 res'>
                         <div className='eachres'>
                         <div className='each'>
                             <div>
                             <img class="restimg" alt="Winni Cakes &amp; More"
                             src="https://ik.imagekit.io/vagdevi17/Screenshot_2022-04-13_212034_jC5LYGV-G.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649865064152"></img>
                             </div>
                             <div className='resttitle'>
                                  Funk Dragon
                             </div>
                             <div className='restsub'>
                                  Chinese
                             </div>
                             <div className='restdetails'>
                                  <div className='restrating'>
                                      <span><StarIcon color="white" className='staricon' fontSize='small'/></span>
                                      <span>4</span>
                                  </div>
                                  <div>.</div>
                                  <div className='restdeliverytime'>
                                      20 MIN
                                  </div>
                                  <div>.</div>
                                  <div className='restoffer'>
                                      100 FOR One
                                  </div>
                             </div>
                             <div className='specialoffer'>
                                   <span>10% off | use TRYNEW</span>
                             </div>            
                             </div> 

                         </div>
                 </div>
                 <div className='col-3 res'>
                         <div className='eachres'>
                         <div className='each'>
                             <div>
                             <img class="restimg" alt="Winni Cakes &amp; More"
                             src="https://ik.imagekit.io/vagdevi17/Screenshot_2022-04-13_214838_FKewlz8el.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649866742167"></img>
                             </div>
                             <div className='resttitle'>
                                  Coffee House
                             </div>
                             <div className='restsub'>
                                  Coffee
                             </div>
                             <div className='restdetails'>
                                  <div className='restrating'>
                                      <span><StarIcon color="white" className='staricon' fontSize='small'/></span>
                                      <span>3.5</span>
                                  </div>
                                  <div>.</div>
                                  <div className='restdeliverytime'>
                                      25 MIN
                                  </div>
                                  <div>.</div>
                                  <div className='restoffer'>
                                      100 FOR TWO
                                  </div>
                             </div>
                             <div className='specialoffer'>
                                   <span>5% off | use TRYNEW</span>
                             </div>            
                             </div> 

                         </div>
                 </div>
                 <div className='col-3 res'>
                         <div className='eachres'>
                         <div className='each'>
                             <div>
                             <img class="restimg" alt="Winni Cakes &amp; More"
                             src="https://ik.imagekit.io/vagdevi17/Screenshot_2022-04-14_101922_vy07vFqkT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649911790376"></img>
                             </div>
                             <div className='resttitle'>
                                  Biryani Point
                             </div>
                             <div className='restsub'>
                                  biriyani
                             </div>
                             <div className='restdetails'>
                                  <div className='restrating'>
                                      <span><StarIcon color="white" className='staricon' fontSize='small'/></span>
                                      <span>3.5</span>
                                  </div>
                                  <div>.</div>
                                  <div className='restdeliverytime'>
                                      30 MIN
                                  </div>
                                  <div>.</div>
                                  <div className='restoffer'>
                                      240 for one
                                  </div>
                             </div>
                             <div className='specialoffer'>
                                   <span>20% off | use TRYNEW</span>
                             </div>            
                             </div> 

                         </div>
                 </div>
                 <div className='col-3 res'>
                         <div className='eachres'>
                         <div className='each'>
                             <div>
                             <img class="restimg" alt="Winni Cakes &amp; More"
                             src="https://ik.imagekit.io/vagdevi17/Screenshot_2022-04-14_102851_1dZdplg9s.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649912366518"></img>
                             </div>
                             <div className='resttitle'>
                                  Hotspot
                             </div>
                             <div className='restsub'>
                                  Fastfood
                             </div>
                             <div className='restdetails'>
                                  <div className='restrating'>
                                      <span><StarIcon color="white" className='staricon' fontSize='small'/></span>
                                      <span>4</span>
                                  </div>
                                  <div>.</div>
                                  <div className='restdeliverytime'>
                                      15 MIN
                                  </div>
                                  <div>.</div>
                                  <div className='restoffer'>
                                      100 FOR TWO
                                  </div>
                             </div>
                             <div className='specialoffer'>
                                   <span>5% off | use TRYNEW</span>
                             </div>            
                             </div>

                         </div>
                 </div>
                 <div className='col-3 res'>
                         <div className='eachres'>
                         <div className='each'>
                             <div>
                             <img class="restimg" alt="Winni Cakes &amp; More"
                               src="https://ik.imagekit.io/vagdevi17/Screenshot_2022-04-14_103959_w28PHZlTB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649913061347"></img>
                             </div>
                             <div className='resttitle'>
                                  Lassi corner
                             </div>
                             <div className='restsub'>
                                  Lassi
                             </div>
                             <div className='restdetails'>
                                  <div className='restrating'>
                                      <span><StarIcon color="white" className='staricon' fontSize='small'/></span>
                                      <span>4</span>
                                  </div>
                                  <div>.</div>
                                  <div className='restdeliverytime'>
                                      10 MIN
                                  </div>
                                  <div>.</div>
                                  <div className='restoffer'>
                                      50 FOR TWO
                                  </div>
                             </div>
                             <div className='specialoffer'>
                                   <span>3% off | use TRYNEW</span>
                             </div>            
                             </div>


                         </div>
                 </div>
                 <div className='col-3 res'>
                         <div className='eachres'>
                         <div className='each'>
                             <div>
                             <img class="restimg" alt="Winni Cakes &amp; More"
                               src="https://ik.imagekit.io/vagdevi17/Screenshot_2022-04-14_110346_thTDqVQYT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649914460857"></img>
                             </div>
                             <div className='resttitle'>
                                  Taj Bakery
                             </div>
                             <div className='restsub'>
                                  Cakes
                             </div>
                             <div className='restdetails'>
                                  <div className='restrating'>
                                      <span><StarIcon color="white" className='staricon' fontSize='small'/></span>
                                      <span>4.5</span>
                                  </div>
                                  <div>.</div>
                                  <div className='restdeliverytime'>
                                      40 MIN
                                  </div>
                                  <div>.</div>
                                  <div className='restoffer'>
                                      120 per one kg
                                  </div>
                             </div>
                             <div className='specialoffer'>
                                   <span>20% off | use TRYNEW</span>
                             </div>            
                             </div>

                         </div>
                 </div>
                 <footer class="mt-5 py-5">
        <div class="row container mx-autp pt-5 ">
            <div class="one col-lg-3 col-md-6 col-12">
            <Link to='/'>
           <a href="#" className="logo"><svg class="_8pSp-" viewBox="0 0 16 25" height="49" width="34" fill="#fc8019"><path d="M15.5397581,11.1409928 C15.6509608,10.509712 15.5235868,10.0243137 15.1951696,9.77089093 C14.7011461,9.38969453 13.9591625,9.18240372 12.1918981,9.18240372 C10.8843181,9.18240372 9.48050894,9.18382005 8.88067307,9.18351656 C8.824972,9.17259055 8.62352934,9.10693329 8.6159428,8.86342483 L8.60775734,4.99753828 C8.60755774,4.75352397 8.80231214,4.55503473 9.04308494,4.55452889 C9.28425707,4.55412423 9.47990987,4.75190531 9.4801096,4.99571727 C9.4801096,4.99571727 9.48609894,7.09432117 9.48669787,7.84012275 C9.48669787,7.91215351 9.52822427,8.08029271 9.69013694,8.12409793 C10.745764,8.40908477 16.0819961,8.20068119 15.9990433,7.22017265 C15.5462467,3.15296419 12.1495732,0 8.02559027,0 C6.72689454,0 5.497376,0.313010053 4.40860776,0.868112227 C1.80303074,2.22496121 -0.0474859557,4.9636474 0.000928137643,8.12703176 C0.0352672176,10.3690901 1.49467783,14.3542524 2.38809268,14.9457747 C2.7998621,15.2186215 3.34210002,15.1176569 5.7669976,15.1176569 C6.86664654,15.1176569 7.89062974,15.1212989 8.39383694,15.1236259 C8.44614414,15.1335401 8.72045734,15.1971741 8.72045734,15.4525191 L8.726846,18.391212 C8.72744507,18.6353275 8.53249094,18.8337155 8.2913188,18.8338167 C8.050546,18.8342213 7.85499294,18.6366427 7.85459374,18.3927295 C7.85459374,18.3927295 7.8760556,17.2135293 7.8760556,16.7737573 C7.8760556,16.6719836 7.88334267,16.4971673 7.59006307,16.3649424 C6.6241768,15.929824 3.48764179,16.1924529 3.31165404,16.6725905 C3.24427359,16.8573211 3.5949514,17.5713563 4.13479358,18.4869157 C5.93330254,21.3601537 7.6990696,23.6004924 7.98456307,23.9589263 C8.00223174,23.9744048 8.0192016,23.9886693 8.03437467,24 
           C8.26985694,23.7099548 14.5488164,16.7550415 15.5397581,11.1409928 Z" id="Swiggy_Filled"></path></svg></a></Link>
                <p>
                Order food online from restaurants and get it delivered.
                </p>

            </div>
            <div class="one col-lg-3 col-md-6 col-12">
                <h1>COMPANY</h1>
                <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Careers</a></li>
                </ul>
            </div>
            <div class="one col-lg-3 col-md-6 col-12">
                <h1>CONTACT</h1>
                <ul>
                <li><a href="#">Hepl & Support</a></li>
                <li><a href="#">Patner with us</a></li>
                <li><a href="#">Ride With us</a></li>
                </ul>
            </div>
            <div class="one col-lg-3 col-md-6 col-12">
                <h1>LEGAL</h1>
                <ul>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Refund & Cancellation</a></li>
                </ul>
            </div>
            
        </div>
    </footer>
                 
             </div>
             <Outlet/>
        </div>
    )
}

export default Restaurants
