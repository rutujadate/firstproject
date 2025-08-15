import logo from './logo.svg';
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
          <div>We specialize in B2B wholesale trading of high-quality second-hand and refurbished mobile phones.
            Since our inception, we've been committed to delivering reliable, affordable, and premium-grade devices to retailers,
            resellers, and bulk buyers across India.
          </div>
          <div>
            <img src="https://3extent.vercel.app/Assets/home2.webp" width="700px" />
          </div>
          </div>
          {/* MOBILE MARKET AND NETWORK */}
          <div className='mobileMarket'>
            <div>
              <img src="https://3extent.vercel.app/Assets/home3.webp" width="700px" />
            </div>
            <div className='mobileInfo'>With a deep understanding of the mobile market and strong supplier networks, we ensure that every device we sell
              is thoroughly tested, quality-checked, and competitively priced. Our goal is to help our clients maximize their
              margins while giving customers access to the latest smartphones at the best value.
            </div>
          </div>
          {/* REPUTATION FOR TRUST,TRANSPARENCY */}
          <div className='satisfiedCustomer'>
            <div>
              In just a short span, we've built a reputation for trust, transparency, and timely delivery, selling thousands
               of units and serving a growing network of satisfied partners. Whether you are a local shop owner or a large-scale 
               distributor, we provide the products and service you can depend on.

            </div>
            <div>
              <img src="https://3extent.vercel.app/Assets/home4.webp" width="700px"/>
            </div>
          </div>
      </div>
    </div>


  )
}

export default App;
