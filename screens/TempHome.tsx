import React from "react"
import { View, Text, Image, Linking, Pressable } from "react-native"
import { SocialIcon } from "react-native-elements"
import { Countdown } from "../components/Countdown"
import { useStyles } from "../context/styles.context"
import ScreenWrapper from "./ScreenWrapper"

export const TempHome = () => {
  const openDonateLink = () => {
    Linking.openURL("https://paypal.com/donate/?cmd=_s-xclick&hosted_button_id=ZM6NKQZHSCH2A")
  }
  const { styles } = useStyles()
  return (
    <ScreenWrapper>
      <Countdown />
      <View style={styles.sectionContainer}>
        <Pressable style={styles.button} onPress={openDonateLink}>
          <Text style={styles.buttonText}>{"Donate"}</Text>
        </Pressable>
      </View>
      <View style={styles.sectionContainer}>
        <View style={styles.socialsWrapper}>
          <SocialIcon
            light
            onPress={() => {
              Linking.openURL("https://www.facebook.com/Christmas4Kids/")
            }}
            type="facebook"
          />
          <SocialIcon
            light
            onPress={() => {
              Linking.openURL("https://www.instagram.com/christmas4kidstn/")
            }}
            type="instagram"
          />
          <SocialIcon
            light
            onPress={() => {
              Linking.openURL("https://twitter.com/nashvillec4k")
            }}
            type="twitter"
          />
        </View>
      </View>
    </ScreenWrapper>
  )
}
