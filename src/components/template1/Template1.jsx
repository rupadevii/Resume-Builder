import PersonalInfo from './PersonalInfo'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'
import Projects from './Projects'

export default function Template1({data}) {

    return (
        <main className='flex min-h-screen justify-center'>
            <div className='a4-print-container resume'>
                <PersonalInfo data={data}/>
                <Experience data={data}/>
                <Projects data={data}/>
                <Education data={data}/>
                <Skills data={data}/>
            </div>
        </main>
    )
}
