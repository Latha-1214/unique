import './Asset.css'

import pic3 from './Image/3.jpg'

import pic6 from './Image/6.jpg'
import pic7 from './Image/7.jpg'
import pic8 from './Image/8.jpg'

import pic10 from './Image/10.jpg'

import pic15 from './Image/15.jpg'
import pic16 from './Image/16.jpg'

import pic18 from './Image/18.jpg'

import pic21 from './Image/21.jpg'
import pic22 from './Image/22.jpg'

import pic24 from './Image/24.jpg'

import pic30 from './Image/30.jpg'
import pic31 from './Image/31.jpg'

import pic33 from './Image/33.jpg'

import pic35 from './Image/35.jpg'
import pic36 from './Image/36.jpg'
import pic37 from './Image/37.jpg'
import { Link } from 'react-router-dom'




function Asset() {

    const images=[pic3,pic6,pic7,pic8,pic10,pic15,pic16,pic18,
        pic21,pic22,pic24,pic30,pic31,pic33,pic35,pic36,pic37];

   

    return (
        
        <div className='banner'>
            <div className='buttonstyle'>
                   <Link to={'/'}> <button style={{background:"teal", color:"white", padding:"10px", 
                        alignItems:"center",marginLeft:"100px", marginBottom:0, marginTop:0}}><i>Back to Home</i></button></Link>
                 </div>
            
            <div className='slider'>

                {images.map((image,index)=>(
                    
                     <div key={index} className='item'>
                    
                     

                        <img src={image} alt={`Pic ${index+1}`}/>
                        </div>
                ))}
                
                
          </div>  
        </div>


        
    )
}
export default Asset;