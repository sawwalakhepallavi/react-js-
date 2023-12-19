import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({setSearch,size,data,setData}) => {

    const filterResult = (cartItem)=>{
        const result = data.filter((curData)=>{
            return curData.category===cartItem
        })
        console.log(result);
        setData(result)
    }

    const filterResult2 = (cartItem)=>{
        const result = data.filter((curData)=>{
            return curData.category===cartItem
        })
        setData(result)
    }

    const filterResult3 = (cartItem)=>{
        const result = data.filter((curData)=>{
            return curData.category===cartItem
        })
        setData(result)
    }

    const filterResult4 = (cartItem)=>{
        const result = data.filter((curData)=>{
            return curData.category===cartItem
        })
        setData(result)
    }


  return (
    <div className='navbar'>
        <nav className='nav'>
        <article className='navart'>
            <div className='navdiv'>
                <Link style={{color:'white',textDecoration:'none'}} to='/'>
                   <h1>ShopMore</h1>
                </Link>
            </div>
            <div className='navdiv'>
                <input onChange={((e)=>setSearch(e.target.value))} type="search" placeholder='Search your Products'/>
            </div>
            <div className='navdiv'>
                <Link style={{color:'white',textDecoration:'none'}} to='/cart'><h1>🛒<sup>{size}</sup></h1></Link>
            </div>
        </article>
        <article className='Artbtn'>

            <button onClick={()=>filterResult(`men's clothing`)}> Men</button>
            <button onClick={()=>filterResult2(`women's clothing`)}>Women</button>
            <button onClick={()=>filterResult3(`electronics`)}>Electronics</button>
            <button onClick={()=>filterResult4(`jewelery`)}>Jewellery</button>
        </article>
        </nav>
    </div> 
  )
}

export default Navbar