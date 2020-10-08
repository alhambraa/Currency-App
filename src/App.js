import React, { useEffect } from 'react';
// import logo from './logo.svg';
import { connect } from 'react-redux';
import { Container,Row,Col,Table } from 'react-bootstrap';
import KeyName from './components/keyName';
import ValueExchange from './components/valueExchange';
import getExchangeAction from './action/getExchangeAction';
import getBuyAction from './action/getBuyAction';
import getSellAction from './action/getSellAction';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = props => {
  useEffect(() => {
    props.getExchange();
    props.getBuy();
    props.getSell();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Container style={{backgroundColor:"#f25f24"}}>
        <Row>
            <Col>
              <h2 style={{textAlign:"center",color:"#ffffff"}}>CURRENCY DATA</h2>
              <br></br>
              <Table style={{backgroundColor:"#f25f24"}}>
                  <thead>
                      <tr style={{textAlign:"center",color:"#ffffff"}}>
                          <th><b><h4>CURRENCY</h4></b></th>
                          <th><b><h4>WE BUY</h4></b></th>
                          <th><b><h4>EXCHANGE RATE</h4></b></th>
                          <th><b><h4>WE SELL</h4></b></th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr style={{textAlign:"center"}}>
                          <td><KeyName data={props.buy}/></td>
                          <td><ValueExchange data={props.buy}/></td>
                          <td><ValueExchange data={props.exchange}/></td>
                          <td><ValueExchange data={props.sell}/></td>
                      </tr>
                  </tbody>
              </Table>
              
              <div style={{width:"100%",textAlign:"center",color:"#ffffff"}}>
                  Base Currency Is IDR <br/> 
                  As For The API <a href="https://api.exchangeratesapi.io/">https://api.exchangeratesapi.io/</a> is used
              </div>
            </Col>
          </Row>
        </Container>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    exchange : state.exchange,
    buy : state.buy,
    sell : state.sell,
  }
}

// Menggunakan state method yang ada di Redux ke dalam komponen/pages ini
const mapDispatchToProps = (dispatch) => {
  return {
    getExchange: () => dispatch(getExchangeAction()),
    getBuy: () => dispatch(getBuyAction()),
    getSell: () => dispatch(getSellAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
