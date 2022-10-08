import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Items from "../Items/Items";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import  "./Menu.css"



class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],

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
        <Link  key={index} to={`/${item.id}`}>
          <Button 

            style={{marginRight:'5px',marginBottom:'10px'}} 
            color="primary"
            
            onClick={(e) => {
              this.HandlItem(item.id);

             // this.setState({ categories_id: item.id });
            }}
          >
            {item.categories_name}
          </Button>
        </Link>
      );
    });
    return (
      <Router>
        <div >
          <ul style={{display:'flex',marginRight:'10px',width:'700px',flexWrap:'wrap'}}>{menus}</ul>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
           
           
            <Route path={`/`}>
              <Items  menu={this.state.item} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}



export default Menu;
