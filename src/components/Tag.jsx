import React from 'react'

const Tag = ({ tech }) => {
    return (
        <div>
            <span className="text-3x1 text-white border border-accent px-3 py-1 rounded-xl   ">
                {tech}
            </span>
        </div>
    )
}

export default Tag
