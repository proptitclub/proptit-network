import React from 'react'
import { View, StatusBar, TextInput, Animated, ViewStyle } from 'react-native'

interface FloatingLabelInputProps {
  label?: string
  onTextChange?: (text: string) => void
  borderColor?: string
  textInputColor?: string
  containerStyle?: ViewStyle
}

interface FloatingLabelInputState {
  isFocused: boolean
}

class FloatingLabelInput extends React.Component<
  FloatingLabelInputProps,
  FloatingLabelInputState
> {
  _animatedIsFocused: Animated.Value = new Animated.Value(0)

  constructor(props: FloatingLabelInputProps) {
    super(props)

    this.state = {
      isFocused: false,
    }
  }

  handleFocus = () => this.setState({ isFocused: true })
  handleBlur = () => this.setState({ isFocused: false })

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: this.state.isFocused ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start()
  }

  render() {
    const {
      label,
      onTextChange,
      borderColor,
      textInputColor,
      containerStyle,
      ...props
    } = this.props
    const labelStyle = {
      position: 'absolute',
      left: 0,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [18, 0],
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 14],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ['#aaa', '#000'],
      }),
    }
    return (
      <View style={[containerStyle, { paddingTop: 18 }]}>
        <Animated.Text style={labelStyle}>{label}</Animated.Text>
        <TextInput
          {...props}
          style={{
            fontSize: 20,
            color: textInputColor,
            borderBottomWidth: 1,
            borderBottomColor: borderColor,
          }}
          onChangeText={onTextChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
        />
      </View>
    )
  }
}

export default FloatingLabelInput
