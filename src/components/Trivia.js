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
    const [correctAnswer, setCorrectAnswer] = useState(false)

  

    useEffect(() => {
        axios.get(apiUrl)
            .then(res => {
                console.log(res.data.results);

                const questions = res.data.results.map(question => ({
                    ...question, 
                    answers: [
                        question.correct_answer,
                        ...question.incorrect_answers,
                    ].sort(()=>Math.random() - 0.5),
            }))

                setQuestions(questions)
                console.log(questions, 'qssss');
         
        })
            
            .catch(err => {
                console.log(err);
            })



    }, [])



    const shuffledAnswers = []

    // const newArr = []
    
   if(questions.length && counter + 1 <= questions.length){

    //     // get all answers in the same array
    shuffledAnswers.push(...questions[counter].answers)
      
      
  }


function handleAnswer(answer){

    console.log('rerender')

    if(!correctAnswer){
        if(answer === questions[counter].correct_answer){
            setCorrectAnswer(true)
            setScore(score + 1)
           
        } else{
           
            //make something happen when a wrong answer is clicked
            
        }

    }
    

       
    if(counter + 1 === questions.length  ){
        setGameEnded(true)
    }

    // setCorrectAnswer(true)

    }
  
    //if the answer clicked is the correct answer, highlight it as green 
    //if its not, highlight the correct one as green

    const handleNext = () => {
        setCorrectAnswer(false);

        setCounter(counter + 1)
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
    
    
                <div className='text-purple-900 p-4'>

                
    
                    <h2 dangerouslySetInnerHTML={{__html:questions[counter].question }} />
                    <p>Question {counter + 1} out of {questions.length}</p>
                    <p>Score: {score}/{questions.length}</p>
 
         
    
                    <div className='answers grid sm:grid-cols-2 gap-4 border-solid border-4 border-red-500 p-10 grid-cols-1 '>

                        {shuffledAnswers.map((answer, idx) =>{

                            // console.log(obj, 'obj ans');


                                const correct = correctAnswer ? 
                                answer === questions[counter].correct_answer ? 
                                `bg-green-500` : 'bg-red-500' : 'bg-blue-500'
    
                                const textColor = correctAnswer ?
                                'text-purple-800' : 'text-white' 

                                       return <button 
                            className= {`${correct} ${textColor} p-5 m-5 font-semibold rounded-md focus:outline-none hover:bg-blue-400`}
                            onClick={()=>handleAnswer(answer)} 
                            key={idx} 
                            dangerouslySetInnerHTML={{__html: answer}} />

                            })
   
                        }  
                        
                    </div>
                </div>
                
                {
                    correctAnswer && (
                        <button onClick={handleNext}>Next</button>
                    )
                }
               
             
            </div>

            
            ) : <h2 className='text-2xl text-black font-bold'>loading...</h2>
    
    )}

export default Trivia
