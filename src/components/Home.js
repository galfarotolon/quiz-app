import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (

        <div className='flex justify-center items-center h-screen flex-col'>
            <h1 className='text-3xl'>Welcome To QuizApp</h1>
            <p>This app is the ultimate trivia and geography quiz in the same spot! Choose your option below: </p>

            <div className='buttons flex justify-center items-center '>
                <button className='p-5 m-5 border-red-500'><Link to='/trivia'>Trivia</Link></button>
                <button className='p-5 m-5 border-red-500'><Link to='/countries'>Countries</Link></button>
            </div>
        </div>
    )
}

export default Home
