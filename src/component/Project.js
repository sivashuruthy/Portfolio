import websiteImg1 from '../Assets/desktop.jpg'
import websiteImg2 from '../Assets/website1.jpg'
import websiteImg3 from '../Assets/website2.jpg'

export default function Project(){
    const config = {
        project :[
            {
                image : websiteImg1,
                description:'project 1',
                link:'https://github.com/sivashuruthy'
            },
            {
                image : websiteImg2,
                description:'project 2',
                link:'https://github.com/sivashuruthy'
            },
            {
                image : websiteImg3,
                description:'project 3',
                link:'https://github.com/sivashuruthy'
            }
        ]
    }
    return <section className="flex  flex-col py-20 px-5 justify-center  bg-secondary" id='project'>
        <div className="w-full font-woment-font2">
            <div className='flex flex-col px-10 py-5'>
                <h1 className='text-4xl  w-[115px] mb-5 font-bold'>Project</h1>
                <p>this is about my project , here i display smmy some of my project in the website</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row gap-5 px-10'>
                {config.project.map((projects) =>
                    <div className='relative'>
                        <img src={projects.image} className='h-[300px] w-[500px]'/>
                        <div className='project-desc'>
                            <p className='text-white text-center py-5'>{projects.description}</p>
                            <div className=' flex justify-center'>
                            <a href={projects.link} target='_blank' className='btn'>Link</a>
                        </div>
                        </div>
                        
                    </div>
                )}   
            </div>
        </div>
    </section>
}