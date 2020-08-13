import React, { useEffect, useState } from 'react'
import '../styles/Books.scss'
import SearchButton from '../components/SearchButton'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'
import Books from '../components/Books'
import axios from 'axios'

const BooksView = () => {
    const [books, setBooks] = useState([])
    const [postParams, setPostParams] = useState({
        page: 1,
        itemsPerPage: 20,
        filters: [{ type: "all", values: [""] }],
    })

    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [queried, setQueried] = useState('')

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            const res = await axios.post('http://nyx.vima.ekt.gr:3000/api/books', postParams)
            setBooks(res.data.books)
            setLoading(false)
            console.log(books)
        }

        fetchPosts()
    }, [postParams])

    const onQueryChange = (e) => {
        setQueried(e.target.value)
        e.preventDefault()
    }

    const onQuerySubmit = (e) => {
        setQueried(queried)
        setPostParams({
            page: 3,
            itemsPerPage: 10,
            filters: [{ type: "all", values: [queried] }],
        })
    }

    return (
        <Container className="p-3">
            <Row xs={12}>
                <Col>
                    <Jumbotron onClick={onQuerySubmit}>
                        <h1 className="header">Books API FrontEnd</h1>
                    </Jumbotron>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={6}>
                    <SearchButton onQuerySubmit={onQuerySubmit} onQueryChange={onQueryChange} />
                </Col>
            </Row>
            <Books loading={loading} books={books} />
        </Container>
    )
}

export default BooksView
