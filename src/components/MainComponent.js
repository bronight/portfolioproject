import React, { Component } from 'react';
import Home from './HomeComponent';
import TheCalendar from './CalendarComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import TeamPage from './TeamComponent';
import ShoppingList from './ShoppingList'

import { fetchEvents } from '../redux/ActionCreators';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        events: state.events
    };
};

const mapDispatchToProps = {
    fetchEvents: () => (fetchEvents())
};

class Main extends Component {

    componentDidMount() {
        this.props.fetchEvents();
    }

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
                        <Route exact path='/calendar' render={() => <TheCalendar events={this.props.events.events} /> } />
                        <Route exact path='/about' component={About}/>
                        <Route exact path='/contact' component={Contact}/>
                        <Route exact path='/team' component={TeamPage}/>
                        <Route exact path='/shoppinglist' component={ShoppingList}/>
                        <Redirect to='/home' />
                    </Switch>
                <Footer />

            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));