import { useState } from 'react'
import axios from 'axios'
import { useInfo } from '../../context/InfoContext'
import Template1 from '../template1/Template1'
import Template2 from '../template2/Template2'
import Template3 from '../template3/Template3'
const URL = import.meta.env.VITE_BASE_URL

export default function AISection({template, setShow, show}) {
    const [loading, setLoading] = useState(false)
    const [aiResponse, setAiResponse] = useState({})
    const {info} = useInfo()

    async function refineResume(){
        try{
            setLoading(true)
            const res = await axios.post(`${URL}/api/refine-resume`, {resumeData:info})
            setAiResponse(res.data.data)
            localStorage.setItem("ai_response", JSON.stringify(res.data.data))
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
            setShow(true)
        }

    }

    function handleClick(){
        refineResume()
    }

    if(loading){
        return (
            <div className='flex h-140 justify-center items-center bg-white border w-198'>
                Loading...
            </div>
        )
    }
    return (
        <section>
            {!show ? (
                <div className='flex h-140 justify-center items-center bg-white border w-198'>
                    <div className="w-115 flex justify-center flex-col items-center gap-3">
                        <h3 className="text-lg text-center">
                            Your resume has not been refined with AI yet. To get an enhanced version of your resume, click below
                        </h3>
                        <button onClick={handleClick} className="bg-black text-white px-4 py-2 rounded-md hover:bg-stone-600 text-lg">Use AI</button>
                    </div>
                </div>
            ) : (
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
        </section>
    )
}
