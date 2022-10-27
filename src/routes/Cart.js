import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useState } from 'react';
function Cart() {
   
    let state = useSelector((state)=> state.cartData)
    let [thing,setThing] = useState(state);
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                {
                    thing.map((a,i)=>{
                        return(
                        <tr>
                            <td>{thing[i].id}</td>
                            <td>{thing[i].name}</td>
                            <td>{thing[i].count}</td>
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