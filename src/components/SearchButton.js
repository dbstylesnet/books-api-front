import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

const SearchButton = ({ onQuerySubmit, queried, onQueryChange }) => {
    return (
        <Form>  
            <Row>
                <Col xs={9}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control placeholder="Search query" value={queried} onChange={onQueryChange} />
                    </Form.Group>
                </Col>
                <Col xs={3}>
                    <Button onClick={onQuerySubmit}>Send</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default SearchButton;
