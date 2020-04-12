import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const BookCard = (props) => {
    const  book  = props.book;

    return(
        <div className="">
            <img src="https://i.picsum.photos/id/1018/200/200.jpg" alt="" />
            <div className="desc">
                <h2>
                    <Link className="text-white purplle" to={`/show-book/${book._id}`}>
                        {book.title}
                    </Link>
                </h2>
                <h3 className="text-white ">Writer: {book.authors}</h3>
               
            </div>
             <p className="text-white purplle justified text-right rounded">{book.description}</p>
        </div>
    )
};

export default BookCard;