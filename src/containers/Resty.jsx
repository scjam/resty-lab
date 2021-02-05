import React, { Component } from 'react';
import Form from '../components/presentational/Form';
import Header from '../components/presentational/Header';

export default class Resty extends Component {
  state={
    url: '',
    method: '',
    json: '',
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  // handleSubmit = ({ target }) => {

  // }

  render() {
    const { url, method, json } = this.state;

    return (
      <>
        <Header />
        <Form 
          url={url}
          method={method}
          json={json}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
      </>
    );
  }
}
