import React,{Component} from 'react'

class Second extends Component{
    constructor(){
        super()
        this.state={
posts:"hello"
        }
    }
    render()
    {
        return(<div>{this.state.posts}</div>)
    }

}
export default Second