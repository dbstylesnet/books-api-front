import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

const PaginationButtons = ({
    disabledPrev,
    disabledNext,
    onPrevClick,
    onNextClick
}) => {
    return <Row className='justify-content-center'>
        <Col xs={3} className='justify-content-center'>
            <Button
                disabled={disabledPrev}
                className='w-100'
                onClick={onPrevClick}>Prev</Button>
        </Col>
        <Col xs={3} className='justify-content-center'>
            <Button
                disabled={disabledNext}
                className='w-100'
                onClick={onNextClick}>Next</Button>
        </Col>
    </Row>
}

export default PaginationButtons
