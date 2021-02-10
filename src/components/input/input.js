import React, { Component } from 'react';
import './input.css';

export default class Input extends Component{
    constructor(props){
        super(props)
        this.firstRef = React.createRef();
        this.secondRef = React.createRef();
        this.state = {
            exceptCheck: '-',
            operator: '',
            telephone: '',
            operatorName: '',
            temp: ''
        }
    }

    componentDidMount(){
        this.firstRef.current.focus();
    }

    whatOperator = () => {
        if (this.state.operator.length === 2){
            if(this.state.operator === "67" || this.state.operator === "68" || this.state.operator === "96" || this.state.operator === "97" || this.state.operator === "98"){
                this.setState({operatorName: 'Kyivstar'})
            } else if(this.state.operator === "50" || this.state.operator === "66" || this.state.operator === "95" || this.state.operator === "99"){
                this.setState({operatorName: 'Vodafone'})
            } else if(this.state.operator === "63" || this.state.operator === "73" || this.state.operator === "93"){
                this.setState({operatorName: 'Lifecell'})
            } else if(this.state.operator === "91"){
                this.setState({operatorName: '3mob'})
            } else if(this.state.operator === "92"){
                this.setState({operatorName: 'People.net'})
            } else if(this.state.operator === "89" || this.state.operator === "94"){
                this.setState({operatorName: 'intertelecom'})
            } else {
                this.setState({operatorName: 'Unknown'})
            }
            this.secondRef.current.focus();
        } else {
            this.setState({operatorName: ''})
        }
    }

    isThatCorrect = () => {
        if (this.state.operator.length === 2 && this.state.telephone.length === 7){
            this.setState({exceptCheck: '✔️'})
        } else {
            this.setState({exceptCheck: '-'})
        }
    }
    
    render(){
        return <div onKeyUp={this.isThatCorrect}>
            <span className="operator-name">{this.state.operatorName}</span>
            <span>+38 0</span>

            <input name="operator" 
            onChange={event => this.setState({operator: event.target.value.replace(/[^0-9]/g, "").slice(0,2)})}
            onKeyUp={this.whatOperator} 
            value={this.state.operator} 
            type="text" 
            className="operator-input" 
            ref={this.firstRef}/>

            <span className="check-icon">{this.state.exceptCheck}</span> 

            <input name="telephone" 
            onChange={event => this.setState({telephone: event.target.value.replace(/[^0-9]/g, "").slice(0,7)})}
            value={this.state.telephone} 
            type="text"
            className="phone-input"
            ref={this.secondRef}/>
        </div>;
    }
}