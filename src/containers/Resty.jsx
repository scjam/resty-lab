import React, { Component } from 'react';
import Form from '../components/presentational/Form';
import Header from '../components/presentational/Header';
import Fetch from '../services/Fetch';
import Results from '../components/presentational/Results';
import styles from './Resty.css';

export default class Resty extends Component {
  state={
    url: '',
    method: '',
    json: '',
    results: ''
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
      .then(res => this.setState({ results: JSON.stringify(res) }));
  }

  render() {
    const { url, method, json, results } = this.state;

    return (
      <>
        <Header />
        <section className={styles.Resty}>
          <Form 
            url={url}
            method={method}
            json={json}
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
          />
          <Results results={results} />
        </section>
      </>
    );
  }
}
