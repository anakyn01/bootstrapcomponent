import {Container, Row, Col} from 'react-bootstrap';

const Color = () => {
    return(
<>
<Container>
    <Row>
<Col>
<h1>text-color</h1>
<p className='text-muted'>muted</p>
<p className='text-primary'>primary</p>
<p className='text-success'>success</p>
<p className='text-info'>info</p>
<p className='text-warning'>warning</p>
<p className='text-danger'>danger</p>
<p className='text-secondary'>secondary</p>
<p className='text-dark'>dark</p>
<p className='text-body'>body</p>
<p className='text-light'>light</p>
<p className='text-white'>white</p>
</Col>
<Col>
<h1>bg-color</h1>
<div className='bg-primary p-3 text-white'>primary</div>
<div className='bg-success p-3 text-white'>success</div>
<div className='bg-info p-3 text-white'>info</div>
<div className='bg-warning p-3 text-white'>warning</div>
<div className='bg-danger p-3 text-white'>danger</div>
<div className='bg-secondary p-3 text-white'>secondary</div>
<div className='bg-dark p-3 text-white'>dark</div>
<div className='bg-light p-3 text-white'>light</div>
</Col>        
    </Row>
</Container>
</>
    );
}
export default Color;