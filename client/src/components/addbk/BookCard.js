import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';


const BookCard = (props) => {
    const  book  = props.book;

    return(
        <div className="purplle rounded m-2">
          
            
            <h2>
                    <Link className="text-white m-2" to={`/show-book/${book._id}`}>
                        {book.title}
                    </Link>
                </h2>
                <p className="text-white m-2">Writer: {book.authors}</p>
             <p className="text-white justified text-left m-2">{book.description}</p>
             <p className="text-white m-2">Source: {book.publisher}</p>
             <p className="text-white m-2">Date: {book.published_date}</p>
        </div>
    )
};

export default BookCard;