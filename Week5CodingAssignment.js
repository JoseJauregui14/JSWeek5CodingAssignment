//Week 5 Coding Assignment
//Jose Jauregui


class Book {
    constructor(title){
        this.title = title;
        
    }
    describe(){
        return `${title} `;
    }
}
class Menu {
    constructor(){
        this.books = [];
        this.selectedBook = null;

    }
    start(){
        let selection = this.showMainMenu();
        while (selection != 0){
            switch (selection){
                case '1':
                    this.viewBooks();
                    break;
                case '2':
                    this.createNewBook();
                     break;
                case '3':
                    this.deleteBooks();
               
                default:
                    selection = 0;
            }
            selection = this.showMainMenu();
        }
        alert('Goodbye!');
    }
    showMainMenu(){
        return prompt(`
        0) Exit 
        1) View List of Books
        2) Add New Book
        3) Delete a Book
        `);
    }
    viewBooks(){
        let bookString = '';
        for (let i = 0; i < this.books.length; i ++){
            bookString += i + ') ' + this.books[i].title + '\n';
        }
        alert (bookString);      
    }
    createNewBook(){
        let name = prompt('Enter name of new Book: ');

        this.books.push(new Book(name,));
    }
    deleteBooks(){
        let index = prompt('Enter the index of the Book you wish to delete: ');
        if(index > -1 && index < this.books.length){
            this.books.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();