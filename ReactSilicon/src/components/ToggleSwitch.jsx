import React from 'react'

const ToggleSwitch = () => {
  return (
    <div>
      
      <label className="toggle"> 
        <input type="checkbox" id="darkmode-switch"/>
        <span className="slider"></span>
      </label>

    </div>
  )
}

export default ToggleSwitch



      {/* <input type="checkbox" id="darkmode-switch"/> */}

      {/* <div className="darkmode-toggle">
        <p>Dark Mode</p>
        <label className="toggle"> 
          <input type="checkbox" id="darkmode-switch"/>
          <span className="slider"></span>
        </label>
      </div> */}
