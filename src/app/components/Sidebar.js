"use client";
import Link from "next/link";
import { useEffect } from 'react';
export default function Sidebar() {

  useEffect(() => {

    document.body.classList.remove('sidebar-open')
    var body = document.querySelector('body')
    document.querySelector('.side-close').onclick = function () {
      body.classList.remove('sidebar-open')
    }

    document.querySelector('.mobile-tap').onclick = function () {
      body.classList.add('sidebar-open')
    }

    var mobile_expand = document.querySelectorAll('.menu .is-parent')

    mobile_expand.forEach((item,index)=>{ 
        let _parent = item.querySelector(".plus"); 
        _parent.onclick = function (event) {
          event.preventDefault();
            this.parentNode.nextSibling.classList.toggle('show-sub')
        }
        
    }) 

  });

  return (
    <>
      <div className="sidebar-wrap" aria-hidden="true">
        <div className="sidebar__content">
          <span className="side-close">+</span>
          <nav className="mobile-navigation">
            <ul class="menu">
              <li><Link href="/page/home">Home</Link></li>
              <li className="is-parent"><Link href="/page/zoho-development-services">Zoho Development Services<span className="plus">+</span></Link>
                <ul className="sub-menu">
                  <li><Link href="/page/zoho-partner">Zoho Partner</Link></li>
                  <li><Link href="/page/zoho-consultant">Zoho Consultant</Link></li>
                  <li><Link href="/page/zoho-crm-customization">Zoho CRM Customization</Link></li>
                  <li><Link href="/page/zoho-crm-extensions">Zoho CRM Extensions</Link></li>
                  <li><Link href="/page/business-automation">Business Automation</Link></li>
                  <li><Link href="https://www.medicrm.ai/">MEDICRM.AI</Link></li>
                  <li><Link href="/page/sales-engine-automation">Sales Engine Automation</Link></li>
                  <li><Link href="/page/diy">Diy</Link></li>
                  <li><Link href="/page/zoho-customization">Zoho Customization</Link></li>
                  <li><Link href="/page/zoho-for-real-estate">Zoho For Real Estate</Link></li>
                </ul>
              </li>
              <li className="is-parent"><Link href="/page/zoho-training">Zoho Training <span className="plus">+</span></Link>
                <ul className="sub-menu">
                  <li><Link href="/page/zoho-crm-course">Zoho CRM Training</Link></li>
                  <li><Link href="https://www.liorizik.com/courses/live-training-deluge-scripting-for-non-developers?_ga=2.157498354.999777575.1714282339-837017896.1712048496">Zoho Deluge Training</Link></li>
                  <li><Link href="https://www.liorizik.com/courses/Zoho-CRM-Automation-Workshop?_ga=2.186340193.999777575.1714282339-837017896.1712048496">Zoho CRM Automation Training</Link></li>
                  <li><Link href="/page/zoho-one-2023-applications">Zoho One 2023 Applications</Link></li>
                  <li><Link href="https://www.liorizik.com/courses/the-complete-zoho-forms-course-2021-edition?_ga=2.186340193.999777575.1714282339-837017896.1712048496">Zoho Forms Training</Link></li>
                  <li><Link href="https://www.liorizik.com/?_ga=2.181673967.999777575.1714282339-837017896.1712048496">More Zoho Courses</Link></li>
                </ul>
              </li>
              <li className="is-parent"><Link href="/page/recommended">Recommended <span className="plus">+</span></Link>
                <ul className="sub-menu">
                  <li><Link href="https://www.youtube.com/c/ZOHOversity/videos">Videos</Link></li>
                  <li><Link href="https://forms.amazingbusinessresults.com/amazingbusinessresults/form/ZohoCRMPreventionSupportPackage/formperma/fjmgxaXUy_U4_ePbvsOqUF_TNwVKbBXV8gum6D87YDk?_ga=2.160718837.999777575.1714282339-837017896.1712048496">Zoho CRM Support, Prevention &amp; Updates Package</Link></li>
                  <li><Link href="https://forms.amazingbusinessresults.com/amazingbusinessresults/form/ZohoOneEmergencySupportPackage/formperma/tMUgGaZuaBJjNWd5MJGiB1xtTFHwDxSp4NAu8dFJzLY?_ga=2.89288787.999777575.1714282339-837017896.1712048496">Zoho One Emergency Support Package</Link></li>
                </ul>
              </li>
              <li><Link href="/page/about">About</Link></li>
              <li><Link href="/page/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}