import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import {
  Color,
  FontSize,
  FontFamily,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";

const Snaptip = () => {
  return (
    <View style={styles.snaptip1}>
      <Image
        style={styles.statusBarLight}
        contentFit="cover"
        source={require("../assets/status-bar-light.png")}
      />
      <View style={[styles.buttoncamera, styles.buttoncameraPosition]}>
        <View style={[styles.container, styles.containerBg]} />
        <View style={[styles.camera, styles.cameraPosition]}>
          <Image
            style={styles.cameraChild}
            contentFit="cover"
            source={require("../assets/ellipse-13.png")}
          />
          <Image
            style={[styles.cameraItem, styles.cameraItemPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-12.png")}
          />
        </View>
        <View style={[styles.snapTips, styles.buttonsFlexBox]}>
          <Image
            style={styles.helpIcon}
            contentFit="cover"
            source={require("../assets/help.png")}
          />
          <Text style={[styles.snapTips1, styles.labelTypo]}>Snap Tips</Text>
        </View>
        <Image
          style={styles.image03Icon}
          contentFit="cover"
          source={require("../assets/image03.png")}
        />
      </View>
      <Image
        style={[styles.snaptip1Child, styles.darkFramePosition]}
        contentFit="cover"
        source={require("../assets/rectangle-56.png")}
      />
      <View style={styles.cameranavbar}>
        <View style={[styles.container1, styles.containerBg]} />
        <View style={[styles.content, styles.cameraPosition]}>
          <Image
            style={styles.closeIconLayout}
            contentFit="cover"
            source={require("../assets/close.png")}
          />
          <View style={styles.icons}>
            <Image
              style={[styles.flashIcon, styles.closeIconLayout]}
              contentFit="cover"
              source={require("../assets/flash.png")}
            />
            <Image
              style={styles.closeIconLayout}
              contentFit="cover"
              source={require("../assets/party-mode.png")}
            />
          </View>
        </View>
      </View>
      <Image
        style={styles.subtractIcon}
        contentFit="cover"
        source={require("../assets/subtract.png")}
      />
      <View style={[styles.darkFrame, styles.darkFramePosition]} />
      <View style={[styles.scanersnapTip1, styles.buttoncameraPosition]}>
        <View style={styles.scanersnapTip1Child} />
        <View style={styles.cancel}>
          <Image
            style={styles.closeIconLayout}
            contentFit="cover"
            source={require("../assets/close1.png")}
          />
        </View>
        <Text style={[styles.snapTips2, styles.snapTips2Typo]}>Snap Tips</Text>
        <View
          style={[styles.placeYourPlantInTeCanterParent, styles.scrollPosition]}
        >
          <Text style={[styles.placeYourPlant, styles.snapTips2Typo]}>
            Place your plant in te canter
          </Text>
          <Text
            style={styles.placeYourPlant1}
          >{`Place your plant in the center of the frame
to make the identification more accurate`}</Text>
        </View>
        <View style={[styles.scroll, styles.scrollPosition]}>
          <Image
            style={styles.scrollChild}
            contentFit="cover"
            source={require("../assets/ellipse-14.png")}
          />
          <Image
            style={styles.scrollChild}
            contentFit="cover"
            source={require("../assets/ellipse-14.png")}
          />
          <Image
            style={styles.scrollChild}
            contentFit="cover"
            source={require("../assets/ellipse-16.png")}
          />
        </View>
        <View style={[styles.buttons, styles.buttonsFlexBox]}>
          <Text style={[styles.label, styles.labelTypo]}>Next</Text>
        </View>
        <View style={styles.container2}>
          <View style={styles.worngImage}>
            <View style={styles.imageContainer} />
            <Image
              style={[styles.flower9Icon, styles.flower9IconLayout]}
              contentFit="cover"
              source={require("../assets/flower9.png")}
            />
            <Image
              style={styles.subtractIcon1}
              contentFit="cover"
              source={require("../assets/subtract1.png")}
            />
            <View style={[styles.close, styles.closePosition]}>
              <Image
                style={styles.closeIcon2}
                contentFit="cover"
                source={require("../assets/close2.png")}
              />
              <Image
                style={[styles.closeIcon3, styles.closeIconLayout]}
                contentFit="cover"
                source={require("../assets/close3.png")}
              />
            </View>
          </View>
          <View style={styles.worngImage}>
            <View style={styles.imageContainer} />
            <Image
              style={[styles.flower9Icon1, styles.flower9IconLayout]}
              contentFit="cover"
              source={require("../assets/flower91.png")}
            />
            <Image
              style={styles.subtractIcon1}
              contentFit="cover"
              source={require("../assets/subtract1.png")}
            />
            <View style={[styles.check, styles.closePosition]}>
              <Image
                style={styles.closeIcon2}
                contentFit="cover"
                source={require("../assets/ellipse-4.png")}
              />
              <Image
                style={[styles.closeIcon3, styles.closeIconLayout]}
                contentFit="cover"
                source={require("../assets/check-small.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttoncameraPosition: {
    bottom: 0,
    marginLeft: -180,
    left: "50%",
    position: "absolute",
  },
  containerBg: {
    backgroundColor: Color.primaryColors500,
    zIndex: 0,
    width: 360,
  },
  cameraPosition: {
    zIndex: 1,
    flexDirection: "row",
    position: "absolute",
  },
  cameraItemPosition: {
    left: 8,
    top: 8,
    zIndex: 1,
    position: "absolute",
  },
  buttonsFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  labelTypo: {
    color: Color.shadesWhite01,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.smallParagraphMedium_size,
  },
  darkFramePosition: {
    marginLeft: -180,
    width: 360,
    left: "50%",
    position: "absolute",
  },
  closeIconLayout: {
    width: 24,
    height: 24,
  },
  snapTips2Typo: {
    color: Color.shadesBlack02,
    textAlign: "left",
    fontFamily: FontFamily.paragraphMedium,
    fontWeight: "500",
  },
  scrollPosition: {
    left: "50%",
    position: "absolute",
  },
  flower9IconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "9.89%",
    top: "9.44%",
    width: "41.72%",
    height: "80.67%",
    zIndex: 1,
    position: "absolute",
    overflow: "hidden",
  },
  closePosition: {
    left: 280,
    zIndex: 3,
    flexDirection: "row",
    gap: Gap.gap_xs,
    position: "absolute",
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
    width: 60,
    height: 60,
  },
  camera: {
    top: 43,
    left: 137,
    gap: Gap.gap_xs,
  },
  helpIcon: {
    width: 37,
    height: 37,
  },
  snapTips1: {
    textAlign: "left",
    fontFamily: FontFamily.paragraphMedium,
    color: Color.shadesWhite01,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.smallParagraphMedium_size,
  },
  snapTips: {
    top: 50,
    left: 258,
    gap: Gap.gap_4xs,
    zIndex: 2,
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
    gap: Gap.gap_xs,
  },
  snaptip1Child: {
    top: 56,
    height: 559,
    width: 360,
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
  subtractIcon: {
    width: 254,
    height: 254,
  },
  darkFrame: {
    marginTop: -412,
    top: "50%",
    backgroundColor: Color.colorGray_100,
    height: 800,
    width: 360,
  },
  scanersnapTip1Child: {
    top: 15,
    left: 0,
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    height: 743,
    width: 360,
    position: "absolute",
    backgroundColor: Color.shadesWhite01,
  },
  cancel: {
    top: 25,
    left: 10,
    padding: Padding.p_xs,
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  snapTips2: {
    top: 75,
    left: 125,
    fontSize: FontSize.heading4Medium_size,
    letterSpacing: -0.5,
    lineHeight: 32,
    position: "absolute",
  },
  placeYourPlant: {
    fontSize: FontSize.paragraphMedium_size,
    lineHeight: 28,
  },
  placeYourPlant1: {
    fontSize: FontSize.paragraph2Medium_size,
    lineHeight: 24,
    fontFamily: FontFamily.xSmallParagraphRegular,
    color: Color.neutralGray05,
    textAlign: "left",
  },
  placeYourPlantInTeCanterParent: {
    marginLeft: -159,
    top: 517,
    gap: Gap.gap_sm,
  },
  scrollChild: {
    width: 12,
    height: 12,
  },
  scroll: {
    marginLeft: -24,
    top: 697,
    gap: Gap.gap_3xs,
    flexDirection: "row",
  },
  label: {
    letterSpacing: 0,
    fontFamily: FontFamily.m3LabelLarge,
    textAlign: "center",
    color: Color.shadesWhite01,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.smallParagraphMedium_size,
  },
  buttons: {
    top: 683,
    left: 266,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorMediumseagreen_100,
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    overflow: "hidden",
  },
  imageContainer: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorMediumaquamarine_300,
    width: 320,
    height: 180,
    zIndex: 0,
  },
  flower9Icon: {
    right: "55.47%",
    left: "2.81%",
  },
  subtractIcon1: {
    width: 120,
    height: 120,
    zIndex: 2,
  },
  closeIcon2: {
    width: 40,
    height: 40,
    zIndex: 0,
  },
  closeIcon3: {
    left: 8,
    top: 8,
    zIndex: 1,
    position: "absolute",
  },
  close: {
    top: 1,
  },
  worngImage: {
    gap: Gap.gap_xs,
  },
  flower9Icon1: {
    right: "29.22%",
    left: "29.06%",
  },
  check: {
    top: -3,
  },
  container2: {
    top: 131,
    left: 20,
    gap: Gap.gap_2xs,
    position: "absolute",
  },
  scanersnapTip1: {
    height: 758,
    width: 360,
  },
  snaptip1: {
    flex: 1,
    height: 776,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.shadesWhite01,
  },
});

export default Snaptip;
