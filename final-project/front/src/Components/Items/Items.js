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
                totalItem : 0
                
        }
    }

        

    onClickHandler(e) {
        e.preventDefault();
        const categories = [...this.props.menu];
        let item = categories.find(item => item.name === e.target.value);
        let index = categories.indexOf(item);
        if(this.state.order.name === item.name){
          this.setState({totalItem:this.state.totalItem + 1})
        }
        this.setState({order:[...this.state.order, categories[index]],totalPrice:this.state.totalPrice+item.price });

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
         


           <div className='itemDisplay'>

        
        
                  {
                this.props.menu.map((item, index) => {
                      
                return<div className='items' key={index} value={item.name} onClick={(e) => this.onClickHandler(e)}>
                      <img className='imgItem' src="https://toppng.com/uploads/preview/pepsi-11528331449u5hyzmfwnd.png"/>
                      <h6 className='itemName'>{item.name}</h6>
                     <h6 className='itemName'>{item.price}</h6>
                     
                    
                    </div>
                })
    }
    </div>
        )
      }
      }
    

export default Items;