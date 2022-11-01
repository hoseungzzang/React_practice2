/* eslint-disable */
import { useState, lazy,Suspense} from 'react';
import './App.css';
import { Button, Navbar, Container, Nav, Row, Col, Card } from 'react-bootstrap';
import { data, DetailBox } from './routes/data.js';
//import Cart from './routes/Cart.js';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch,useSelector} from 'react-redux'
import {getItem} from './store.js';
import { useQuery } from 'react-query';
const Cart = lazy(()=> import('./routes/Cart.js'));
function App() {
  let [shoes, setShoes] = useState(data);
  let [ajaxData, setAjaxData] = useState(null);
  let [btnCount, setBtnCount] = useState(2);
  let dispatch = useDispatch();
  let state = useSelector((state)=> state.search);
  
  let result = useQuery('ajaxData', ()=>
    axios.get('https://codingapple1.github.io/userdata.json')
    .then((a)=>{ return a.data }),
    {
      staleTime : 2000
    }
  )

  return (
    <div className="App">


      <Navbar bg="light" variant="white">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Something</Nav.Link>
          </Nav>
          <Nav className="ms-auto">{result.isLoading ? '로딩중' : result.data.name}</Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <div className="row main-sell">
      <Card border="primary" style={{ width: '10%' }}>
              <Card.Header><h6>최근 본 상품</h6></Card.Header>
              <Card.Body>
                {
                  state!=null
                  ?state.map((a,i)=>{
                    return(
                      <div>{state[i].title}</div>
                      
                    )
                  })
                  : ''
                  
                
                }
                
              </Card.Body>
         </Card>
         <Suspense fallback={<div>로딩중</div>}>
      <Routes>
        <Route path="/" element={
          <Container style={{width :'90%'}}>
            <Row >

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
      </Suspense>
      </div>

    </div>
  );
}


function Sellbox(props) {
  const imgSrc = "https://codingapple1.github.io/shop/shoes" + (props.shoes.id + 1) + ".jpg";
  return (

    <Col >
      <Link to={'/detail/'+(props.shoes.id+1)}><img src={imgSrc} className="sell"></img></Link>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
      <p>{props.shoes.content}</p>
    </Col>

  )
}


export default App;
