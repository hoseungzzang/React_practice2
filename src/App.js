/* eslint-disable */
import { useState } from 'react';
import './App.css';
import { Button, Navbar, Container, Nav, Row, Col, Card } from 'react-bootstrap';
import { data, DetailBox } from './routes/data.js';
import Cart from './routes/Cart.js';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

function App() {
  let [shoes, setShoes] = useState(data);
  let [ajaxData, setAjaxData] = useState(null);
  let [btnCount, setBtnCount] = useState(2);
  let obj = JSON.parse(localStorage.getItem('item'));
  //obj 작업 해야함. 
  return (
    <div className="App">


      <Navbar bg="light" variant="white">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Something</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <div className="row main-sell">
      <Card border="primary" style={{ width: '10%' }}>
              <Card.Header><h6>최근 본 상품</h6></Card.Header>
              <Card.Body>
                {
                  obj != null
                  ? obj.map((a,i)=>{
                    return (
                      obj[i].title
                    )
                    
                   })
                  : null
                
                }
              
              </Card.Body>
         </Card>
      <Routes>
        <Route path="/" element={
          <Container style={{width :'90%'}}>
            <Row>

              {
                shoes.map((a, i) => {
                  return (

                    <Sellbox shoes={shoes[i]}></Sellbox>
                  )

                })

              }
            </Row>
            
            <button onClick={() => {
              btnCount < 4
                ? axios.get('https://codingapple1.github.io/shop/data' + btnCount + '.json')
                  .then((data) => {
                    const arrSum = [...shoes, ...data.data];
                    setShoes(arrSum);
                  })
                  .catch(() => {
                    alert('실패~');
                  })
                  .finally(() => {
                    setBtnCount(btnCount + 1);
                  })
                : alert('데이터가 없습니다.');
            }}>정보요청

            </button>
         
          </Container>
          
        } />
      
        <Route path="/detail/:id" element={
          <DetailBox shoes={shoes}></DetailBox>
        } />
        <Route path="/Cart" element={
          <Cart></Cart>
        } />
      </Routes>
      </div>

    </div>
  );
}


function Sellbox(props) {
  const imgSrc = "https://codingapple1.github.io/shop/shoes" + (props.shoes.id + 1) + ".jpg";
  return (

    <Col >
      <img src={imgSrc} className="sell"></img>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
      <p>{props.shoes.content}</p>
    </Col>

  )
}


export default App;
