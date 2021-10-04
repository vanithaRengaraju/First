import React,{Component} from 'react'
import axios from 'axios'

class Test1 extends Component{
    constructor(){
        super()
        this.state={
            posts:[]
        }
    }
   componentDidMount(){
       axios.get("https://jsonplaceholder.typicode.com/posts")
       .then(response=>{console.log(this.state)
       this.setState({posts:response.data})
       })
   }
   
    render(){
    return(<div>
        {this.state.posts.map(post =>(<div key={post.id}>{post.title}</div>))}
    </div>)

    }
}
export default Test1