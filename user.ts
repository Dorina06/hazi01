class User {
    userId: string;
    name: string;
    email: string;

    constructor(userId: string, name: string, email: string) {
        this.userId = userId;
        this.name = name;
        this.email = email;
    }

    borrowBook(library: Library, bookId: string) {
        const book = library.findBookById(bookId);

        if(book) {
            library.removeBook(bookId);
            return book;
        } else {
            console.log(`A ${bookId} azonosítójú könyv nem található.`);
            return undefined;
        }
    }
}