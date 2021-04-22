import React, { Component } from 'react'
import Joi from 'joi-browser'

 class Form extends Component {

    state = {
        data: {},
        errors: {}
    }

     validate = () => {
        const options = { abortEarly: false };
        const { error } = Joi.validate(this.state.data, this.schemas, options);
        if (!error) return null;
        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
      };
    
       validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schemas[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
      };

       handleSubmit = async (e) => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;
        this.doSubmit()
      };


       handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        console.log(errors);
        const errorMessage = this.validateProperty(input);
        const { name, value } = input;
        if (errorMessage) errors[name] = errorMessage;
        else delete errors[name];
        
        const data = { ...this.state.data };
        data[name] = value;
        this.setState((state) => ({
          ...state,
          data,
          errors,
        }));
        };
        
}

export default Form
