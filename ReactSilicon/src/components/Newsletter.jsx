import React from 'react'
import Bell from '../assets/images/notification.svg'

const Newsletter = () => {
  return (
    <div>
              
        <section id="newsletter" >

        <img className="bell" src={Bell} alt="" />


        <div className="rubrik">
        <p>
          Subscribe to our newsletter to stay informed about latest updates 
        </p>
        </div>


          <div className="subscribe-grupp">
          
            <input className="input" type="email" placeholder="&#xf0e0 Your Email" />

            <button className="subscribe-button">Subscribe</button>

          </div>

        </section>
    </div>
  )
}

export default Newsletter
