import React from 'react';

const Background = (props)=>(
    <div id="background" >
      <div className="container">
        <div className="RestrauntHeading">
          <h1 id="Heading" >You Have {props.ImageLink.ImageLink.length} restraunt</h1>
          <h6 id="subHeading" >Ordering food Online</h6>
       </div> 
    </div>
    </div>

)

export default Background;