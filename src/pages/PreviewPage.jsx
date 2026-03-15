import React, { Activity, useRef, useState } from 'react'
import { useInfo } from '../context/InfoContext'
import Template1 from '../components/template1/Template1'
import { useReactToPrint } from 'react-to-print'

export default function PreviewPage() {
    const {info} = useInfo()
    // const [aiResponse, setAiResponse] = useState()
    const [isShowing, setIsShowing] = useState(false)
    const ref = useRef()
    const handlePrint = useReactToPrint({
        contentRef: ref,
        documentTitle: "Resume"
    })
    
    return (
        <div>
            <div className='mb-3 flex'>
                <button onClick={handlePrint} className='border px-3 py-1 rounded-md mr-5'>Export PDF</button>
                <div className='flex gap-3'>
                    <div onClick={() => setIsShowing(false)} className={`${!isShowing && "bg-black text-white"} px-3 py-2 rounded-md`}>Preview</div>
                    <div onClick={() => setIsShowing(true)} className={`${isShowing && "bg-black text-white"} px-3 py-2 rounded-md`}>AI</div>
                </div>
            </div>
            <div ref={ref}>
                <Template1 data={info}/>
                <Activity mode={isShowing ? "visible" : "hidden"}>
                    {/* <Template1 data={aiResponse}/> */}
                </Activity>
            </div>
        </div>
    )
}
