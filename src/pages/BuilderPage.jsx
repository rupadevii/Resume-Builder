import React from 'react'
import PersonalInfo from '../components/builder/PersonalInfo'
import Education from '../components/builder/Education'
import StatsScore from '../components/ui/StatsScore'
import { useInfo } from '../context/InfoContext'
import Experience from '../components/builder/Experience'
import Projects from '../components/builder/Projects'
import Skills from '../components/builder/Skills'
import Template1 from '../components/template1/Template1'
import PreviewPage from './PreviewPage'

export default function BuilderPage() {

    return (
        <main className='flex pt-24 pb-10'>
            <section className='form-section px-12 w-178 max-h-screen overflow-y-auto'>
                <StatsScore score={90}/>
                <PersonalInfo/>
                <Education/>
                {/* {info.resumeType === "experienced" && ( */}
                    <Experience/>
                {/* )}  */}
                <Projects/>
                <Skills/>
            </section>
            <section className='resume-section max-h-screen overflow-y-auto'>
                <PreviewPage/>
            </section>
        </main>
    )
}
