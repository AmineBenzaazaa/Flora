import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import {
  FontSize,
  FontFamily,
  Color,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";

const OnboardingScreen1 = () => {
  return (
    <View style={styles.onboardingScreen01}>
      <Image
        style={styles.statusBarLight}
        contentFit="cover"
        source={require("../assets/status-bar-light.png")}
      />
      <View style={[styles.frame, styles.frameLayout]}>
        <Image
          style={[styles.shapeIcon, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/shape.png")}
        />
        <Image
          style={styles.onboardingImageIcon}
          contentFit="cover"
          source={require("../assets/onboarding-image.png")}
        />
        <View style={styles.content}>
          <Text style={styles.neverKillA}>{`Never Kill a Plant 
Again!`}</Text>
          <Text
            style={styles.weWillSend}
          >{`We will send you reminders for everything
related to plant care`}</Text>
        </View>
        <View style={[styles.dots, styles.dotsFlexBox]}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/01.png")}
          />
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/02.png")}
          />
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/02.png")}
          />
        </View>
        <View style={[styles.buttons, styles.dotsFlexBox]}>
          <Text style={styles.label}>Next</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    width: 609,
    position: "absolute",
  },
  dotsFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  statusBarLight: {
    marginLeft: -181,
    width: 362,
    height: 24,
    display: "none",
    left: "50%",
    top: 0,
    position: "absolute",
  },
  shapeIcon: {
    left: 0,
    height: 481,
    top: 0,
  },
  onboardingImageIcon: {
    marginLeft: -203.5,
    top: 181,
    width: 326,
    height: 326,
    left: "50%",
    position: "absolute",
  },
  neverKillA: {
    fontSize: FontSize.heading2Semibold_size,
    letterSpacing: -0.6,
    lineHeight: 40,
    fontWeight: "600",
    fontFamily: FontFamily.heading2Semibold,
    color: Color.shadesBlack02,
    textAlign: "left",
  },
  weWillSend: {
    fontSize: FontSize.paragraphy2Regular_size,
    lineHeight: 24,
    fontFamily: FontFamily.paragraphy2Regular,
    color: Color.neutralGray04,
    textAlign: "left",
  },
  content: {
    top: 547,
    left: 100,
    gap: Gap.gap_md,
    position: "absolute",
  },
  icon: {
    width: 10,
    height: 10,
  },
  dots: {
    marginLeft: -204.5,
    top: 823,
    gap: Gap.gap_xs,
    left: "50%",
  },
  label: {
    fontSize: FontSize.m3LabelLarge_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.m3LabelLarge,
    color: Color.shadesWhite01,
    textAlign: "center",
  },
  buttons: {
    top: 808,
    left: 350,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.primaryColors600,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
    overflow: "hidden",
  },
  frame: {
    top: -107,
    left: -84,
    height: 848,
    overflow: "hidden",
  },
  onboardingScreen01: {
    backgroundColor: Color.shadesWhite01,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default OnboardingScreen1;