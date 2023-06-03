import {Parallax ,ParallaxLayer} from '@react-spring/parallax';
import NCCC from './images/NCC.jpg';    
import NCCLOGO from './images/ncc1.jpg';
export default function NCC() 
{
   
    return (
        <>
      <Parallax pages={3 }>
        <ParallaxLayer
  offset={0}
  speed={0.5}
  factor={1.5}
  style={{
    backgroundImage: `url(${NCCC})`,
    backgroundSize: 'cover',
  }}
>
<h1 className="text-6xl font-bold pt-10 flex justify-center items-center pb-10 bg-gradient-to-r from-red-700 via-blue-950 to-cyan-800 text-white">NCC</h1>
<img src={NCCLOGO} alt="NCC" className="logo-image absolute top-0 left-0 w-[14%] h-auto ml-4 mt-4" />

</ParallaxLayer>
                    
<ParallaxLayer offset={1} speed={0.5} factor={3 }>
  <div className="content-overlay absolute top-0 left-0 right-0 bottom-0 flex justify-center p-20">
    
    <div className="bg-gradient-to-r from-red-700 via-blue-950 to-cyan-800 text-white">
      <h2 className="text-5xl flex justify-center p-5 underline">Types of NCC Badges:</h2>
      
      <p className="text-2xl ">NCC badges serve as a symbol of the cadets achievements, skills, and dedication to the NCC program. They also serve as a motivation for other cadets to strive for excellence and achieve their goals in the NCC. Here is a breakdown of the different types of badges awarded by the NCC:</p>

      <ul>
        <li  className="p-4"><h4  className="text-xl underline ">NCC Proficiency Badges:</h4> These badges are awarded for proficiency in specific activities such as shooting, drill, map reading, and first aid. Cadets must pass specific tests to demonstrate their proficiency in these areas to be eligible for the badge.</li>
        <li className="p-4"><h4 className="text-xl underline">NCC Service Badges or NCC Community Service Badges:</h4> These badges are awarded for participation in community service activities such as blood donation, tree plantation, and disaster relief. Cadets must complete a minimum number of hours of service to be eligible for the badge.</li>
        <li className="p-4"><h4 className="text-xl underline">NCC Special Achievement Badges:</h4> These badges are awarded for special achievements such as representing the state or country in a sport or cultural event. Cadets must meet specific criteria and demonstrate exceptional skills in the area of achievement to be eligible for the badge.</li>
        <li className="p-4"><h4 className="text-xl underline">NCC Leadership Badges: </h4>These badges are awarded for demonstrating leadership skills such as organizing and leading a successful camp or trek. Cadets must demonstrate exceptional leadership skills and successfully complete the leadership training program to be eligible for the badge.</li>
        <li className="p-4"><h4 className="text-xl underline">NCC Institutional Training Badges: </h4>These badges are awarded for completing institutional training programs such as the Army Attachment Camp, Navy Attachment Camp, or Air Force Attachment Camp. Cadets must successfully complete the training program to be eligible for the badge.</li>
        <li className="p-4"><h4 className="text-xl underline">NCC Prestigious badges:</h4> These are the highest level of badges awarded by the NCC and are given for outstanding performance and achievements in various areas of NCC training and activities. These include badges such as the Best Cadet badge, which is awarded to the cadet who excels in all aspects of training and is selected as the best among all cadets, and the Champion Platoon badge, which is awarded to the platoon that demonstrates the highest level of training and discipline.</li>
        <li className="p-4"><h4 className="text-xl underline">NCC Overseas badges:</h4> These badges are awarded to cadets who participate in international exchange programs and represent the NCC in other countries. The badges signify the cadets successful completion of the exchange program and their contribution to promoting goodwill and cultural exchange between India and other countries.</li>
        <li className="p-4"><h4 className="text-xl underline">NCC Course badges:</h4> These badges are awarded to cadets who successfully complete various NCC courses, such as the Basic Leadership Course, Advance Leadership Course, and the Army Attachment Camp. These badges signify the cadets achievement in completing the specific course and their commitment to developing their leadership and military skills.</li>
        <li className="p-4"><h4 className="text-xl underline">NCC Recognition badges:</h4> These badges are awarded to cadets who excel in specific areas of training or activities, such as sports, social services, adventure activities, and community development. These badges signify the cadets dedication and contribution to specific areas of NCC activities and their commitment to personal and community development.</li>
        <li className="p-4"><h4 className="text-xl underline">NCC Adventure training badges -</h4> These badges are given to cadets who participate in adventure sports and activities, such as mountaineering, rock climbing, trekking, and sailing.</li>
        <li className="p-4"><h4 className="text-xl underline">NCC Merit badges</h4> - NCC Merit badges are given to cadets who excel in academics, sports, and other extracurricular activities.</li>
        <li className="p-4"><h4 className="text-xl underline">NCC Incentive badges -</h4> NCC incentive badges are awarded to cadets who participate in special training camps, parades, and other important NCC events.</li>
        <li className="p-4"><h4 className="text-xl underline">NCC Appointment badges - </h4>NCC Appointment badges are given to cadets who are appointed to various positions of responsibility within the NCC unit.</li>
      </ul>

      <p>NCC National Awards Badges, NCC Skill Badges, NCC Physical Fitness Badges, and NCC Attachment Badges are some of the other popular badges awarded by the NCC.</p>
    </div>
  </div>
</ParallaxLayer>
</Parallax>
        </>
        
    );
}
