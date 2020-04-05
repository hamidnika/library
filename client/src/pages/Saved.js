import React, { Component } from "react";
import { Row } from "../components/Grid";
import { BookList, BookListItem } from "../components/BookList";
import API from "../utils/API";
import { FaRegSave } from 'react-icons/fa';

class Saved extends Component {

  state = {
    savedBooks: [],
    screenWidth: window.innerWidth
  }

  componentDidMount() {
    this.loadSavedBooks();
    window.addEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({screenWidth: window.innerWidth}, () => console.log(this.state.screenWidth))
  }

  loadSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({ savedBooks: res.data }))
  }

  deleteSavedBook = (event, googleId) => {
    event.preventDefault();
    API.deleteSavedBook(googleId)
      .then(res => this.loadSavedBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Row>
          <div className="col-md-12 border border-rounded p-3 mb-2 bg-secondary">
          <h4 className="col-md-12 rounded purplle text-warning p-2">Saved Books <FaRegSave /></h4>
            {!this.state.savedBooks.length ? (
              <h6 className="text-center text-white">No books to display currently</h6>
            ) : (
                <BookList>
                  {this.state.savedBooks.map(book => {
                    return (
                      <BookListItem
                        key={book.googleId}
                        googleId={book.googleId}
                        title={book.title}
                        authors={book.authors}
                        description={book.description}
                        thumbnail={book.thumbnail}
                        href={book.href}
                        date={API.getDate(book._id)}
                        saved={true}
                        clickEvent={this.deleteSavedBook}
                        screenWidth={this.state.screenWidth}
                      />
                    );
                  })}
                </BookList>
              )}
          </div>
        </Row>
        <Row>
          <div className="pt-3 text-justify font-italic">
            <p>Here it is possible for users to see the books which were saved. In fact, "saved books" part is a good place for finding related books. Google's Book Search deal would make it far easier to find and preview books that are either no longer printed or are simply difficult to track down. This would include foreign language books that might typically not be widely available for purchase. Through the service, you'd be able to read 20 percent of the text.Google has been scanning books at libraries around the world since 2004 to offer users the ability to search through those books for free. 
            Authors and publishers would receive payments when users read their books online. A Books Rights Registry created through the settlement would work to track down rights-holders and make sure they received their royalties. Authors and publishers would also get a portion of revenues earned from university subscriptions and on-site advertising. Out-of-print books still under copyright would fall under the same royalty system as in-print books, giving authors a previously nonexistent market for making money off their no-longer-published titles.
            This information provides an insight into the book, particularly useful when only a snippet view is available. The list of related books can often contain irrelevant entries.In some cases, a book summary and information about the author is also displayed. The page also displays bibliographic information, which can be exported as citations in BibTeX, EndNote and RefMan formats. Registered users logged in with their Google accounts can post reviews for books on this page. Google Books also displays reviews from Goodreads alongside these reviews.

Google Books can retrieve scanned books from URLs based on the ISBN.

Signed-in users can create a personalized collection or a "library" of books, using the "My Library" feature. Organized through "bookshelves", books can be added to the library using a button that appears along with search results or from the "Overview" page of books. The library can be shared with friends by making bookshelves publicly visible and sharing the private library URL. Users can also import a list of books to the library using their ISBN or ISSN numbers. There are four default bookshelves which cannot be renamed: "Favorites", "Reading now", "To read" and "Have read".The library also has default bookshelves ("Purchased", "Reviewed", "My Books on Google Play", "Recently viewed", "Browsing history", and "Books for you") to which books get added automatically.

            </p>
          </div>
        </Row>
      </div>
    )
  }
}

export default Saved;