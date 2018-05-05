import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native';
const DevWidth=require('Dimensions').get('window').width;

export default class MenuList extends Component{
  constructor(props){
    super(props);
    this.state={
      menuIndex:0
    }
  }
  render(){
    return(
      <View style={styles.menu}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                    pagingEnabled={true} onMomentumScrollEnd={(e)=>this.slideMenu(e)}
        >
          <FlatList data={this.props.listData[0]} style={styles.menuList}
                    keyExtractor = {(item, index) => index.toString()}
                    renderItem={this.renderMenuItem} numColumns={5}
                    columnWrapperStyle={styles.menuColumn}
          />
          <FlatList data={this.props.listData[1]} style={styles.menuList}
                    keyExtractor = {(item, index) => index.toString()}
                    renderItem={this.renderMenuItem} numColumns={5}
                    columnWrapperStyle={styles.menuColumn}
          />
        </ScrollView>
        <View style={styles.indicateBar}>
          {/*渲染底部指示标签点*/}
          {this.renderIndicate()}
        </View>
      </View>
    )
  }
  renderIndicate(){
    let jsx=[];
    let color='';
    for (let i=0;i<this.props.listData.length;i++){
      //判断是否为当前页，若为当前页则指示点color为蓝色，否则为白色
      color=(i===this.state.menuIndex)?'#7cff7e':'#9c9c9c';
      jsx.push(<Text key={i} style={{fontSize:15,color:color}}>●</Text>)
    }
    return jsx;
  }
  slideMenu(e){
    let offset=e.nativeEvent.contentOffset.x;           //获取x偏移量
    let index=Math.floor(offset/DevWidth);              //通过偏移量计算出当前页码
    this.setState({
      menuIndex:index
    })
  }
  renderMenuItem(rowData){
    return(
      <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.iconItem}>
          <Image style={styles.iconImg} source={{uri:'icon_menu_'+rowData.item.image}} />
          <Text style={styles.iconTitle}>{rowData.item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  menuList:{
    width:DevWidth,
    backgroundColor:'#fff'
  },
  menuColumn:{
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  iconItem:{
    alignItems:'center',
    marginTop:10
  },
  iconImg:{
    width:60,
    height:60
  },
  indicateBar:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop:10
  }
});