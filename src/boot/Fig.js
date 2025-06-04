import {Figure, Container, Row, Col} from 'react-bootstrap';

const Fig = () => {
    return(
        <Container>
            <Row>
                <Col>
<Figure>
    <Figure.Image
    width={171} height={180} alt="171x180"
    src="img/paris.jpg"
    />
    <Figure.Caption>
    이미지만 넣기 모호해서..
    </Figure.Caption>
</Figure>                
                </Col>
            </Row>
        </Container>
    )
}
export default Fig;