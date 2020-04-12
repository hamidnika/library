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
import Nav from './components/Nav';
//import Nav from "./components/Nav";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Posts from './components/Posts/Posts';
import About from './components/Posts/about';
import Gallery from './components/Posts/gallery';
//import NoMatch from "./pages/NoMatch";

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

import CreateBook from './components/addbk/CreateBook';
import ShowBookList from './components/addbk/ShowBookList';
import ShowBookDetails from './components/addbk/ShowBookDetails';
import UpdateBookInfo from './components/addbk/UpdateBookInfo';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}


const App = () => {
  useEffect(() => {
    store.dispatch(loadUser()); 
  }, []);


  return ( 
<Provider store={store}>  
<Router >
<Fragment>
     <Navbar className="navbar"/>

  <div className="hi"> 
  <section className="container m-6">
     <Alert /> 
    <Switch>
    <Route exact path='/bk' component={ShowBookList} />
    <PrivateRoute path='/create-book' component={CreateBook} />
    <PrivateRoute path='/edit-book/:id' component={UpdateBookInfo} />
    <PrivateRoute path='/show-book/:id' component={ShowBookDetails} />
     <Route exact path='/' component={Landing} />
     <Route exact path='/home' component={Home} />
     <Route exact path='/posts' component={Posts} />
     <Route exact path='/about' component={About} />
     <Route exact path='/gallery' component={Gallery} />
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

  <Nav/>
  </div> 
 </Fragment>
 </Router>
 </Provider>
)};

export default App;
