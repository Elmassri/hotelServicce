import React from 'react'


import { Table} from 'reactstrap';
import Input from '../test/Input'


import 'bootstrap/dist/css/bootstrap.min.css';


export default class TableForm extends React.Component{

  constructor(props){
    super(props);
    this.state={
        order:[],
        
    }

  }
  render()




{

        
        
  return (

    <div className="table_component_main_body">
     
    

      <Table responsive  title="Order">
          
        <thead>
          <tr>
           {/*  <th>#</th> */}
           <th>Order Name</th>
            <th>Order price</th>
            <th>Quantity</th>
            
            
          </tr>
        </thead>
        <tbody>
        {this.props.orders.map((item,index)=>
             {
            return <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                  <td><Input item={item} updateOrderQuantity={this.props.updateOrderQuantity}></Input></td>
              
              
            </tr>;
          }
           )}
         
              
        </tbody>
       <tfoot>
           <tr>
               <td>Total</td>
               <td>{this.props.totalPrice}</td>
           </tr>
       </tfoot>
      </Table>
      
      </div>
  );
}}
