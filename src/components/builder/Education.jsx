import React, { useState } from 'react'
import { BookOpenText, Plus } from 'lucide-react'
import { useInfo } from '../../context/InfoContext'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export default function Education() {
    const [count, setCount] = useState(1)
    const {info, setInfo} = useInfo()
    const [errors, setErrors] = useState([])
        
    function handleChange(e, index){
        const {name, value} = e.target
        setInfo(prev => ({...prev, education: prev.education.map((item, idx) => index === idx ? {...item, [name]: value}: item)}))

        let error = ''
        // console.log(index)

        setErrors(prev => ({...prev, [name]: error}))

    }
    console.log(info)

    function addEducation(){
        setCount(prev => prev+1)
        setInfo(prev => ({...prev, education: [...prev.education, {
            school: "",
            degree: "",
            startDate: "",
            endDate: "",
            cgpa: 0,
        }]}))
    }

    return (
        <section className='my-2 border px-12 py-8 border-stone-400 rounded-lg'>
            <div className='flex gap-3'>
                <BookOpenText />
                <p className='font-bold text-xl'>Education</p>
            </div>
            {[...Array(count)].map((_, index) => (
                <form className='my-6 border rounded-md border-stone-400 px-15 py-6'>
                <div className='flex gap-4 my-2'>
                    <div className='flex flex-col'>
                        <label htmlFor="name" className="text-stone-500 text-xs my-1">SCHOOL</label>
                        <input 
                            type="text" 
                            className='border rounded-md p-2'
                            name="school"
                            onChange={(e) => handleChange(e, index)}
                            value={info.education[index].school}/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="email" className="text-stone-500 text-xs my-1">DEGREE/FIELD</label>
                        <input 
                            type="text" 
                            className='border rounded-md p-2'
                            name="degree"
                            onChange={(e) => handleChange(e, index)}
                            value={info.education[index].degree}/>
                        {errors.degree && (<p className='text-red-500'>{errors.degree}</p>)}
                    </div>
                </div>
                <div className='flex gap-4 my-2'>
                    <div className='flex flex-col'>
                        <label htmlFor="phone" className="text-stone-500 text-xs my-1">START DATE</label>
                        <input 
                            type="date" className='border rounded-md p-2'
                            name="startDate"
                            onChange={(e) => handleChange(e, index)}
                            value={info.education[index].startDate}/>
                    </div>
                    <div className='flex flex-col'>
                        <label for="location" className="text-stone-500 text-xs my-1">END DATE</label>
                        <input 
                            type="date" className='border rounded-md p-2'
                            name="endDate"
                            onChange={(e) => handleChange(e, index)}
                            value={info.education[index].endDate}/>
                    </div>
                    <div className='flex flex-col'>
                        <label for="location" className="text-stone-500 text-xs my-1">CGPA</label>
                        <input 
                            type="number" className='border rounded-md p-2 w-40'
                            name="cgpa"
                            onChange={(e) => handleChange(e, index)}
                            value={info.education[index].cgpa}/>
                    </div>
                </div>
            </form>
            ))}
            
            <div onClick={addEducation} className='border border-stone-400 rounded-md px-3 py-2 flex items-center justify-center cursor-pointer'><Plus size={18}/>Add</div>
           
        </section>
    )
}

