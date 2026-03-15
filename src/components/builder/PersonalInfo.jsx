import { User } from 'lucide-react'
import React, { useState } from 'react'
import { useInfo } from '../../context/InfoContext';
const emailValidator = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function PersonalInfo() {
    const {info, setInfo} = useInfo()
    const [errors, setErrors] = useState([])
    
    function handleChange(e){
        const {name, value} = e.target

        if(name === "summary"){
            if(value.length > 200) return
        }

        setInfo(prev => ({...prev, personalInfo: {
            ...prev.personalInfo, [name]: value
        }}))

        let error = ''
        if(name === "email"){
            if(!emailValidator.test(value)) error = "Enter valid email!"
        }

        if(name==="githubURL"){
            if(!value.includes('github.com/')) error = "Enter valid github link"
        }

        if(name==="linkedInURL"){
            if(!value.includes('linkedin.com/')) error = "Enter valid linkedIn link"
        }

        if(name === "summary"){
            if(value.length > 200) return
        }

        setErrors(prev => ({...prev, [name]: error}))

    }
    console.log(info)

    return (
        <section className='my-4 border px-12 py-8 border-stone-500 rounded-lg'>
            <div className='flex gap-3'>
                <User />
                <p className='font-bold text-xl'>Personal Info</p>
            </div>
            <form className='my-5'>
                <div className='flex gap-5 my-2'>
                    <div className='flex flex-col'>
                        <label htmlFor="name" className="text-stone-500 text-xs my-1">FULL NAME</label>
                        <input 
                            type="text" 
                            className='border rounded-md p-2 w-62'
                            name="name"
                            onChange={handleChange}
                            value={info.personalInfo.name}/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="email" className="text-stone-500 text-xs my-1">EMAIL</label>
                        <input 
                            type="email" 
                            className='border rounded-md p-2 w-62' 
                            name="email"
                            onChange={handleChange}
                            value={info.personalInfo.email}/>
                        {errors.email && (<p className='text-red-500'>{errors.email}</p>)}
                    </div>
                </div>
                <div className='flex gap-5 my-2'>
                    <div className='flex flex-col'>
                        <label htmlFor="phone" className="text-stone-500 text-xs my-1">PHONE</label>
                        <input 
                            type="number" 
                            className='border rounded-md p-2 w-62'
                            name="phone"
                            onChange={handleChange}
                            value={info.personalInfo.phone}/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="location" className="text-stone-500 text-xs my-1">LOCATION</label>
                        <input 
                            type="text" 
                            className='border rounded-md p-2 w-62'
                            name="location"
                            onChange={handleChange}
                            value={info.personalInfo.location}/>
                    </div>
                </div>
                <div className='flex gap-5 my-2'>
                    <div className='flex flex-col'>
                        <label htmlFor="github" className="text-stone-500 text-xs my-1">GITHUB</label>
                        <input 
                            type="text" 
                            className='border rounded-md p-2 w-62'
                            name="githubURL"
                            onChange={handleChange}
                            value={info.personalInfo.githubURL}/>
                        {errors.githubURL && (<p className='text-red-500'>{errors.githubURL}</p>)}

                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="linkedIn" className="text-stone-500 text-xs my-1">LINKEDIN</label>
                        <input 
                            type="text" 
                            className='border rounded-md p-2 w-62'
                            name="linkedInURL"
                            onChange={handleChange}
                            value={info.personalInfo.linkedInURL}/>
                        {errors.linkedInURL && (<p className='text-red-500'>{errors.linkedInURL}</p>)}
                    </div>
                </div>
                <div className='flex flex-col my-2'>
                    <div className='flex justify-between'>
                        <label htmlFor="summary" className="text-stone-500 text-xs my-1">PROFESSIONAL SUMMARY</label>
                        <span className={`text-sm ${info.personalInfo.summary.length <180 ? "text-yellow-600" : "text-red-500"}`}>{info.personalInfo.summary.length}/200</span>
                    </div>
                    <textarea 
                        rows="3" className='border rounded-md p-3 '
                        name="summary"
                        onChange={handleChange}
                        value={info.personalInfo.summary}></textarea>
                </div>
            </form>
        </section>
    )
}
