import React from "react"; 
import "./Quizzes.css";  

const Quizzes: React.FC = () => {
    return (
        <div className="quizzes">
            <h1 className="h3 mb-2 text-gray-800">Quizzes</h1>
            <div className="quizzes__square">
                <div className="quizzes__box">
                    <h1>Quiz Name</h1>
                    <div className="line"></div>
                </div>
            </div>
           
        </div>
    ); 
}

export default Quizzes; 