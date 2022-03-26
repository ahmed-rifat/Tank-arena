import React from 'react';

const Question = () => {
    return (
        <div className='mt-4'>
           
            <h4>Question-2: props vs State?</h4> <br />
            <p>Answer: Props are pass data from one component to another.State  Data is passed within the component only.
            props immutable but State mutable.
            Props are read only but State is read and write.</p>
            <br />
            <h4>Question-3: How usesate Works? </h4><br />
            <p>Answer: it's a Hook that allows to have state variables in functional components.react has two types component. One is class componenet other one is functional component.The useState hook is a special function that takes the initial state as an argument and returns an array of two entries. </p>
        </div>
    );
};

export default Question;