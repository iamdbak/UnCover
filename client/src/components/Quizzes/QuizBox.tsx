import React from 'react'; 
import './Quizzes.css';



const QuizBox: React.FC<{title:string}> = ({children, title}) => {
    return (
        <div className="quizbox">
            <h1 id="quizbox__header">{title}</h1>
            <h3 id="quizbox__child">{children}</h3>
        </div>
    );
}

export default QuizBox;