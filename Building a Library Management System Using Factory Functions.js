function Book(title, author) {
    return {
      title: title,
      author: author,
      details: function() {
        console.log(`Title: ${this.title}, Author: ${this.author}`);
      }
    };
  }
  function createLibrary() {
    let books = [];  
  
    return {
      addBook: function(book) {
        books.push(book);
      },
      removeBook: function(title) {
        books = books.filter(book => book.title !== title);
      },
  
      listBooks: function() {
        if (books.length === 0) {
          console.log("No books available.");
        } else {
          books.forEach(book => book.details());
        }
      }
    };
  }

  const library = createLibrary();
  
  const book1 = Book("To Kill a Mockingbird", "Harper Lee");
  const book2 = Book("1984", "George Orwell");
  
  library.addBook(book1);
  library.addBook(book2);
  
  console.log("Books in library:");
  library.listBooks();
  library.removeBook("1984");
  
  console.log("Books in library after removal:");
  library.listBooks();