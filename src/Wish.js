import './Wish.css'
import pic1 from './Image/img1.jpg'
import pic2 from './Image/img2.jpg'
import pic3 from './Image/img3.jpg'
import pic4 from './Image/img4.jpg'
import pic5 from './Image/img5.jpg'
import pic6 from './Image/img6.jpg'
import { Link } from 'react-router-dom'
import Bubble from './Bubble'


function Wish(){

    



    return(
        <div className='birthday-container'>
            <div><Bubble/></div>
            <div className='top-images'>

            
                <img src={pic1} alt="image1" className='image top-left-image'/>
                <img src={pic2} alt="image2" className='image top-right-image'/>
            </div>
            <div className='middle-images'>

                <img src={pic3} alt="image3" className='image middle-left-image'/>
                <img src={pic6} alt="image6" className='image middle-right-image'/>
            </div>
            <div className='birthday-message'>
                <p>As I know you, being surrounded by these people would make you the 
                    happiest person in this world. 
                    So I made a small gesture on your special day....</p>
                <p><i style={{color:"white", fontSize:"30px"}}>Wishing my bestest buddy a very Happy Birthday!</i></p>
                <p>Enjoy your day to the fullest!!!</p>
                <Link to={"/asset"}><button className='btn'>Open</button></Link>


            </div>
            <div className='bottom-images'>            
                <img src={pic4} alt="image4" className='image bottom-left-image'/>
                <img src={pic5} alt="image5" className='image bottom-right-image' />
            </div>
            
            
        </div>
    )
}
export default Wish;