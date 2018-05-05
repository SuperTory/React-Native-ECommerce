/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import {StackNavigator,TabNavigator} from 'react-navigation'
import HomeStack from './component/Home/HomeScreen'
import ShopStack from './component/Shop/ShopScreen'
import MoreScreen from './component/MoreScreen'
import MineScreen from './component/MineScreen'

const Main=TabNavigator (
  {
    Home:{screen:HomeStack},       //标签页Home对应HomeScreen组件
    Shop:{screen:ShopStack},
    Mine:{screen:MineScreen},
    More:{screen:MoreScreen},
  },
  {
    tabBarPosition: 'bottom',             //设置标签栏位置
    animationEnabled: true,               //开启标签页切换动画
    swipeEnabled: true,                   //允许标签页之间滑动切换
    initialRouteName:'Home',              //初始路由
    tabBarOptions: {                       //标签栏的设置
      style: {                               //整体标签栏样式设置
        height:60,
        backgroundColor: '#8bffce',
      },
      labelStyle:{
        color:'#000'
      },
      showIcon:true
    }
  }
);

class StartPage extends Component{
  render(){
    return <Image source={{uri:'start_page'}} style={{flex:1}} />
  }

  componentDidMount() {
    setTimeout(()=>{
      this.props.navigation.navigate('Main')
    },3000)
  }
}

export default StackNavigator(
  {
    Start:{screen:StartPage},
    Main:{screen:Main}
  },
  {
    navigationOptions:{
      header:false
    }
  }
)

