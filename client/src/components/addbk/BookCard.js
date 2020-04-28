import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';


const BookCard = (props) => {
    const  book  = props.book;

    return(
        <div className="bg-secondary rounded m-2">
          
            
            <div className="row pt-2">
                    <h5 className="ml-4">{book.title}</h5>
                    <Link className="text-warning" to={`/show-book/${book._id}`}>
                    <p className="font-small ml-3">Click to Delete or Update </p>
                    </Link>
                </div>
                <p className="text-white m-2">Writer: {book.authors}</p>
             <p className="text-white text-justify m-2">{book.description}</p>
             <p className="text-white m-2">Source: {book.publisher}</p>
             <p className="text-white m-2">Date: {book.published_date}</p>
        </div>
    )
};

export default BookCard;