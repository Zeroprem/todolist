import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-700 text-white py-4'>
      <div className="logo font-bold text-xl mx-8"><span>
        Todo</span></div>
      <ul className='flex gap-8 mx-9'>
        <li className='cursor-pointer hover:font-bold hover:transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold hover:transition-all'>Your tasks</li>
        <li className='cursor-pointer hover:font-bold hover:transition-all'>about</li>
      </ul>
    </nav>
  )
}

export default Navbar
