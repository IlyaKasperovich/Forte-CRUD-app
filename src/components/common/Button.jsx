import React from 'react';

const Button = ({onClick, label, classes, disabled, id}) => {
    return (
        <button
        disabled={disabled}
        onClick={onClick}
        className={classes}
        id={id}
        >
            {label}
        </button>
    );
};

export default Button;
