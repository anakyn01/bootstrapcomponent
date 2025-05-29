import { Container, Row, Col, Table } from "react-bootstrap";

const TableRef = () => {
    return(
<>
<Container>
    <Row>
        <Col md={3} className="border">
        <h1 className="my-3">Basic</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>first</th>
                    <th>last</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>john</td>
                    <td>corner</td>
                </tr>
            </tbody>
        </table>
        </Col>
        <Col md={3} className="border">
        <h1 className="my-3">Striped</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>first</th>
                    <th>last</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>john</td>
                    <td>corner</td>
                </tr>
            </tbody>
        </table>
        </Col>
        <Col md={3} className="border">
        <h1 className="my-3">Bordered</h1>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>first</th>
                    <th>last</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>john</td>
                    <td>corner</td>
                </tr>
            </tbody>
        </table>
        </Col>
        <Col md={3} className="border">
        <h1 className="my-3">Hover</h1>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>first</th>
                    <th>last</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>john</td>
                    <td>corner</td>
                </tr>
            </tbody>
        </table>
        </Col>
    </Row>
    <Row>
        <Col md={3} className="border">
        <h1 className="my-3">Dark</h1>
        <table className="table table-dark">
            <thead>
                <tr>
                    <th>first</th>
                    <th>last</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>john</td>
                    <td>corner</td>
                </tr>
            </tbody>
        </table>
        </Col>
        <Col md={3} className="border">
        <h1 className="my-3">Dark Striped</h1>
         <table className="table table-dark table-striped">
            <thead>
                <tr>
                    <th>first</th>
                    <th>last</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>john</td>
                    <td>corner</td>
                </tr>
            </tbody>
        </table>
        </Col>
        <Col md={3} className="border">
        <h1 className="my-3">Hoverable Dark</h1>
         <table className="table table-dark table-hover">
            <thead>
                <tr>
                    <th>first</th>
                    <th>last</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>john</td>
                    <td>corner</td>
                </tr>
            </tbody>
        </table>
        </Col>
        <Col md={3} className="border">
        <h1 className="my-3">Borderless</h1>
         <table className="table table-dark table-borderless">
            <thead>
                <tr>
                    <th>first</th>
                    <th>last</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>john</td>
                    <td>corner</td>
                </tr>
            </tbody>
        </table>
        </Col>
    </Row>
    <Row>
        <Col>
<h1 className="my-3">그외 class</h1> 
<pre className="text-secondary">
- table-primary :
- table-success :
- table-danger :
- table-info :
- table-warning :
- table-active :
- table-secondary :
- table-light :
- table-dark : 
</pre>       
        </Col>
    </Row>
</Container>
</>
    );
}
export default TableRef;