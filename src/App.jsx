import { Card } from "./Components/Card"
import React from "react"

function App() {
  
  const[usuarios,setUsuarios]=React.useState([])
  const [search, setSearch] =React.useState('')

  React.useEffect(() => {
   users()
  }, [])
  

  const users= async()=>{
    const response=await fetch('https://randomuser.me/api/?results=10')
    const data=await response.json()
   setUsuarios(data.results)
   
  }

  return (
   <div className="flex flex-col items-center">
   <input type={'text'}
    className='w-1/3 mx-auto mt-6 bg-white border-2 border-gray-400 text-left self-center'
    placeholder="  Filtrar..."
    onChange={(e)=>setSearch(e.target.value)}/>

    <div className=" flex flex-col items-center md:grid md:gap-4 md:grid-cols-3" > 
    
    

     {usuarios.filter((usuario)=>{
        if(search===''){
          return usuario
        }else if(
           usuario.name.first.toLowerCase().includes(search.toLowerCase()) || usuario.email.toLowerCase().includes(search.toLowerCase())
        )
         return usuario
        
     }).map((usuario)=>(
      <Card
      key={usuario.email}
      phone={usuario.phone}
      mail={usuario.email}
      user={usuario.name.first}
      image={usuario.picture.large}
      gender={usuario.gender}
      />
    ))}
     
    </div>
    </div>
  )
}

export default App
