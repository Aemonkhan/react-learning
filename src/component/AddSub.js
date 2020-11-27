import React, { Component } from 'react';
export default class AddSub extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num:0,
            tog: 'true'
    }
}
    toggle=()=>{
        console.log('toggle')
this.setState({tog:!this.state.tog})
    }
    
    handleInc= () => {
        console.log('++')
        this.setState({
            num: ++this.state.num
            // let newNum = this.state.num
            // newNum:++num
            })
            console.log(this.state)
    }

    handleDec = () => {
        console.log('--')
        this.setState({num: --this.state.num
        //  let newNum1 = this.state.num
        //  newNum1:--num
            })
            console.log(this.state)
    }

    render(){
        console.log(this.state)
        return(
           <div>
            <button onClick={this.toggle}>toggle</button>
            {
            this.state.tog ? 
        (<div style={{background:'white'}}>log</div>):
        (<div style={{background:'black'}}></div>)
            }
                    <button onClick={this.handleInc}>+</button>
                    <button onClick={this.handleDec}>-</button>
                
        
            </div>
        )
    }
        

    }
