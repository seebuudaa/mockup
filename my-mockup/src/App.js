import { React, Fragment, Component } from 'react';
import { Footer, Header } from './Components/Layouts';
import Reviews from "./Components/Reviews"



export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Reviews />
        <Footer />
      </Fragment>
    );
  }
}