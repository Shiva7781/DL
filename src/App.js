import './App.css'
import { useState } from "react"

function App() {

  const [propA, setPropA] = useState("Second Child")
  const [propB, setPropB] = useState("First Child")


  const changeDataA = () => {
    let x = 7 + 7
    setPropB(`Changed value of Prop for B: ${x}`)

  }

  const changeDataB = () => {
    let x = 3 + 3
    setPropA(`Changed value of Prop for A: ${x}`)
  }

  return (
    < ><div className='App'>
      <h3>Parent</h3>
      <ChildA dempPropA={propB} changeProp={changeDataB} />
      <ChildB dempPropB={propA} changeProp={changeDataA} />

    </div></>
  )
}

export default App


const ChildA = ({ dempPropA, changeProp }) => {
  return (
    <>
      <div>  {dempPropA} <button onClick={changeProp}>Change</button></div>
    </>
  )
}

const ChildB = ({ dempPropB, changeProp }) => {
  return (
    <>
      <div>  {dempPropB} <button onClick={changeProp}>Change</button></div>
    </>
  )
}




// //Second Approach//

// import './App.css'

// import { useState } from 'react'

// const App = () => {

//   const [count, setCount] = useState(0)

//   return (
//     <><div className='App'>

//       <h3>Parent</h3>
//       <ChildA dempPropA={count} changeProp={setCount} />
//       <ChildB dempPropB={count} changeProp={setCount} />
//     </div>

//     </>
//   )
// }

// export default App


// const ChildA = ({ dempPropA, changeProp }) => {
//   return (
//     <>
//       <div>  {dempPropA} <button onClick={() => changeProp((e) => e + 1)}>Increase</button></div>
//     </>
//   )
// }

// const ChildB = ({ dempPropB, changeProp }) => {
//   return (
//     <>
//       <div>  {dempPropB} <button onClick={() => changeProp((e) => e - 1)}>Decrease</button></div>
//     </>
//   )
// }
