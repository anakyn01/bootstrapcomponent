import { Container, Row, Col } from "react-bootstrap";

const Flex2 = () => {
    return(
        <>
<Container fluid>
<Row>
<Col md={4}>
<h1>align-items-start</h1>
<div className="d-flex align-items-start bg-light" style={{height:"150px"}}>
<div className="p-2 border">학원이 Fun Fun 하여</div> 
<div className="p-2 border">apple도 안하고</div>     
<div className="p-2 border">내가 sorry</div>  
</div>
</Col>
<Col md={4}>
<h1>align-items-end</h1>
<div className="d-flex align-items-end bg-light" style={{height:"150px"}}>
<div className="p-2 border">학원이 Fun Fun 하여</div> 
<div className="p-2 border">apple도 안하고</div>     
<div className="p-2 border">내가 sorry</div>  
</div>
</Col>
<Col md={4}>
<h1>align-items-center</h1>
<div className="d-flex align-items-center bg-light" style={{height:"150px"}}>
<div className="p-2 border">학원이 Fun Fun 하여</div> 
<div className="p-2 border">apple도 안하고</div>     
<div className="p-2 border">내가 sorry</div>  
</div>
</Col>
</Row>

<Row>
    <Col md={4}>
    <h1>align-items-baseline</h1>
<div className="d-flex align-items-baseline bg-light" style={{height:"150px"}}>
<div className="p-2 border">학원이 Fun Fun 하여</div> 
<div className="p-2 border">apple도 안하고</div>     
<div className="p-2 border">내가 sorry</div>  
</div>
    </Col>
    <Col md={4}>
    <h1>align-items-stretch</h1>
<div className="d-flex align-items-stretch bg-light" style={{height:"150px"}}>
<div className="p-2 border">학원이 Fun Fun 하여</div> 
<div className="p-2 border">apple도 안하고</div>     
<div className="p-2 border">내가 sorry</div>  
</div>
    </Col>
    <Col md={4}>
<h1>align-self-start</h1>
<div className="d-flex bg-light" style={{height:"150px"}}>
<div className="p-2 border align-self-start">학원이 Fun Fun 하여</div> 
<div className="p-2 border">apple도 안하고</div>     
<div className="p-2 border">내가 sorry</div>  
</div>
    </Col>
</Row>

<Row>
    <Col md={4}>
    <h1>align-self-end</h1>
<div className="d-flex bg-light" style={{height:"150px"}}>
<div className="p-2 border">학원이 Fun Fun 하여</div> 
<div className="p-2 border align-self-end">apple도 안하고</div>     
<div className="p-2 border">내가 sorry</div>  
</div>
    </Col>
    <Col md={4}>
    <h1>align-self-center</h1>
<div className="d-flex bg-light" style={{height:"150px"}}>
<div className="p-2 border">학원이 Fun Fun 하여</div> 
<div className="p-2 border align-self-center">apple도 안하고</div>     
<div className="p-2 border">내가 sorry</div>  
</div>
    </Col>
    <Col md={4}>
<h1>align-self-baseline</h1>
<div className="d-flex bg-light" style={{height:"150px"}}>
<div className="p-2 border align-self-baseline">학원이 Fun Fun 하여</div> 
<div className="p-2 border">apple도 안하고</div>     
<div className="p-2 border">내가 sorry</div>  
</div>
    </Col>
</Row>
<Row>
    <Col md={12}>
    <h1>align-self-stretch</h1>
<div className="d-flex bg-light" style={{height:"150px"}}>
<div className="p-2 border align-self-stretch">학원이 Fun Fun 하여</div> 
<div className="p-2 border">apple도 안하고</div>     
<div className="p-2 border">내가 sorry</div>  
</div>
    </Col>
</Row>

<Row>
<Col md={4}></Col>
<Col md={4}></Col>
<Col md={4}></Col>
</Row>
<Row>
<Col md={4}>
<h1>Auto Margins</h1>
<pre>
- ms-auto : 항목을 오른쪽으로 밀기
- me-auto : 항목을 왼쪽으로 밀기
</pre>
<div className="d-flex bg-secondary mb-3">
    <div className="p-2 ms-auto bg-info">
    one
    </div>
    <div className="p-2 bg-warning">
    two
    </div>
    <div className="p-2 bg-primary">
    three
    </div>
</div>

<div className="d-flex bg-secondary mb-3">
    <div className="p-2 bg-info">
    one
    </div>
    <div className="p-2 bg-warning">
    two
    </div>
    <div className="p-2 me-auto bg-primary">
    three
    </div>
</div>
</Col>
<Col md={4}>
<h1>flex-wrap</h1>
<p><code>.flex-wrap:</code></p>
  <div class="d-flex flex-wrap bg-light">
    <div class="p-2 border">Flex item 1</div>
    <div class="p-2 border">Flex item 2</div>
    <div class="p-2 border">Flex item 3</div>
    <div class="p-2 border">Flex item 4</div>
    <div class="p-2 border">Flex item 5</div>
    <div class="p-2 border">Flex item 6</div>
    <div class="p-2 border">Flex item 7</div>
    <div class="p-2 border">Flex item 8</div>
    <div class="p-2 border">Flex item 9</div>
    <div class="p-2 border">Flex item 10</div>
    <div class="p-2 border">Flex item 11</div>
    <div class="p-2 border">Flex item 12</div>
    <div class="p-2 border">Flex item 13 </div>
    <div class="p-2 border">Flex item 14</div>
    <div class="p-2 border">Flex item 15</div>
    <div class="p-2 border">Flex item 16</div>
    <div class="p-2 border">Flex item 17</div>
    <div class="p-2 border">Flex item 18</div>
    <div class="p-2 border">Flex item 19</div>
    <div class="p-2 border">Flex item 20</div>
    <div class="p-2 border">Flex item 21</div>
    <div class="p-2 border">Flex item 22</div>
    <div class="p-2 border">Flex item 23</div>
    <div class="p-2 border">Flex item 24</div>
    <div class="p-2 border">Flex item 25</div>
  </div>
  <br></br>
</Col>
<Col md={4}>
<h1>flex-wrap-reverse</h1>
<p><code>.flex-wrap-reverse:</code></p>
  <div class="d-flex flex-wrap-reverse bg-light">
    <div class="p-2 border">Flex item 1</div>
    <div class="p-2 border">Flex item 2</div>
    <div class="p-2 border">Flex item 3</div>
    <div class="p-2 border">Flex item 4</div>
    <div class="p-2 border">Flex item 5</div>
    <div class="p-2 border">Flex item 6</div>
    <div class="p-2 border">Flex item 7</div>
    <div class="p-2 border">Flex item 8</div>
    <div class="p-2 border">Flex item 9</div>
    <div class="p-2 border">Flex item 10</div>
    <div class="p-2 border">Flex item 11</div>
    <div class="p-2 border">Flex item 12</div>
    <div class="p-2 border">Flex item 13 </div>
    <div class="p-2 border">Flex item 14</div>
    <div class="p-2 border">Flex item 15</div>
    <div class="p-2 border">Flex item 16</div>
    <div class="p-2 border">Flex item 17</div>
    <div class="p-2 border">Flex item 18</div>
    <div class="p-2 border">Flex item 19</div>
    <div class="p-2 border">Flex item 20</div>
    <div class="p-2 border">Flex item 21</div>
    <div class="p-2 border">Flex item 22</div>
    <div class="p-2 border">Flex item 23</div>
    <div class="p-2 border">Flex item 24</div>
    <div class="p-2 border">Flex item 25</div>
  </div>
  <br></br>
</Col>
</Row>

<Row>
<Col md={4}>
<h1>flex-nowrap</h1>
<p><code>.flex-nowrap:</code></p>
  <div class="d-flex flex-nowrap bg-light">
    <div class="p-2 border">Flex item 1</div>
    <div class="p-2 border">Flex item 2</div>
    <div class="p-2 border">Flex item 3</div>
    <div class="p-2 border">Flex item 4</div>
    <div class="p-2 border">Flex item 5</div>
    <div class="p-2 border">Flex item 6</div>
    <div class="p-2 border">Flex item 7</div>
    <div class="p-2 border">Flex item 8</div>
    <div class="p-2 border">Flex item 9</div>
    <div class="p-2 border">Flex item 10</div>
    <div class="p-2 border">Flex item 11</div>
    <div class="p-2 border">Flex item 12</div>
    <div class="p-2 border">Flex item 13 </div>
    <div class="p-2 border">Flex item 14</div>
    <div class="p-2 border">Flex item 15</div>
    <div class="p-2 border">Flex item 16</div>
    <div class="p-2 border">Flex item 17</div>
    <div class="p-2 border">Flex item 18</div>
    <div class="p-2 border">Flex item 19</div>
    <div class="p-2 border">Flex item 20</div>
    <div class="p-2 border">Flex item 21</div>
    <div class="p-2 border">Flex item 22</div>
    <div class="p-2 border">Flex item 23</div>
    <div class="p-2 border">Flex item 24</div>
    <div class="p-2 border">Flex item 25</div>
    <div class="p-2 border">Flex item 26</div>
    <div class="p-2 border">Flex item 27</div>
    <div class="p-2 border">Flex item 28</div>
    <div class="p-2 border">Flex item 29</div>
    <div class="p-2 border">Flex item 30</div>
    <div class="p-2 border">Flex item 31</div>
    <div class="p-2 border">Flex item 32</div>
    <div class="p-2 border">Flex item 33</div>
    <div class="p-2 border">Flex item 34</div>
    <div class="p-2 border">Flex item 35</div>
  </div>
  <br></br>
</Col>
<Col md={4}>
<h1>align-content-start</h1>
<div class="d-flex flex-wrap align-content-start bg-light" style={{height:"300px"}}>
    <div class="p-2 border">Flex item 1</div>
    <div class="p-2 border">Flex item 2</div>
    <div class="p-2 border">Flex item 3</div>
    <div class="p-2 border">Flex item 4</div>
    <div class="p-2 border">Flex item 5</div>
    <div class="p-2 border">Flex item 6</div>
    <div class="p-2 border">Flex item 7</div>
    <div class="p-2 border">Flex item 8</div>
    <div class="p-2 border">Flex item 9</div>
    <div class="p-2 border">Flex item 10</div>
    <div class="p-2 border">Flex item 11</div>
    <div class="p-2 border">Flex item 12</div>
    <div class="p-2 border">Flex item 13 </div>
    <div class="p-2 border">Flex item 14</div>
    <div class="p-2 border">Flex item 15</div>
    <div class="p-2 border">Flex item 16</div>
    <div class="p-2 border">Flex item 17</div>
    <div class="p-2 border">Flex item 18</div>
    <div class="p-2 border">Flex item 19</div>
    <div class="p-2 border">Flex item 20</div>
    <div class="p-2 border">Flex item 21</div>
    <div class="p-2 border">Flex item 22</div>
    <div class="p-2 border">Flex item 23</div>
    <div class="p-2 border">Flex item 24</div>
    <div class="p-2 border">Flex item 25</div>
  </div>
  <br></br>
</Col>
<Col md={4}>
<h1>align-content-end</h1>
<div class="d-flex flex-wrap align-content-end bg-light" style={{height:"300px"}}>
    <div class="p-2 border">Flex item 1</div>
    <div class="p-2 border">Flex item 2</div>
    <div class="p-2 border">Flex item 3</div>
    <div class="p-2 border">Flex item 4</div>
    <div class="p-2 border">Flex item 5</div>
    <div class="p-2 border">Flex item 6</div>
    <div class="p-2 border">Flex item 7</div>
    <div class="p-2 border">Flex item 8</div>
    <div class="p-2 border">Flex item 9</div>
    <div class="p-2 border">Flex item 10</div>
    <div class="p-2 border">Flex item 11</div>
    <div class="p-2 border">Flex item 12</div>
    <div class="p-2 border">Flex item 13 </div>
    <div class="p-2 border">Flex item 14</div>
    <div class="p-2 border">Flex item 15</div>
    <div class="p-2 border">Flex item 16</div>
    <div class="p-2 border">Flex item 17</div>
    <div class="p-2 border">Flex item 18</div>
    <div class="p-2 border">Flex item 19</div>
    <div class="p-2 border">Flex item 20</div>
    <div class="p-2 border">Flex item 21</div>
    <div class="p-2 border">Flex item 22</div>
    <div class="p-2 border">Flex item 23</div>
    <div class="p-2 border">Flex item 24</div>
    <div class="p-2 border">Flex item 25</div>
  </div>
  <br></br>
</Col>
</Row>

<Row>
<Col md={4}>
<h1>align-content-center</h1>
<div class="d-flex flex-wrap align-content-center bg-light" style={{height:"300px"}}>
    <div class="p-2 border">Flex item 1</div>
    <div class="p-2 border">Flex item 2</div>
    <div class="p-2 border">Flex item 3</div>
    <div class="p-2 border">Flex item 4</div>
    <div class="p-2 border">Flex item 5</div>
    <div class="p-2 border">Flex item 6</div>
    <div class="p-2 border">Flex item 7</div>
    <div class="p-2 border">Flex item 8</div>
    <div class="p-2 border">Flex item 9</div>
    <div class="p-2 border">Flex item 10</div>
    <div class="p-2 border">Flex item 11</div>
    <div class="p-2 border">Flex item 12</div>
    <div class="p-2 border">Flex item 13 </div>
    <div class="p-2 border">Flex item 14</div>
    <div class="p-2 border">Flex item 15</div>
    <div class="p-2 border">Flex item 16</div>
    <div class="p-2 border">Flex item 17</div>
    <div class="p-2 border">Flex item 18</div>
    <div class="p-2 border">Flex item 19</div>
    <div class="p-2 border">Flex item 20</div>
    <div class="p-2 border">Flex item 21</div>
    <div class="p-2 border">Flex item 22</div>
    <div class="p-2 border">Flex item 23</div>
    <div class="p-2 border">Flex item 24</div>
    <div class="p-2 border">Flex item 25</div>
  </div>
  <br></br>
</Col>
<Col md={4}>
<h1>align-content-around</h1>
<div class="d-flex flex-wrap align-content-around bg-light" style={{height:"300px"}}>
    <div class="p-2 border">Flex item 1</div>
    <div class="p-2 border">Flex item 2</div>
    <div class="p-2 border">Flex item 3</div>
    <div class="p-2 border">Flex item 4</div>
    <div class="p-2 border">Flex item 5</div>
    <div class="p-2 border">Flex item 6</div>
    <div class="p-2 border">Flex item 7</div>
    <div class="p-2 border">Flex item 8</div>
    <div class="p-2 border">Flex item 9</div>
    <div class="p-2 border">Flex item 10</div>
    <div class="p-2 border">Flex item 11</div>
    <div class="p-2 border">Flex item 12</div>
    <div class="p-2 border">Flex item 13 </div>
    <div class="p-2 border">Flex item 14</div>
    <div class="p-2 border">Flex item 15</div>
    <div class="p-2 border">Flex item 16</div>
    <div class="p-2 border">Flex item 17</div>
    <div class="p-2 border">Flex item 18</div>
    <div class="p-2 border">Flex item 19</div>
    <div class="p-2 border">Flex item 20</div>
    <div class="p-2 border">Flex item 21</div>
    <div class="p-2 border">Flex item 22</div>
    <div class="p-2 border">Flex item 23</div>
    <div class="p-2 border">Flex item 24</div>
    <div class="p-2 border">Flex item 25</div>
  </div>
  <br></br>
</Col>
<Col md={4}>
<h1>align-content-stretch</h1>
<div class="d-flex flex-wrap align-content-stretch bg-light" style={{height:"300px"}}>
    <div class="p-2 border">Flex item 1</div>
    <div class="p-2 border">Flex item 2</div>
    <div class="p-2 border">Flex item 3</div>
    <div class="p-2 border">Flex item 4</div>
    <div class="p-2 border">Flex item 5</div>
    <div class="p-2 border">Flex item 6</div>
    <div class="p-2 border">Flex item 7</div>
    <div class="p-2 border">Flex item 8</div>
    <div class="p-2 border">Flex item 9</div>
    <div class="p-2 border">Flex item 10</div>
    <div class="p-2 border">Flex item 11</div>
    <div class="p-2 border">Flex item 12</div>
    <div class="p-2 border">Flex item 13 </div>
    <div class="p-2 border">Flex item 14</div>
    <div class="p-2 border">Flex item 15</div>
    <div class="p-2 border">Flex item 16</div>
    <div class="p-2 border">Flex item 17</div>
    <div class="p-2 border">Flex item 18</div>
    <div class="p-2 border">Flex item 19</div>
    <div class="p-2 border">Flex item 20</div>
    <div class="p-2 border">Flex item 21</div>
    <div class="p-2 border">Flex item 22</div>
    <div class="p-2 border">Flex item 23</div>
    <div class="p-2 border">Flex item 24</div>
    <div class="p-2 border">Flex item 25</div>
  </div>
  <br></br>
</Col>
</Row>

<Row>
<Col md={4}>
</Col>
<Col md={4}>
</Col>
<Col md={4}>
</Col>
</Row>

<Row>
<Col md={4}>
</Col>
<Col md={4}>
</Col>
<Col md={4}>
</Col>
</Row>

<Row>
<Col md={4}>
</Col>
<Col md={4}>
</Col>
<Col md={4}>
</Col>
</Row>

<Row>
<Col md={4}>
</Col>
<Col md={4}>
</Col>
<Col md={4}>
</Col>
</Row>

<Row>
<Col md={4}>
</Col>
<Col md={4}>
</Col>
<Col md={4}>
</Col>
</Row>

<Row>
<Col md={4}>
</Col>
<Col md={4}>
</Col>
<Col md={4}>
</Col>
</Row>

<Row>
<Col md={4}>
</Col>
<Col md={4}>
</Col>
<Col md={4}>
</Col>
</Row>
</Container>        
        </>
    );
}

export default Flex2;