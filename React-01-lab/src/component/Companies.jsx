import Services from "./Services"
import Programers from "./Programers"

function Companies(props) {
  return (
    <>
    <div>
     <h2>companyName: {props.companyName}</h2>
     <p>worker number:{props.workerNumber}</p>
     <p>years Of Founded:{props.yearsOfFounded}</p>
     </div>

     <Services   Services={props.Services}
                 price={props.price} />



     <Programers  name={props.name}  languges={props.languges} years={props.years} />            
    
    </>
  )
}

export default Companies