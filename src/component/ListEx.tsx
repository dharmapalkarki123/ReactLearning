function ListEx(){

  const cityList=["Pune","Mumbai","Nagpur","Nashik","Delhi"]

  const studentList: Istudent[] = [
  { id: 1, name: "Ram", age: 20 },
  { id: 2, name: "Shyam", age: 21 },
  { id: 3, name: "Hari", age: 22 }
];

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
      <div className="col-4">
        {
          cityList.map((city:string)=>(<button className="btn btn-primary mt-2">{city}</button>))
        }
      </div>

      <div className="col-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
             {studentList.map((student:Istudent)=>{
              return (<tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
              </tr>)
             })}
          </tbody>
        </table>
      </div>
    </div>



  </div>
}

export default ListEx;

interface Istudent {
  id: number;
  name: string;
  age: number;
}