import {Table, Container, Row, Col} from 'react-bootstrap';

const Tb = () => {
    return(
<>
<Container>
    <Row>
        <Col>
<Table striped bordered hover variant='dark' responsive>
    <caption style={{display:"none"}}>우리동내 독거노인 </caption>
    {/*<colgroup>
    <col style={{width:"10%"}}/>
    <col style={{width:"10%"}}/>
    <col style={{width:"70%"}}/>
    <col style={{width:"10%"}}/>
    </colgroup>*/}
    <thead>
        <tr>
<th>#</th><th>first</th><th>last</th><th>user</th>
<th>#</th><th>first</th><th>last</th><th>user</th>
<th>#</th><th>first</th><th>last</th><th>user</th>
<th>#</th><th>first</th><th>last</th><th>user</th>
<th>#</th><th>first</th><th>last</th><th>user</th>
        </tr>
    </thead>
    <tbody>
        <tr>
<td>1</td><td>존</td><td>코너</td><td>사라코너</td>
<td>1</td><td>존</td><td>코너</td><td>사라코너</td>
<td>1</td><td>존</td><td>코너</td><td>사라코너</td>
<td>1</td><td>존</td><td>코너</td><td>사라코너</td>
<td>1</td><td>존</td><td>코너</td><td>사라코너</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
<th>#</th><th>first</th><th>last</th><th>user</th>
<th>#</th><th>first</th><th>last</th><th>user</th>
<th>#</th><th>first</th><th>last</th><th>user</th>
<th>#</th><th>first</th><th>last</th><th>user</th>
<th>#</th><th>first</th><th>last</th><th>user</th>
        </tr>
    </tfoot>
</Table>
        </Col>
    </Row>
</Container>
</>
    )
}

export default Tb;