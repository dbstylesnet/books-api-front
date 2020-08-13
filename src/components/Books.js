import React from 'react'
import { Row, Spinner, Col } from 'react-bootstrap'
const Books = ({ books, loading }) => {
    if (loading) {
        return <Row className='justify-content-center p-3'><Spinner animation="grow" col={12} /></Row>
    }

    return <Row className='justify-content-center d-flex'>
        <ul className="list-group mb-4">
            {books.length > 0 && !loading ?
                Object.values(books).map(book => (
                    <Col key={book.id} className='p-3 mb-1'>
                        <li className="list-group-item">
                            <span className='font-weight-bold'>{book.book_title}</span><br />
                            by <span className='font-italic'>{book.book_author}</span><br />
                            year: {book.book_publication_year}, {book.book_publication_city} {book.book_publication_city}<br />
                            pages: {book.book_pages}
                        </li>
                    </Col>
                )) :
                ''
            }
        </ul>
    </Row>
}

export default Books
