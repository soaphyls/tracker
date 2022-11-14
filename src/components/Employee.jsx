import React from 'react'
import EditEmployee from './EditEmployee'

const Employee = ({name, role,imgz,id, EditEmployeez}) => {
  return (
    <>

<div className=" max-w[850px] m-3 py-6 px-8 max-w-sm  bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  <img className="object-cover rounded-full h-[100px] w-[100px] block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={imgz} alt="Woman's Face"/>
  <div className="text-center space-y-2 sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg text-black font-semibold">
      {name}
      </p>
      <p className="text-slate-500 font-medium">
      {role}
      </p>
    </div>
    <EditEmployee name={name} role={role} EditEmployeez={EditEmployeez} id={id} />
  </div>
</div>

    
    </>
  )
}

export default Employee