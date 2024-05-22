import React from 'react'
import './Footer.css';

export const Footer = () => {
  return (
 <>
   <div className="container-fuild test">
     <div className='container p-0'>
        <div className="row pt-5">
            <div className="col-12 col-lg-10">
                 <h1 className='footer-name'>SAYOHAT QILISHNI XOHLAYSIZMI?</h1>
                 <p className='footer-text-1'>Unda biz bilan hoziroq bog'laning</p>
            </div>
            <div className="col-12 col-lg-2">
               <a className='footer-btn' href="#contacts">Bog'lanish</a>
            </div>

        </div>

    </div>
    
   </div>
   <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col-12">
<p className='copy'>
  Copyright © 2024 

Zamon Business Tour. All rights reserved.
          
</p>

        </div>
      </div>
    </div>
   </div>
 </>
  )
}


export default Footer;