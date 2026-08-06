import { useState } from "react";

function ConditionRender(){


  const [showDiv11, setShowDiv11]=useState<boolean>(false);

  const showDiv=()=>{
  
    setShowDiv11(true);

  }

  const hideDiv=()=>{
    setShowDiv11(false);
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


</div>

}

export default ConditionRender;