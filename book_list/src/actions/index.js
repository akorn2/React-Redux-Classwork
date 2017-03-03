export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}


// Actions & ActionCreators are for changing states.

// This is an API style of triggering behaviors
// 1. Interactions triggers an actionCreator.
// 2. ActionCreator returns an object, with a property identifying the type { actionCreator : [ type : this.action ] }
// 3. This object's type (object.type) trips it's respective response inside the Reducer function.
// The reducer can pass a new state, which is passed into the component and re-redners the page.
