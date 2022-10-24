import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Items from "../Items/Items";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import  "./Menu.css"
import Tabs from "../../Components/Tabs/Tabs"
import classnames from 'classnames';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import TableForm from "../Table/Table";
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      activeTab: '5',
      item: [],
      error: "",
      categories_id: 0,
    };
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(`//localhost:5000/cat`);
      const result = await response.json();

      console.log(result);
      if (result.success) {
        this.setState({ menu: result.result, error: "" });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  };
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  HandlItem = async (id) => {
    try {
      const response = await fetch(
        `//localhost:5000/items?categories_id=${id}`
      );
      const result = await response.json();

      console.log(result);
      if (result.success) {
        this.setState({ item: result.result, error: "",categories_id:id });
      } else {
        this.setState({ error: result.message });
      }
    } catch (err) {
      this.setState({ error: err });
    }
  };
  render() {
    let menus = this.state.menu.map((item, index) => {
      return (
          
          <Nav tabs key={index} to={`/${item.id}`} >
            
          <NavItem className='navItems'>
            <NavLink
              id="li"
              className={classnames({ active: this.state.activeTab === item.id })}
              onClick={(e) => {
                this.HandlItem(item.id);
                this.render(item.id)
               // this.setState({ categories_id: item.id });
              }}
            >
              {item.categories_name}
            </NavLink>
          </NavItem>
          </Nav>
          
        
      );
    });
    return (
      <div  >
      <Router >
        
        <div className="itemAndCategory">
          <ul className="catTab">{menus}</ul>

         <div className="mainBody">
          <Switch>
           
           
            <Route path={`/`}>
              <Items  menu={this.state.item} />
            </Route>
            
          </Switch>
          <TableForm orders={[]}></TableForm>
          </div>
        </div>
        
      </Router>
      
      </div>
    );
  }
}



export default Menu;
