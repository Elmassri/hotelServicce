import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Items from '../Items/Items';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '5'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    let menus = this.props.menu.map((item, index) => {
        return (
           
            <Nav tabs >
              
            <NavItem key={index} to={`/${item.id}`}>
              <NavLink
                style={{color:"black"}}
                className={classnames({ active: this.state.activeTab === item.id })}
                onClick={(e) => {
                  this.props.HandlItem(item.id);
                  this.toggle(item.id)
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
        <div>
        <ul style={{display:"flex"}} >{menus}</ul>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <Items menu={this.props.items}/>
              </Col>
            </Row>
          </TabPane>
          
        </TabContent>
        </div>
    );
  }
}