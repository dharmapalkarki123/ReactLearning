function ListEx(){

  const cityList=["Pune","Mumbai","Nagpur","Nashik","Delhi"]

  return <div>
    
    <div className="row">
      <div className="col-4">
        <ul>
          {
            cityList.map((city:string)=>{
              return <li>{city}</li>
          
            })
          }
        </ul>
      </div>
    </div>



  </div>
}

export default ListEx;