import React,{Component} from 'react'
import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Buttons/button'


class OrderSummary extends Component {
    
    componentWillUpdate(){
        console.log('order')
    }

    render(){
        const ingredietSummary = Object.keys(this.props.ingredients)
        .map((igkey,key)=>{
        return <li key = {igkey}><span style={{textTransform:'capitalize'}}>{igkey}:</span>{this.props.ingredients[igkey]}</li>
    })
        return( 
        <Aux>
            <h3>Your Order</h3>
            <p>A delicios burger with the following ingredient</p>
            <ul>
                {ingredietSummary}
            </ul>
            <p>do you wANT CHECK AGAIN?</p>
            <Button btnType= "Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>Continues</Button>
        </Aux>
       )
    }

}
export default OrderSummary