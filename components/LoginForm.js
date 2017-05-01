import React, {Component} from 'react'
import {Form, reduxForm} from 'redux-form';

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
    render () {
        const {handleSubmit} = this.props; // this.props.handleSubmit is a built in method for forms
        return (
        <Form onSubmit={handleSubmit}>
            <Field name="username"/>
        </Form>
        )
    }

}

export default LoginForm;