// @fix: export a function returning an array, not a variable.
// export default books = [
//     {title:'Cooking Racoons'},
//     {title:'Cooking Hairballs'},
//     {title:'Hunting Enlightment'}
// ]

// @question: naming conventions for data vs. javascript files? Is data with _ vs. - ?
// ex:reducer_books.js and js with component-books.js?

export default function() {
  return [
    {title:'Cooking Racoons'},
    {title:'Cooking Hairballs'},
    {title:'Hunting Enlightment'}
  ];
}
