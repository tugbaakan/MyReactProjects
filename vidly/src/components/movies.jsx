import React, { Component } from 'react';
import {toast} from 'react-toastify';
import { getGenres } from '../services/genreService';
import { getMovies , deleteMovie} from '../services/movieService';
import { paginate } from '../utils/paginate';
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import MoviesTable from './moviesTable';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import SearchBox from './common/searchBox';

class Movies extends Component {
    state = {  
        movies: [],
        genres : [],
        currentPage : 1,
        pageSize : 4,
        sortColumn :{ path: 'title', order: 'asc'},
        selectedGenre : null,
        searchQuery : "" 
    }

    async componentDidMount(){
        
        const {data : genresOnly} = await getGenres();
        const genres = [ { _id: "", name: "All Genres" }, ...genresOnly ];

        const {data: moviesOnly} = await getMovies();
        const movies = moviesOnly.map( c => {
            c.liked = false;
            return c;
        } );
               
        this.setState({movies, genres}); 
       
    };

    handleDelete = async (movie) => {
        const moviesOrig = this.state.movies;
        const movies = this.state.movies.filter(item => item._id !== movie._id);
        this.setState({ movies });
        
        try{
            await deleteMovie(movie._id); 
        }
        catch(ex)
        {
            if(ex.response && ex.response.status === 404)
                toast.error("This movie has already been deleted!");
            this.setState({ movies : moviesOrig });
        }
    }

    handleLike = (movie) => {
        const moviesNew = [...this.state.movies];
        const index = moviesNew.indexOf(movie);
        moviesNew[index] = {...moviesNew[index]};
        moviesNew[index].liked = ! moviesNew[index].liked;
        this.setState({movies : moviesNew});
    }

    handlePageChange = (page) => {
       this.setState({currentPage : page});
    }

    handleGenreSelect = (genre) => {
        this.setState({selectedGenre : genre, currentPage : 1, searchQuery : ""});
    }

    handleSearchChange = (query) => {
        this.setState({searchQuery : query, currentPage : 1, selectedGenre : null });
    }

    handleSort = (sortColumn) => {
        this.setState({sortColumn});
    }

    getPagedData= () => {

        let moviesFiltered = this.state.movies;
        if (this.state.searchQuery)
            moviesFiltered = this.state.movies.filter(m => m.title.toLowerCase().startsWith(this.state.searchQuery.toLowerCase()) );
        else if (this.state.selectedGenre && this.state.selectedGenre._id)
            moviesFiltered = this.state.movies.filter(m => m.genre._id === this.state.selectedGenre._id);
      
        const movies = _.orderBy( moviesFiltered, [this.state.sortColumn.path], [this.state.sortColumn.order]);
        const moviesPaged = paginate( movies, this.state.currentPage, this.state.pageSize);
  
        return {totalCount: movies.length, data: moviesPaged};
    }

    render() { 
        if(this.state.movies.length === 0) return <p>There are no movies in the database...</p>

        const {totalCount, data : movies} = this.getPagedData();

        const {user} = this.props;

        return(
            <div className="row">
                <div className="col-3">
                    <ListGroup items={this.state.genres} selectedItem={this.state.selectedGenre} onItemSelect={this.handleGenreSelect} />            
                </div>
                <div className="col">
                    {user && <Link to='/movies/new' className="btn btn-primary" style={{marginBottom: 20}}>New Movie</Link>}
                    <p>Showing {totalCount} movies in the database.</p> 
                    <SearchBox value={this.state.searchQuery} onChange={this.handleSearchChange} />
                    <MoviesTable user={user} movies={movies} sortColumn={this.state.sortColumn} onLike={this.handleLike} onDelete ={this.handleDelete} onSort={this.handleSort}/>
                    <Pagination currentPage={this.state.currentPage} pageSize = {this.state.pageSize} itemsCount = {totalCount}  onPageChange={this.handlePageChange} />
                </div>
            </div>
        );
    
    }

}
 
export default Movies;