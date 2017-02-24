'use strict';
const api = require('./api.js');
const bookHandlebars = require('../templates/books.handlebars');
const onGetBooks = function(event){
  event.preventDefault();
  api.getBooks()
    .then((response) => {
      $('.book-list-here').html(bookHandlebars({books: response.books}));
    });
//  bookHandlebars(api.getBooks());
};


const handlers = function() {
  $('.get-book-list').on('click', onGetBooks);
};


module.exports = {
  handlers,
};
