import React from 'react'
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import {TiSocialFacebook} from 'react-icons/ti'
const Footer = () => {
  return (
    <div className='footer'>
      
      <div className='gridOne'>
      <p>Connect with us</p>
      <div className='socialIcon flex'>
        <TiSocialFacebook className='icon'/>
        <AiOutlineTwitter className='icon'/>
        <AiFillYoutube className='icon'/>
        

      </div>
      </div>
      <div className='footerLinks'>
        <span className='linkTitle'>
          Information

<li>
  <a href="">Contact Us |
 
 Terms & Conditions |
  
 Privacy Policy |
  
 Copyright Policy |
  
 Hyperlink Policy |
  
 Accessibility Statement  |
  
 Website  |
  
 Help |
  
 STQC Certificate |
  
 RTI Third Party Audit | 
  
 Public Grievances |
  
 Web Information Manager |
  
 Archives</a>

</li>
<p>           Copyright © 2024, DRDO, Ministry of Defence, Government of India</p>

        </span>

      </div>

    </div>
  )
}

export default Footer