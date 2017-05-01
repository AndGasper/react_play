import React, {Component} from 'react'
import {form, reduxForm} from 'redux-form';

const renderField = ({input, label, type, meta: {touched, error} }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);


class LoginForm extends Component {
    constructor(props) {
        super(props);
        const {handleSubmit} = this.props;
    };


    render () {

        return (
        <form onSubmit={handleSubmit}>
            <Field name="username" type="text" component={renderField} label="Username"/>
            <Field name="password" type="password" component={renderField} label="Password"/>
            {error && <strong>{error}</strong>}

        </form>
        )
    }

}

export default LoginForm;