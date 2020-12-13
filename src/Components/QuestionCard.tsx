import React, {useState} from 'react';
import {questionPropsType} from './../Types/quiz_types'

 const QuestionCard:React.FC<questionPropsType> = ({question, options, callback}) => {     
    
    let [selectedAns, setselectedAns] = useState('');  

    const handleSelection = (ev: any) => {
        setselectedAns(ev.target.value); 
    }
    
    return (
         <div className='question-container'>
             <div className='question'>
                 {question}
             </div>
             <form onSubmit={(e:React.FormEvent<EventTarget>) => callback(e, selectedAns)}
                className='question-form'
             >
                 {
                     options.map((opt:string, ind: number) => {
                         return(
                             <div key={ind}>
                                <label>
                                   <input
                                       type='radio'
                                       name='opt'
                                       required
                                       value={opt}
                                       checked={selectedAns === opt}
                                       onChange={handleSelection}
                                   />
                                   {opt}
                                </label>
                             </div>
                         )
                     })
                 }
                 <input type='submit' className='submit' />
             </form>
         </div>
     )
 }

export default QuestionCard;