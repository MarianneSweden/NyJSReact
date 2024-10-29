import React from 'react'
import ArrowAccordian from '../assets/images/arrow.svg'




const FaqRight = () => {
  return (
<div>
      

  <div className="column2">


  <section className="accordion">

  {/* <!-- Rad 1 --> */}
  <div className="accordion-item">
    <button className="accordion-header">
    <p> Is any of my personal information stored in the App? </p>
      <img src={ArrowAccordian} className="arrow-icon"/>
    </button>
    <div className="accordion-content">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ratione repellat molestias possimus alias expedita.</p>
    </div>
  </div>

  {/* <!-- Rad 2 --> */}
  <div className="accordion-item">
    <button className="accordion-header">
    <p> What formats can I download my transaction history in?</p>
    <img src={ArrowAccordian} className="arrow-icon"/>
    </button>
    <div className="accordion-content">
      <p>Hej hej</p>
    </div>
  </div>

  {/* <!-- Rad 3 --> */}
  <div className="accordion-item">
    <button className="accordion-header">
      <p>Can I schedule future transfers?</p>
      <img src={ArrowAccordian} className="arrow-icon"/>
    </button>
    <div className="accordion-content">
      <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
    </div>
  </div>

  {/* <!-- Rad 4 --> */}
  <div className="accordion-item">
    <button className="accordion-header">
      <p>When can I use Banking App services?</p>
      <img src={ArrowAccordian} className="arrow-icon"/>
    </button>
    <div className="accordion-content">
      <p>Innehåll för rad 4.</p>
    </div>
  </div>
{/* 
  <!-- Rad 5 --> */}
  <div className="accordion-item">
    <button className="accordion-header">
      <p>Can I create my own password that is easy for me to remember?</p>
      <img src={ArrowAccordian} className="arrow-icon"/>
    </button>
    <div className="accordion-content">
      <p>Innehåll för rad 5.</p>
    </div>
  </div>

  {/* <!-- Rad 6 --> */}
  <div className="accordion-item">
    <button className="accordion-header">

      <p>What happens if I forget or lose my password?</p>
      
      <img src={ArrowAccordian} className="arrow-icon"/>
    
    </button>
    
    
    <div className="accordion-content">
      <p>Innehåll för rad 6.</p>
    </div>
  
  </div>


</section>

    </div>

    </div>
  )
}

export default FaqRight
