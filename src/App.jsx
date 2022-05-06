

import data from './data'
import "./index.css"
import Single from "./Single"
// console.log(data)

function App() {

   
  return (
    <div className='container'>

  { 
  data.map((elem)=>{
     return <Single elem={elem}/>
   })
   
   }

    </div>
  )
}

export default App