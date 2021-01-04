import React from 'react'
import { Link } from 'react-router-dom'

const Trivia = () => {
    return (
        <div className='flex justify-center items-center h-screen flex-col'>
            Welcome to the Trivia Section!

            <Link to='/'>Home</Link>

            <div className='text-purple-800 p-4'>

                Question Here

            </div>

            <div className='answers grid grid-cols-2 gap-4 bg-red-200 p-10'>
                <button className='bg-red-500 text-white p-5 m-5'>Answer 1</button>
                <button className='bg-red-500 text-white p-5 m-5'>Answer 2</button>
                <button className='bg-red-500 text-white p-5 m-5'>Answer 3</button>
                <button className='bg-red-500 text-white p-5 m-5'>Answer 4</button>
            </div>
        </div>
    )
}

export default Trivia
