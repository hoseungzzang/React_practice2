import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import {plusCnt} from './../store.js';
import {userUpdate} from '../store/userSlice.js';
function Cart() {
   
    let state = useSelector((state)=> state.cartData);
    let dispatch = useDispatch();
    let [thing,setThing] = useState(state);
    return (
        <div>
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