import React, { useEffect, useState } from 'react'
import '../styles/BooksPage.scss'
import SearchButton from '../components/SearchButton'
import { Container } from 'react-bootstrap'
import Books from '../components/Books'
import Header from '../components/Header'
import PaginationButtons from '../components/PaginationButtons'
import PaginationBar from '../components/PaginationBar'
import axios from 'axios'

const BooksPage = ({ history, location }) => {
    const [pageQuery] = useState(parseInt(location.search.replace(/[^0-9]/g, '')) || 1)
    const [books, setBooks] = useState([])
    const [booksCount, setBooksCount] = useState(1)
    const [loading, setLoading] = useState(true)
    const [queried, setQueried] = useState('')
    const [postParams, setPostParams] = useState({
        page: pageQuery,
        itemsPerPage: 20,
        filters: [{ type: 'all', values: [''] }],
    })

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            const res = await axios.post('http://nyx.vima.ekt.gr:3000/api/books', postParams)
            setBooks(res.data.books)
            setBooksCount(res.data.count) 
            setLoading(false)
        }

        fetchPosts()
    }, [postParams])

    const onQueryChange = (e) => {
        setQueried(e.target.value)
        e.preventDefault()
    }

    const onQuerySubmit = (e) => {
        setQueried(queried)
        history.push(`/?p=1`)
        setPostParams({
            page: 1,
            itemsPerPage: 20,
            filters: [{ type: 'all', values: [queried] }],
        })
    }

    const onNextClick = () => {
        history.push(`/?p=${postParams.page + 1}`)
        setPostParams({
            page: postParams.page + 1,
            itemsPerPage: postParams.itemsPerPage,
            filters: [{ type: 'all', values: [queried] }],
        })
    }

    const onPrevClick = () => {
        history.push(`/?p=${postParams.page - 1}`)
        setPostParams({
            page: postParams.page - 1,
            itemsPerPage: postParams.itemsPerPage,
            filters: [{ type: 'all', values: [queried] }],
        })
    }

    const onPageClick = pageNumber => {
        history.push(`/?p=${pageNumber}`)
        setPostParams({
            page: pageNumber,
            itemsPerPage: postParams.itemsPerPage,
            filters: [{ type: 'all', values: [queried] }],
        })
    }

    const disabledPrev = postParams.page <= 1 ? true : false
    const disabledNext = books.length < postParams.itemsPerPage ? true : false

    return (
        <Container className='p-3'>
            <Header />

            <SearchButton 
                onQuerySubmit={onQuerySubmit} 
                onQueryChange={onQueryChange} />

            <PaginationButtons 
                disabledNext={disabledNext}
                disabledPrev={disabledPrev} 
                onNextClick={onNextClick} 
                onPrevClick={onPrevClick} />

            <PaginationBar
                itemsPerPage={postParams.itemsPerPage}
                currentPage={postParams.page}
                booksCount={booksCount} 
                onPageClick={onPageClick} />
                
            <Books 
                loading={loading} 
                books={books} />
        </Container>
    )
}

export default BooksPage
