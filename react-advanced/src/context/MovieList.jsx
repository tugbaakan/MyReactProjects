import React, { Component } from 'react'
import UserContext from './userContext'
import MovieRow from './MovieRow';

export default class MovieList extends Component {
    static contextType = UserContext;
    
    componentDidMount(){
        console.log("context",this.context);
    }

    render() {
        return (
            <UserContext.Consumer>
                {userContext =>  
                <div> 
                    MovieList {userContext.currentUser ? userContext.currentUser.name : ""} 
                </div>}
            </UserContext.Consumer>
        )
    }
}

// MovieList.contextType = UserContext;