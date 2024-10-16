import React from 'react'

const Tag = ({ tech }) => {
    return (
        <div>
            <span className="btn font-secondary text-base text-text2 px-2 py-1 ">
                {tech}
            </span>
        </div>
    )
}

export default Tag
