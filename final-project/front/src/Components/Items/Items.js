import React from 'react';
import { Button,Table } from 'reactstrap';
import TableForm from '../Table/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Item.css'
class Items extends React.Component {

    constructor(props){
        super(props);
        this.state={
            
                
                order: [
        
                ],
                totalPrice:0,
                
        }
    }

        

    onClickHandler(e) {
        e.preventDefault();
        const categories = [...this.props.menu];
        let item = categories.find(item => item.name === e.target.value);
        let index = categories.indexOf(item);
        
        this.setState({order:[...this.state.order, categories[index]],totalPrice:this.state.totalPrice+item.price});

    }
    
    updateTotalPrice = () => {
        const totalPrice = this.state.order.reduce(function(prev, cur) {
          return prev + cur.price ;
        }, 0);
        console.log(totalPrice);
        this.setState({ totalPrice });
      }; 
      updateOrderQuantity = (id, qty) => {
        console.log(id, qty);
        const newOrders = this.state.order.map(order => {
          if (order.id === id)
            return {

              id: id,
              name: order.name,
              quantity: qty,
              price: order.price
            };
          else return order;
        });
       /*  //const totalPrice = this.updateTotalPrice();
        // console.log(totalPrice); */
        this.setState({ order: newOrders,qty:this.state.order.quantity}, () => this.updateTotalPrice());
      };
            
             


    render() {
        
       
       
       
       
        return (
         


            <div className='item'>
               
                <Table>
                <thead>
          <tr>
           
           <th>Item Name</th>
            <th>Unit Price</th>
            <th></th>
            
            
          </tr>
        </thead>
        
        <tbody className='tt1'>
                  {
                this.props.menu.map((item, index) => {
                      
                return<tr key={item.index}>
                      <td>{item.name}</td>
                     <td>{item.price}</td>
                      
                    <td><Button color='danger' size='lr'  className='bt-mn' key={index} value={item.name} onClick={(e) => this.onClickHandler(e)} >ADD</Button></td>
                    </tr>
                })
    }
    </tbody>
    </Table>
           <div className='image2'>

           </div>
                
                <div className='orderT' >
                    <h5 style={{color:'black'}} >Order</h5>
                     <TableForm style={{width:'200px'}} orders={this.state.order} 
          updateOrderQuantity={this.updateOrderQuantity} totalPrice={this.state.totalPrice} qty={this.state.qty} />
</div>
            </div>
            
        )
    }
    
}

export default Items;