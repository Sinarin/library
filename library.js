let mylibrary = [];

function Book(title, pages) {
    this.title = title
    this.pages = pages
}

function addBookToLibrary(book) {
    mylibrary.push(book)
}

function displayBooks() {
    for (let x = 0; x < mylibrary.length; x++) {
        console.log(`Title:${mylibrary[x].title}, Pages:${mylibrary[x].pages}`);
        const book_form = document.getElementById('body');
        book_form.innerHTML += `<div>Title:${mylibrary[x].title}, Pages:${mylibrary[x].pages} <button class="remove" data-key="${x}">Remove</button>
        <button class="read_status" data-key="${x}">Read</button>   </div>
       
        ` 
        }
}

function buttonAddBook() {
    const buttonAdd = document.querySelector('.add_book');
    const book_form = document.getElementById('book');
    book_form.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title');
        const pages = document.getElementById('pages');

        if (title.value && pages.value) {
            const book = new Book(title.value, pages.value);
            addBookToLibrary(book);
            alert(`${title.value} has been added to your library`);
            const last = document.getElementById('book');
            last.insertAdjacentHTML("afterend", `<div>Title:${title.value}, Pages:${pages.value}</div>
            <button class="remove" data-key="${mylibrary.length}">Remove</button>
            <button class="read_status" data-key="${mylibrary.length}">Read</button>`)  
        }
    })
}

function deleteBook(book_number){
    delete mylibrary[book_number]
}

const harry = new Book('Harry Porter', 233);
addBookToLibrary(harry);
const harry2 = new Book('Harry Porterrrrr', 233);
addBookToLibrary(harry2);
displayBooks();     
buttonAddBook();

