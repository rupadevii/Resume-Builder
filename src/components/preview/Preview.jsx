import React, { Activity, useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print'
import { useInfo } from '../../context/InfoContext'
import Template1 from '../template1/Template1'
import AISection from './AISection'
import Template3 from '../template3/Template3'
import Template2 from '../template2/Template2'

export default function Preview({template}) {
    const {info} = useInfo()
    const [isShowing, setIsShowing] = useState(false)
    const ref = useRef()
    const handlePrint = useReactToPrint({
        contentRef: ref,
        documentTitle: "Resume"
    })
    
    return (
        <div>
            <div className='mb-3 flex justify-between'>
                <div className='flex gap-1'>
                    <div onClick={() => setIsShowing(false)} className={`${!isShowing && "bg-black text-white"} px-3 py-2 rounded-md cursor-pointer hover:bg-black hover:text-white`}>Preview</div>
                    <div onClick={() => setIsShowing(true)} className={`${isShowing && "bg-black text-white"} px-3 py-2 rounded-md cursor-pointer hover:bg-black hover:text-white`}>AI</div>
                </div>
                <button onClick={handlePrint} className='border px-3 py-1 rounded-md mr-5 hover:bg-stone-300'>Export PDF</button>
            </div>
            <div ref={ref}>
                <Activity mode={!isShowing ? "visible" : "hidden"}>
                    {template==="template1" && (
                        <Template1 data={info}/>
                    )}
                    {template==="template2" && (
                        <Template2 data={info}/>
                    )}
                    {template==="template3" && (
                        <Template3 data={info}/>
                    )}
                </Activity>
                <Activity mode={isShowing ? "visible" : "hidden"}>
                    <AISection template={template}/>
                </Activity>
            </div>
        </div>
    )
}
