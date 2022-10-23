import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

//css파일까지 안가도 여기서 생성할 수 있음
//로딩시간 단축할 수 있음
//props 뚫어서 동적으로 원하는 스타일 할당할 수있음
let YellowBtn = styled.button `
  background : ${props=>props.bg};
  color :  ${props=>props.bg=='blue' ? 'white' : 'black'};
  padding : 10px;

`

styled.div`
 
`

let data =[ {
    id : 0,
    title : "White and Black",
    content : "Born in France",
    price : 120000
  },

  {
    id : 1,
    title : "Red Knit",
    content : "Born in Seoul",
    price : 110000
  },

  {
    id : 2,
    title : "Grey Yordan",
    content : "Born in the States",
    price : 130000
  },

  {
    id : 3,
    title : "Grey Yordan",
    content : "Born in the Statestestest",
    price : 140000
  }];


  function DetailBox(props) {
    
    let [count,setCount] = useState(0);
    let [show,setShow] = useState(true);
    const {id} =  useParams();
    let newProps = [...props.shoes];
    newProps = newProps.find(newProps=>newProps.id == id);
    //hook mount, update 시 코드 실행
    useEffect(()=>{
      setTimeout(()=>{
        setShow(false);
      },2000)
    },[count])
    return (
        
        <div className="container">
          
         {
          show==true?<div className="alert alert-warning">
          2초이내 구매시 할인
          </div>:null
         }
          <button onClick={()=>{setCount(count+1)}}>{count}버튼</button>
        <div className="row">
          <div className="col-md-6">
            <img src={'https://codingapple1.github.io/shop/shoes'+newProps.id +'.jpg'} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{newProps.title}</h4>
            <p>{newProps.content}</p>
            <p>{newProps.price}</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
      </div> 
  
    )
  }


export {data, DetailBox};