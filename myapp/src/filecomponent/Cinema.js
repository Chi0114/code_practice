import React, {Component} from 'react'
import axios from 'axios'

export default class Cinema extends Component{

    constructor(){
        super()

        this.state = {
            cinemaList:[]
        }
        //axio as a third lib for request data
        //axios.get('request address').then(res=>{}).catch(err=>{console.log(err)})

        axios({
            url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
            method:"get",
            headers:{
                'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',
                'X-Host':'mall.film-ticket.cinema.list'

            }
        }).then(res=>{
            console.log(res.data)
            this.setState({
                cinemaList:res.data.data.cinemas
            })
        })

    }

    render(){
        return(

            <div>
            
                    {
                        this.state.cinemaList.map(item=>
                            <dl key={item.cinemaId}>
                                <dt>{item.name}</dt>
                                <dd>{item.address}</dd>
                            </dl>
                        )
                    }
             
            </div>
        )
    }
}