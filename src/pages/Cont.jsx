import {Container, Row, Col, Table} from "react-bootstrap";

const Cont = () => {
    return(
        <>
<Container fluid>
<Row>
    <Col>
<h1 className="mt-5 mb-3">Fixed Container</h1>   
<Table striped>
    <thead>
        <tr>
            <th></th>
            <th>Extra small &lt; 576px</th>
            <th>small &gt; 576px</th>
            <th>Medium &gt; 768px</th>
            <th>Large &gt; 992px</th>
            <th>Extra Large &gt; 1200px</th>
            <th>XXL &gt; 1400px</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>max-width</td>
            <td>100%</td>
            <td>540px</td>
            <td>720px</td>
            <td>960px</td>
            <td>1140px</td>
            <td>1320px</td>
        </tr>
    </tbody>
</Table>
    </Col>
</Row>



<Row>
    <Col lg={6} md={4} className="border">
    one
    </Col>
    <Col lg={3} md={4} className="border">
    two
    </Col>
    <Col lg={3} md={4} className="border">
    three
    </Col>
</Row>
</Container>
        </>
    )
}
export default Cont;