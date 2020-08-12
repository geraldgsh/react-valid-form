/* eslint-disable  */
/* eslint-disable prefer-destructuring, react/destructuring-assignment, react/no-access-state-in-setstate */
import React, { Component } from 'react';
import Swal from 'sweetalert2'
import SignUpForm from '../components/SignUpForm';

const axios = require('axios');
const zxcvbn = require('zxcvbn');
const FormValidators = require('../services/validate');
const { validateSignUpForm } = FormValidators;

class SignUpContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        pwconfirm: '',
      },
      btnTxt: 'show',
      type: 'password',
      score: '0',
    };

    this.pwMask = this.pwMask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitSignup = this.submitSignup.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.pwHandleChange = this.pwHandleChange.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user,
    });
  }

  pwHandleChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user,
    });

    if (event.target.value === '') {
      this.setState(state => ({ ...state, score: 'null' }));
    } else {
      const pw = zxcvbn(event.target.value);
      this.setState(state => ({ ...state, score: pw.score + 1 }));
    }
  }

  submitSignup(user) {
    const params = {
      campaignUuid: "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
      data: {
        firstName: user.first,
        lastName: user.last,
        password: user.pw,
        email: user.email,
      } 
    };
    axios
      .post('https://api.raisely.com/v3/signup', params)
      .then(res => {
        Swal.fire({
          icon: 'success',
          title: 'Welcome ' + res.data.data.firstName + " " + res.data.data.lastName,
          text: res.data.message,
        });
        this.setState({
          user: {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            pwconfirm: '',
          }
        });
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.errors[0].message,
        })
      });
  }

  validateForm(event) {
    event.preventDefault();
    const payload = validateSignUpForm(this.state.user);
    if (payload.success) {
      this.setState({
        errors: {},
      });
      const user = {
        first: this.state.user.firstname,
        last: this.state.user.lastname,
        pw: this.state.user.password,
        email: this.state.user.email,
      };
      this.submitSignup(user);
    } else {
      const { errors } = payload;
      this.setState({
        errors,
      });
    }
  }

  pwMask(event) {
    event.preventDefault();
    const data = this.state;
    this.setState(state => ({
      ...state,
      type: data.type === 'password' ? 'input' : 'password',
      btnTxt: data.btnTxt === 'show' ? 'hide' : 'show',
    }));
  }

  render() {
    return (
      <div>
        <SignUpForm
          onSubmit={this.validateForm}
          onChange={this.handleChange}
          onPwChange={this.pwHandleChange}
          errors={this.state.errors}
          user={this.state.user}
          score={this.state.score}
          btnTxt={this.state.btnTxt}
          type={this.state.type}
          pwMask={this.pwMask}
        />
      </div>
    );
  }
}

export default SignUpContainer;
