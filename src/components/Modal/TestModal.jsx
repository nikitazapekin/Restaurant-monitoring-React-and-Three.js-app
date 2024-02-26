
import "./TestModal.css"
const TestModal = ({active, setActive}) => {
    return ( 

        <div style={{display: active ? "block" : "none"}} className="modal" onClick={()=>setActive(false)}> 
<div className="modal-content" onClick={(e)=>e.stopPropagation()}>

</div>
        </div>
     );
}
 
export default TestModal;