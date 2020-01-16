import React, { Component } from 'react';

export default class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email Address'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        }
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password'
        },
        value: '',
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
  }

  render() {
    /*
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      })
    }
    const form = formElementsArray.map(formElement => (
      <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig ={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          shouldValidate={!formElement.elementConfig.validation}
          touched={formElement.config.touched}
          changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
    ));
    */
    return (
      <div>
        <form>

        </form>
      </div>
    )
  }
}
