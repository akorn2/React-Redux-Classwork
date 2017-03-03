import React, { Component } from 'react';
import BookList from '../containers/book-list';
// @fix: missing ;
import Provider from 'react-redux';
import createStore from 'redux';
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
