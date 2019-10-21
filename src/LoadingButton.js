import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  ActivityIndicator,
  Animated,
} from 'react-native';
import BasicButton from './BasicButton';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
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

class LoadingButton extends BasicButton {
  constructor() {
    super();
    this.onLayout = this.onLayout.bind(this);
  }
  width = new Animated.Value(200);
  widthRaw = 0;
  doneLayout = false;
  state = {
    loading: false,
  };

  stopLoading() {
    Animated.timing(this.width, {
      duration: 300,
      toValue: this.widthRaw,
    }).start(() => {
      this.setState({loading: false});
    });
  }
  onPress() {
    this.setState({loading: true});
    Animated.timing(this.width, {
      duration: 300,
      toValue: 30,
    }).start();
    this.props.onPress(() => {
      this.stopLoading();
    });
  }
  onLayout(event) {
    if (this.doneLayout) return;

    const {x, y, height, width} = event.nativeEvent.layout;
    this.width.setValue(width);
    this.widthRaw = width;
    this.doneLayout = true;
    this.forceUpdate();
  }
  renderText(bgColor, textColor) {
    if (this.state.loading) {
      return <ActivityIndicator color={textColor.color} />;
    } else {
      return super.renderText(bgColor, textColor);
    }
  }

  renderButton() {
    const props = this.props;
    const {color, style, textStyle, buttonStyle} = props;

    const bgColor = bgColors[color];
    const textColor = textColors[color];

    const anim = {width: this.width};
    return (
      <Animated.View
        style={{
          ...styles.button,
          ...buttonStyle,
          ...bgColor,
          ...anim,
        }}>
        {this.renderBeforeText(bgColor, textColor)}
        {this.renderText(bgColor, textColor)}
        {this.renderAfterText(bgColor, textColor)}
      </Animated.View>
    );
  }
}

export default LoadingButton;
