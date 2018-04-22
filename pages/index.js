import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import Link from 'next/link';
import { initStore, initialCards, addItem } from './store';
import './index.css';
import data from '../data/data.json';
import Card from './Card';

class Index extends Component {
  static async getInitialProps({ store }) {
    console.log('store===', store);
    store.dispatch(initialCards());
  }

  render() {
    const { cards } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <Link href="/page2">
            <img src="/static/logo.png" className="static-logo" alt="logo" />
          </Link>
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

const mapDispatchToProps = (dispatch) => {
  return {
    initialCards: bindActionCreators(initialCards, dispatch),
    addItem: bindActionCreators(addItem, dispatch)
  };
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  };
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Index);
