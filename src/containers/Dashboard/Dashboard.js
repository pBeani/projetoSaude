import React, { Component } from 'react';
import Auxiliar from '../../hoc/auxiliar';
import Header from '../../components/Header/Header';
import Home from '../Home/Home';
import './Dashboard.css';

class Dashboard extends Component {
    state = {};

    render() {
        return (
            <Auxiliar>
                <Header />
                <section>
                    <Home />
                </section>
            </Auxiliar>
        );
    }
}

export default Dashboard;