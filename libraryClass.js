class Library {
    constructor(mylibrary) {
        this.mylibrary = mylibrary;
    }

    addBookToLibrary = (book) => {
        this.mylibrary.push(book);
    }

    deleteBook = (book_number) => {
            delete this.mylibrary[book_number] 
        }
}



class Book {
    constructor(title, pages, read = false) {
        this.title = title
        this.pages = pages
        this.read = read 
    }
}

const webFunction = (() => {
    
    const displayBooks = (library) => {
        for (let x = 0; x < library.length; x++) {
            console.log(`Title:${library[x].title}, Pages:${library[x].pages}`);
            const book_form = document.getElementById('body');
            let book_read = ""
            if (library[x].read){
                book_read = ", Read";
            }
    
            book_form.innerHTML += `<div data-key="${x}">Title:${library[x].title}, Pages:${library[x].pages}${book_read} <button class="remove" data-key="${x}">Remove</button>
            <button class="read_status" data-key="${x}">Read</button>  </div>` 
            }
    }

    const buttonAddBook = (libraryObj) => {
        const buttonAdd = document.querySelector('.add_book');
        const book_form = document.getElementById('book');
        book_form.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('title');
            const pages = document.getElementById('pages');
    
            if (title.value && pages.value) {
                const book = new Book(title.value, pages.value);
                libraryObj.addBookToLibrary(book);
                alert(`${title.value} has been added to your library`);
                const last = document.getElementById('book');
                last.insertAdjacentHTML("afterend", `<div data-key="${libraryObj.mylibrary.indexOf(book)}">Title:${title.value}, Pages:${pages.value}
                <button class="remove" data-key="${libraryObj.mylibrary.indexOf(book)}">Remove</button>   
                <button class="read_status" data-key="${libraryObj.mylibrary.indexOf(book)}">Read</button> </div>` );
                addButtonDeleteBook(libraryObj.mylibrary.indexOf(book), libraryObj);
                addButtonReadBook(libraryObj.mylibrary.indexOf(book), libraryObj);
            }
        })
    }

    const addButtonDeleteBook = (number, mylibrary) => {
        const deleteButton = document.querySelector(`.remove[data-key='${number}']`);
        deleteButton.addEventListener('click', (e) => {
            mylibrary.deleteBook(number);
            const displayedEntry = document.querySelector(`div[data-key="${number}"]`);
            displayedEntry.remove(); 
        } )
    }

    const addButtonReadBook = (number, mylibraryObj) => {
        const read_button = document.querySelector(`.read_status[data-key='${number}']`)
        read_button.addEventListener('click', () => {
            mylibraryObj.mylibrary[number].read = "Read";
            read_button.remove()
            changeEntry(number, mylibraryObj)
        } )
    }

    const changeEntry = (number, mylibraryObj) => {
        const element = document.querySelector(`div[data-key='${number}']`);
        element.innerHTML = `Title:${mylibraryObj.mylibrary[number].title}, Pages:${mylibraryObj.mylibrary[number].pages}, ${mylibraryObj.mylibrary[number].read}
        <button class="remove" data-key="${number}">Remove</button>`;
        addButtonDeleteBook(number, mylibraryObj);
    }

    const startLibraryButtons = (mylibraryObj) => {
        for (let x = 0; x < mylibraryObj.mylibrary.length; x++){
            if (mylibraryObj.mylibrary[x]){
                addButtonDeleteBook(x, mylibraryObj);
                addButtonReadBook(x, mylibraryObj);
            }
        }
    }

    return {displayBooks, buttonAddBook, startLibraryButtons};

})();

const library1 = new Library([new Book('Harry Porter', 233), new Book('Harry Porterrrrr', 233)
])
webFunction.displayBooks(library1.mylibrary);     
webFunction.buttonAddBook(library1);
webFunction.startLibraryButtons(library1);