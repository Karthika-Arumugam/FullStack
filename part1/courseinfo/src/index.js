import React from 'react'
import ReactDOM from 'react-dom'


const Header=(props)=>{
    console.log("Header: ",props)
    const {course}=props
    const {name}=course
    return(
        <div>     
      <h1>
        {name}
    </h1>
     </div>
        
    )
}

const Content=(props)=>{
    console.log("Content: ", props)
    const {course}=props
    const {parts}=course
    const [part1,part2,part3]=parts
    return(   
        <>   
       <Part name={part1.name} exercise={part1.exercises}></Part>
       <Part name={part2.name} exercise={part2.exercises}></Part>
       <Part name={part3.name} exercise={part3.exercises}></Part>
       </>
    )
    
    }

    const Total=(props)=>{
        console.log("Total: ", props)
        const {course}=props
        const{parts}=course
        const [part1,part2,part3]=parts
        return(
            <>
            <h2> Number of Exercises: {part1.exercises +part2.exercises + part3.exercises }</h2>
            </>
        )
    }
    const Part=(props)=>{
        return(
            <>
             <h3> {props.name} : {props.exercise} </h3>
            </>
        )
    }

const App = () => {
    
       
    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
      }
        

  return (
    <>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
     
     
    </>
  )
}

ReactDOM.render(<App/>,document.getElementById("root"))