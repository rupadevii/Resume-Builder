import Button from '../components/ui/Button'
import { useInfo } from '../context/InfoContext'
import { useNavigate } from 'react-router-dom'
import { useTemplate } from '../context/TemplateContext'

export default function HomePage(){
    const {info, setInfo} = useInfo()
    const {setTemplate} = useTemplate()
    const navigate = useNavigate()

    function handleClick(type){
        setInfo(prev => ({...prev, resumeType: type}))
    }
    
    function chooseTemplate(type){
        setTemplate(type)
        navigate(`/build`)
    }

    return (
        <main className='flex h-[100vh-20px] justify-center items-center'>
            <section className='w-190 h-170 text-center flex items-center flex-col justify-center gap-10'>
                <div>
                    <h2 className='text-4xl font-extrabold'>Choose Resume Type</h2>
                    <div className='flex gap-4 my-6'>
                        <Button handleClick={handleClick} label="Beginner" isActive={info.resumeType === "Beginner"}/>
                        <Button handleClick={handleClick} label="Experienced" isActive={info.resumeType === "Experienced"}/>
                    </div>
                </div>
                <div>
                    <h2 className='text-4xl font-extrabold'>Choose Template</h2>
                    <div className='flex gap-4 my-6'>
                        <button className='flex my-2 rounded-2xl py-15 px-14 capitalize shadow-lg cursor-pointer gap-3 items-center hover:bg-stone-200 text-xl' onClick={() => chooseTemplate("template1")}>Template 1</button>
                        <button className='flex my-2 rounded-2xl py-5 px-12 capitalize shadow-lg cursor-pointer gap-3 items-center hover:bg-stone-200 text-xl' onClick={() => chooseTemplate("template2")}>Template 2</button>
                        <button className='flex my-2 rounded-2xl py-5 px-14 capitalize shadow-lg cursor-pointer gap-3 items-center hover:bg-stone-200 text-xl' onClick={() => chooseTemplate("template3")}>Template 3</button>
                    </div>
                </div>
            </section>
        </main>
    )
}
