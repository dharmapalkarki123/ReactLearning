
interface AltertModel{
  alertTitle:string;
  alertMessage:string;
  alertClassName:string;


}

function Altert(){
  return (
  <div className="alert alert-success">
  <strong>Success!</strong> Indicates a successful or positive action.
</div>
);
}
export default Altert;