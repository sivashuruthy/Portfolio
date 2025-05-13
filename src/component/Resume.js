
import Resumeimg from '../Assets/resume.jpg'
export default function Resume(){
    const config ={
        resume : 'https://pdfobject.com/pdf/sample.pdf'
    }
    return <section className="flex flex-col md:flex-row  bg-section font-woment-font2 px-5 " id='resume'>
        <div className='md:w-1/2 py-5 flex justify-center md:justify-end '>
            <img className='w-[300px]' src= {Resumeimg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
           <div className='flex flex-col justify-center'>
           <h1 className='text-4xl border-b-4 border-secondary mb-5 font-bold w-[117px]'>Resume</h1>
           <p className='pb-5 '>you can view my resume <a className='btn' href={config.resume} target='_blank'>Download</a></p>
            </div>
        </div>
        </section>
}