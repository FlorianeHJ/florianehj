import React from 'react'

const Tag = ({ tech }) => {
    return (
        <div>
            <span className="btn font-secondary px-2 py-1 text-xs text-text2 ">
                {tech}
            </span>
        </div>
    )
}

export default Tag
