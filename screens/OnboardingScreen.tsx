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

const OnboardingScreen = () => {
  return (
    <View style={styles.onboardingScreen2}>
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../assets/shape2.png")}
      />
      <Image
        style={styles.statusBarLight}
        contentFit="cover"
        source={require("../assets/status-bar-light.png")}
      />
      <Image
        style={styles.onboardingImageIcon}
        contentFit="cover"
        source={require("../assets/onboarding-image2.png")}
      />
      <View style={styles.content}>
        <Text style={styles.scanToKnow}>{`Scan to know your
Plants`}</Text>
        <Text style={styles.scanYourPlants}>
          Scan your plants and or browse through plant library to create you
          digital garden
        </Text>
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
  );
};

const styles = StyleSheet.create({
  dotsFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  shapeIcon: {
    top: -280,
    left: -166,
    width: 831,
    height: 822,
    position: "absolute",
  },
  statusBarLight: {
    marginLeft: -181,
    top: 0,
    width: 362,
    height: 24,
    display: "none",
    left: "50%",
    position: "absolute",
  },
  onboardingImageIcon: {
    marginLeft: -163,
    top: 74,
    width: 326,
    height: 326,
    left: "50%",
    position: "absolute",
  },
  scanToKnow: {
    fontSize: FontSize.heading2Semibold_size,
    letterSpacing: -0.6,
    lineHeight: 40,
    fontWeight: "600",
    fontFamily: FontFamily.heading2Semibold,
    color: Color.shadesBlack02,
    textAlign: "left",
  },
  scanYourPlants: {
    fontSize: FontSize.paragraphy2Regular_size,
    lineHeight: 24,
    fontFamily: FontFamily.paragraphy2Regular,
    color: Color.neutralGray04,
    display: "flex",
    width: 311,
    alignItems: "center",
    textAlign: "left",
  },
  content: {
    top: 440,
    left: 16,
    gap: Gap.gap_md,
    position: "absolute",
  },
  icon: {
    width: 10,
    height: 10,
  },
  dots: {
    marginLeft: -164,
    top: 716,
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
    top: 701,
    left: 266,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.primaryColors600,
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    overflow: "hidden",
  },
  onboardingScreen2: {
    backgroundColor: Color.shadesWhite01,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default OnboardingScreen;