import React from 'react'
import { Jumbotron, Row, Col } from 'react-bootstrap'

const Header = () => {
    return <Row xs={12}>
        <Col>
            <Jumbotron>
                <h1 className='header'>Available Books</h1>
            </Jumbotron>
        </Col>
    </Row>
}

export default Header;

