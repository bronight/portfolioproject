import React, { Component } from 'react';
/*
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
*/
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
    };
};

class Main extends Component {
    render() {
        const HomePage = () => {
            return (
                <Home
                />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/aboutus' render={() => <About partners={this.props.partners} /> } />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps)(Main));