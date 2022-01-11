import React from 'react';
import '../App.css';
import { IoLogoLinkedin, IoIosMail, IoLogoGithub } from 'react-icons/io';


const Main = () => {
    const [emailShown, setEmailShown] = React.useState(false)
    const [gitHubShown, setGithubShown] = React.useState(false)
    const [linkedInShown, setLinkedInShown] = React.useState(false)

    return (
        <div class='w-screen h-screen bg-black flex flex-row'>

            <div class='w-3/12 h-screen flex flex-row'>
                <div class='w-2/3 h-screen bg-zinc-700 flex justify-center items-center flex-col'>
                    {emailShown ?
                        <h1 class='font-name p-10 m-10 font-normal text-lg text-zinc-50 '>uzairmahmed@gmail.com</h1> :
                        <h1 class='opacity-50 font-name p-10 m-10 font-normal text-lg text-zinc-50'>uzairmahmed@gmail.com </h1>
                    }
                    {gitHubShown ?
                        <h1 class='p-10 m-10 font-name font-normal text-lg text-zinc-50 '>@uzairmahmed</h1> :
                        <h1 class='opacity-50 font-name p-10 m-10 font-normal text-lg text-zinc-50 '>@uzairmahmed</h1>
                    }
                    {linkedInShown ?
                        <h1 class='p-10 m-10 font-name  font-normal text-lg text-zinc-50 '>in/uzairmahmed</h1> :
                        <h1 class='opacity-50 font-name p-10 m-10 font-normal text-lg text-zinc-50 '>in/uzairmahmed</h1>
                    }
                </div>
                <div class='w-1/3 h-screen bg-zinc-800 flex justify-center items-center flex-col'>
                    <a
                        href='mailto:uzairmahmed@gmail.com'
                        onMouseEnter={() => setEmailShown(true)}
                        onMouseLeave={() => setEmailShown(false)}
                    >
                        <div class='m-10'>
                            <IoIosMail color='white' size='5em' />
                            <h1 class='font-light font-name text-sm text-zinc-50 text-center'>Email.</h1>
                        </div>
                    </a>
                    <a
                        href='https://github.com/uzairmahmed'
                        onMouseEnter={() => setGithubShown(true)}
                        onMouseLeave={() => setGithubShown(false)}
                    >
                        <div class='m-10'>
                            <IoLogoGithub color='white' size='5em' />
                            <h1 class='mt-2 font-light font-name text-sm text-zinc-50 text-center'>GitHub.</h1>
                        </div>
                    </a>
                    <a
                        href='https://www.linkedin.com/in/uzairmahmed'
                        onMouseEnter={() => setLinkedInShown(true)}
                        onMouseLeave={() => setLinkedInShown(false)}
                    >
                        <div class='m-10'>
                            <IoLogoLinkedin color='white' size='5em' />
                            <h1 class='font-light font-name text-sm text-zinc-50 text-center'>LinkedIn.</h1>
                        </div>
                    </a>
                </div>
            </div>


            <div class='p-10 w-9/12 h-screen bg-zinc-900 flex justify-center items-start flex-col'>
                <h1 class='
                    text-zinc-50
                    font-name
                    text-5xl 
                    font-medium
                '>
                    Uzair Ahmed.
                </h1>
                <h2 class='
                    ml-1
                    mt-2
                    text-zinc-50
                    font-name
                    text-xl 
                    font-medium
                '>
                    Software + Computer Engineering Student @ Ryerson University.
                </h2>
            </div>

        </div>
    );
}

export default Main;
