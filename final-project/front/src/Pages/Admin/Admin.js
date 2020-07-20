import React from 'react'
import  Menu  from '../../Components/Menu/Menu'
import Header from '../../Components/Header/Header'
import AddCat from '../../Components/AddCat/AddCat'
import AddItem from '../../Components/AddItem/AddItem'
import './Admin.css'
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
          
    render(){
        return(
                <div>
                    <Header></Header>
                    <hr></hr>
                        <Menu></Menu>
                        <hr></hr>
                        <AddCat categories={this.state.ListCat}></AddCat>
                        <hr></hr>
                        <AddItem items={this.state.ListItem}></AddItem>
                </div> 
            
            )
    }

}

export default Admin;