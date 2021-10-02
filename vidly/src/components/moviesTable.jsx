import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import Table from './common/table';
import Like from './common/like';
import auth from '../services/authService';

// tek fonksiyonsa fonksyin component
// bir fonksiyon daha eklemek stersen class component

class MoviesTable extends Component {
    columns = [
        {path: 'title', label: 'Title', content: movie => <Link to={`/movies/${movie._id}`} >{movie.title}</Link> },
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'Stock'},
        {path: 'dailyRentalRate', label: 'Rate'},
        {key : 'like',  content  : movie => this.props.user && <Like liked={movie.liked} id={movie._id} onClick={() => this.props.onLike(movie)} /> }
        ];

    deleteColumn =   {key : 'delete', content : movie => <button type="button" className="btn btn-danger" onClick={() => this.props.onDelete(movie)} >Delete</button> }
  
    constructor(){
        super();
        const user = auth.getCurrentUser();
        if(user && user.isAdmin)
            this.columns.push(this.deleteColumn);
    }

    render() { 
        const { movies, sortColumn, onSort } = this.props;
        return ( 
            <Table data={movies} columns={this.columns} sortColumn={sortColumn} onSort={onSort} />
        );
    }
}
 
export default MoviesTable;

