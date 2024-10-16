import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import {
  FontFamily,
  Color,
  FontSize,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";

const WelcomeScreen = () => {
  return (
    <View style={styles.welcomeScreen}>
      <Image
        style={[styles.statusBarLight, styles.buttonsPosition]}
        contentFit="cover"
        source={require("../assets/status-bar-light.png")}
      />
      <Image
        style={styles.pepperFacePlantInASmallP}
        contentFit="cover"
        source={require("../assets/pepper-face-plant-in-a-small-pot-no-bg.png")}
      />
      <Image
        style={styles.pepperFacePlantInASmallP1}
        contentFit="cover"
        source={require("../assets/pepper-face-plant-in-a-small-pot.png")}
      />
      <View style={styles.greetings}>
        <Text style={[styles.welcome, styles.labelFlexBox]}>Welcome</Text>
        <Text style={styles.wereGladThat}>{`We’re glad that you 
are here!`}</Text>
      </View>
      <View style={[styles.buttons, styles.buttonsPosition]}>
        <Text style={[styles.label, styles.labelFlexBox]}>
          Let’s get started
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsPosition: {
    left: "50%",
    position: "absolute",
  },
  labelFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  statusBarLight: {
    marginLeft: -181,
    top: 0,
    width: 362,
    height: 24,
    display: "none",
  },
  pepperFacePlantInASmallP: {
    top: 436,
    left: 360,
    width: 858,
    height: 858,
    position: "absolute",
  },
  pepperFacePlantInASmallP1: {
    top: 130,
    left: 0,
    width: 612,
    height: 612,
    position: "absolute",
  },
  welcome: {
    fontSize: 58,
    lineHeight: 38,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    color: Color.primaryColors600,
  },
  wereGladThat: {
    fontSize: FontSize.heading6Medium_size,
    letterSpacing: -0.4,
    lineHeight: 28,
    fontFamily: FontFamily.heading6Medium,
    textAlign: "left",
    fontWeight: "500",
    color: Color.primaryColors600,
  },
  greetings: {
    top: 74,
    left: 16,
    gap: Gap.gap_md,
    position: "absolute",
  },
  label: {
    fontSize: FontSize.m3LabelLarge_size,
    lineHeight: 20,
    fontFamily: FontFamily.m3LabelLarge,
    color: Color.shadesWhite01,
    fontWeight: "500",
  },
  buttons: {
    marginTop: 302,
    marginLeft: -164,
    top: "50%",
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowRadius: 24,
    elevation: 24,
    shadowOpacity: 1,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.primaryColors600,
    width: 327,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
    overflow: "hidden",
  },
  welcomeScreen: {
    backgroundColor: Color.shadesWhite01,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default WelcomeScreen;
