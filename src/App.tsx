
import { Link, Route, Routes } from 'react-router'
import './App.css'
import ConditionRender from './component/ConditionRender'
import ListEx from './component/ListEx'
import UseEffectEx from './component/useEffectEx'
import DataEventBinding from './component/DataEventBinding'


function App() {
 

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item active"> 
  <Link className="nav-link" to="/Data-Binding">Data Binding</Link> 
</li> 

<li className="nav-item"> 
  <Link className="nav-link" to="/useEffect">Use Effect</Link> 
</li> 

<li className="nav-item dropdown"> 
  <Link className="nav-link" to="/Condition-Render">Condition Render</Link> 
</li> 

<li className="nav-item"> 
  <Link className="nav-link" to="/List-Example">List</Link> 
</li>
    </ul>
   
  </div>
</nav>




     {/* <h1>Learning React Js

     </h1> */}

      {/* <User />
      <Admin />
      <CityMaster /> */}
      {/* <DataEventBinding />
      <UseState /> */}
      {/* <UseEffectEx /> */}

      {/* <ConditionRender /> */}

      {/* <ListEx /> */}

      <Routes>
         <Route path='/' element={<DataEventBinding />}></Route>
         <Route path='/Data-Binding' element={<DataEventBinding/>}></Route>
         <Route path='/useEffect' element={<UseEffectEx/>}></Route>
          <Route path='/Condition-Render' element={<ConditionRender/>}></Route>
          <Route path='/List-Example' element={<ListEx/>}></Route>


      </Routes>


     
      
      
    
    </>
  )
}

export default App
