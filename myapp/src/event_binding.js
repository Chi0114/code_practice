import React, {Component} from 'react'

export default class MyApp extends Component {
    render(){
        return(
            <div>
                <input/>
                <button onClick={()=>{
                    console.log("click1")
                }}>add1</button>

                <button onClick={ this.handleClick }>add2</button>
            </div>
        )
    }

    handleClick(){
        console.log("click2")
    }
}