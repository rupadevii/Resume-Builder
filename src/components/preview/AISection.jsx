import { useState } from 'react'
import AIPreview from './AIPreview'
import axios from 'axios'
import { useInfo } from '../../context/InfoContext'

export default function AISection() {
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const [aiResponse, setAiResponse] = useState({})
    const {info} = useInfo()

    async function refineResume(){
        try{
            setLoading(true)
            const res = await axios.post("http://127.0.0.1:5000/api/refine-resume", {resumeData:info})
            setAiResponse(res.data.data)
            console.log(res.data)
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
            setShow(true)
        }

    }

    function handleClick(){
        refineResume()
        // setShow(true)
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
                        <h3 className="text-xl">
                            Your resume has not been refined with AI yet. To get an enhanced version of your resume, click below
                        </h3>
                        <button onClick={handleClick} className="bg-black text-white px-4 py-2 rounded-md">Refine using AI</button>
                    </div>
                </div>
            ) : (
                <AIPreview data={aiResponse}/>
            )}
        </section>
    )
}
