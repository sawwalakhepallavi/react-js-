import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Data from '../Data'
import Card from './Card'
import './Home.css'


const Home = ({search,handlClick,data}) => {
  return (
    <div className="Home">
        <Carousel>
            {data.filter((item)=>item.category.toLocaleLowerCase().includes(search)).map((item)=>{
                return(
                    <header key={item.id} style={{height:'600px',width:'80%', margin:'auto'}}>
                        <div>
                            <img src={item.image} />
                            <p>
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                                <p>{item.price}Rs</p>
                                <p>{item.rating.rate}⭐</p>
                                <button onClick={()=>handlClick(item)}>Add Cart</button>
                            </p>
                        </div>
                    </header>
                )
            })}
        </Carousel>
        <section className="sec">
        {data.filter((item)=>item.category.toLocaleLowerCase().includes(search)).map((item)=>{
            return(
                <Card key={item.id} item={item} handlClick={handlClick}/>
            )
        })}
        </section>
    </div>
  )
}

export default Home