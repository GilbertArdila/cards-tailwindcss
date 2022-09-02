import React, { useState } from 'react'


const Card = ({user,phone,mail,image,gender}) => {
  const[usuario,setUsuario]=React.useState(false)
  const [telephone, setTelephone] = React.useState(false)
  const [email, setEmail] =React.useState(false)
  let icon;
  if(gender==='male'){
    icon='👨'
  }else{
    icon='👧'
  }
  return (
    <div className='flex flex-col items-center w-96 m-auto mt-12 mb-6 p-3 border-white border-2 rounded-3xl  bg-cyan-500 shadow-xl bg-gradient-to-t from-indigo-300 md:w-64 md:mx-3 md:mt-12 hover:scale-[1.2]'>
       <img src={image}
       className='w-36 self-center -m-8  mb-4  rounded-full shadow-xl border-white border-4' />
       <p className={`font-semibold text-white cursor-pointer`}
        onClick={(e)=>setUsuario(prevState=>!prevState)}
       > {icon}{usuario&&<span>{user}</span>}</p>

       <p className='font-semibold text-white cursor-pointer'
        onClick={(e)=>setTelephone(prevState=>!prevState)}
       >☎Phone{" "}{telephone&&<span>{phone}</span>}</p> 

       <p className='font-semibold text-white cursor-pointer'
       onClick={(e)=>setEmail(prevState=>!prevState)}
       >📫Email{" "}{email&&<span>{mail}</span>}</p>

    </div>
  )
}

export {Card}