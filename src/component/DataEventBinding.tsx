function DataEventBinding(){

  const courseName="React JS";
  const selectedCity="itr";

  const divClassName="primary"

  

  return <div>

   <p>course-{courseName}</p>
   <span>{courseName}</span>
   <input type="text" value={courseName} />
   <br />
   <select value={selectedCity}>
    <option value="ktm">Kathmandu</option>
    <option value="pokh">Pokhara</option>
    <option value="brt">Biratnagar</option>
    <option value="itr">Itahari</option>
   </select>
    <br />
     <br />
     <div className={divClassName}>
      Div 111
      
     </div>



  </div>
}
export default DataEventBinding;