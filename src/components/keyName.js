import React  from 'react'
import { Table } from 'react-bootstrap'

const keyName = ({data}) => {
    let exchange = data.rates;
    let point = [];
    let i = 0;
    for(let key in exchange) { 
        point[i] = {
            name : key
        };
        i++;
    }

    return (
        <Table>
            <tbody style={{color:"#ffffff"}}>
                {
                    point.map((element) => (
                        <tr key={element.name}><td>{element.name}</td></tr>
                    ))
                }
            </tbody>
        </Table>
    )
}

export default keyName;