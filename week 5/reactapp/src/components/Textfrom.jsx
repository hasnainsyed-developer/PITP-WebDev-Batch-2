import React, { useState } from 'react'

const TextForm = () => {

    const [text, setText] = useState("");

  return (
    <div className='container my-4'>
      <form className='d-flex flex-column gap-2'>
        <label className='h2 border-bottom border-4 border-primary'>Enter some text below</label>
        <textarea 
            className='p-2'
            rows={8} 
            placeholder='enter text here...' 
            value={text}
            onChange={ (e)=>setText(e.target.value) }
        ></textarea>
        <div className='d-flex gap-2'>
          <button type='button' className='btn btn-primary' onClick={ ()=>setText(text.toUpperCase()) }>Change to Uppercase</button>
          <button type='button' className='btn btn-primary' onClick={ ()=>setText(text.toLowerCase()) }>Change to Lowercase</button>
          <button type='button' className='btn btn-primary' onClick={ ()=>{navigator.clipboard.writeText(text)} }>Copy</button>        
          <button type='button' className='btn btn-primary' onClick={ ()=>setText("") }>Clear</button>
        </div>
      </form>

      <div>
        <h3 className='my-3'>Text Analysis</h3>
        <p>There are {text.length} characters and {text.split(" ").length} words in your text</p>
        <p>Time required to read: {(text.split(" ").length * 0.3).toFixed(0) } sec </p>
      </div>

    </div>
  )
}

export default TextForm