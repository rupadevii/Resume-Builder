import React from 'react'
import Preview from '../components/preview/Preview'
import { useInfo } from '../context/InfoContext'
import Template1 from '../components/template1/Template1'
import { useTemplate } from '../context/TemplateContext'
import Template2 from '../components/template2/Template2'
import Template3 from '../components/template3/Template3'

export default function PreviewPage() {
    const aiResponse = JSON.parse(localStorage.getItem("ai_response")) || {}
    const {info} = useInfo()
    const {template} = useTemplate()

    return (
        <main className='flex'>
            <div className='w-[49%] border pt-18'>
                {template==="template1" && (
                    <Template1 data={info}/>
                )}
                {template==="template2" && (
                    <Template2 data={info}/>
                )}
                {template==="template3" && (
                    <Template3 data={info}/>
                )}
            </div>
            <div className='w-[49%] border pt-18'>
                {Object.keys(aiResponse).length ===0 ? (
                    <div>No Preview</div>
                ): (
                   <div>
                        {template==="template1" && (
                            <Template1 data={aiResponse}/>
                        )}
                        {template==="template2" && (
                            <Template2 data={aiResponse}/>
                        )}
                        {template==="template3" && (
                            <Template3 data={aiResponse}/>
                        )}
                    </div> 
                )}
            </div>
        </main>
    )
}
