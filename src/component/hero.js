import WomenPng from '../Assets/Womenimage (2).png';
import { AiOutlineInstagram,AiOutlineLinkedin,AiOutlineGithub,AiOutlineMail } from "react-icons/ai";
export default function Hero(){
    const config ={
        subject : 'I\'m a full stack Developer',
        social: {
            instgram : '#',
            linkedin : '#',
            github : '#',
            gmail : '#'
        }
    }
    return <section className='flex flex-col md:flex-row bg-secondary px-5 py-32 justify-center' id='hero'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className='text-6xl font-woment-font2'>Hi,<br/> Im <span className='text-custom-color'>Sivashuruthy</span>
               <p className='text-2xl'>{config.subject}</p>
            </h1>
            <div className='flex py-6'>
                <a target='_blank' href={config.social.instgram} className='pr-5 hover:text-custom-color text-black '><AiOutlineInstagram size={40}/></a>
                <a target='_blank' href={config.social.linkedin} className='pr-5 hover:text-custom-color text-black'><AiOutlineLinkedin size={40}/></a>
                <a target='_blank' href={config.social.github}className='pr-5 hover:text-custom-color text-black'><AiOutlineGithub size={40}/></a>
                <a target='_blank' href={config.social.gmail} className='hover:text-custom-color text-black'><AiOutlineMail size={40}/></a>
            </div>
        </div>
        <img src = {WomenPng} className='md:w-1/3'/>
    </section>
}