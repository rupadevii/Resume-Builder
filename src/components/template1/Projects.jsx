import { Github, Link } from 'lucide-react'

export default function Projects({data}) {
    return (
        <>
            {data.projects.map((item, index) => (
                <div key={index}>
                    <div className='flex justify-between items-start'>
                        <div>
                            <span className='font-bold mr-3'>{item.title}</span> 
                            <span className='text-stone-700'>{item.technologies.join(" | ")}</span>
                            <ul className='pl-4'>
                                {item.desc.split("\n").slice(0).map(item => (
                                    <li className='list-disc'>{item}</li>
                                ))}
                            </ul>
                            {/* <p className='text-sm'>{item.desc}</p> */}
                        </div>
                        <div className='flex gap-2 items-center'>
                            {item.liveURL && (
                                <a href={item.liveURL}>
                                    <Link size={16}/>
                                </a>
                            )}
                            {item.githubURL && (
                                <a href={item.githubURL} className='underline underline-offset-2'>
                                    {/* <Github size={16}/> */}
                                    Github
                                </a>
                            )}
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            ))}     
        </>
    )
}
