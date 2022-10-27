import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';
import Nav from 'react-bootstrap/Nav';
import '../App.css';
//css파일까지 안가도 여기서 생성할 수 있음
//로딩시간 단축할 수 있음
//props 뚫어서 동적으로 원하는 스타일 할당할 수있음
let YellowBtn = styled.button`
  background : ${props => props.bg};
  color :  ${props => props.bg == 'blue' ? 'white' : 'black'};
  padding : 10px;

`

styled.div`
 
`

let data = [{
  id: 0,
  title: "White and Black",
  content: "Born in France",
  price: 120000
},

{
  id: 1,
  title: "Red Knit",
  content: "Born in Seoul",
  price: 110000
},

{
  id: 2,
  title: "Grey Yordan",
  content: "Born in the States",
  price: 130000
}];

function DetailBox(props) {

  let [count, setCount] = useState(0);
  let [show, setShow] = useState(true);
  let [info, setInfo] = useState(false);
  let [input, setInput] = useState('0');
  let [tap, setTap] = useState('search');
  const { id } = useParams();
  let newProps = [...props.shoes];
  newProps = newProps.find(newProps => newProps.id == id);
  let [showing, setShowing] = useState('');
  //hook mount, update 시 코드 실행
  useEffect(() => {
    setTimeout(() => {
      console.log(showing);
      setShowing('end');
    }, 100)
    setTimeout(() => {
      setShow(false);
    }, 2000)
  }, [])
  useEffect(() => {
    const regex = /^[0-9]+$/;
    regex.test(input) || input == '' ? setInfo(false) : setInfo(true);
  }, [input])
  return (

    <div className={'container start '+showing}>

      {
        show == true ? <div className="alert alert-warning">
          2초이내 구매시 할인
        </div> : null
      }
      <button onClick={() => { setCount(count + 1) }}>{count}버튼</button>
      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes' + newProps.id + '.jpg'} width="100%" />
        </div>
        {
          info == true
            ? <Alert key="danger" variant="danger">
              숫자만 입력할 수 있습니다!!
            </Alert>
            : null

        }
        <InputGroup className="mb-3" width="50%">
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </InputGroup>
        <div className="col-md-6">
          <h4 className="pt-5">{newProps.title}</h4>
          <p>{newProps.content}</p>
          <p>{newProps.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={()=>{setTap('search')}} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{setTap('detail')}} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{setTap('seller')}} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TapContent tap = {tap} shoes = {props.shoes}></TapContent>
    </div>

  )
}

function TapContent(props){
  let [fade, setFade] = useState('');
  console.log();
  useEffect(()=>{
    setTimeout(()=>{
      setFade('end');
    },100)
    
    return()=>{
      setFade('')
    }
  },props.tap)
  if(props.tap == 'search'){
    return(
     <div className={'start '+fade}>{props.shoes[0].title}</div>
    )
  }else if(props.tap == 'detail'){
    return(
      <div className={'start '+fade}>내용2</div>
    )
  }else if(props.tap == 'seller'){
    return(
      <div className={'start '+fade}>내용3</div>
    )
  }
}

export { data, DetailBox };