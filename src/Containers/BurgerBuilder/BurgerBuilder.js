import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux"
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummerires/OrderSummeries'
import Spinner from '../../components/UI/Spinner/Spinner'
import WithErrorHandler from '../../WithErrorHandler/WithErrorHandler'
import axios from 'axios'



const PRICE_INGREDIENT = {
  meat:1.3,
  salad:0.5,
  cheese:0.4,
  bacon:0.7
}

class BurgerBuilder extends Component {
  state = {
    ingredient:null,
    totalPrice:4,
    purchaseable:false,
    purchasing:false,
    loading:false,
    erorr:false
  }

  componentDidMount(){
    axios.get('/ingredients.json')
    .then(res=>{
      this.setState({
        ingredient:res.data
      })
    })
    .catch(error=>{

      this.setState({
        error:true
      })
    })
  }

  updatePurchasableState (ingredients){
    
    const sum = Object.keys(ingredients)
    .map(igKey => {
      return ingredients[igKey]
    }).reduce((sum ,el)=>{
      return sum + el
    },0)
    this.setState({
      purchaseable:sum > 0 
    })
  } 
  addIngredientHandler = (type)=> {
   
    const oldCountIngredient = this.state.ingredient[type]
    const updateCountIngredient = oldCountIngredient+1
    const updatedIngredient =  {
      ...this.state.ingredient
    }
    updatedIngredient[type] = updateCountIngredient
    const priceAddition = PRICE_INGREDIENT[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition
    this.setState({
      ingredient:updatedIngredient,
      totalPrice:newPrice
    })
    this.updatePurchasableState(updatedIngredient)
  }

  removeIngredientHandler = (type) => {
    const oldCountIngredient = this.state.ingredient[type]
    if(oldCountIngredient <= 0){
      return 
    }
    const updateCountIngredient = oldCountIngredient-1
    const updatedIngredient =  {
      ...this.state.ingredient
    }
    updatedIngredient[type] = updateCountIngredient
    const priceDeduction = PRICE_INGREDIENT[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice - priceDeduction
    this.setState({
      ingredient:updatedIngredient,
      totalPrice:newPrice
    })
    this.updatePurchasableState(updatedIngredient)
  }
  purchaseHandler=()=>{
    this.setState({
      purchasing:true
    })
  }
  purchaseCancelHandler = ()=>{
    this.setState({
      purchasing:false
    })
  }
  purchaseContinueHandler = ()=> {
    this.setState({
      loading:true
    })
    const order = {
      ingredient:this.state.ingredient,
      price:this.state.totalPrice,
      customer:{
        name:'zahra hajilary',
        address:{
          street:'street test',
          country:'Iran'
        },
        email:'test@test.com'
      }
    }


    axios.post('/orders.json',order)
    .then(res=>{
      this.setState({
        lodaing:false,
        purchasing: false
      })
    })
    .catch(err=>{
      this.setState({
        lodaing:false,
        purchasing:false
      })
    })
  }
  
  render() {
    const disabledInfo = {
      ...this.state.ingredient
    }
    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key]<=0
    }

    let orderSummary = null
    let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;
    
      if(this.state.ingredient){
        burger = (
          <Aux>
              <Burger ingredients ={this.state.ingredient}/>
              <div>
                <BuildControls 
                ingredientAdded = {this.addIngredientHandler}
                ingredientRemoved = {this.removeIngredientHandler} 
                disabeld = {disabledInfo}
                price = {this.state.totalPrice}
                purchaseable = {this.state.purchaseable}
                ordered = {this.purchaseHandler}
                />
              </div>
          </Aux>
        )  
        
        orderSummary = <OrderSummary ingredients = {this.state.ingredient}
        purchaseCancelled = {this.purchaseCancelHandler}
        purchaseContinued = {this.purchaseContinueHandler}
      />
        
      }
      if ( this.state.loading ) {
        orderSummary = <Spinner />;
    }

  
    return(
        <Aux>
          <Modal show = {this.state.purchasing} modalClosed = {this.purchaseCancelHandler}>
          {orderSummary}
          </Modal>
          {burger}
        </Aux>
    )
  }
}
export default WithErrorHandler(BurgerBuilder,axios);
