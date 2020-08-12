import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

const SearchButton = () => {
    return (
        <Form>
            <Row>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control placeholder="Search query" />
                    </Form.Group>
                </Col>
                <Col>
                    <Button type="submit">
                        Submit
                   </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default SearchButton;
