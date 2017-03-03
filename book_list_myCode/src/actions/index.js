export function selectBook(book){
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

// @fix: utalize 'payload key'
// @fix: value of type should be a string and all caps
// @fix: return an object, not an array.
// @fix: export without 'default'
// @fix: export function, not an object.
