import React, { Component } from 'react'
import Movie from './hoc/movie';
import Counter from './hooks/Counter';
import Users from './hooks/Users';
import MoviePage from './context/MoviePage';
import UserContext from './context/userContext';
import CartContext from './context/cartContext';
import Login from './context/Login';
import './App.css';


export default class App extends Component {
  state={
    currentUser : null
  }

  handleLogginIn =(username)=>{
    const user = {name: 'Mosh'};
    this.setState({currentUser : user});
  }

  render() {
    return ( <React.Fragment>
      <Movie id={1}/>
      <Counter/>
      <Users></Users>
      <CartContext.Provider value={{cart : []}}>
        <UserContext.Provider value={{ currentUser : this.state.currentUser, onLoggingIn : this.handleLogginIn }}>
          <MoviePage></MoviePage>
          <Login></Login>
        </UserContext.Provider>
      </CartContext.Provider>
    </React.Fragment>
    )
  }
}



