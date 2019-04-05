import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './component/header';
import Headline from './component/headline';
import SharedButton from './component/button';
import ListItem from './component/listItem';
import { fetchPosts } from './actions';

import './app.scss';

const tempArr = [
  {
    fName: 'Joe',
    sName: 'Bloggs',
    email: 'joe@bloggs.com',
    age: 24,
    onlineStatus: true
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }
  fetch() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;
    const configButton = {
      buttonText: 'Get Posts',
      emitEvent: this.fetch
    };
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click btn to render post"
            tempArr={tempArr}
          />
          <SharedButton {...configButton} />
          {posts.length > 0 ? (
            <div>
              {posts.map(({ title, body: desc }, index) => (
                <ListItem {...{ key: index, title, desc }} />
              ))}
            </div>
          ) : (
            <div>No Posts Loaded</div>
          )}
        </section>
      </div>
    );
  }
}

export default connect(
  state => ({ posts: state.posts }),
  { fetchPosts }
)(App);
