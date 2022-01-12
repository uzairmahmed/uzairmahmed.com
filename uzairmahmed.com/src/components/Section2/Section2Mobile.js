import React from 'react';
import '../../App.css';
import { IoLogoLinkedin, IoIosMail, IoLogoGithub, IoIosPaper } from 'react-icons/io';
import datajson from '../../assets/data.json'
var classNames = require('classnames');

const Section2Mobile = ({colortheme}) => {
    const leftheadercolor = 'bg-' + colortheme + '-700'
    const rightheadercolor = 'bg-' + colortheme + '-800'
    const textcolor = 'text-' + colortheme + '-50'

    var leftheaderclass = classNames('h-full', 'w-1/4', leftheadercolor, 'flex', 'items-center', 'flex-col')
    var rightheaderclass = classNames('h-full', 'w-3/4', rightheadercolor, 'flex', 'items-center', 'flex-col')

    var iconcontainerclass = classNames('w-full', 'h-1/4', 'flex', 'items-center', 'justify-center')
    var icondivclass = classNames('flex', 'items-center', 'flex-col')
    var iconnameclass = classNames('font-light', 'font-name', 'text-sm', textcolor, 'text-center')

    var valuehrefclass = classNames('w-full', 'h-1/4', 'flex', 'items-center', 'justify-center')
    var valueclass = classNames('font-name', 'font-normal', 'text-lg', textcolor)

    return (
        <div className='h-3/4 w-screen flex flex-row'>
            <div className={leftheaderclass}>
                <a className={iconcontainerclass} href={datajson.options.email.href}>
                    <div className={icondivclass} >
                        <IoIosMail color='white' size='2em' />
                        <h1 className={iconnameclass}>{datajson.options.email.name}</h1>
                    </div>
                </a>
                <a className={iconcontainerclass} href={datajson.options.github.href}>
                    <div className={icondivclass} >
                        <IoLogoGithub color='white' size='2em' />
                        <h1 className={iconnameclass}>{datajson.options.github.name}</h1>
                    </div>
                </a>
                <a className={iconcontainerclass} href={datajson.options.linkedin.href}>
                    <div className={icondivclass} >
                        <IoLogoLinkedin color='white' size='2em' />
                        <h1 className={iconnameclass}>{datajson.options.linkedin.name}</h1>
                    </div>
                </a>
                <a className={iconcontainerclass} href={datajson.options.resume.href}>
                    <div className={icondivclass} >

                        <IoIosPaper color='white' size='2em' />
                        <h1 className={iconnameclass}>{datajson.options.resume.name}</h1>
                    </div>
                </a>
            </div>
            <div className={rightheaderclass}>
                <a className={valuehrefclass} href={datajson.options.email.href}>
                    <h1 className={valueclass}>{datajson.options.email.value}</h1>
                </a>
                <a className={valuehrefclass} href={datajson.options.github.href}>
                    <h1 className={valueclass}>{datajson.options.github.value}</h1>
                </a>
                <a className={valuehrefclass} href={datajson.options.linkedin.href}>
                    <h1 className={valueclass}>{datajson.options.linkedin.value}</h1>
                </a>
                <a className={valuehrefclass} href={datajson.options.resume.href}>
                    <h1 className={valueclass}>{datajson.options.resume.value}</h1>
                </a>

            </div>
        </div >
    );
}

export default Section2Mobile;
