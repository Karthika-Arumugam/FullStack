import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics=({good,neutral,bad})=>{
    const total=good+neutral+bad
    if(total===0){
        return (
            
               <div>
                   <h2>Statistics</h2>
                   No feedback given</div>
            
        )
    }
    
    const average=(good-bad)/total
    const positive=(good/total)*100
   return(
    <>
    <h2>Statistics</h2>
    <table>
    <tbody>
    <Statistic text="good" count={good}></Statistic>
    <Statistic text="neutral" count={neutral}></Statistic>
    <Statistic text="bad" count={bad}></Statistic>
    <Statistic text="all" count={total}></Statistic>
    <Statistic text="average" count={average}></Statistic>
    <Statistic text="positive" count={positive}></Statistic>
    </tbody></table>
    
    </>
   )
}

const Statistic=({text,count})=>{
    return(
        
      <tr><td>{text}</td>
      <td> {count}</td></tr>
         
        
    )

}
const Button=({type,count,handler})=>{
    
    const handleClick=()=>{
       
        handler(count+1)
    }
     return(
         <div><button onClick={handleClick}> {type}
     </button></div>
     )
   
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
 

  return (
    <div>
      <h2>give feedback</h2>
      
      <Button type="good" count={good} handler={setGood}>good</Button>
      <Button type="neutral" count={neutral} handler={setNeutral} >neutral</Button>
      <Button type="bad" count={bad} handler={setBad}>bad</Button>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)