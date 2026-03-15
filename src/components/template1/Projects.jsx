import React from 'react'
import Heading from './Heading'
import { Github, Link } from 'lucide-react'

export default function Projects({data}) {
    return (
        <>
            {data.projects[0].title && (
                <div>
                    <Heading label={"PROJECTS"}/>
                    {data.projects.map((item, index) => (
                        <div key={index}>
                            <div className='flex justify-between'>
                                <div>
                                    <span className='font-bold mr-3'>{item.title}</span> 
                                    <span className='text-stone-700'>{item.technologies.join(" | ")}</span>
                                    <p>{item.desc}</p>
                                </div>
                                <div className='flex gap-2'>
                                    <a href={item.liveURL}>
                                        <Link size={16}/>
                                    </a>
                                    <a href={item.githubURL}>
                                        <Github size={16}/>
                                    </a>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}
