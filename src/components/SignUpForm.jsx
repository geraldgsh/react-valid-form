/* eslint-disable react/prop-types */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import PasswordStr from '../services/PasswordStr';
import '../assets/style.css';

const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
  score,
  btnTxt,
  type,
  pwMask,
  onPwChange,
}) => (
  <div className="loginBox">
    <h1>Sign Up</h1>
    {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}

    <form onSubmit={onSubmit}>
      <Grid item xs>
        <TextField
          name="firstname"
          floatingLabelText="first name"
          value={user.firstname}
          onChange={onChange}
          errorText={errors.firstname}
        />
      </Grid>
      <Grid item xs>
        <TextField
          name="lastname"
          floatingLabelText="last name"
          value={user.lastname}
          onChange={onChange}
          errorText={errors.lastname}
        />
      </Grid>
      <Grid item xs>
        <TextField
          name="email"
          floatingLabelText="email"
          value={user.email}
          onChange={onChange}
          errorText={errors.email}
        />
      </Grid>
      <Grid item>
        <TextField
          type={type}
          name="password"
          floatingLabelText="password"
          value={user.password}
          onChange={onPwChange}
          errorText={errors.password}
        />
      </Grid>
      <Grid item xs>
        <div className="pwStrRow">
          {score >= 1 && (
            <div>
              <PasswordStr score={score} />
              <FlatButton
                className="pwShowHideBtn"
                label={btnTxt}
                onClick={pwMask}
                style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)' }}
              />
            </div>
          )}
        </div>
      </Grid>
      <Grid item xs>
        <TextField
          type={type}
          name="pwconfirm"
          floatingLabelText="confirm password"
          value={user.pwconfirm}
          onChange={onChange}
          errorText={errors.pwconfirm}
        />
      </Grid>
      <br />
      <RaisedButton
        className="signUpSubmit"
        primary
        type="submit"
        label="submit"
      />
    </form>
  </div>
);

export default SignUpForm;
