import React, { useEffect, useState } from 'react'
import './App.scss'
import SearchButton from './components/SearchButton'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'

const App = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            const res = await axios.post('http://nyx.vima.ekt.gr:3000/api/books', [2 ,1 ,[]])
            setPosts(res.data)
            setLoading(false)
        }

        fetchPosts()
    }, [])

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
            <Row>
                <Col>
                    <SearchButton />
                </Col>
            </Row>
        </Container>
    )
}

export default App
