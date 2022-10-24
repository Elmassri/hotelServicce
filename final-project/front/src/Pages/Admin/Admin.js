import React from 'react'
import  Menu  from '../../Components/Menu/Menu'
import Header from '../../Components/Header/Header'
import AddCat from '../../Components/AddCat/AddCat'
import AddItem from '../../Components/AddItem/AddItem'
import './Admin.css'
import { Link, Button, Switch } from '@material-ui/core'
import { Router, Route } from 'react-router-dom'
class Admin extends React.Component{

        constructor(props){
            super(props);
            this.state=[{
                ListItem:[],
                ListCat:[],
            }]
        }
        componentDidMount = async () => {
            try {
              const response = await fetch(`//localhost:5000/cat`);
              const result = await response.json();
        
              console.log(result);
              if (result.success) {
                this.setState({ ListCat: result.result, error: "" });
              } else {
                this.setState({ error: result.message });
              }
            } catch (err) {
              this.setState({ error: err });
            }
           this.componentDidMountItems();
          };
          componentDidMountItems = async () => {
            try {
              const response = await fetch(`//localhost:5000/itemsAll`);
              const result = await response.json();
        
              console.log(result);
              if (result.success) {
                this.setState({ ListItem: result.result, error: "" });
              } else {
                this.setState({ error: result.message });
              }
            } catch (err) {
              this.setState({ error: err });
            }
          };
          sendCategory = async (name,api) =>{
            try {
              const response = await fetch(`http://localhost:5000/categories/create?categories_name=${name}`);
              const result = await response.json();
        
              console.log(result);
              if (result.success) {
                this.setState({ ListCat: [...this.state.ListCat,result,result], error: ""});
                
              } else {
                this.setState({ error: result.message });
              }
            } catch (err) {
              this.setState({ error: err });
            }
          }
          addItem = async (name,category_id,price) =>{
            try {
              const response = await fetch(`http://localhost:5000/items/create?name=${name}&categories_id=${category_id}&price=${price}`);
              const result = await response.json();
        
              console.log(result);
              if (result.success) {
                this.setState({ ListCat: [...this.state.ListCat,result,result], error: ""});
                
              } else {
                this.setState({ error: result.message });
              }
            } catch (err) {
              this.setState({ error: err });
            }
          }
          deleteCategory = async (id) =>{
            try {
              const response = await fetch(`http://localhost:5000/categories/delete?id=${id}`);
              const result = await response.json();
        
              console.log(result);
              if (result.success) {
                this.setState({ ListCat: [...this.state.ListCat,result,result], error: ""});
                
              } else {
                this.setState({ error: result.message });
              }
            } catch (err) {
              this.setState({ error: err });
            }
          }
          updateCategory = async (id,name,api) =>{
            try {
              const response = await fetch(`http://localhost:5000/categories/update?id=${id}&name=${name}`);
              const result = await response.json();
        
              console.log(result);
              if (result.success) {
                this.setState({ ListCat: [...this.state.ListCat,result,result], error: ""});
                
              } else {
                this.setState({ error: result.message });
              }
            } catch (err) {
              this.setState({ error: err });
            }
          }
    updateItem = async (id,name,categories_id,price) =>{
        try {
            const response = await fetch(`http://localhost:5000/items/update?id=${id}&name=${name}&categories_id=${categories_id}&price=${price}`);
            const result = await response.json();

            console.log(result);
            if (result.success) {
                this.setState({ ListItem: [...this.state.ListItem,result,result], error: ""});

            } else {
                this.setState({ error: result.message });
            }
        } catch (err) {
            this.setState({ error: err });
        }
    }
    deleteItem = async (id) =>{
        try {
            const response = await fetch(`http://localhost:5000/items/delete?id=${id}`);
            const result = await response.json();

            console.log(result);
            if (result.success) {
                this.setState({ ListItem: [...this.state.ListItem,result,result], error: ""});

            } else {
                this.setState({ error: result.message });
            }
        } catch (err) {
            this.setState({ error: err });
        }
    }
    render(){
        return(
                <div>
                    <Header></Header>

                       <div className='AdminA'>
                         
                          <AddCat id="catTable" categories={this.state.ListCat} onAdd={this.sendCategory} onDelete={this.deleteCategory} onUpdate={this.updateCategory}></AddCat>
                        
                          <br></br>
                        <AddItem id="ItemTable" items={this.state.ListItem}  onAdd={this.addItem} onDelete={this.deleteItem} onUpdate={this.updateItem}></AddItem>
                       </div>

                </div>
            )
    }

}

export default Admin;
