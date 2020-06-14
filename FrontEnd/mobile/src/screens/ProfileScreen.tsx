import * as React from 'react'
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
  StatusBar,
  StatusBarIOS,
  FlatList,
} from 'react-native'
import { AppState, SignInState, Post, User } from '../core'
import { connect } from 'react-redux'
import { images } from '../assets'
import LinearGradient from 'react-native-linear-gradient'
import {
  WIDTH,
  HEIGHT,
  getStatusBarHeight,
  convertToPostsArray,
} from '../configs/Function'
import { TabView, SceneMap, Route, TabBar } from 'react-native-tab-view'
import ItemNewsFeed from '../components/ItemNewsFeed'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParams } from '../navigations/AppNavigator'
import { ActivityIndicator } from 'react-native-paper'
import colors from '../values/colors'
import { postService, userService } from '../services'
import ImagePicker, { Image as ImageP } from 'react-native-image-crop-picker'
import Icon from 'react-native-vector-icons/Entypo'
import { RouteProp } from '@react-navigation/native'

interface ProfileScreenProps {
  navigation: StackNavigationProp<RootStackParams>
  route: RouteProp<RootStackParams, 'Profile'>
  signInState: SignInState
}

interface ProfileScreenState {
  index: number
  isLoadingPost: boolean
  isLoadingUser: boolean
  isMyProfile: boolean
  posts: Post[]
  user?: User
}

class ProfileScreen extends React.Component<
  ProfileScreenProps,
  ProfileScreenState
> {
  constructor(props: ProfileScreenProps) {
    super(props)
    this.state = {
      index: 0,
      isLoadingPost: true,
      isLoadingUser: true,
      isMyProfile: true,
      posts: [],
    }
    this.props.navigation.setOptions({
      header: () => null,
    })
  }

  async componentDidMount() {
    await this.getUserData()
    await this.getUserPost()
  }

  getUserData = async () => {
    console.log(this.props.route.params.userId)
    const currentUser = this.props.signInState.currentUser!
    if (this.props.route.params.userId === currentUser.id) {
      this.setState({ user: currentUser, isLoadingUser: false })
    } else {
      const user = await userService.getUserById(this.props.route.params.userId)
      this.setState({ user, isLoadingUser: false, isMyProfile: false })
    }
  }

  getUserPost = async () => {
    const posts = await postService.getAllwParams('user', this.state.user?.id!)
    this.setState({ posts, isLoadingPost: false })
  }

  render() {
    if (this.state.isLoadingUser) {
      return <ActivityIndicator animating={true} />
    }
    return (
      <ScrollView
        style={{ backgroundColor: '#fff', width: '100%', height: '100%' }}>
        <ImageBackground
          source={{ uri: this.state.user?.cover }}
          style={styles.coverImage}>
          <LinearGradient
            colors={['transparent', '#fff']}
            style={styles.coverImage}>
            <View
              style={[
                styles.headerContainer,
                {
                  justifyContent: this.state.isMyProfile
                    ? 'space-between'
                    : 'flex-start',
                },
              ]}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.goBack()
                }}>
                <Image source={images.ARROWBACK} style={styles.arrowBack} />
              </TouchableOpacity>
              {this.state.isMyProfile && (
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() => {
                    this.props.navigation.navigate('EditProfile')
                  }}>
                  <Text>Edit Profile</Text>
                </TouchableOpacity>
              )}
            </View>
          </LinearGradient>
          <View style={styles.avatar}>
            <Image
              source={{ uri: this.state.user?.avatar }}
              style={styles.avatar}
            />
            {this.state.isMyProfile && (
              <TouchableOpacity
                onPress={() => this.onPressAvatar()}
                style={{
                  position: 'absolute',
                  bottom: 10,
                  right: 10,
                  height: 40,
                  width: 40,
                  alignItems: 'center',
                  borderRadius: 100,
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}>
                <Icon name="camera" style={{ fontSize: 20 }} />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.nameContainer}>
            <Text style={{ fontSize: 27 }}>{this.state.user?.displayName}</Text>
            <Text numberOfLines={2}>{this.state.user?.description}</Text>
          </View>
        </ImageBackground>
        <View
          style={{
            backgroundColor: '#e0e0e0',
            paddingVertical: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              paddingVertical: 5,
            }}>
            <TouchableOpacity style={styles.btnInfo}>
              <Text>Image</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnInfo}>
              <Text> Monthly Target</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnInfo}>
              <Text> More Info</Text>
            </TouchableOpacity>
          </View>
        </View>
        {this.state.isLoadingPost ? (
          <ActivityIndicator animating={true} />
        ) : (
          this.state.posts.map((post) => {
            return (
              <ItemNewsFeed
                post={post}
                currentGroup={1}
                onPressProfile={() => {}}
                onPressGroup={() => {
                  this.props.navigation.navigate('Group', {
                    groupId: post.groupId,
                  })
                }}
                onPressImage={() => {
                  this.props.navigation.navigate('ImageView', {
                    listImage: post.photos,
                  })
                }}
                onPress={() => {
                  this.props.navigation.navigate('PostDetail', {
                    postId: post.id,
                  })
                }}
              />
            )
          })
        )}
      </ScrollView>
    )
  }

  onPressAvatar() {
    ImagePicker.openPicker({
      mediaType: 'photo',
      writeTempFile: true,
      includeExif: true,
      multiple: false,
      cropping: true,
    }).then((res) => {
      const image = res as ImageP
      this.setState((prevState) => {
        return { user: { ...prevState, avatar: image.path } }
      })
    })
  }
}

const styles = StyleSheet.create({
  bold_text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  coverImage: {
    width: WIDTH(360),
    height: HEIGHT(180),
    marginBottom: 10,
  },
  headerContainer: {
    marginTop: getStatusBarHeight(),
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowBack: {
    marginLeft: 10,
    width: WIDTH(20),
    height: HEIGHT(20),
    resizeMode: 'contain',
  },
  editButton: {
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    padding: 10,
  },
  avatar: {
    width: WIDTH(130),
    height: WIDTH(130),
    borderRadius: WIDTH(130) / 2,
    position: 'absolute',
    right: 20,
    bottom: 0,
  },
  nameContainer: {
    position: 'absolute',
    left: 20,
    bottom: 0,
    right: 170,
  },
  gridImage: {
    width: WIDTH(357) / 3,
    height: WIDTH(357) / 3,
    resizeMode: 'cover',
  },
  rowImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 1,
  },
  btnInfo: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    marginLeft: 15,
  },
})

const mapStateToProps = (state: AppState) => ({
  signInState: state.signin,
})

export default connect(mapStateToProps)(ProfileScreen)
