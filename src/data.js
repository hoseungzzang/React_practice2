import { useParams } from "react-router-dom";

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
    
    const {id} =  useParams();
    let newProps = [...props.shoes];
    newProps = newProps.find(newProps=>newProps.id == id);
    console.log(newProps); 
    return (
  
        <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={'https://codingapple1.github.io/shop/shoes1.jpg'} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{newProps.id}</h4>
            <p>상품설명</p>
            <p>120000원</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
      </div> 
  
    )
  }
export {data, DetailBox};