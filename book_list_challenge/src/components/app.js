import React, { Component } from 'react';
import BookList from '../containers/book-list'
//@fix: Component, not Components

export default class App extends Component {

render(){
  return(
    <div>
      <BookList/>
    </div>
  );
}

}
