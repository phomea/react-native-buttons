import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  Animated,
  Easing
} from 'react-native';
import Touchable from './Touchable';
import animations from './animations';
import { defaultAnimation, buttonsGlobalConfig, getButtonsConfig } from './ButtonsConfig';

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 4,
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
  },
});
const bgColors = {
  white: {backgroundColor: '#fff'},
  black: {backgroundColor: '#000'},
  pink: {backgroundColor: '#f0a'},
  orange: {backgroundColor: '#f60'},
  red: {backgroundColor: '#a10'},
  grey: {backgroundColor: '#999'},
  darkGrey: {backgroundColor: '#444'},
  lightGrey: {backgroundColor: '#ccc'},
};
const textColors = {
  white: {color: '#000'},
  black: {color: '#fff'},
  pink: {color: '#fff'},
  orange: {color: '#fff'},
  red: {color: '#fff'},
  grey: {color: '#fff'},
  darkGrey: {color: '#fff'},
  lightGrey: {color: '#000'},
};
class BasicButton extends React.Component {
  animateScale = new Animated.Value(1);
  animateRotation = new Animated.Value(0);

  constructor() {
    super();
    this.onPress = this.onPress.bind(this);
  }
  renderBeforeText(bgColor, textColor) {
    return null;
  }
  renderAfterText(bgColor, textColor) {
    return null;
  }
  renderText(bgColor, textColor) {
    let override = {};
    if (this.props.small) {
      override.fontSize = 12;
    }
    if (this.props.big) {
      override.fontSize = 18;
    }
    return (
      <Text
        style={{
          ...styles.text,
          ...this.props.textStyle,
          ...textColor,
          ...override,
        }}>
        {this.props.title}
      </Text>
    );
  }

  renderButton() {
    const props = this.props;
    const {color, style, textStyle, buttonStyle, full, small} = props;

    const bgColor = bgColors[color];
    const textColor = textColors[color];
    let override = {};
    if (this.props.small) {
      override.paddingVertical = 5;
    }
    if (this.props.big) {
      override.paddingVertical = 12;
      override.borderRadius = 30;
    }
    return (
      <Animated.View
        style={{
          ...styles.button,
          ...bgColor,
          alignSelf: full ? 'auto' : 'center',
          ...buttonStyle,
          transform: [
            {
              scale: this.animateScale,
            },
            {
              rotate: this.animateRotation,
            },
          ],
          ...override,
        }}>
        {this.renderBeforeText(bgColor, textColor)}
        {this.renderText(bgColor, textColor)}
        {this.renderAfterText(bgColor, textColor)}
      </Animated.View>
    );
  }
  onPress() {
    this.props.onPress();
    if (this.props.animation) {
      animations[this.props.animation](this).start();
    }
  }
  render() {
    const props = this.props;
    const {style} = props;
    return (
      <TouchableNativeFeedback
        onPress={this.onPress}
        style={{...style}}
        onLayout={this.onLayout}>
        {this.renderButton()}
      </TouchableNativeFeedback>
    );
  }
}
BasicButton.defaultProps = {
  animation: getButtonsConfig().animation,
  color: 'grey',
  textStyle: {},
  buttonStyle: {},
  onPress: () => {},
};
export default BasicButton;
