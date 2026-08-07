import { useState } from "react";

function ConditionRender(){


  const [showDiv11, setShowDiv11]=useState<boolean>(false);

  const [showDiv22, setShowDiv22]=useState<boolean>(true);

  const showDiv=()=>{
  
    setShowDiv11(true);

  }

  const hideDiv=()=>{
    setShowDiv11(false);
  }

 const onCheckedBoxChange=(event:any)=>{
    setShowDiv22(event.target.checked);
 }
return <div>

    <div className="row">
      <div className="col-4">
    {showDiv11==true &&   <div className="bg-danger p-4">
        Div 11
      </div>}

      </div>
    </div>
    <hr/>


    <div className="row">
      <div className="col-4 text-center">
        <button className="btn btn-success" onClick={showDiv}>Show</button>
        <button className="btn btn-danger" onClick={hideDiv}>Hide</button>
      </div>
    </div>


    <hr/>
     <div className="row">
      <div className="col-4">
    {showDiv22==true &&   <div className="bg-warning p-4">
        Div22
      </div>}

      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-4 ">
      <input type="checkbox" onChange={(eve)=> onCheckedBoxChange(eve)}/>
      
      </div>
    </div>


</div>

}

export default ConditionRender;