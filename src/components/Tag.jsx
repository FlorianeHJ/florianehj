import React from 'react'

const Tag = ({ tech }) => {
    return (
        <div>
            <span className="btn font-secondary text-sm text-white px-3 py-1 rounded-xl   ">
                {tech}
            </span>
        </div>
    )
}

export default Tag
