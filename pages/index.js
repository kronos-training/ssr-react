import React, { Component } from 'react';
import './index.css';
import data from '../data/data.json';
import Card from './Card';

export default class Index extends Component {
  static async getInitialProps() {
    return { cards: data };
  }

  render() {
    const { cards } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src="/static/logo.png" className="static-logo" alt="logo" />
        </header>
        <div className="Grid">
          {
            cards.map(card => <Card key={card.id} />)
          }
        </div>
      </div>
    );
  }
}
