import React from 'react'
import { Row, Container } from 'react-bootstrap';
import { Loader as StyledLoader } from '../../../shared/styled-components/Loader';

function Loader() {
    return (
        <Container fluid>
            <Row className="d-flex justify-content-center pb-2">
                <StyledLoader data-testid='loader' variant="primary" animation="border" />
            </Row>
            <Row>
                <Container className="d-flex align-items-center justify-content-center"><strong>Loading...</strong></Container>
            </Row>
       </Container>   
    )
}

export default Loader;