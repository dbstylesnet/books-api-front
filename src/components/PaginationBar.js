import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

const PaginationBar = ({ itemsPerPage, booksCount, onPageClick, currentPage }) => {
    const pageNumbers = []
    const lastItem = Math.ceil(booksCount / itemsPerPage)

    if (currentPage > 5 && currentPage < lastItem - 5) {
        for (let i = currentPage - 5; i <= currentPage + 5; i++) {
            pageNumbers.push(i)
        }
    } else if (currentPage <= 5) {
        for (let i = 1; i <= 10 && i <= lastItem; i++) {
            pageNumbers.push(i)
        }
    } else {
        for (let i = lastItem - 9; i <= lastItem; i++) {
            pageNumbers.push(i)
        }
    }

    return <Row className='justify-content-xs-center pt-3'>
        <Col xs='auto' className='d-flex m-auto'>
            <ul className='pagination mb-0'>
                <li className='page-item'><Button onClick={() => onPageClick(1)} className='page-link'>First</Button></li>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <Button
                            className={`page-link ${number === currentPage ? 'active' : ''}`}
                            onClick={() => onPageClick(number)}>
                            {number}
                        </Button>
                    </li>
                ))}
                <li className='page-item'><Button onClick={() => onPageClick(lastItem)} className='page-link'>Last</Button></li>
            </ul>
        </Col>
    </Row>
}

export default PaginationBar
