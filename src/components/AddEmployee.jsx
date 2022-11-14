import React from 'react'
import { useState } from 'react';
//import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AddEmployee = ({newEmployee}) => {

    const [namez, setNamez] = useState('');
    const [rolez, setRolez] = useState('');
    const [img, setImg] = useState('');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  


    return (
        <>

<button  onClick={handleShow} className="m-4 block mx-auto shadow bg-purple-600 hover:bg-purple-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 ">+ Add New</button>
          
    
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
    <form className="w-full max-w-sm" id ="editmodal"
    onSubmit={(e)=>{
        e.preventDefault()
         setNamez("")
         setRolez("")
         setImg("")
        newEmployee(namez,rolez,img)
    }}
    >
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="name">
      Name
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name"
       type="text" 
       placeholder="Chidiuto philips"
       value={namez}
       onChange={(e)=>{setNamez(e.target.value)}}
       />
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="role">
      Role
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="role" 
      type="text"
      placeholder="Seasoned Bank"
       value={rolez}
       onChange={(e)=>{setRolez(e.target.value)}}
       />
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="img">
      Pics Url
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="img" 
      type="text"
      
       placeholder="https://rytdesigns.com"
       value={img}
       onChange={(e)=>{setImg(e.target.value)}}
       />
    </div>
  </div>
</form>


            </Modal.Body>
            <Modal.Footer>
            <button onClick= {handleClose}className="shadow bg-slate-500 hover:bg-slate-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" >
        Close
      </button>
       

      <button form ="editmodal" onClick={ handleClose} className="shadow bg-purple-600 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" >
       Add
      </button>
            </Modal.Footer>
          </Modal>
        </>
      );
}

export default AddEmployee