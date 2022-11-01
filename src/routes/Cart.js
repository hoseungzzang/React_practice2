import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { memo, useState } from 'react';
import {plusCnt} from './../store.js';
import {userUpdate} from '../store/userSlice.js';

let Child = memo(function(){
    console.log('재랜더링댐');
    return <div>자식임</div>
})


function Cart() {
   
    let state = useSelector((state)=> state.cartData);
    let dispatch = useDispatch();
    let [count, setCount] = useState(0);
    return (
        <div>
            <Child count = {count}></Child>
            <button onClick={ ()=>{setCount(count+1)}}>++</button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Count</th>
                        <th>Button</th>
                    </tr>
                </thead>
                <tbody>
                {
                    state.map((a,i)=>{
                        return(
                        <tr key={i}>
                            <td>{state[i].id}</td>
                            <td>{state[i].name}</td>
                            <td>{state[i].count}</td>
                            <td><button onClick={()=>{
                               dispatch(plusCnt(state[i].id)) 
                            }}>+</button></td>
                        </tr>

                        )
                    })
                }
                </tbody>
                   
                
            </Table>
        </div>
    )
}

export default Cart