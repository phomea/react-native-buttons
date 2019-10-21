import {
  TouchableNativeFeedback,
  TouchableHighlight,
  Platform,
} from 'react-native';

export default (Platform.OS === 'ios'
  ? TouchableHighlight
  : TouchableNativeFeedback);
