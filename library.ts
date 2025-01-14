
class Library implements ILibrary {
    books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    removeBook(id: string): void {
        this.books = this.books.filter(book => book.id !== id);
    }

    findBookById(id: string): Book | undefined {
        return this.books.find(book => book.id === id);
    }

    listAllBooks(): Book[] {
        return this.books;
    }
}
