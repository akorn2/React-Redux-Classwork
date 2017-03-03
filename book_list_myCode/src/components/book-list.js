import React, { Component } from 'react';
import reducer_books from '../reducers/reducer_book_list';
// import {connect} from 'react-redux';

class BookList extends Component {


  reducer_books(){
    console.log(`test: manualy load json into BookList ${reducer_books()[1].title}`);
    //@fix: need to execute the reducer_function to return the array.

    return reducer_books().map((book) => {
      return(
        <li
          onClick={ ()=> {this.props.selectBook(book)} }
          key={book.title}>
          {book.title}
        </li>
      );
    });
  }
  // @question: onClick() receives a function declared inline, even though the property is a function.
  // @fix: book variable is not passed through parent function (reducer_books), because .map function returns each book_item in the array.

  render(){


    return(
      <div className="bookList">
        <ul>
          // {this.reducer_books()} //Test to manually load json data
        </ul>
      </div>
    );
  }
}

//Create mapStateToProps
function MapStateToProps (state) {
  return {books: state.books }
}

export default BookList;
// export default connect(MapStateToProps)(BookList);
