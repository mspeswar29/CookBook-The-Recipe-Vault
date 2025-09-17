import React from 'react'
import { IoFastFoodOutline, IoMailOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import '../styles/NewsLetter.css'

const NewsLetter = () => {

  const [subscribe, setSubscribe] = React.useState(false);
  const [email, setEmail] = React.useState('');

  const handleSubscribe = () => {
    setEmail('');
    setSubscribe(true);
    setTimeout(() => {
      setSubscribe(false);
    }, 5000);
  }

  return (
    <div className='newsletter-container'>

      <div className="newsletter-body">
        <div className="newsletter-text">
            <IoFastFoodOutline className='food-icon' />
            <span>
              <h4>"Rest assured, your inbox is safe with us. We only send quality, delicious content."</h4>
              <p>"We respect your privacy. No spam, ever."</p>
            </span>
        </div>
        <div className="newsletter-input-body">
            <div className="newsletter-input">
              <span>
                  <IoMailOutline className='mail-icon' />
                  <input type="text" placeholder='Your email address' onChange={(e)=> setEmail(e.target.value)} value={email} />
              </span>
              <button onClick={handleSubscribe}>Subscribe</button>
            </div>
        {subscribe && 
            <p>Thanks for subscribing!!</p>
        }
            <p>
                <FaRegCheckCircle className='tick-icon' />
                We promise no spam, just yummy inspiration! Sign up now!
            </p>
        </div>
      </div>

    </div>
  )
}

export default NewsLetter