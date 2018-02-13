import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";

import Base, { Default, Danger, Info, Success } from "./styles";

const { array, string, object, bool, func, any } = PropTypes;

class Button extends Component {
  static PropTypes = {
    children: any,
    danger: bool,
    info: bool,
    style: View.PropTypes.style,
    success: bool,
    onPress: func
  };

  getTheme() {
    const { danger, info, success } = this.props;

    if (info) {
      return Info;
    }
    if (success) {
      return Success;
    }
    if (danger) {
      return Danger;
    }
    return Default;
  }

  render() {
    const theme = this.theme();
    const { children, onPress, style, rounded } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[Base.main, theme.main, rounded ? Base.rounded : null, style]}
        onPress={onPress}
      >
        <Text style={[Base.label, theme.label]}>{children}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
