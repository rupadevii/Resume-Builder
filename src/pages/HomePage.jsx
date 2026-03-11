import { useInfo } from '../context/InfoContext'
import { useNavigate } from 'react-router-dom'

export default function HomePage(){
    const {setInfo} = useInfo()
    const navigate = useNavigate()

    function handleClick(type){
        setInfo(prev => ({...prev, resumeType: type}))
        navigate("/build")
    }

    return (
        <main className='flex h-[100vh-20px] justify-center items-center'>
            <section className='w-150 h-170 text-center flex items-center flex-col justify-center'>
                <h2 className='text-4xl font-extrabold'>Choose Resume Type</h2>
                <div className='flex gap-4 my-6'>
                    <button className='flex my-2 bg-black rounded-2xl text-white py-3 px-14 capitalize shadow-lg cursor-pointer gap-3 items-center hover:bg-stone-800 text-xl' onClick={() => handleClick("beginner")}>Beginner</button>
                    <button className='flex my-2 bg-black rounded-2xl text-white py-6 px-12 capitalize shadow-lg cursor-pointer gap-3 items-center hover:bg-stone-800 text-xl' onClick={() => handleClick("experienced")}>Experienced</button>
                </div>
            </section>
        </main>
    )
}
