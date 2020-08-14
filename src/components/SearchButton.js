import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

const SearchButton = ({ onQuerySubmit, queried, onQueryChange }) => {
    return <Row className='justify-content-center'>
        <Col xs={6}>
            <Form>
                <Row>
                    <Col xs={9}>
                        <Form.Group controlId='formBasicSearch'>
                            <Form.Control placeholder='Search query' value={queried} onChange={onQueryChange} />
                        </Form.Group>
                    </Col>
                    <Col xs={3} className='w-100'>
                        <Button className='w-100' onClick={onQuerySubmit}>Send</Button>
                    </Col>
                </Row>
            </Form>
        </Col>
    </Row>
}

export default SearchButton;
