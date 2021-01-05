import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

//components


const Trivia = () => {



    const apiUrl = 'https://opentdb.com/api.php?amount=10'


    const [questions, setQuestions] = useState([])
    const [counter, setCounter] = useState(0)
    const [score, setScore] = useState(0)
    const [gameEnded, setGameEnded] = useState(false)

  



    useEffect(() => {
        axios.get(apiUrl)
            .then(res => {
                console.log(res.data.results);
                setQuestions(res.data.results)
            })
            .catch(err => {
                console.log(err);
            })

    }, [])


let shuffledAnswers = []

if(questions.length && counter + 1 <= questions.length){

  // get all answers in the same array

    shuffledAnswers.push(questions[counter].correct_answer, ...questions[counter].incorrect_answers)

    //shuffle them to move the answer from always being the first choice
    shuffledAnswers = shuffledAnswers.sort(() => Math.random() - 0.5)
  
    console.log(shuffledAnswers);

  


}


function handleAnswer(answer){

        
    setCounter(counter + 1)
    console.log(counter + 1);
    console.log('clicked');
    console.log(questions.length, 'qs length');

    //increase score if answer matches correct answer
    
    if(answer === questions[counter].correct_answer){
        setScore(score + 1)
    }
       
    if(counter + 1 === questions.length  ){
        setGameEnded(true)
    }

    }
  






    return gameEnded ? (
        <div>

            <p>Your Score was {score}</p>
        </div>
    ) : (
    
    questions.length > 0 ? (

            <div className='flex justify-center items-center h-screen flex-col'>
                Welcome to the Trivia Section!
    
                <Link to='/'>Home</Link>
    
    
                <div className='text-purple-800 p-4'>

                
    
                    <h2 dangerouslySetInnerHTML={{__html:questions[counter].question }} />
                    <p>Question {counter + 1} out of {questions.length}</p>
                    <p>Score: {score}/{questions.length}</p>
 
         
    
                    <div className='answers grid sm:grid-cols-2 gap-4 border-solid border-4 border-red-500 p-10 grid-cols-1 '>

                        {shuffledAnswers.map((answer, idx) =>{
                            return <button 
                            className='bg-red-500 text-white p-5 m-5 font-semibold rounded-md focus:outline-none hover:bg-red-400' 
                            onClick={()=>handleAnswer(answer)} 
                            key={idx} 
                            dangerouslySetInnerHTML={{__html: answer}} />
                            })}
                      
                    </div>
    
    
                </div>

             
            </div>

            
        ) : <h2 className='text-2xl text-black font-bold'>loading...</h2>
    
    )}

export default Trivia
