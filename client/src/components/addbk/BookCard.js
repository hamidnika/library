import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';


const BookCard = (props) => {
    const  book  = props.book;

    return(
        <div className="bg-white text-dark rounded m-2">
          
            
            <div className="row pt-2">
                    <h5 className="ml-4 font-weight-bold">{book.title}</h5>
                    <Link className="text-success rounded" to={`/show-book/${book._id}`}>
                    <p className="font-small ml-3 font-weight-bold">Click to Delete or Update </p>
                    </Link>
                </div>
                <p className="text-dark m-2">Writer: {book.authors}</p>
             <p className="text-dark text-justify m-2 font-weight-bold">{book.description}</p>
             <p className="text-dark m-2">Source: {book.publisher}</p>
             <p className="text-dark m-2">Date: {book.published_date}</p>
        </div>
    )
};

export default BookCard;