import Education from "../template1/Education"
import Experience from "../template1/Experience"
import PersonalInfo from "../template1/PersonalInfo"
import Projects from "../template1/Projects"
import Skills from "../template1/Skills"

export default function AIPreview({data}) {
    return (
        <section className='flex min-h-screen justify-center'>
            <div className='a4-print-container resume'>
                <PersonalInfo data={data}/>
                <Experience data={data}/>
                <Projects data={data}/>
                <Education data={data}/>
                <Skills data={data}/>
            </div>
        </section>
    )
}
