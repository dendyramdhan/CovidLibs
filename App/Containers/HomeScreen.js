import React, { Component } from 'react'
import { StatusBar, ScrollView, Text, View, Image, RefreshControl } from 'react-native'
import { connect } from 'react-redux'
import IndonesiaActions from '../Redux/IndonesiaRedux'

// Styles
import styles from './Styles/HomeScreenStyle'
import osmi, { colors } from 'osmicsx'
import { Images } from '../Themes'

// Components
import StatCard from '../Components/StatCard'

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerShown: false
  })

  constructor (props) {
    super(props)
    this.state = {
      refreshing: false
    }

    props.getSummary()
  }

  _getData = () => {
    this.props.getSummary();
  }

  render () {

    const { data, fetching } = this.props.summary
    console.tron.log("=== LOG DATA SUMMARY ===", data, fetching)
    
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors["gray-800"]} barStyle="light-content" />

        <ScrollView 
          style={osmi("flex")}
          refreshControl={<RefreshControl 
            refreshing={this.state.refreshing}
            onRefresh={this._getData}/>}>
          <View style={styles.summaryContainer}>
            <View style={osmi("flex-11")}>
              <Text style={styles.welcomeText}>Covid-19 Summary of Indonesia</Text>
            </View>

            <View style={osmi(["flex-1", "items-end"])}>
              <Image source={Images.indoIcon} style={{width: 75, height: 75}} />
            </View>
          </View>

          <View style={osmi("p-5")}>
            <StatCard 
              title="SEMBUH" 
              type="sembuh" 
              data={data && data.sembuh}
              fetching={fetching} />
            <StatCard 
              title="PERAWATAN" 
              type="perawatan" 
              data={data && data.perawatan}
              fetching={fetching} />
            <StatCard 
              title="MENINGGAL" 
              type="meninggal" 
              data={data && data.meninggal}
              fetching={fetching} />
            <StatCard 
              title="JUMLAH KASUS" 
              type="kasus" 
              data={data && data.jumlahKasus}
              fetching={fetching} />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    summary: state.indo.summary
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSummary: value => dispatch(IndonesiaActions.getSummaryRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
