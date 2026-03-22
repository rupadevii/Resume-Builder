import { useInfo } from '../context/InfoContext'
import Template1 from '../components/template1/Template1'
import Template2 from '../components/template2/Template2'
import Template3 from '../components/template3/Template3'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function PreviewPage() {
    const aiResponse = JSON.parse(localStorage.getItem("ai_response")) || {}
    const {info} = useInfo()
    const {template} = useParams()
    const navigate = useNavigate()

    return (
        <main className='pt-18'>
            <section>
                <div className='h-16 px-20 flex items-center'>
                    <span onClick={() => navigate(-1)} className='flex items-center gap-1 hover:underline underline-offset-2 cursor-pointer'><ArrowLeft size={18}/> Back</span>
                </div>
                <div className='flex'>
                    <div className='w-[49%]'>
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

                    <div className='w-[49%]'>
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
                </div>
            </section>
        </main>
    )
}
