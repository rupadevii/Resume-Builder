import React from 'react'
import Heading from './Heading'
import { formatDate } from '../../utils/date.util'

export default function Experience({data}) {

    return (
        <>
            {data.workExperience.map((item, index) => (
                <div className='mb-2' key={index}>
                    <div className='flex justify-between'>
                        <div className='w-380'>
                            <h2 className='font-bold'>{item.designation}</h2>
                            <p className='text-stone-700 italic'>{item.companyName}</p>
                            {/* <ul>
                                {item.desc.split(".").map(item => (
                                    <li className='list-disc'>{item}</li>
                                ))}
                            </ul> */}
                            <p>{item.desc}</p>
                        </div>
                        <div className='text-sm w-100'>
                            {item.startDate && (
                                <span>{formatDate(item.startDate)}</span>
                            )}
                            {item.endDate && (
                                <span>- {formatDate(item.endDate)}</span>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
