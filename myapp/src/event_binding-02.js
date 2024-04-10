import React, {Component} from 'react'

export default class MyApp extends Component {
a = 100

    render(){
        return(
            <div>
                <input/>
                <button onClick={()=>{
                    console.log("click1", this.a)
                }}>add1</button>

                <button onClick={ this.handleClick2.bind(this) }>add2</button>
                <button onClick={ this.handleClick3 }>add3</button>
                <button onClick={ ()=>this.handleClick4() }>add4-R</button>
            </div>
        )
    }

    handleClick2(){
        console.log("click2", this.a)
    }
    handleClick3(){
        console.log("click3")
    }
    handleClick4(){
        console.log("click4",this.a)
    }
}