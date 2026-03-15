import Heading from './Heading'
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

export default function personalInfo({data}) {
    return (
        <div>
            <div className='header flex flex-col items-center'>
                <h1>{data.personalInfo.name}</h1>
                <div className='container-row'>
                    <div className='container'>
                        <MapPin size={14}/>
                        <h2>
                            {data.personalInfo.location}
                        </h2>
                    </div>
                    <div className='container'>
                        <Mail size={14}/>
                        <h2>
                            {data.personalInfo.email}
                        </h2>
                    </div>
                    <div className='container'>
                        <Phone size={14}/>
                        <h2>
                            {data.personalInfo.phone}
                        </h2>
                    </div>
                    <a href={data.personalInfo.githubURL}>
                        <div className='container'>
                            <Github size={14}/>
                            <h2>
                                {data.personalInfo.githubURL.split("/")[1]}
                            </h2>
                        </div>
                    </a>
                    <a href={data.personalInfo.linkedInURL}>
                        <div className='container'>
                            <Linkedin size={14}/>
                            <h2>
                                {data.personalInfo.linkedInURL.split("/")[1]}
                            </h2>
                        </div>
                    </a>
                </div>
            </div>
            <Heading label={"PROFILE"}/>
            <div>
                <h3 className='profile-text'>
                    {data.personalInfo.summary}
                </h3>
            </div>
        </div>
        
    )
}
