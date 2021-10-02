import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/navBar';
import Customers from './components/customers';
import Movies from './components/movies';
import Rentals from './components/rentals';
import NotFound from './components/not-found';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import Logout  from './components/logout';
import ProtectedRoute from './components/common/protectedRoute';
import auth from './services/authService';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';

class App extends Component {
  state={

  }
  componentDidMount(){
    this.setState({user : auth.getCurrentUser()});
  }

  render() { 
    return (
      <React.Fragment>
        <ToastContainer/>
        <Navbar user={this.state.user} />
        <div className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/movies/:id" component={MovieForm}> </ProtectedRoute>
            <Route path="/movies" render={props => <Movies {...props} user={this.state.user}/>}/>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies"></Redirect>
            <Redirect to="/not-found"></Redirect> 
         </Switch>
        </div>
      </React.Fragment>
    ) 
  }
}
 
export default App;
