import React, { useState } from 'react';
import Header from './Header'
import Footer from './Footer'
import CreateNote from './CreateNote';
import Note from './Note'

const App=()=>{
  const [addItem,setItem]=useState([]);
const addNote=(note)=>
{

  setItem((prevData)=>
  {
    return [...prevData,note];
  });

}

const onDelete=(id)=>
{
  
  setItem((prevData)=>
  {
    const filtered=prevData.filter((currData,ind)=>id!==ind)
    return filtered;
  })
}

  return (
    <>
      <Header/>
      <CreateNote
        passNote={addNote}
      />

<div className='noteHolder'>
{
  addItem.map((val,index)=>
  {
    return<Note
    key={index}
    id={index}
    title={val.title}
    content={val.content}
    deleteItem={onDelete}
    />
  })
}
</div>

      <Footer/>
    </>
  )
}

export default App;
