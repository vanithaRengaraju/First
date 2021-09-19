import React,{Component} from 'react'
import axios from 'axios'



class Test2 extends Component{
  
   constructor(){
     super()
     this.state={
       Information : [
        {
          "name":"Samule",
          "age":21,
          "country":"USA"
        },
        {
          "name":"Sam",
          "age":21,
          "country":"USA"
        },
        {
          "name":"Mark",
          "age":21,
          "country":"Africa"
        },
        {
          "name":"Markus",
          "age":21,
          "country":"Africa"
        },
        {
          "name":"Aayush",
          "age":21,
          "country":"India"
        },
        {
          "name":"Sean",
          "age":21,
          "country":"Ireland"
        },
        {
          "name":"Eduardo",
          "age":21,
          "country":"France"
        },
        {
          "name":"Dustin",
          "age":21,
          "country":"Spain"
        },
        {
          "name":"Alexendra",
          "age":21,
          "country":"USA"
        },
        {
          "name":"Lee",
          "age":21,
          "country":"China"
        },
        {
          "name":"Jim",
          "age":21,
          "country":"Korea"
        }
      ]
       }
   }
   
   searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }
      
      
     
      
  
             
      render(){  
   
    return(
      <div>
        {this.state.Information.map(names=><div>{names.name}{names.age}</div>)}
        <input type="text" placeholder="Enter item to be searched"  onChange={(e)=>this.searchSpace(e)} />
      </div>
    )
  }
}

export default Test2