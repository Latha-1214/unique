
// import { Link } from 'react-router-dom';
import './Home.css'
import cam from './Image/camera1.webp'
import food from './Image/food.png'
import travel from './Image/travelnature.jpg'
import travelconcept from './Image/travelconcept.jpg'

import { Link } from 'react-router-dom'


function Home(){
    


    return(
        <div style={{background:"black", margin:0,padding:0,boxSizing:"border-box", display:"flex",
            justifyContent:"center", alignItems:"center", minHeight:"100vh", 
        }}>

        <div className="header">
            
            <div className="logo">
            <pre><i><p>The </p>
              <p >Spice of</p>   
                 
                <p>Life</p></i></pre>
                

            </div>
            <div className='buttonstyle'>
                   <Link to={'/wish'}> <button style={{background:"black", color:"white", padding:"10px", 
                        alignItems:"center",marginLeft:"100px"}}><i>Surprise</i></button></Link>
                 </div>
            </div>

            <div className='container'>
                <div className='icon'>
                    <div className='imgbx active' style={{'--i':1}}
                    >
                        <img src={cam} alt='camera'/>
                    </div>
                    <div className='imgbx' style={{'--i':2}}
                    >
                        <img src={food} alt='foodie'/>
                    </div>
                    <div className='imgbx' style={{'--i':3}}
                    >
                        <img src={travel} alt='traveller'/>
                    </div>
                    <div className='imgbx' style={{'--i':4}}
                    >
                        <img src={travelconcept} alt='concept'/>
                    </div>
                </div>
                <div className='content'>
                    
                 </div>
                 
                
            </div>


                    
        </div>
    )
}
export default Home;