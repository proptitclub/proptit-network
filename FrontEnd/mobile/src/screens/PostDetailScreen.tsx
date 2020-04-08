import * as React from 'react'
import { BaseScreenProps, BaseScreen } from './BaseScreen'
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  FlatList,
  KeyboardAvoidingView,
  TextInput,
  Platform,
} from 'react-native'
import ItemNewsFeed from '../components/ItemNewsFeed'
import ClassicHeader from '../components/header/ClassicHeader'
import { images } from '../assets'
import { WIDTH } from '../configs/Function'
import ItemComment from '../components/comment/ItemComment'

interface PostDetailScreenProps extends BaseScreenProps {}

class PostDetailScreen extends BaseScreen {
  render() {
    return (
      <KeyboardAvoidingView
        style={{ marginTop: 50, flexDirection: 'column' }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView style={{ width: '100%', height: '90%' }}>
          <ItemNewsFeed />
          <View
            style={{
              width: '100%',
              height: 30,
              backgroundColor: 'rgb(245, 245, 245)',
              borderColor: 'rgb(203, 204, 204)',
              borderTopWidth: 0.5,
              justifyContent: 'center',
            }}>
            <Text style={{ marginLeft: 20, color: 'gray' }}>Comment</Text>
          </View>
          {[
            'Good! dddddddddddddddddddddddddddddddd d d d d d  d d d d d d d d d d d d d ',
            'Nice! Bro',
            'Awesome!',
          ].map(content => (
            <ItemComment content={content} urlAvatar="" />
          ))}
          <View
            style={{
              width: '100%',
              height: 30,
              backgroundColor: 'rgb(245, 245, 245)',
              borderColor: 'rgb(203, 204, 204)',
              borderTopWidth: 0.5,
              justifyContent: 'center',
            }}>
            <Text style={{ marginLeft: 20, color: 'gray' }}>Liked</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              backgroundColor: 'white',
            }}>
            <FlatList
              data={[1, 2, 3, 4]}
              style={{ padding: 5 }}
              renderItem={({ item }) => (
                <Image
                  source={images.AVT_BATMAN}
                  style={{ height: 40, width: 40, borderRadius: 100 }}
                />
              )}
              horizontal={true}
            />
          </View>
        </ScrollView>
        <View
          style={{
            width: '100%',
            elevation: 10,
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowRadius: 5,
            shadowOpacity: 1.0,
            backgroundColor: 'white',
            flexDirection: 'row',
            padding: 10,
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/images/avt_batman.png')}
            style={{ height: 60, width: 60, borderRadius: 100 }}
          />
          <TextInput
            placeholder="Leave Reply"
            multiline={true}
            style={{ width: '100%', fontSize: 20, marginLeft: 10 }}
          />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default PostDetailScreen
