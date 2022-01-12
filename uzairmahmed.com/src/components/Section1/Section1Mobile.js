import React from 'react';
import '../../App.css';
import datajson from '../../assets/data.json'

var classNames = require('classnames');

const Section1Mobile = () => {
    var headerclass = classNames('p-10', 'h-1/4', 'w-screen', 'bg-zinc-900', 'flex', 'justify-center', 'items-start', 'flex-col')
    var nameclass = classNames('text-zinc-50', 'font-name', 'text-5xl', 'font-medium')
    var taglineclass = classNames('ml-1', 'mt-2', 'text-zinc-50', 'font-name', 'text-lg', 'font-medium')

    return (
        <div className={headerclass}>
            <h1 className={nameclass}>
                {datajson.name}
            </h1>
            <h2 className={taglineclass}>
                {datajson.tagline}
            </h2>
        </div>
    );
}

export default Section1Mobile;
