import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Home from './components/layout/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import PrivateRoute from './components/routing/PrivateRoute';


//import Nav from "./components/Nav";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
//import NoMatch from "./pages/NoMatch";

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';


import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}


const App = () => {
  useEffect(() => {
    store.dispatch(loadUser()); 
  }, []);


  return ( 
<Provider store={store}>  
<Router>
<Fragment>
     <Navbar/>
    
  <section className="container">
     <Alert /> 
    <Switch>
    
     <Route exact path='/' component={Landing} />
     <Route exact path='/home' component={Home} />
     <Route exact path='/register' component={Register} />
     <Route exact path='/login' component={Login} />
     <PrivateRoute exact path='/dashboard' component={Dashboard} />
     <PrivateRoute exact path='/create-profile' component={CreateProfile} />
     <PrivateRoute exact path='/edit-profile' component={EditProfile} />
     <PrivateRoute exact path='/add-experience' component={AddExperience} />
     <PrivateRoute exact path='/add-education' component={AddEducation} />
     <PrivateRoute exact path="/search" component={Search} />
     <PrivateRoute exact path="/saved" component={Saved} />
  </Switch>
  </section>
 </Fragment>
 </Router>
 </Provider>
)};

export default App;
