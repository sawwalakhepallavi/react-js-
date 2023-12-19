import React from 'react'
import "./Section.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Section = () => {
  return (
    <div className='Corousel'>
            <Carousel>  
                <div>  
                    <img src="https://st4.depositphotos.com/1273429/23905/i/450/depositphotos_239053950-stock-photo-portrait-handsome-smiling-man-wearing.jpg"  style={{height:'600px',width:'80%', margin:'auto'}}></img>
                    <h1>Fashion sale</h1>
                    <p className="legend">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quidem cupiditate aliquam delectus quae harum dignissimos ad voluptatum animi doloremque eos eaque, expedita quam exercitationem! Assumenda ab repudiandae voluptatum sit dolore, nam modi quibusdam ea, corporis velit dicta atque architecto voluptas officiis rerum est? Explicabo aliquid enim rem odio non ab praesentium ullam consequatur nostrum? Officia corporis nam perferendis? Soluta ad modi sed libero aspernatur doloribus iure impedit ratione maxime similique tempore odit natus quidem corrupti alias provident minus, iusto culpa sit vero magni inventore rem qui! Qui quia itaque adipisci, nostrum, asperiores numquam quos natus atque sequi suscipit id.</p>  
                </div>  
                <div>  
                    <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/hero/h1_hero2.jpg" />  
                    <h1>Fashion sale</h1>
                    <p className="legend">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem veritatis minima commodi ad repellendus, libero beatae, nulla pariatur quibusdam dolorem tempore laudantium odit dignissimos explicabo praesentium? Facilis earum odio quidem voluptatibus ipsum, iusto sunt repudiandae blanditiis ducimus quos cupiditate dolorum officia error delectus, enim maiores? Molestias dolorem suscipit blanditiis dolor?</p>  
                </div>  
            </Carousel>  
    </div>
  )
}

export default Section