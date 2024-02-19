import React from 'react'

const Info = () => {
  return (
    <div className='support container section'>
      <div className='sectionContainer'>
        <div className='titlesDiv'>
         <small>About DRDO</small>
         <h2>Terminal Ballistics Research Laboratory (TBRL)</h2>
          </div> 
          <div className="infoDiv grid">
            <div className="textDiv grid">
              <div className="singleInfo">
                <span className='number'>01</span>
                <h4>Historical Background</h4>
                <p>Terminal Ballistics Research Laboratory (TBRL) was envisaged in 1961 as one of the modern armament research laboratories under the Department of Defence Research & Development.</p>

              </div>
              <div className="singleInfo">
                <span className='number colorOne'>02</span>
                <h4>Vision</h4>
                <p>TBRL envisage self-reliance in the development of technologies related to warheads and provide state-of–the-art diagnostics facilities for assessment of terminal effects of armaments systems.</p>

              </div>
              <div className="singleInfo">
                <span className='number colorTwo'>03</span>
                <h4>Mission</h4>
                <p>Develop technologies and products related to warheads. 
Provides state-of-the-art diagnostics facilities for test and evaluation of armaments systems. </p>

              </div>
            </div>
            <div className='imgDiv'>
              <img  className='img1'src ="/images/p4.jpg" alt =""/>
              <img  className='img1'src ="/images/p6.jpg" alt =""/>
              <img  className='img1'src ="/images/p7.jpg" alt =""/>
              <img  className='img1'src ="/images/p2 (1).jpg" alt =""/>



             
         
           
              
            </div>
          </div>
      </div>
    </div>
  )
}

export default Info