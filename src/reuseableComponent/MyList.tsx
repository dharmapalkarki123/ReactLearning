import Alert from "./Alert";
import ListGroup from "./ListGroup";

interface ListModel {
  listItem: string[];
}

function MyList({ listItem }: ListModel) {

const cityList=["Pune","Mumbai","Nagpur",]

const getSelectedItem=(item:string)=>{
  debugger
  alert(item);
}

  return (
    <>
      <ul>
        {listItem.map((item: string, index: number) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>

      <br />

      <div className="col-5">
        <Alert
          alertTitle="Success"
          alertMessage="This is success alert"
          alertClassName="alert-success"
        />
      </div>
      <div className="col-5">
        <ListGroup array={cityList} onSelectItem={getSelectedItem} />
      </div>
    </>
  );
}

export default MyList;