/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import {
  Button,
  SocialIcon,SearchBar
} from 'react-native-elements';
import {
  PixelRatio
} from 'react-native';
import Dimensions from 'Dimensions';
import {
  Tabs,
  Tab,
  Icon,Card
} from 'react-native-elements'

export default class ReactNativeAlipayDemo extends Component {

  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.statusBar}></View>
        <View style={[styles.toolbar,styles.center]}>
          <Icon name='assignment' size={26} color='white'/>
          <Text style={{color:'white'}}>
            账单
          </Text>
          <SearchBar
          lightTheme
          placeholder='信用卡还款' 
          containerStyle={[styles.searchContainer]}
          inputStyle={[styles.searchInput]}/>
          <Icon name='account-box' size={26} color='white'/>
          <Icon name='add' size={26} color='white'/>
        </View>
        <ScrollView
          style={{borderWidth:0,backgroundColor:'gray'}}>
          <View style={[styles.horizonContainer,styles.colorAlipayBlue]}>
          <TouchableHighlight style={styles.touchBox}
            >
            <View style={styles.vcenter}>
            <Icon name='aspect-ratio' size={40} color='white'/>
            <Text style={{color:'white'}}>
              扫一扫
            </Text></View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchBox}
            >
            <View><Icon name='view-week' size={40} color='white'/>
            <Text style={{color:'white'}}>
              付款码
            </Text></View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchBox}
            >
            <View style={styles.vcenter}><Icon name='chrome-reader-mode' size={40} color='white'/>
            <Text style={{color:'white'}}>
              卡券
            </Text></View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchBox}
            >
            <View style={styles.vcenter}><Icon name='location-on' size={40} color='white'/>
            <Text style={{color:'white'}}>
              到位
            </Text></View>
          </TouchableHighlight>
        </View>
        <View style={[styles.horizonContainer,{backgroundColor:'white'}]}>
          <TouchableHighlight style={styles.touchBox}
            >
            <View style={styles.vcenter}><Icon name='transform' size={30} color='rgb(24,106,203)'/>
            <Text>
              转账
            </Text></View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchBox}
            >
            <View style={styles.vcenter}><Icon name='credit-card' size={30} color='orange'/>
            <Text>
              信用卡还款
            </Text></View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchBox}
            >
            <View style={styles.vcenter}><Icon name='settings-cell' size={30} color='orange'/>
            <Text>
              充值中心
            </Text></View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchBox}
            >
            <View style={styles.vcenter}><Icon name='stars' size={30} color='rgb(24,106,203)'/>
            <Text>
              蚂蚁聚宝
            </Text></View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchBox}
            >
            <View style={styles.vcenter}><Icon name='face' size={30} color='red'/>
            <Text>
              淘票票 
            </Text></View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchBox}
            >
            <View style={styles.vcenter}><Icon name='local-taxi' size={30} color='orange'/>
            <Text>
              滴滴出行
            </Text></View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchBox}
            >
            <View style={styles.vcenter}><Icon name='school' size={30} color='red'/>
            <Text>
              校园生活
            </Text></View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchBox}
            >
           <View style={styles.vcenter}><Icon name='border-all' size={30} color='gray'/>
            <Text>
              全部
            </Text></View>
          </TouchableHighlight>
          
        </View>
        <View style={[styles.horizonContainer,styles.center,styles.logMyLife]}>
          <Icon name='account-circle' size={30} color='gray'/>
          <SearchBar
          lightTheme
          placeholder='记录我的生活' 
          noIcon
          containerStyle={[styles.logContainer]}
          inputStyle={[styles.logInput]}
          />
          <Icon name='photo-camera' size={30} color='gray'/>
        </View>
        <View style={styles.cardContainer}>
            <Card
          title='HELLO WORLD'
          >
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button
            small
            icon={{name: 'code'}}
            backgroundColor='#03A9F4'
            
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' />
        </Card>

          <Card
          title='HELLO WORLD'
          >
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button
            small
            icon={{name: 'code'}}
            backgroundColor='#03A9F4'
            
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' />
        </Card>

        <Card
          title='HELLO WORLD'
          >
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button
            small
            icon={{name: 'code'}}
            backgroundColor='#03A9F4'
            
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' />
        </Card>
        </View>
        </ScrollView>
        <Tabs>
        <Tab title="生活" 
          renderIcon={() => <Icon name='explore' size={26} color="gray"/>}
          tabStyle={styles.tab} 
        ></Tab>
        <Tab title="口碑"
          renderIcon={() => <Icon name='hearing' size={26} color="gray"/>}
          tabStyle={styles.tab} 
        ></Tab>
        <Tab title="朋友"
          renderIcon={() => <Icon name='group' size={26} color="gray"/>}
          tabStyle={styles.tab} 
        ></Tab>
        <Tab title="我的"
          renderIcon={() => <Icon name='monetization-on' size={26} color="gray"/>}
          tabStyle={styles.tab} 
        ></Tab>
        
</Tabs>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  center: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  vcenter: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(24,106,203)',
    borderWidth: 0
  },
  horizonContainer: {
    flex: -1,
    flexDirection: 'row',
    flexWrap: "wrap",
    borderWidth: 0
  },
  statusBar: {
    width: Dimensions.get('window').width,
    height: 20,
    backgroundColor: 'rgb(24,106,203)'
  },
  touchBox: {
    width: Dimensions.get('window').width / 4 - 0.5,
    height: Dimensions.get('window').width / 4,
    borderWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  toolbar: {

    height: 40,
    borderWidth: 0
  },
  colorAlipayBlue: {
    backgroundColor: 'rgb(24,106,203)',
  },
  logMyLife: {
    backgroundColor: 'white',
    height: 40,
    marginTop: 5,
    marginBottom: 5
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor:'white'
  },
  card: {
    height: 100,
    width: Dimensions.get('window').width,
    marginTop: 0,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  tab: {
    width: Dimensions.get('window').width / 4 - 0.5,
  },
  searchContainer:{
    backgroundColor: 'rgb(24,106,203)',
    width:250,
  },
  searchInput:{
    backgroundColor: 'rgb(42,121,204)',
  },
  logContainer:{
    backgroundColor: 'white',
    width:250,
  },
  logInput:{
    backgroundColor: 'white',
  }
});

AppRegistry.registerComponent('ReactNativeAlipayDemo', () => ReactNativeAlipayDemo);