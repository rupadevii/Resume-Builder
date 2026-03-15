import React, { useState } from 'react'
import { BookOpenText, Plus, Trash2 } from 'lucide-react'
import { useInfo } from '../../context/InfoContext'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export default function Education() {
    const [count, setCount] = useState(1)
    const {info, setInfo} = useInfo()
        
    function handleChange(e, index){
        const {name, value} = e.target

        if(name === "cgpa" && isNaN(value)){
            return
        }

        setInfo(prev => ({...prev, education: prev.education.map((item, idx) => index === idx ? {...item, [name]: value}: item)}))
    }

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

    function deleteEducation(idx){
        setCount(prev => prev-1)
        setInfo(prev => ({...prev, education: prev.education.filter((item, index) => index !== idx)}))
    }

    return (
        <div className='my-4 border px-10 py-8 border-stone-500 rounded-lg'>
            <div className='flex gap-3'>
                <BookOpenText />
                <p className='font-bold text-xl'>Education</p>
            </div>
            {[...Array(count).keys()].map((_, index) => (
                <form className='my-6 border rounded-md border-stone-400 px-10 py-6 relative' key={index}>
                    {index !== 0 && (
                        <div className='absolute right-5 rounded-md hover:bg-stone-300 p-2 cursor-pointer' onClick={() => deleteEducation(index)}>
                            <Trash2 size={16}/>
                        </div>
                    )}
                    <div className='flex gap-5 my-2'>
                        <div className='flex flex-col'>
                            <label htmlFor="name" className="text-stone-500 text-xs my-1">SCHOOL</label>
                            <input 
                                type="text" 
                                className='border rounded-md p-2 w-full'
                                name="school"
                                onChange={(e) => handleChange(e, index)}
                                value={info.education[index].school}/>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="email" className="text-stone-500 text-xs my-1">DEGREE/FIELD</label>
                            <input 
                                type="text" 
                                className='border rounded-md p-2 w-full'
                                name="degree"
                                onChange={(e) => handleChange(e, index)}
                                value={info.education[index].degree}/>
                        </div>
                    </div>
                    <div className='flex gap-4 my-2'>
                        <div className='flex flex-col'>
                            <label htmlFor="phone" className="text-stone-500 text-xs my-1">START DATE</label>
                            <input 
                                type="month" className='border rounded-md p-2 w-35'
                                name="startDate"
                                onChange={(e) => handleChange(e, index)}
                                value={info.education[index].startDate}/>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="location" className="text-stone-500 text-xs my-1">END DATE</label>
                            <input 
                                type="month" className='border rounded-md p-2 w-35'
                                name="endDate"
                                onChange={(e) => handleChange(e, index)}
                                value={info.education[index].endDate}/>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="location" className="text-stone-500 text-xs my-1">CGPA</label>
                            <input 
                                type="text" className='border rounded-md p-2 w-35'
                                name="cgpa"
                                onChange={(e) => handleChange(e, index)}
                                value={info.education[index].cgpa}/>
                        </div>
                    </div>
            </form>
            ))}
            
            <button disabled={count===3} onClick={addEducation} className='border border-stone-400 rounded-md px-3 py-2 flex items-center justify-center cursor-pointer w-full'><Plus size={18}/>Add</button>
           
        </div>
    )
}

