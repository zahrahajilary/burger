import React,{Component} from "react";
import Aux from "../Aux/Aux";
import  './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
  state = {
    showSideDrawer:false
  }
  sideDrawerCloseHandler = ()=> {
    
    this.setState({
      showSideDrawer:false
    })
    console.log(this.state.showSideDrawer)
  }
  sideDrawerShowHandler = ()=>{
    this.setState((prevState)=>{
      return {showSideDrawer:!prevState.showSideDrawer}
    })
  }

  render(){
    return (
      <Aux>
      <Toolbar openSide={this.sideDrawerShowHandler} />
      <SideDrawer closed={this.sideDrawerCloseHandler} open={this.state.showSideDrawer}/>
          <main className="Content">{this.props.children}</main>
      </Aux>  
    )  
  }
}
 

export default Layout
