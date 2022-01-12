import React from 'react';
import '../../App.css';
import datajson from '../../assets/data.json'

const Section1Mobile = () => {
    return (
        <div class='p-10 h-1/4 w-screen bg-zinc-900 flex justify-center items-start flex-col'>
            <h1 class='
                    text-zinc-50
                    font-name
                    text-5xl 
                    font-medium
                '>
                {datajson.name}
            </h1>
            <h2 class='
                    ml-1
                    mt-2
                    text-zinc-50
                    font-name
                    text-lg
                    font-medium
                '>
                {datajson.tagline}
            </h2>
        </div>
    );
}

export default Section1Mobile;
