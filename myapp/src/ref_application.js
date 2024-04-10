import React, {Component} from 'react'

export default class MyApp extends Component {
    myRef = React.createRef()
    render(){
        return(
            <div>
                <input ref={ this.myRef }/>
                <button onClick={()=>{
                    console.log("click1", this.myRef)
                }}>add1</button>
            </div>
        )
    }

}