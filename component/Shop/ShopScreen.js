import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import {StackNavigator} from 'react-navigation'
import ShopDetail from './ShopDetail'
import TitleCell from "./TitleCell";
import ShopCenter from './ShopCenter'
import ShopBar from './ShopBar'
import shopCenter from '../../mock/ShopCenterData.json'

const DevWidth=require('Dimensions').get('window').width;
let navigation={};

class ShopScreen extends Component{
  static navigationOptions={
    header:ShopHeader
  };
  constructor(props){
    super(props);
    this.state={
      shopList:[]
    }
  }

  componentDidMount() {
    this.fetchShopList();
  }

  render(){
    navigation=this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <TitleCell title='购物中心' infoText="全部4家"
                   iconSrc="icon_shop_gwzx"
        />
        <ScrollView horizontal={true} style={styles.shopList}
                    showsHorizontalScrollIndicator={false}
        >
          {shopCenter.data.map(
            (item,index)=>  <ShopCenter key={index} data={item} onClick={this.jumpDetail}/>
          )}
        </ScrollView>
        <TitleCell title='猜你喜欢' iconSrc="icon_shop_cnxh"/>
          {this.state.shopList.map(
            (item,index)=> <ShopBar key={index} data={item} />
          )}
      </ScrollView>
    )
  }
  jumpDetail(url){
    navigation.navigate('Detail',url);
  }
  fetchShopList(){
    let shopUrl="http://api.meituan.com/group/v2/recommend/homepage/city/20?userId=160495643%1Auserid=160495643%1A__vhost=api.mobile.meituan.com%1Aposition=23.134643%2C113.373951%1AmovieBundleVersion=100%1Autm_term=6.6%1Alimit=40%1Awifi-mac=64%3A09%3A80%3A10%3A15%3A27%1Aci=20%1A__skcy=X6Jxu5SCaijU80yX5ioQuvCDKj4%3D%1A__skua=5657981d60b5e2d83e9c64b453063ada%1A__skts=1459731016.350255%1Awifi-name=Xiaomi_1526%1Aclient=iphone%1Auuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271%1A__skno=FEB757F5-6120-49EC-85B0-D1444A2C2E7B%1Autm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271%1Autm_source=AppStore%1Autm_medium=iphone%1Aversion_name=6.6%1Awifi-cur=0%1Awifi-strength=%1Aoffset=0%1Autm_campaign=AgroupBgroupD100H0%1A__skck=3c0cf64e4b039997339ed8fec4cddf05%1Amsid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594";
    fetch(shopUrl).then((res)=>res.json())
      .then((resJson)=>{
        this.setState({
          shopList:resJson.data
        });
      }).catch((err)=>{
      console.log(err);
    })
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

function ShopHeader() {
  return(
    <View style={styles.header}>
      <Text style={styles.headerText}>商家</Text>
    </View>
  )
}

export default ShopStack=StackNavigator(
  {
    Shop:{screen:ShopScreen},
    Detail:{screen:ShopDetail}
  },
  {
    navigationOptions:{
      title:'商家',
      tabBarIcon:(tab)=>renderIcon(tab,'merchant'),
    }
  }
)

const styles = StyleSheet.create({
  container: {
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
  shopList:{
    backgroundColor:'#fff',
    paddingTop:10,
    paddingBottom:5
  }
});