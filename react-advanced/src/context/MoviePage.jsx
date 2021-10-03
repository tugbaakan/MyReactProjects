import React, { Component } from 'react'
import MovieList from './MovieList'
import MovieRow from './MovieRow'

export default class MoviePage extends Component {
    render() {
        return (
            <div>
                <MovieList />
                <MovieRow />
            </div>
        )
    }
}
