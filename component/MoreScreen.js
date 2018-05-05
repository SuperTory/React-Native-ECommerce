import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Switch
} from 'react-native';

export default class MoreScreen extends Component{
  static navigationOptions={
    title:'更多',
    tabBarIcon:(tab)=>renderIcon(tab,'misc'),
  };

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>更多</Text>
          <Image source={{uri:'icon_mine_setting'}} style={styles.headerImage} />
        </View>
        <ScrollView>
          <View style={styles.cellSection}>
            <Cell title="扫一扫" cellFunction={this.talert} />
          </View>
          <View style={styles.cellSection}>
            <SwitchCell title='省流量模式' cellFunction={this.saveMode}/>
            <Cell title="消息提醒"/>
            <Cell title="邀请好友"/>
            <Cell title="清空缓存"/>
          </View>
          <View style={styles.cellSection}>
            <Cell title='意见反馈'/>
            <Cell title="问卷调查"/>
            <Cell title="帮助"/>
            <Cell title="关于我们"/>
          </View>
        </ScrollView>
      </View>
    )
  }

  talert(){
    alert('celltest');
  }
  saveMode(){
  }
}

class Cell extends Component{
  render(){
    return(
      <TouchableOpacity activeOpacity={0.5} onPress={this.props.cellFunction}>
        <View style={styles.cellBar}>
          <Text style={{fontSize:16}}>{this.props.title}</Text>
          <Image style={styles.cellImage} source={{uri:'icon_cell_rightarrow'}} />
        </View>
      </TouchableOpacity>
    )
  }
}
class SwitchCell extends Component{
  constructor(props){
    super(props);
    this.state={
      switchFlag:true
    }
  }
  render(){
    return(
      <TouchableOpacity activeOpacity={0.5} onPress={()=>this.switch()}>
        <View style={styles.cellBar}>
          <Text style={{fontSize:16}}>{this.props.title}</Text>
          <Switch onPress={()=>this.switch()} value={this.state.switchFlag} />
        </View>
      </TouchableOpacity>
    )
  }
  switch(){
    this.setState((prevState) =>({
      switchFlag: !prevState.switchFlag
    }));
    this.props.cellFunction();
  }
}

function renderIcon(tab,component){
  let iconSrc='';
  if (tab.focused){                       //标签激活状态下icon的路径
    iconSrc='icon_tabbar_'+component+'_selected';
  }else{                                  //未激活状态下的icon
    iconSrc='icon_tabbar_'+component;
  }
  return <Image source={{uri:iconSrc}} style={{width:30,height:30}} />
}

const DevWidth=require('Dimensions').get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header:{
    width:DevWidth,
    height:60,
    backgroundColor: '#8bffce',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  headerText:{
    fontSize:20,
    fontWeight:'bold',
  },
  headerImage:{
    width:30,
    height:30,
    position:'absolute',
    right:10
  },
  cellSection:{
    marginTop:10
  },
  cellBar:{
    width:DevWidth,
    height:50,
    backgroundColor:'#fff',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:10,
    paddingRight:10,
    borderBottomColor:'#DDDDDD',
    borderBottomWidth:1
  },
  cellImage:{
    width:15,
    height:15
  }
});