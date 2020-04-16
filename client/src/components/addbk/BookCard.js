import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';


const BookCard = (props) => {
    const  book  = props.book;

    return(
        <div className="">
          
            <div className="desc">
                     
                <h2>
                    <Link className="text-white purplle" to={`/show-book/${book._id}`}>
                        {book.title}
                    </Link>
                </h2>
                <h3 className="text-white purplle rounded">Writer: {book.authors}</h3>
               
            </div>
             <p className="text-white purplle justified text-left rounded">{book.description}</p>
             <p className="text-white purplle rounded">Source: {book.publisher}</p>
             <p className="text-white purplle rounded">Date: {book.published_date}</p>
        </div>
    )
};

export default BookCard;