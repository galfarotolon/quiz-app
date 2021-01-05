import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

//components
import Button from './Button'

const Trivia = () => {



    const apiUrl = 'https://opentdb.com/api.php?amount=50'


    const [questions, setQuestions] = useState([])
    const [counter, setCounter] = useState(0)

  

function handleAnswer(answer){
        
    setCounter(counter + 1)
       
    }
  


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


 const shuffledAnswers = [questions[0].correct_answer, ...questions[0].incorrect_answers]





    return questions.length > 0 ? (

            <div className='flex justify-center items-center h-screen flex-col'>
                Welcome to the Trivia Section!
    
                <Link to='/'>Home</Link>
    
    
                <div className='text-purple-800 p-4'>

                
    
                    <h2 dangerouslySetInnerHTML={{__html:questions[0].question }} />
    
 
         
    
                    <div className='answers grid sm:grid-cols-2 gap-4 border-solid border-4 border-red-500 p-10 grid-cols-1'>
                      
                        <Button answer={shuffledAnswers[0]} />
                        <Button answer={shuffledAnswers[1]} />
                        <Button answer={shuffledAnswers[2]} />
                        <Button answer={shuffledAnswers[3]} />
                    </div>
    
    
    
                </div>
            </div>
        ) : <h2 className='text-2xl text-black font-bold'>loading...</h2>
    
}

export default Trivia
