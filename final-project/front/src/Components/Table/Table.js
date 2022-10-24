import React from 'react'


import { Table} from 'reactstrap';
import Input from '../test/Input'


import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import './Table.css'

export default class TableForm extends React.Component{

  constructor(props){
    super(props);
    this.state={
        order:[],
        
    }

  }
  OrderCreate = async () => {
    try {
      for(let i=0;i<this.props.orders.length;i++){
      const response = await fetch(`//localhost:5000/list/create?item_name=${this.props.orders[i].name}&orders_id=1`);
      const result = await response.json();
      console.log(result);

      if (result.success) {
       
      
      } else {
        this.setState({ error: result.message });
        alert('error')
      }
      }
      
      alert('done')
      
    } catch (err) {
      this.setState({ error: err });
    }
  };
  
  render()




{

        
        
  return (

    <div className="table_component_main_body" >
     
    

      <Table responsive  title="Order">
          
        <thead>
          <tr>
           {/*  <th>#</th> */}
           <th>Order Name</th>
            <th>Order price</th>
            <th>Order Qty</th>
            <th></th>
            
            
          </tr>
        </thead>
        <tbody>
        {this.props.orders.map((item,index)=>
             {
            return <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td><Button type='delete' color='danger'>delete</Button></td>
              
            </tr>;
          }
           )}
         
              
        </tbody>
       <tfoot>
           <tr>
               
           </tr>
       </tfoot>
       
      </Table>
      <h5>Total:</h5>
               <h5>{this.props.totalPrice}</h5>
               <Button  color='success' onClick={this.OrderCreate}>order</Button>
      </div>
  );
}}
