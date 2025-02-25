import * as React from "react"
import { ScrollView, Image } from "react-native"
import { View } from "../components/Themed"
import { useStyles } from "../context/styles.context"
import logo from "../assets/images/c4k-logo2.png"

export default function ScreenWrapper({ children }) {
  const { styles } = useStyles()
  return (
    <View style={styles.page}>
      <View style={styles.stickyHeader}></View>
      <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={{ flexGrow: 1 }}>
        <View>
          <Image source={logo} style={{ width: 124, height: 59, alignSelf: "center" }} />
        </View>
        {children}
      </ScrollView>
    </View>
  )
}
