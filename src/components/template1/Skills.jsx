import React from 'react'
import Heading from './Heading'

export default function Skills({data}) {
    return (
        <div>
            <Heading label={"SKILLS"}/>
            <ul>
                <li><b>Technical Skills: </b>
                    {data.skills.technical.join(", ")}
                </li>
                <li><b>Soft Skills: </b>
                    {data.skills.soft.join(", ")}
                </li>
                <li><b>Tools : </b>
                    {data.skills.tools.join(", ")}
                </li>
            </ul>
        
        </div>
    )
}
