import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from './pages/routers/createStore';
import AppWithNavigationState from './pages/routers/AppWithNavigationState';

const store = createStore();
class RnNavRedux extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
};

AppRegistry.registerComponent('demo', () => RnNavRedux);

