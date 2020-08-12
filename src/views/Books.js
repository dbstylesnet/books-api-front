import React, { useEffect, useState } from 'react'
import '../styles/Books.scss'
import SearchButton from '../components/SearchButton'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'

const Books = () => {
    const [posts, setPosts] = useState([])
    const [postParams, setPostParams] = useState({
        page: 1,
        itemsPerPage: 20,
        filters: [],
    })
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            const res = await axios.post('http://nyx.vima.ekt.gr:3000/api/books', { postParams })
            console.log(postParams)
            setPosts(res.data)
            setLoading(false)
        }

        fetchPosts()
    }, [postParams])

    console.log(posts)

    return (
        <Container className="p-3">
            <Row xs={12}>
                <Col>
                    <Jumbotron>
                        <h1 className="header">Books Front</h1>
                    </Jumbotron>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={6}>
                    <SearchButton />
                </Col>
            </Row>
            <Row>
                <Col>
                
                </Col>
            </Row>
        </Container>
    )
}

export default Books
