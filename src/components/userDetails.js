import React from  'react';
import "./../styles/userDetails.css"

const style = {
    "padding-top" : "20px"
}
  const FormHandle = (props)=>(
    <div class="container">
    <div class="row">
   
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad" >
 
 
        <div class="panel panel-info">
          <div class="panel-heading">
            <h3 class="panel-title">{props.userDetails.name}</h3>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-md-3 col-lg-3 " align="center"> <img alt="User Pic" src="/assets/images/profilepic.jpg" /> </div>
              
          
              <div class=" col-md-9 col-lg-9 "> 
                <table class="table table-user-information">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>{props.userDetails.name}</td>
                    </tr>
                    <tr>
                      <td>Mobile Number</td>
                      <td>{props.userDetails.mobileNo}</td>
                    </tr>
                    <tr>
                      <td>Date of Birth</td>
                      <td>{props.userDetails.DOB}</td>
                    </tr>
                 
                       <tr>
                           <tr>
                      <td>Gender</td>
                      <td>{props.userDetails.Gender}</td>
                    </tr>
                      <tr>
                      <td>College</td>
                      <td>{props.userDetails.college}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td><a href="mailto:akashagarwal0403@gmail.com">akashagarwal0403@gmail.com</a></td>
                    </tr>
                    
                         
                    </tr>
                   
                  </tbody>
                </table>
                
                <button className="btn">Submit</button>
              </div>
            </div>
          </div>
               <div class="panel-footer">
                      <a data-original-title="Broadcast Message" data-toggle="tooltip" type="button" class="btn btn-sm btn-primary"><i class="glyphicon glyphicon-envelope"></i></a>
                      <span class="pull-right">
                          <a href="edit.html" data-original-title="Edit this user" data-toggle="tooltip" type="button" class="btn btn-sm btn-warning"><i class="glyphicon glyphicon-edit"></i></a>
                          <a data-original-title="Remove this user" data-toggle="tooltip" type="button" class="btn btn-sm btn-danger"><i class="glyphicon glyphicon-remove"></i></a>
                      </span>
                  </div>
          
        </div>
      </div>
    </div>
  </div>
)

export default FormHandle;