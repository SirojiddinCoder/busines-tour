import React from 'react'
import './Footer.css';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const {t} = useTranslation()
  return (
 <>
   <div className="container-fuild test">
     <div className='container p-0'>
        <div className="row pt-5">
            <div className="col-12 col-lg-10">
                 <h1 className='footer-name'>{t("Footer.name")}</h1>
                 <p className='footer-text-1'>{t("Footer.desc")}</p>
            </div>
            <div className="col-12 col-lg-2">
               <a className='footer-btn' href="#contacts">{t("Footer.btn")}</a>
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