import React from 'react'
import Heading from './Heading'

export default function Skills({data}) {
    console.log(Object.values(data.skills))
    return (
        <div>
            {Object.values(data.skills).some(item => item.length>0) && (
                <Heading label={"SKILLS"}/>
            )}
            <ul>
                {data.skills.technical.length>0 && (
                    <li><b>Technical Skills: </b>
                        {data.skills.technical.join(", ")}
                    </li>
                )}
                {data.skills.soft.length>0 && (
                    <li><b>Soft Skills: </b>
                        {data.skills.soft.join(", ")}
                    </li>
                )}
                {data.skills.tools.length>0 && (
                    <li><b>Tools : </b>
                        {data.skills.tools.join(", ")}
                    </li>
                )}
            </ul>
        
        </div>
    )
}
