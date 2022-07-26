import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form } from 'react-bootstrap';
import { MdDelete , } from "react-icons/md";
import Modal from 'react-bootstrap/Modal';
import { AiOutlinePlus } from "react-icons/ai";

function App() {

  const [todo,setTodo] = useState("");
  const [todos,setTodos] = useState([]);
  const [finished,setFinished] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 const handletodos = ()=>{
  
  if(todo==="") return 
  setTodos([...todos,todo]);
  setTodo("");
   handleClose();
 }

 useEffect(()=>{

 },[todo,todos,finished])

  return (
    <div className="App">
      
      <div className='header'>
        {/* <img  src="https://telecrm.in/assets/images/telecrm-logo.svg" /> */}
         <h1>TeleCRM-TodosApp</h1>
      </div>

      <div className='input'>
        <input placeholder='Enter Todos' value={todo} onChange={(e)=>{
          setTodo(e.target.value);
           
        }} />
        <Button  variant="primary" onClick={handletodos} id="button">ADD TO TODOS</Button>
      </div>
      
     <div>
      <Button  onClick={handleShow} id="modal"  >
       <AiOutlinePlus />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Todos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input placeholder='Enter Todos' value={todo} onChange={(e)=>{
            
          setTodo(e.target.value)
          console.log(todo);
          }} /> 
        </Modal.Body>
        <Modal.Footer>
         
          <Button variant="primary" onClick={handletodos}>
            ADD TO TODOS
          </Button>
        </Modal.Footer>
      </Modal>
    
    </div>
        <div id="todos">
          <div >
            <h1 >Up Coming</h1>
            <hr />
            {todos ? todos.map((e,i)=>{
            return (
             <div key={i} className="flexhead"> 
            <div className="flex">
             <Form.Group className="mt-1" controlId="formBasicCheckbox" >
             <Form.Check type="checkbox" onClick={()=>{
              setFinished([...finished,todos[i]]);
              todos.splice(i,1);
             
             }} />
             </Form.Group>

              <h4>{e}</h4>
              </div>
              <div id='icon'>
              <MdDelete id="right" onClick={()=>{
                todos.splice(i,1);
                console.log(i);
                setTodos(todos);
              }} />
              </div>
         </div>
           
          )
        }): undefined}

      </div>
          <div>
            <h1>Finished</h1>
            <hr/>
            {finished ? finished.map((e,i)=>{
          return (
            <div key={i} className="flexbody"> 
            <div className="flex">
             <Form.Group className="mt-1" controlId="formBasicCheckbox" >
             <Form.Check type="checkbox" onClick={()=>{
              setTodos([...todos,finished[i]]);
              finished.splice(i,1);
             }} />
             </Form.Group>

              <h4>{e}</h4>
              </div>
              <div id='icon'>
              <MdDelete id="right" onClick={()=>{
              finished.splice(i,1);
             }} />
              </div>
            </div>
           
          )
          }): undefined}
           
          </div>
        </div>

     <div className="tagline">
        
      <h6 >made with ❤️ by Sudeep Gudekota</h6>
     
     </div>
    </div>

  );
}

export default App;
