import { Link } from "react-router-dom"
import Image1 from './Image/amazon.jpg'
import './Navbar.css'

const Navbar = ({setSearch,size,data,setData}) => {

  const filterResult=(catItem)=>{
    const result=data.filter((curData)=>{
      return curData.category===catItem
    })
    console.log(result);
    setData(result)
  }

  const filterResult2=(catItem)=>{
    const result=data.filter((curData)=>{
      return curData.category===catItem
    })
    console.log(result);
    setData(result)
  }

  const filterResult3=(catItem)=>{
    const result=data.filter((curData)=>{
      return curData.category===catItem
    })
    console.log(result);
    setData(result)
  }

  const filterResult4=(catItem)=>{
    const result=data.filter((curData)=>{
      return curData.category===catItem
    })
    console.log(result);
    setData(result)
  }
  return (
    <div className="Navbar">
      <nav className="nav">
        <article className="Navart">
            <div className="navdiv"><img src={Image1} alt="" height={'50px'} width={'50px'}/></div>
            <div className="navdiv"><Link style={{color:'white'}} to='/'>Home</Link></div>
            <div className="navdiv"><input onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="search product" /></div>
            <div className="navdiv"><Link style={{color:'white',textDecoration:'none' }} to='/cart'><i class="fa-solid fa-cart-shopping"></i><sup>{size}</sup></Link></div>

        </article>
        <article className="Artbtn">
            <button onClick={()=>filterResult(`men's clothing`)}>Men</button>
            <button onClick={()=>filterResult2(`women's clothing`)}>Women</button>
            <button onClick={()=>filterResult3(`electronics`)}>Electronic</button>
            <button onClick={()=>filterResult4(`jewelery`)}>Jewellery</button>
        </article>
        </nav>
    </div>
  )
}

export default Navbar