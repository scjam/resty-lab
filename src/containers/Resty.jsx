import React, { Component } from 'react';
import Form from '../components/presentational/Form';
import Header from '../components/presentational/Header';
import Fetch from '../services/Fetch';

export default class Resty extends Component {
  state={
    url: '',
    method: '',
    json: '',
    response: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetch();
  }

  fetch = () => {
    const { url, method, json } = this.state;
    Fetch(url, method, json)
      .then(res => this.setState({ response: res }));
  }

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
