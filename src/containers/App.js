import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Current from '../components/Current'
import Search from '../components/Search'
import List from '../components/List'
import * as Actions from '../actions/Actions'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        };
    }
    render() {
        const { list } = this.props;
        const { add, refresh } = this.props.Actions;
        return <div>
            <Current current={ list.current[0] }/>
            <Search list={ list } add={ add } refresh={ refresh }  />
            <List list={ list } />
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
