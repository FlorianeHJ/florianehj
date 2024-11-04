import React from 'react'

const Container = ({ school, diploma, year }) => {
    return (
        <div className="bg-background2 flex-col text-center flex justify-center items-center w-60 h-60 shadow-2xl p-2">
            <div className="text-center text-2xl font-bold font-primary pb-3 text-accent">
                {school}
            </div>
            <div className="text-lg py-3">{diploma}</div>
            <div className="text-sm">{year}</div>{' '}
        </div>
    )
}

export default Container
