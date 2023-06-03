// import { Link } from 'react-router-dom';
import {Parallax ,ParallaxLayer} from '@react-spring/parallax';
import myImage from './images/cricket.avif';
import Basketball from './images/basketball.jpg';
import Volleyball from './images/peakpx.jpg';   
import image1 from './images/kabaddi.jpg';
import image2 from './images/badminton.jpg';
import image3 from './images/newkhokho.jpg';
import image4 from './images/newpingpong.jpg';



  export default function Sports () 
    {
       
        return (
            <>
            <Parallax pages={4 }>
               

                <ParallaxLayer offset={0} speed={0.5} factor={1.5}
                style= {{
                    backgroundImage: `url(${myImage})`,
                    backgroundSize: 'cover',
                }}


              
                
                >
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center p-20">
                        <h1 className="text-6xl text-white font-semibold text-center">
                              WORLD CLASS CRICKET <br /><br/> CHAMPIONSHIP MATCHES
                         </h1>
                  </div>
             
                   </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.5} factor={1.5}
                style= {{
                    backgroundImage: `url(${Basketball})`,
                    backgroundSize: 'cover',
                }}


              
                
                >
                  <div className=" absolute top-0 left-0 right-0 bottom-0 flex justify-center p-20">
                        <h1 className="text-6xl text-white font-semibold text-center pl-20">
                              PASSIONATE ABOUT BASKETBALL  <br /><br/>
                              WE GOT YOU COVERED.
                         </h1>
                  </div>
             
                   </ParallaxLayer>


                  <ParallaxLayer
  offset={2}
  speed={0.5}
  factor={1.5}
  style={{
    backgroundImage: `url(${Volleyball})`,
    backgroundSize: 'cover',
  }}
>
  <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center p-20">
    <h1 className="text-6xl text-white font-semibold text-center pl-20">
      DO YOU THINK YOU ARE A PRO AT VOLLEYBALL? <br /><br/>
      THEN SHOWCASE YOUR SKILLS IN THE UPCOMING MATCHES
    </h1>
  </div>
</ParallaxLayer>  
<ParallaxLayer
  offset={3}
  speed={0.5}
  factor={1.5}>
<div className="flex">
      <div className="w-1/4 h-screen bg-cover bg-center" style={{ backgroundImage: `url(${image1})` }}>
      <h1 className="flex text-white  justify-start  text-[56px] rotate-[270deg]">KABADDI</h1>
      </div>
      <div className="w-1/4 h-screen bg-cover bg-center" style={{ backgroundImage: `url(${image2})` }}>
      <h1 className="flex text-emerald-500 justify-start  text-[37px] rotate-[270deg]">BADMINTON</h1>
      </div>
      <div className="w-1/4 h-screen bg-cover bg-center" style={{ backgroundImage: `url(${image3})` }}>
      <h1 className="flex text-white    justify-start  text-[50px] rotate-[270deg]">KHO-KHO</h1>
      </div>
      <div className="w-1/4 h-screen bg-cover bg-center" style={{ backgroundImage: `url(${image4})` }}>
      <h1 className="flex text-emerald-500 justify-start  text-[41px] rotate-[270deg]">PING-PONG</h1>
      </div>
    </div>


</ParallaxLayer>


            </Parallax>
            
            </>
            
        );
    }
