import React from 'react'

const App = () => {
  const[data,setData]=useState([])
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then(d=>setDate(d))
  })
  return (
    <div>
        <section className="flex justify-around items:'center' flex-wrap gap-2 " style={{height:'auto', width:'100%',}}>
          {data.length>0 && data.map((x)=>{
            return(
              <div style={{height:'auto' , width:'300px'}} key={x.id}>
                <img className='object-cover hover:skew-x-2 hover:skew-y-2' style={{height:'200px' , width:'300px'}} src={x.imgs}></img>
                <h1 className="text-20 font-bold">{x.title}</h1>
                <button className='hover:scale 125 duration-1000 delay-500 ease-in-out border-orange-500'>Add cart</button>
              </div>
            )
          })}
        </section>
    </div>
  )
}

export default App