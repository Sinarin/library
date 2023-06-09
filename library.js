let mylibrary = [];

function Book(title, pages, read=false) {
    this.title = title
    this.pages = pages
    this.read = read
}

function addBookToLibrary(book) {
    mylibrary.push(book)
}

function displayBooks() {
    for (let x = 0; x < mylibrary.length; x++) {
        console.log(`Title:${mylibrary[x].title}, Pages:${mylibrary[x].pages}`);
        const book_form = document.getElementById('body');
        let book_read = ""
        if (mylibrary[x].read){
            book_read = ", Read";
        }

        book_form.innerHTML += `<div data-key="${x}">Title:${mylibrary[x].title}, Pages:${mylibrary[x].pages}${book_read} <button class="remove" data-key="${x}">Remove</button>
        <button class="read_status" data-key="${x}">Read</button>  </div>` 
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
            last.insertAdjacentHTML("afterend", `<div data-key="${mylibrary.indexOf(book)}">Title:${title.value}, Pages:${pages.value}
            <button class="remove" data-key="${mylibrary.indexOf(book)}">Remove</button>   
            <button class="read_status" data-key="${mylibrary.indexOf(book)}">Read</button> </div>` );
            addButtonDeleteBook(mylibrary.indexOf(book));
            addButtonReadBook(mylibrary.indexOf(book));
        }
    })
}

function deleteBook(book_number){
    delete mylibrary[book_number]
}

function addButtonDeleteBook(number){
    const deleteButton = document.querySelector(`.remove[data-key='${number}']`);
    deleteButton.addEventListener('click', (e) => {
        deleteBook(number);
        const displayedEntry = document.querySelector(`div[data-key="${number}"]`);
        displayedEntry.remove(); 
    } )
}

function addButtonReadBook(number) {
    const read_button = document.querySelector(`.read_status[data-key='${number}']`)
    read_button.addEventListener('click', () => {
        mylibrary[number].read = "Read";
        read_button.remove()
        changeEntry(number)
    } )
}

function changeEntry(number) {
    const element = document.querySelector(`div[data-key='${number}']`);
    element.innerHTML = `Title:${mylibrary[number].title}, Pages:${mylibrary[number].pages}, ${mylibrary[number].read}
    <button class="remove" data-key="${number}">Remove</button>`;
    addButtonDeleteBook(number);
}

function startLibraryButtons() {
    for (let x = 0; x < mylibrary.length; x++){
        if (mylibrary[x]){
            addButtonDeleteBook(x);
            addButtonReadBook(x);
        }
    }
}

const harry = new Book('Harry Porter', 233);
addBookToLibrary(harry);
const harry2 = new Book('Harry Porterrrrr', 233);
addBookToLibrary(harry2);
displayBooks();     
buttonAddBook();
startLibraryButtons();

