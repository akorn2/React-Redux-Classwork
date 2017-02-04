import React, { Component } from 'react';
import reducer_books from '../reducers/reducer_book_list';

class BookList extends Component {


  reducer_books(){
    console.log(reducer_books()[1].title);
    //@fix: need to execute the reducer_function to return the array.

    return reducer_books().map((book) => {
      return(
        <li
          key={book.title}>
          {book.title}
        </li>
      );
    });
  }
  // @fix: book variable is not passed through parent function (reducer_books), because .map function returns each book_item in the array.

  render(){


    return(
      <div className="bookList">
        <ul>
          {this.reducer_books()}
        </ul>
      </div>
    );
  }
}
export default BookList;
