import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";

import Styles, { COLOR } from "../config/styles";

import { bindActionCreators } from "redux";
import * as authActions from "../actions/authenticate";
import { connect } from "react-redux";

class Splash extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.restoreSession();
        setTimeout(() => {
            this.props.state.isAuth
                ? this.props.navigation.navigate('AuthenticatedInitialScreens')
                : this.props.navigation.navigate('UnauthenticatedScreens')      
        }, 2000);
    }

    render() {
        return (
            <View
                style={[
                    Styles.container,
                    { justifyContent: "center", alignItems: "center", backgroundColor: COLOR.DARK }
                ]}
            >
                <StatusBar backgroundColor={COLOR.PANTOME} barStyle="light-content" />
                <Text style={{ color: COLOR.PANTOME, fontSize: 36, fontWeight: "bold" }}>
                    Test V3
          </Text>
            </View>
        )
    }
}

export default connect(
    state => ({ state: state.authenticate }),
    dispatch => ({
        actions: bindActionCreators(authActions, dispatch)
    })
)(Splash);
