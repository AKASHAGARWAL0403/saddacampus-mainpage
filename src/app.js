import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Form from "./components/userDetails.js"
import List from "./components/RestrauntList/FinalLayout"
import Header from "./components/Header"
import Footer from "./components/Footer"
import GetAppSection from './components/GetAppSection'
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
            <GetAppSection />
		<Footer />
        </div>
	</BrowserRouter>
);

ReactDOM.render(jsx, document.getElementById('app'));