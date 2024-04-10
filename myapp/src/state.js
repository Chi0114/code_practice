import React, {Component} from 'react'

export default class MyApp extends Component {

    // state = {
    //     text: "收藏",
    //     liked: false
    // }
    constructor(){
        super()
        this.state = {
        text: "收藏",
        liked: false
        }
    }

    render(){
        return(
            <div>
                <h1>欢迎react</h1>
                <button onClick={()=>{
                    this.setState({
                        liked:!this.state.liked
                    })
                    if(this.state.liked){
                        console.log("走收藏的逻辑")
                    }else{
                        console.log("取消收藏的逻辑")
                    }
                }}>{this.state.liked?'收藏':'取消收藏'}</button>
            </div>
        )
    }

}