import React from 'react';

const style = {
  "fontWeight"  : "400"
}
const Padding = { 
  "paddingTop" : "100px"
}

class Background extends React.Component{

  constructor(props)
  {
    super(props);
  }

  handleChange = (e)=>{
    e.preventDefault();
    var value = e.target.value;
    console.log(value);
    this.props.FilterSearch(value)
  }

  render(){
    return(
      <div id="background" style={Padding} >
        <div className="container">
        <h1 className="display-4" style={style} >IIT(ISM)-DHANBAD</h1>
        <br />
        <div className ="form-group mx-sm-3 mb-2">
          <label htmlFor="inputPassword2" className ="sr-only">Password</label>
            <input type="text" className="form-control" id="Restraunt_name" placeholder="Search Restraunt" onChange={this.handleChange} />
        </div>
       
       </div>
     </div>

    )
  }
} 



export default Background;