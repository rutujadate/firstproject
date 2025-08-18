import logo from './logo.svg';
// import "font-awesome-sprockets";
// import "font-awesome";

import './App.css';

function App() {
  return (
    <div>
      {/* Header Section */}
      <div className='headerSection'>
        <div>
          <img src="https://3extent.vercel.app/Assets/3extent.png" width="100px" />
        </div>
        <div>
          <a href='' className='subHeaderSection'>Partners With Us</a>
          <a href='' className='subHeaderSection'>About Us</a>
          <a href='' className='subHeaderSection'>Contact Us</a>
        </div>
      </div>
      {/* Certified Second-hand Mobile image */}
      <div className='homeImg'>
        <div className='text'>
          <div className='homeImgText'>Certified Second-Hand Mobiles</div>
          <div className='homeImgText'>Fully tested, graded, and ready for resale</div>
        </div>
      </div>
      <div className='backgroundColor'>
        {/*  Paragraph Start........ At 3_EXTENT Pvt. Ltd............... */}
        <div className='paragraph'>At 3_EXTENT Pvt. Ltd., we specialize in the bulk supply of high-quality, pre-owned smartphones to resellers, retailers,
          and businesses across India. With a strong focus on quality, affordability, and trust, we help you grow your business by
          giving you access to the best devices at competitive wholesale prices.
          {/*Paragraph End..........................competitive wholesale prices. */}
        </div>
        {/* MOBILE IMAGE INFORMATION */}
        <div className='mobileImg'>
          <div className='sectionWidth'>We specialize in B2B wholesale trading of high-quality second-hand and refurbished mobile phones.
            Since our inception, we've been committed to delivering reliable, affordable, and premium-grade devices to retailers,
            resellers, and bulk buyers across India.
          </div>
          <div className='sectionWidth'>
            <img src="https://3extent.vercel.app/Assets/home2.webp" width="700px" className='imgBorder' />
          </div>
        </div>
        {/* MOBILE MARKET AND NETWORK */}
        <div className='mobileMarket'>
          <div className='sectionWidth'>
            <img src="https://3extent.vercel.app/Assets/home3.webp" width="700px" className='imgBorder' />
          </div>
          <div className='sectionWidth'>With a deep understanding of the mobile market and strong supplier networks, we ensure that every device we sell
            is thoroughly tested, quality-checked, and competitively priced. Our goal is to help our clients maximize their
            margins while giving customers access to the latest smartphones at the best value.
          </div>
        </div>
        {/* REPUTATION FOR TRUST,TRANSPARENCY */}
        <div className='satisfiedCustomer'>
          <div className='sectionWidth'>
            In just a short span, we've built a reputation for trust, transparency, and timely delivery, selling thousands
            of units and serving a growing network of satisfied partners. Whether you are a local shop owner or a large-scale
            distributor, we provide the products and service you can depend on.

          </div>
          <div className='sectionWidth'>
            <img src="https://3extent.vercel.app/Assets/home4.webp" width="700px" className='imgBorder' />
          </div>
        </div>
        {/* PARTNER WITH US */}
        <div className='partnerWithUsBox'>
          <div className='partnerWithUs'>Partner With Us</div>
          <div className='partnerWithUsPara'>Looking to stock up on reliable smartphones for resale? Partner with <strong className='extent'>3_EXTENT Pvt. Ltd.</strong> and get access to a
            consistent, profitable, and growing supply chain.
          </div>
        </div>
        {/* ABOUT US */}
        <div>
          <div className='aboutUs'>About Us</div>
          <div className='aboutUsBox'>
            {/* CEO .... */}
            <div className='founderBorder'>
              <div>
                <img src="https://3extent.vercel.app/Assets/CEO.jpeg" className='founderImage' />
              </div>
              <div className='founderText'>FOUNDER, Chief Executive Officer (CEO)</div>
              <div className='founderName'>Hrushikesh Tangadkar</div>
            </div>
            {/* CTO.... */}
            <div className='founderBorder'>
              <div>
                <img src="https://3extent.vercel.app/Assets/CTO.jpg" className='founderImage' />
              </div>
              <div className='founderText'>FOUNDER, Chief Technology Officer (CTO)</div>
              <div className='founderName'>Dipak Dhawade</div>
            </div>
            {/* CGO */}
            <div className='founderBorder'>
              <div>
                <img src="https://3extent.vercel.app/Assets/CGO.jpeg" className='founderImage' />
              </div>
              <div className='founderText'>FOUNDER, Chief Growth Officer (CGO)</div>
              <div className='founderName'>Vinod Gade
              </div>
            </div>
          </div>
        </div>
        {/* Mission and Values -- */}
        <div className='ourMissonBorder'>
          <div className='ourMission'>Our Mission</div>
          <div className='ourMissionInfo'>To become India’s most trusted wholesale partner for second-hand and refurbished mobiles by consistently
            delivering quality, value, and customer satisfaction.
          </div>
          {/* Our Values */}
          <div className='ourValues'>Our Values</div>
          <div className='values'>
            <div className='qualityFirst'><strong className='valuesName'>Quality First – </strong>Every device is tested for performance and reliability.</div>
            <div className='integrityInBusiness'><strong className='valuesName'>Integrity in Business –</strong> We believe in honest pricing and transparent deals.</div>
            <div className='partnershipFocused'><strong className='valuesName'>Partnership Focused –</strong> Your success is our success.</div>
          </div>
        </div>
        {/*CONTACT US  */}
        <div className='footerSection'>
          <div className='contactUs'>Contact Us</div>
          <div className='contactUsInfo'>We’re here to help you with bulk orders, partnership inquiries, or any questions about our products and services.
            Get in touch with us through the details below — our team will respond promptly.
          </div>
          {/* Separated in THREE Parts */}
          <div className='footerThreeParts'>
            {/* Office Address */}
            <div className='addressBox'>
              <div>
                <i class="fa fa-map-marker" aria-hidden="true"></i><span className='officeAdress'>Office Address</span>
              </div>
              <div className='threeExtent'>3_EXTENT Pvt. Ltd.
                <div>Shop No. 310, Deluxe Mall,</div>
                <div>Pimpri, Pune – 411017,</div>
                 <div>Maharashtra, India</div>
              </div>
            </div>
            {/* Contact Us */}
            <div className='addressBox'>
              <div>
                <i class="fa-regular fa-circle-user"></i><span className='contactUs'>Contact Us</span>
              </div>
              <div>
                <i class="fa-regular fa-phone"></i><span className='contactUsInfo'>+91 9665856368</span>
              </div>
              <div>
                <i class="fa-regular fa-envelope"></i><span className='contactUsInfo'>dipak.dhawade@3extent.com</span>
              </div>
            </div>
            {/* Business Hours */}
            <div className='addressBox'>
              <div>
                <i class="fa-regular fa-clock-nine"></i><span className='businessHours'>Business Hours</span>
              </div>
              <div className='timePeriod'>Monday – Saturday: 10:00 AM – 7:00 PM
                <div>Sunday: Closed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >


  )
}

export default App;
