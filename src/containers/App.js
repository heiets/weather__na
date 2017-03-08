import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'

import Current from '../components/Current'
import Search from '../components/Search'
import List from '../components/List'
import * as Actions from '../actions/Actions'
class App extends Component {
    getCurrent() {
        let current = [];
        let c1,c2;
        const key  = '6eebea3469a9df838c9f3994ae87de47';
        navigator.geolocation.getCurrentPosition(function (p) {
            c1 = p.coords.latitude.toFixed(2);
            c2 = p.coords.longitude.toFixed(2);
            axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${c1}&lon=${c2}&appid=${key}`)
                .then(function (response) {
                    current.push(response.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        });
        this.props.Actions.getCurrent(current);
    }
    componentDidMount() {
        this.getCurrent();
        setInterval(() => this.refresh(), 10000);
        setInterval(() => this.forceUpdate(), 3000);
    }
    refresh() {
        let storageData = [...this.props.list.storageData];
        if (localStorage.getItem('storageData') !== null) {
            storageData = localStorage.getItem('storageData').split(',');
        }
        let result = [];
        const key  = '6eebea3469a9df838c9f3994ae87de47';
        if (storageData) {
            storageData.map(function(v) {
                axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${v}&appid=${key}`)
                    .then(function (response) {
                        result.push(response.data)
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            });
        }
        this.props.Actions.add(storageData);
        this.props.Actions.refresh(result);
    }
    render() {
        const { list } = this.props;
        const { add, remove } = this.props.Actions;
        return <div>
            <Current current={ list.current[0] }/>
            <Search list={ list } add={ add } refresh={ ::this.refresh }/>
            <List list={ list } remove={ remove } refresh={ ::this.refresh }/>
        </div>
    }
}
function mapStateToProps(state) {
    return {
        list: state.list
    }
}
function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators(Actions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
