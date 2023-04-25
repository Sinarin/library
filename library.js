let mylibrary = [];

function Book(title, pages) {
    this.title = title
    this.pages = pages
}

function addBookToLibrary(book) {
    mylibrary.push(book)
}

function displayBooks() {
    for (book of mylibrary) {
        console.log(`Title:${book.title}, Pages:${book.pages}`);
    }
}

function buttonAddBook() {
    const buttonAdd = document.querySelector('.add_book');
    const book_form = document.getElementById('book');
    book_form.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title');
        const pages = document.getElementById('pages');

        if (true) {
            const book = new Book(title.value, pages.value);
            addBookToLibrary(book);
            alert(`${title.value} has been added to your library`);
        }
    })
}

const harry = new Book('Harry Porter', 233);
addBookToLibrary(harry);
const harry2 = new Book('Harry Porterrrrr', 233);
addBookToLibrary(harry2);
displayBooks();     
buttonAddBook();

