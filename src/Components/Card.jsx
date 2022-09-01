import React from 'react'

const Card = ({user,phone,mail,image,gender}) => {
  let icon;
  if(gender==='male'){
    icon='👨'
  }else{
    icon='👧'
  }
  return (
    <div className='flex flex-col items-center w-96 m-auto mt-12 mb-6 p-3 border-white border-2 rounded-3xl  bg-cyan-500 shadow-xl bg-gradient-to-t from-indigo-300 md:mx-3 md:mt-12 hover:scale-[1.2]'>
       <img src={image}
       className='w-36 self-center -m-8  mb-4  rounded-full shadow-xl border-white border-4' />
       <p className={`font-semibold text-white `}>{icon}{" "}Usuario: <span>{user}</span></p>
       <p className='font-semibold text-white'>☎{" "}Telefono:<span>{phone}</span></p> 
       <p className='font-semibold text-white'>📫{" "}Mail:<span>{mail}</span></p>

    </div>
  )
}

export {Card}