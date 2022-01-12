import React from 'react';
import '../../App.css';
import { IoLogoLinkedin, IoIosMail, IoLogoGithub, IoIosPaper } from 'react-icons/io';
import datajson from '../../assets/data.json'
var classNames = require('classnames');

const Section2 = ({colortheme}) => {
    const [emailShown, setEmailShown] = React.useState(false)
    const [gitHubShown, setGithubShown] = React.useState(false)
    const [linkedInShown, setLinkedInShown] = React.useState(false)
    const [resumeShown, setResumeShown] = React.useState(false)


    const leftheadercolor = 'bg-'+colortheme+'-700'
    const rightheadercolor = 'bg-'+colortheme+'-800'
    const textcolor = 'text-'+colortheme+'-50'

    var leftheaderclass = classNames('w-2/3', 'h-screen', leftheadercolor, 'flex', 'justify-center', 'items-center', 'flex-col')
    var rightheaderclass = classNames('w-1/3', 'h-screen', rightheadercolor, 'flex', 'justify-center', 'items-center', 'flex-col')

    var emailvalueclass = classNames({ 'opacity-50': !emailShown }, 'font-name', 'p-10', 'm-10', 'font-normal', 'text-md', textcolor)
    var githubvalueclass = classNames({ 'opacity-50': !gitHubShown }, 'font-name', 'p-10', 'm-10', 'font-normal', 'text-md', textcolor)
    var linkedinvalueclass = classNames({ 'opacity-50': !linkedInShown }, 'font-name', 'p-10', 'm-10', 'font-normal', 'text-md', textcolor)
    var resumevalueclass = classNames({ 'opacity-50': !resumeShown }, 'font-name', 'p-10', 'm-10', 'font-normal', 'text-md', textcolor)

    var icontitleclass = classNames('font-light', 'font-name', 'text-sm', textcolor, 'text-center')

    return (
        <div className='w-3/12 h-screen flex flex-row'>
            <div className={leftheaderclass}>
                <h1 className={emailvalueclass}>{datajson.options.email.value}</h1>
                <h1 className={githubvalueclass}>{datajson.options.github.value}</h1>
                <h1 className={linkedinvalueclass}>{datajson.options.linkedin.value}</h1>
                <h1 className={resumevalueclass}>{datajson.options.resume.value}</h1>
            </div>
            <div className={rightheaderclass}>
                <a
                    href={datajson.options.email.href}
                    onMouseEnter={() => setEmailShown(true)}
                    onMouseLeave={() => setEmailShown(false)}
                >
                    <div className='m-10'>
                        <IoIosMail color='white' size='5em' />
                        <h1 className={icontitleclass}>{datajson.options.email.name}</h1>
                    </div>
                </a>
                <a
                    href={datajson.options.github.href}
                    onMouseEnter={() => setGithubShown(true)}
                    onMouseLeave={() => setGithubShown(false)}
                >
                    <div className='m-10'>
                        <IoLogoGithub color='white' size='5em' />
                        <h1 className={icontitleclass}>{datajson.options.github.name}</h1>
                    </div>
                </a>
                <a
                    href={datajson.options.linkedin.href}
                    onMouseEnter={() => setLinkedInShown(true)}
                    onMouseLeave={() => setLinkedInShown(false)}
                >
                    <div className='m-10'>
                        <IoLogoLinkedin color='white' size='5em' />
                        <h1 className={icontitleclass}>{datajson.options.linkedin.name}</h1>
                    </div>
                </a>
                <a
                    href={datajson.options.resume.href}
                    onMouseEnter={() => setResumeShown(true)}
                    onMouseLeave={() => setResumeShown(false)}
                >
                    <div className='m-10'>
                        <IoIosPaper color='white' size='5em' />
                        <h1 className={icontitleclass}>{datajson.options.resume.name}</h1>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Section2;
