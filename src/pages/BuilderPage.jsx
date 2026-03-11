import React from 'react'
import PersonalInfo from '../components/builder/PersonalInfo'
import Education from '../components/builder/Education'
import StatsScore from '../components/ui/StatsScore'

export default function BuilderPage() {
    return (
        <main className='flex justify-center py-28 flex-col items-center'>
            <StatsScore score={90}/>
            <PersonalInfo/>
            <Education/>
        </main>
    )
}
