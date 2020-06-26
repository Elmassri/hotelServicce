import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Items from "../Items/Items";
import { Button } from "reactstrap";

class Menu extends React.Component {
          constructor(props){
            super(props);
            this.state={
                
                    menu:[{
                        name:'Dribk',
                        id:1
                    },{name:'snacks',id:2}],
                    
                item:[{ name: 'mashewe', id: 1, price:5000 , qty:1 },{ name: 'sandwich', id: 2, price:7000,qty:1 }]
            }

          }
          

          
    render(){
let menus=this.state.menu.map((item,index)=>{

return <Link key={index} to={`/${item.id}`}><Button  onClick={(e)=>{
    
}}>{item.name}</Button></Link>

    

})
  return (
    <Router>
      <div>
        
            
            <ul>
               {menus}
          
                </ul>
        
          
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path={`/`}>
            <Items menu={this.state.item} />
          </Route>
        
        </Switch>
      </div>
    </Router>
  );
}}

export default Menu