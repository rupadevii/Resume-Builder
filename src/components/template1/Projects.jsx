import React from 'react'
import Heading from './Heading'
import { Github } from 'lucide-react'

export default function Projects({data}) {
    return (
        <div>
            <Heading label={"PROJECTS"}/>
            {data.projects.map((item, index) => (
                <div className='job' key={index}>
                    <div className='flex justify-between'>
                        <div>
                            <span className='font-bold mr-3'>{item.title}</span> 
                            <span className='text-stone-700'>{item.technologies.join(" | ")}</span>
                            <p>{item.desc}</p>
                        </div>
                        <div>
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
    )
}
