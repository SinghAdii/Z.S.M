'use client'
import React from 'react'
import './ServiceDropDown.css'
import { useRouter } from 'next/navigation';
const ServicePopUp = () => {
    const navigate=useRouter();
  return (
    <div className='servicePopUpContainer'>
      <ul>
      <li onClick={()=>navigate.push('/platform-services')}>Platform Services</li>
<li onClick={() => navigate.push('/developement')}>Development</li>
<li onClick={() => navigate.push('/cms-ecommerce')}>CMS E-commerce</li>

      <li onClick={()=>navigate.push('/clouds')}>Clouds Services</li>
        <li  onClick={()=>navigate.push('/containerization')}>Containerisation Tools</li>
        <li  onClick={()=>navigate.push('/uiux')}>UIUX Services</li>
        <li  onClick={()=>navigate.push('/testing')}>Testing Services
        
</li>
        <li  onClick={()=>navigate.push('/big-data')}>Big Data
</li>
        <li  onClick={()=>navigate.push('/data-visualisation')}>Data Visualisation
</li>
        <li  onClick={()=>navigate.push('/dataOps')}>DataOps
</li>
        <li  onClick={()=>navigate.push('/smart-bot')}>AI Integration
</li>
        {/* <li  onClick={()=>navigate('/app-developement')}>App Development</li>

                                <li onClick={() => navigate('/ai-ml-projects')}> AI/ML</li>
                                <li onClick={() => navigate('/aixpersites')}>AIXpertSites
                                </li>
                                <li onClick={() => navigate('/personal-software')}>Personal Software for Business</li>
                                <li onClick={() => navigate('/web-app-upgradation')}>Web/App Upgradation
                                </li>
                         <li onClick={() => navigate('/web-developement')}>Web Development */}
        </ul>
    </div>
  )}

export default ServicePopUp