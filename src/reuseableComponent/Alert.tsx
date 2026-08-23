
interface AlertModel{
  alertTitle:string;
  alertMessage:string;
  alertClassName:string;


}
function Alert(alertdata:AlertModel){
  return (
  <div className={'alert'+alertdata.alertClassName} >
  <strong>{alertdata.alertTitle}</strong> {alertdata.alertMessage}
</div>
);
}
export default Alert;