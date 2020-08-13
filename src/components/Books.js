import React from 'react';

const Books = ({ books, loading }) => {
    if (loading) {
        return <h2>loading</h2>
    }
    
    return <ul className="list-group mb-4">
        {console.log(books)}
        {books.length > 0 ? 
                Object.values(books[0])[0].map(book => (
                    <li key={book.id} className="list-group-item">{book.book_title}</li>
            )) : 
            ''
        }
    </ul>
}

export default Books
