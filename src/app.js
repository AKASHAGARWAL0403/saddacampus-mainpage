import React from 'react';
import ReactDOM from 'react-dom';
import Form from "./components/userDetails.js"
import List from "./components/RestrauntList/CardList"
import 'bootstrap/dist/css/bootstrap.min.css';
const jsx = (
   
        <div>
           
            <List />
           
        </div>
  
)

ReactDOM.render(jsx, document.getElementById('app'));