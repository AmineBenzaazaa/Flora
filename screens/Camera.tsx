import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Gap } from "../GlobalStyles";

const Camera = () => {
  return (
    <View style={styles.camera}>
      <Image
        style={styles.statusBarLight}
        contentFit="cover"
        source={require("../assets/status-bar-light.png")}
      />
      <View style={[styles.buttoncamera, styles.cameraInnerPosition]}>
        <View style={[styles.container, styles.containerBg]} />
        <View style={[styles.camera1, styles.cameraPosition]}>
          <Image
            style={styles.cameraChild}
            contentFit="cover"
            source={require("../assets/ellipse-13.png")}
          />
          <Image
            style={[styles.cameraItem, styles.cameraPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-12.png")}
          />
        </View>
        <View style={styles.snapTips}>
          <Image
            style={styles.helpIcon}
            contentFit="cover"
            source={require("../assets/help.png")}
          />
          <Text style={[styles.snapTips1, styles.snapTips1Typo]}>
            Snap Tips
          </Text>
        </View>
        <Image
          style={styles.image03Icon}
          contentFit="cover"
          source={require("../assets/image03.png")}
        />
      </View>
      <Image
        style={[styles.cameraInner, styles.cameraInnerPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-56.png")}
      />
      <Text style={[styles.captureOnePlant, styles.snapTips1Typo]}>
        Capture one plant inside the frame
      </Text>
      <Image
        style={styles.subtractIcon}
        contentFit="cover"
        source={require("../assets/subtract2.png")}
      />
      <View style={styles.cameranavbar}>
        <View style={[styles.container1, styles.containerBg]} />
        <View style={[styles.content, styles.cameraPosition]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/close.png")}
          />
          <View style={styles.icons}>
            <Image
              style={[styles.flashIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/flash1.png")}
            />
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/party-mode.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cameraInnerPosition: {
    marginLeft: -180,
    left: "50%",
    position: "absolute",
  },
  containerBg: {
    backgroundColor: Color.colorMediumseagreen_100,
    zIndex: 0,
    width: 360,
  },
  cameraPosition: {
    zIndex: 1,
    position: "absolute",
  },
  snapTips1Typo: {
    color: Color.shadesWhite01,
    fontFamily: FontFamily.paragraphMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.smallParagraphMedium_size,
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  statusBarLight: {
    marginLeft: -181,
    top: -24,
    width: 362,
    height: 24,
    left: "50%",
    position: "absolute",
  },
  container: {
    height: 161,
    zIndex: 0,
    width: 360,
  },
  cameraChild: {
    width: 76,
    height: 76,
    zIndex: 0,
  },
  cameraItem: {
    top: 8,
    left: 8,
    width: 60,
    height: 60,
  },
  camera1: {
    top: 43,
    left: 137,
    flexDirection: "row",
    gap: Gap.gap_xs,
  },
  helpIcon: {
    width: 37,
    height: 37,
  },
  snapTips1: {
    textAlign: "left",
  },
  snapTips: {
    top: 50,
    left: 258,
    alignItems: "center",
    gap: Gap.gap_4xs,
    zIndex: 2,
    position: "absolute",
  },
  image03Icon: {
    top: 63,
    left: 35,
    width: 36,
    height: 36,
    zIndex: 3,
    position: "absolute",
    overflow: "hidden",
  },
  buttoncamera: {
    bottom: 0,
    gap: Gap.gap_xs,
  },
  cameraInner: {
    top: 56,
    height: 559,
    width: 360,
  },
  captureOnePlant: {
    marginLeft: -116,
    top: 577,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    left: "50%",
    color: Color.shadesWhite01,
    fontFamily: FontFamily.paragraphMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.smallParagraphMedium_size,
    position: "absolute",
  },
  subtractIcon: {
    width: 308,
    height: 308,
  },
  container1: {
    height: 56,
    zIndex: 0,
    width: 360,
  },
  flashIcon: {
    overflow: "hidden",
  },
  icons: {
    gap: Gap.gap_xl,
    flexDirection: "row",
  },
  content: {
    top: 16,
    left: 16,
    gap: Gap.gap_5xl,
    flexDirection: "row",
  },
  cameranavbar: {
    height: "7.22%",
    top: "0%",
    right: "0%",
    bottom: "92.78%",
    left: "0%",
    gap: Gap.gap_xs,
    position: "absolute",
    width: "100%",
  },
  camera: {
    backgroundColor: Color.shadesWhite01,
    flex: 1,
    height: 776,
    overflow: "hidden",
    width: "100%",
  },
});

export default Camera;
