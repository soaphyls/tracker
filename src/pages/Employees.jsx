import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import '../App.css';
import AddEmployee from '../components/AddEmployee';
import Employee from '../components/Employee';

function Employees() {
 
  const [employees,setEmployees] =useState([
    {id:1 ,name :'Caroline', role :'Fashionister', imgz :'https://images.pexels.com/photos/12733781/pexels-photo-12733781.jpeg'},
    {id:2 ,name :'Jasmin', role :'Developer', imgz :'https://images.pexels.com/photos/2523899/pexels-photo-2523899.jpeg'},
    {id:3 ,name :'cordelia', role :'Accountant', imgz :'https://images.pexels.com/photos/6833824/pexels-photo-6833824.jpeg'},
    {id:4 ,name :'Patricia', role :'Manager', imgz :'https://images.pexels.com/photos/2552127/pexels-photo-2552127.jpeg'},
    {id:5 ,name :'Zinny', role :'Secretrary', imgz :'https://images.pexels.com/photos/3486901/pexels-photo-3486901.jpeg'},
    {id:6 ,name :'Cardi P', role :'Journalist', imgz :'https://images.pexels.com/photos/2412671/pexels-photo-2412671.jpeg'},
    {id:7 ,name :'Joyce', role :'Musician', imgz :'https://images.pexels.com/photos/1970935/pexels-photo-1970935.jpeg'},
    {id:8 ,name :'Pamela', role :'Copywritter', imgz :'https://images.pexels.com/photos/2535859/pexels-photo-2535859.jpeg'},
    {id:9 ,name :'Prisca', role :'Admin', imgz :'https://images.pexels.com/photos/2769303/pexels-photo-2769303.jpeg'}

  ])

  const Editemployee =(id,newName,newRole)=>{
    const updateEmployee = employees.map((employee)=>{
      if(id===employee.id) { 
      return { ...employee,name:newName,role:newRole}
      }
      else{ 
        return employee
      }
    })     
    setEmployees(updateEmployee)
  }

  const newEmployee = (name,role,img_url) => {
    const addEmployee={
      id :uuidv4(),
      name: name,
      role:role,
      imgz:img_url
    }
    setEmployees([...employees,addEmployee])
  }
  //useEffect(() => {
 //   Editemployee()
 // }, []);
  return (





    <div className="App ">
    
     
      <h1 className="text-indigo-800   font-extrabold text-2xl flex justify-center">Top most influential women in the world!</h1>
       <div className="flex flex-wrap justify-center">
       
       {employees.map((employee)=>{
      return ( 
      <Employee 
      key = {employee.id}
         id ={employee.id}
        name={employee.name}
        role={employee.role}
        imgz={employee.imgz}
        EditEmployeez={Editemployee}
        />)
       })}
       </div>
       <AddEmployee newEmployee={newEmployee}/>
     
    </div>
  );
}

export default Employees;
