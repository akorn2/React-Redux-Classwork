import { combineReducers } from 'redux';
import ActiveBook from './reducer_active_book';
import BookList from './reducer_book_list';

const rootReducer = combineReducers({
  books: BookList,
  activeBook: ActiveBook
});

export default rootReducer;
