import React from 'react';
import { Button } from 'reactstrap';
import Table from '../Table/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
class Items extends React.Component {

    constructor(props){
        super(props);
        this.state={
            
                
                order: [
        
                ],
                totalPrice:0
            
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
          return prev + cur.price * cur.quantity;
        }, 0);
        console.log(totalPrice);
        this.setState({ totalPrice });
      }; 
      updateOrderQuantity = (id, qty) => {
        console.log(id, qty);
        const newOrders = this.state.order.map(order => {
          if (order.id === id)
            return {
              id: order.id,
              name: order.name,
              quantity: qty,
              price: order.price
            };
          else return order;
        });
        //const totalPrice = this.updateTotalPrice();
        // console.log(totalPrice);
        this.setState({ order: newOrders }, () => this.updateTotalPrice());
      };



    render() {
        
       
        return (
            <div>
                <div style={{display:'flex',justifyContent:'end'}}>{
                this.props.menu.map((item, index) => {

                    return <Button color='danger' size='sm' className='bt-mn' key={index} value={item.name} onClick={(e) => this.onClickHandler(e)} >{item.name}</Button>
        
                })
    }</div>
                
                <div style={{maxWidth:'300px'}}>
                    <h5>order</h5>
                     <Table orders={this.state.order}
          updateOrderQuantity={this.updateOrderQuantity} totalPrice={this.state.totalPrice} />
</div>
            </div>
        )
    }
}
export default Items;