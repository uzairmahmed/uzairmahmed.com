import React from 'react';
import '../../App.css';
import { IoLogoLinkedin, IoIosMail, IoLogoGithub, IoIosPaper } from 'react-icons/io';
import datajson from '../../assets/data.json'


const Section2 = () => {
    const [emailShown, setEmailShown] = React.useState(false)
    const [gitHubShown, setGithubShown] = React.useState(false)
    const [linkedInShown, setLinkedInShown] = React.useState(false)
    const [resumeShown, setResumeShown] = React.useState(false)

    return (
        <div class='w-3/12 h-screen flex flex-row'>
            <div class='w-2/3 h-screen bg-zinc-700 flex justify-center items-center flex-col'>
                {emailShown ?
                    <h1 class='font-name p-10 m-10 font-normal text-md text-zinc-50 '>{datajson.options.email.value}</h1> :
                    <h1 class='opacity-50 font-name p-10 m-10 font-normal text-md text-zinc-50'>{datajson.options.email.value} </h1>
                }
                {gitHubShown ?
                    <h1 class='p-10 m-10 font-name font-normal text-lg text-zinc-50 '>{datajson.options.github.value}</h1> :
                    <h1 class='opacity-50 font-name p-10 m-10 font-normal text-lg text-zinc-50 '>{datajson.options.github.value}</h1>
                }
                {linkedInShown ?
                    <h1 class='p-10 m-10 font-name  font-normal text-lg text-zinc-50 '>{datajson.options.linkedin.value}</h1> :
                    <h1 class='opacity-50 font-name p-10 m-10 font-normal text-lg text-zinc-50 '>{datajson.options.linkedin.value}</h1>
                }
                {resumeShown ?
                    <h1 class='p-10 m-10 font-name  font-normal text-lg text-zinc-50 '>{datajson.options.resume.value}</h1> :
                    <h1 class='opacity-50 font-name p-10 m-10 font-normal text-lg text-zinc-50 '>{datajson.options.resume.value}</h1>
                }
            </div>
            <div class='w-1/3 h-screen bg-zinc-800 flex justify-center items-center flex-col'>
                <a
                    href={datajson.options.email.href}
                    onMouseEnter={() => setEmailShown(true)}
                    onMouseLeave={() => setEmailShown(false)}
                >
                    <div class='m-10'>
                        <IoIosMail color='white' size='5em' />
                        <h1 class='font-light font-name text-sm text-zinc-50 text-center'>{datajson.options.email.name}</h1>
                    </div>
                </a>
                <a
                    href={datajson.options.github.href}
                    onMouseEnter={() => setGithubShown(true)}
                    onMouseLeave={() => setGithubShown(false)}
                >
                    <div class='m-10'>
                        <IoLogoGithub color='white' size='5em' />
                        <h1 class='mt-2 font-light font-name text-sm text-zinc-50 text-center'>{datajson.options.github.name}</h1>
                    </div>
                </a>
                <a
                    href={datajson.options.linkedin.href}
                    onMouseEnter={() => setLinkedInShown(true)}
                    onMouseLeave={() => setLinkedInShown(false)}
                >
                    <div class='m-10'>
                        <IoLogoLinkedin color='white' size='5em' />
                        <h1 class='font-light font-name text-sm text-zinc-50 text-center'>{datajson.options.linkedin.name}</h1>
                    </div>
                </a>
                <a
                    href={datajson.options.resume.href}
                    onMouseEnter={() => setResumeShown(true)}
                    onMouseLeave={() => setResumeShown(false)}
                >
                    <div class='m-10'>
                        <IoIosPaper color='white' size='5em' />
                        <h1 class='font-light font-name text-sm text-zinc-50 text-center'>{datajson.options.resume.name}</h1>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Section2;
