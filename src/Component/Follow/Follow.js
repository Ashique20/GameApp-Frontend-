import Aos from "aos";
import React, { useEffect } from "react";
import 'aos/dist/aos.css'
import { Link } from "react-router-dom";
const Follow = () => {
    // used Aos for scroll animation
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
    return (
        <div className="bg-slate-800 min-h-screen   
        ">
           <div className="lg:flex">
           <div className="lg:mt-60">
                <h1 className="lg:ml-[110%] text-9xl">Follow</h1>
            </div>
            <div className="mt-60 lg:ml-[35%]">
                <ul data-aos='zoom-in-left'>
                    {/* li of phone number */}
                <li className="flex">
                    <div >
                        <img className="w-10 " src="https://cdn-icons-png.flaticon.com/512/6361/6361951.png" alt="Album" />
                    </div>
                    <div className="ml-5 mt-2 font-bold">
                        <p>+8801831412952</p></div></li>
                         {/* li of  email */}
                <li className="flex mt-5 "> <div >
                    <img className="w-10 " src="https://static-00.iconduck.com/assets.00/mail-icon-1024x1024-lf56uwrj.png" alt="Album" />
                </div>
                    <div className="lg:ml-5 lg:mt-2 font-bold">
                        <p className="text-center">ashiqurrahman2092003@gmail.com</p></div></li>
                         {/* li of phone social media icons */}
                <li className="flex mt-5 ">
                <div >
                    <Link to='https://www.facebook.com/ashiquer.rahaman.roll2'><img className="w-8 " src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="Album" /></Link>
                </div>
                <div >
                    <Link to='https://www.instagram.com/ash_quick/'><img className="w-8  ml-8 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/768px-Instagram-Icon.png" alt="Album" /></Link>
                </div>
                <div >
                   <Link to='https://www.linkedin.com/in/ashiqur-rahman-508895270/'> <img className="w-8  ml-8" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="Album" /></Link>
                </div>
                    
                </li>
            </ul>
                     {/* div for follow description */}
           
            </div>
           </div>
           <div data-aos='fade-up' className="text-center lg:mx-20 lg:my-10 " >
                <h1 >
                Web Site means any point of presence maintained on the Internet or on any other public data network. With respect to any Website maintained on the World Wide Web, such Website includes all HTML pages (or similar unit of information presented in any relevant data protocol) that either (a) are identified by the same second-level domain (such as xxxxxxxxx.xxx) or by the same equivalent level identifier in any relevant address scheme, or (b) contain branding, graphics, navigation or other characteristics such that a user reasonably would conclude that the pages are part of an integrated information or service offering. Internet Website means a collection of related web pages, images, videos or other digital assets that are addressed relative to a common Uniform Resource Identifier (URI) and is accessible to the public; (“site Web Internet”) Web means the World Wide Web. Company’s Website means the website of the Company and/or its web-address or domain name (if any). NYFRB’s Website means the website of the NYFRB at xxxx://xxx.xxxxxxxxxx.xxx, or any successor source. CREFC® Website The CREFC®’s Website located at “xxx.xxxxx.xxx” or such other primary website as the CREFC® may establish for dissemination of its report forms. World Wide Web means an information browsing framework that allows a user to locate and access information stored on a remote computer and to follow references from one computer to related information on another computer
                </h1>
            </div>
        </div>
    )
}


export default Follow;