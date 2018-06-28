import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from "react-loadable";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Form from "./components/userDetails.js"
import List from "./components/RestrauntList/index"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Test from "./components/RestrauntListUpdated/Finalltest"

function Loading({ error }) {
    if (error) {
      return <div>Error!</div>;
    } else {
      return <div>Loading...</div>;
    }
  }

const Nav = Loadable({
    loader: () => import('./components/foodItens/Navbar'),
    loading: Loading,
  });

const jsx = (
	<BrowserRouter>
		<div>
	        <Header />
            <Switch>
                <Route path="/" component={List} exact={true} />
                <Route path="/restraunt/:name" render={
                  (props)=> (<div>{props.match.params.name}</div>)
                } />
                <Route path="/navbar" component={Nav} exact />
                <Route path="/test" component={Test} exact />
            </Switch> 
	        <Footer />   
        </div>
	</BrowserRouter>
);

ReactDOM.render(jsx, document.getElementById('app'));