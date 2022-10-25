/* eslint-disable */
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav, Row, Col  } from 'react-bootstrap';
import {data,DetailBox} from './data.js';
import {Routes, Route, Link} from 'react-router-dom';
import axios from 'axios';

function App() {
  let [shoes] = useState(data);
  let [ajaxData,setAjaxData] = useState(null);

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
      <Routes>
        <Route path="/" element={
          <Container>
          <Row>
  
            {
              shoes.map((a, i) => {
                return (
  
                  <Sellbox shoes={shoes[i]}></Sellbox>
                )
  
              })

            }
            </Row>
            <Row>
            {
              
              ajaxData!=null
              ?ajaxData.map((a,i)=>{
                return(
                  
                <Sellbox shoes={ajaxData[i]}></Sellbox>
                )
              })
              :null
            }
          </Row>
            <button onClick={()=>{
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((data)=>{setAjaxData(data.data); console.log(ajaxData);})
              .catch(()=>{
                alert('실패~');
              })
            }}>정보요청

            </button>
        </Container> 
        } />
        <Route path="/detail/:id"element={
            <DetailBox shoes = {shoes}></DetailBox>
          }/>
      </Routes>

      
    </div>
  );
}


function Sellbox(props) {
  const imgSrc = "https://codingapple1.github.io/shop/shoes" + (props.shoes.id +1) + ".jpg";
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
