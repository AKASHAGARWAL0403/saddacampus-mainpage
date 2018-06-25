import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Form from "./components/userDetails.js"
import List from "./components/RestrauntList/FinalLayout"
import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';

const jsx = (
	<BrowserRouter>
		<div>
			<Header />
            <Switch>
                <Route path="/" component={List} exact={true} />
                <Route path="/restraunt/:name" render={
                  (props)=> (<div>{props.match.params.name}</div>)
                } />
            </Switch>
		
        </div>
	</BrowserRouter>
);

ReactDOM.render(jsx, document.getElementById('app'));