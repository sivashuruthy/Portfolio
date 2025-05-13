
import Groupimg from '../Assets/Groupimage.png'
export default function About(){
    const config = {
        line1 :'Hi I\'m Sivashuruthy,I am a Full stack web developer. I built beautiful Websites with React.js , Tailwind CSS + Bootstrap',
        line2 :'In frontEnd the skills I know about HTML,CSS,Bootstrap,Tailwind CSS, Javascript,React Js. ',
        line3 :'In BackEnd  I know Python, Node js, SQL and Mysql Database. '
    }
    return <section className="flex flex-col md:flex-row  bg-section font-woment-font2 px-5 " id='about'>
        <div className='md:w-1/2 py-5'>
            <img src= {Groupimg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
           <div className='flex flex-col justify-center'>
           <h1 className='text-4xl border-b-4 border-secondary mb-5 font-bold w-[170px]'>About Me</h1>
           <p className='pb-5 '>{config.line1}</p>
           <p className='pb-5'>{config.line2}</p>
           <p className='pb-5'>{config.line3}</p>
           </div>
        </div>
        </section>
}