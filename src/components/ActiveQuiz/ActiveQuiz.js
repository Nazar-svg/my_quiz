import React from 'react';
import classes from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = props => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>1. </strong>
                  Як справи?
              </span>
                <small>3 for 14</small>
            </p>
            <AnswersList
                answers={props.answers}
            />
        </div>
    )
}

export default ActiveQuiz;