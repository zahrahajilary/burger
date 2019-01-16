import React,{Component} from 'react'
import Modal from '../components/UI/Modal/Modal'
import Aux from '../hoc/Aux/Aux'

const withErrorHandler = (WrappedComponent,axios)=>{
    return class extends Component{
        state={
            error:null
        }
        componentWillMount(){
           this.reqInterceptors =  axios.interceptors.request.use(req=>{
                 this.setState({
                     error:null
                 })
                 return req
            })
            this.resInrerceptors = axios.interceptors.response.use(res=>res,error=>{
                this.setState({
                    error:error
                })
            })
        }
        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptors)

            axios.interceptors.response.eject(this.resInrerceptors)
        }
        errorHandler = ()=>{
            this.setState({
                errro:null
            })
        }

        render(){
            return(
                <Aux>
                <Modal show={this.state.error} modalClosed={this.errorHandler}>
                    {this.state.error ? this.state.error.message:null}
                </Modal>
                <WrappedComponent {...this.props}/>
            </Aux>
            )
        }
    
    }
}

export default withErrorHandler