import React from 'react';
import '../../App.css';
import { IoLogoLinkedin, IoIosMail, IoLogoGithub, IoIosPaper } from 'react-icons/io';
import datajson from '../../assets/data.json'

const Section2Mobile = () => {
    return (
        <div class='h-3/4 w-screen flex flex-row'>
            <div class='h-full w-1/4 bg-zinc-800 flex items-center flex-col'>
                <a class='w-full h-1/4 flex items-center justify-center' href={datajson.options.email.href}>
                    <div class='flex items-center flex-col' >
                        <IoIosMail color='white' size='2em' />
                        <h1 class='font-light font-name text-sm text-zinc-50 text-center'>{datajson.options.email.name}</h1>
                    </div>
                </a>
                <a class='w-full h-1/4 flex items-center justify-center' href={datajson.options.github.href}>
                    <div class='flex items-center flex-col' >
                        <IoLogoGithub color='white' size='2em' />
                        <h1 class='font-light font-name text-sm text-zinc-50 text-center'>{datajson.options.github.name}</h1>
                    </div>
                </a>
                <a class='w-full h-1/4 flex items-center justify-center' href={datajson.options.linkedin.href}>
                    <div class='flex items-center flex-col' >
                        <IoLogoLinkedin color='white' size='2em' />
                        <h1 class='font-light font-name text-sm text-zinc-50 text-center'>{datajson.options.linkedin.name}</h1>
                    </div>
                </a>
                <a class='w-full h-1/4 flex items-center justify-center' href={datajson.options.resume.href}>
                    <div class='flex items-center flex-col' >

                        <IoIosPaper color='white' size='2em' />
                        <h1 class='font-light font-name text-sm text-zinc-50 text-center'>{datajson.options.resume.name}</h1>
                    </div>
                </a>
            </div>
            <div class='h-full w-3/4 bg-zinc-700 flex items-center flex-col'>
                <a class='w-full h-1/4 flex items-center justify-center' href={datajson.options.email.href}>
                    <h1 class='font-name font-normal text-lg text-zinc-50'>{datajson.options.email.value}</h1>
                </a>
                <a class='w-full h-1/4 flex items-center justify-center' href={datajson.options.github.href}>
                    <h1 class='font-name font-normal text-lg text-zinc-50'>{datajson.options.github.value}</h1>
                </a>
                <a class='w-full h-1/4 flex items-center justify-center' href={datajson.options.linkedin.href}>
                    <h1 class='font-name font-normal text-lg text-zinc-50'>{datajson.options.linkedin.value}</h1>
                </a>
                <a class='w-full h-1/4 flex items-center justify-center' href={datajson.options.resume.href}>
                    <h1 class='font-name font-normal text-lg text-zinc-50'>{datajson.options.resume.value}</h1>
                </a>

            </div>
        </div >
    );
}

export default Section2Mobile;
