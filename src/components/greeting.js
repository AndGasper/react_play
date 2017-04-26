import React from 'react';

const Greeting = (props) => {
    const styles= {
        color: props.color || 'green'
    };
    return (
        <div className="greeting">
            <h2 style={styles}>Hello, { props.name }</h2>
        </div>
    )
};

export default Greeting;