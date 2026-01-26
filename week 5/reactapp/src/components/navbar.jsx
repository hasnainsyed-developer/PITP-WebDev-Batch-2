import React from 'react'

const Navbar = (props) => {
  return (
    <div className='bg-dark text-light d-flex justify-content-between align-items-center p-4'>
        <h2>{props.title}</h2>
        <nav className='d-flex gap-3'>
            <a href='/'>Home</a>
            <a href='/tools'>Tools</a>
            <a href='/products'>Products</a>
            <a href='/about'>About</a>
        </nav>      
    </div>
  )
}

export default Navbar