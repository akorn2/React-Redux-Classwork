import React, { Component } from 'react';
import reducer_books from '../reducers/reducer_book_list';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';

class BookList extends Component {


  reducer_books(){
    console.log(`test: manualy load json into BookList ${reducer_books()[1].title}`);
    //@fix: need to execute the reducer_function to return the array.

    return this.props.books.map((book) => {
      return(
        <li
          onClick={ ()=> { this.props.selectBook(book) } }
          key={book.title}>
          {book.title}
        </li>
      );
    });
  }
  // @question: onClick() receives a function declared inline, even though the property is a function.
  // @fix: book variable is not passed through parent function (reducer_books), because .map function returns each book_item in the array.


  console.log(`test: action state loaded into BookList ${this.selectBook}`)
  //@question:  why is this function in undefined
  console.log(`test: dispatch's action().selectBook load json into BookList ${this.props.selectBook}`)
  /* @question what is this function acomplishing?
    function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  }
  */

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

//Create mapStateToProps
function mapStateToProps (state) {
  return { books: state.books }
}

function mapDispatchToProps ( dispatch ) {
  return bindActionCreators ( { selectBook : selectBook } , dispatch  );
}


// @fix: extra {
// @question: bindActionCreators sources it's code from Redux to pass data from <Provider store="createStore(dispatch)"/>
// @question: bindActionCreators manages action's returned code.
// @note: lowercased first word in javascript functions.
// @note: uppercased first word for objects with inherited functions functions ( Components, Global Variables, npm imported objects, )

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
