import React from 'react'

const Button = ({ answer }) => {
    return (
        <button className='bg-red-500 text-white p-5 m-5 font-semibold rounded-md'>{answer}</button>

    )
}

export default Button
