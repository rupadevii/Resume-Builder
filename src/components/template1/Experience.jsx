import React from 'react'
import Heading from './Heading'
import { formatDate } from '../../utils/date.util'

export default function Experience({data}) {

    return (
        <div className='experience'>
            <Heading label={"PROFESSIONAL EXPERIENCE"}/>
            {data.workExperience.map((item, index) => (
                <div className='mb-2' key={index}>
                    <div className='flex justify-between'>
                        <div>
                            <h2 className='font-bold'>{item.designation}</h2>
                            <p className='text-stone-700 italic'>{item.companyName}</p>
                            <p>{item.desc}</p>
                        </div>
                        <div className='text-sm w-100'>
                            <span>{formatDate(item.startDate)} - {formatDate(item.endDate)}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
