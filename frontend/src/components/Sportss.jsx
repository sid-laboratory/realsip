// import { Link } from 'react-router-dom';
import {Parallax ,ParallaxLayer} from '@react-spring/parallax';
import myImage from './images/cricket.avif';
import Basketball from './images/basketball.jpg';



  export default function Sports () 
    {
       
        return (
            <>
            <Parallax pages={5}>
               

                <ParallaxLayer offset={0} speed={0.5} factor={1.5}
                style= {{
                    backgroundImage: `url(${myImage})`,
                    backgroundSize: 'cover',
                }}


              
                
                >
                  <div className="content-overlay absolute top-0 left-0 right-0 bottom-0 flex justify-center p-20">
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
                  <div className="content-overlay absolute top-0 left-0 right-0 bottom-0 flex justify-center p-20">
                        <h1 className="text-6xl text-white font-semibold text-center pl-20">
                              PASSIONATE ABOUT BASKETBALL  <br /><br/>
                              WE GOT YOU COVERED.
                         </h1>
                  </div>
             
                   </ParallaxLayer>



                <ParallaxLayer>

                </ParallaxLayer>            



            </Parallax>
            
            </>
            
        );
    }
