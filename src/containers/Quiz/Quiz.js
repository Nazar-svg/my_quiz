import React, { Component } from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
    state = {
        quiz: [
             {
                answers: [
                    {text: 'відповідь 1'},
                    {text: 'відповідь 2'},
                    {text: 'відповідь 3'},
                    {text: 'відповідь 4'},
                ]
             }
        ]
    }
    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.quizWrapper}>
                    <h1>Дайте відповіді на питання!</h1>
                    <ActiveQuiz
                     answers={this.state.quiz[0].answers}
                    />
                </div>
            </div>
        )

    }
}

export default Quiz;