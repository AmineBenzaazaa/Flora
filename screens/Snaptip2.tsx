import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import {
  Color,
  FontSize,
  FontFamily,
  Padding,
  Border,
  Gap,
} from "../GlobalStyles";

const Snaptip2 = () => {
  return (
    <View style={styles.snaptip2}>
      <Image
        style={styles.statusBarLight}
        contentFit="cover"
        source={require("../assets/status-bar-light.png")}
      />
      <View style={[styles.buttoncamera, styles.buttoncameraPosition]}>
        <View style={[styles.container, styles.containerBg]} />
        <View style={styles.camera}>
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
        <View style={styles.snapTips}>
          <Image
            style={styles.helpIcon}
            contentFit="cover"
            source={require("../assets/help1.png")}
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
        style={[styles.snaptip2Child, styles.darkFramePosition]}
        contentFit="cover"
        source={require("../assets/rectangle-56.png")}
      />
      <View style={styles.cameranavbar}>
        <View style={[styles.container1, styles.containerBg]} />
        <View style={styles.content}>
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
      <View style={[styles.scanersnapTip2, styles.buttoncameraPosition]}>
        <View style={[styles.scanersnapTip2Child, styles.blurPosition]} />
        <View style={styles.cancel}>
          <Image
            style={styles.closeIconLayout}
            contentFit="cover"
            source={require("../assets/close1.png")}
          />
        </View>
        <Text style={[styles.snapTips2, styles.snapTips2Typo]}>Snap Tips</Text>
        <View
          style={[styles.makeThePhotoClearAndHighParent, styles.scrollPosition]}
        >
          <Text style={[styles.makeThePhoto, styles.snapTips2Typo]}>
            Make the photo clear and high quality
          </Text>
          <Text
            style={styles.avoidTakingBlurry}
          >{`Avoid taking blurry, dark or overexposed
photos`}</Text>
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
        <View style={[styles.buttons1, styles.buttonsFlexBox]}>
          <Text style={[styles.label, styles.labelTypo]}>Back</Text>
        </View>
        <View style={styles.container2}>
          <View style={styles.worngImage}>
            <View style={[styles.imageContainer, styles.blurLayout]} />
            <Image
              style={[styles.flower15Icon, styles.flower15IconPosition]}
              contentFit="cover"
              source={require("../assets/flower15.png")}
            />
            <View style={[styles.blur, styles.blurLayout]} />
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
          <View style={styles.correctImage}>
            <View style={[styles.imageContainer, styles.blurLayout]} />
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
            <Image
              style={[styles.flower15Icon1, styles.flower15IconPosition]}
              contentFit="cover"
              source={require("../assets/flower151.png")}
            />
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
  cameraItemPosition: {
    left: 8,
    top: 8,
    zIndex: 1,
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
  blurPosition: {
    left: 0,
    position: "absolute",
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
  buttonsFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_5xl,
    justifyContent: "center",
    backgroundColor: Color.colorMediumseagreen_100,
    borderRadius: Border.br_81xl,
    top: 692,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  blurLayout: {
    height: 180,
    borderRadius: Border.br_lg,
    width: 320,
  },
  flower15IconPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "38.13%",
    bottom: "19.83%",
    right: "38%",
    top: "18.89%",
    width: "23.88%",
    height: "61.28%",
    position: "absolute",
    overflow: "hidden",
  },
  closePosition: {
    left: 280,
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
    zIndex: 1,
    flexDirection: "row",
    gap: Gap.gap_xs,
    position: "absolute",
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
    alignItems: "center",
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
    gap: Gap.gap_xs,
  },
  snaptip2Child: {
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
    gap: Gap.gap_5xl,
    left: 16,
    zIndex: 1,
    flexDirection: "row",
    position: "absolute",
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
  scanersnapTip2Child: {
    top: 15,
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    height: 752,
    width: 360,
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
  makeThePhoto: {
    fontSize: FontSize.paragraphMedium_size,
    lineHeight: 28,
  },
  avoidTakingBlurry: {
    fontSize: FontSize.paragraph2Medium_size,
    lineHeight: 24,
    fontFamily: FontFamily.xSmallParagraphRegular,
    color: Color.neutralGray05,
    textAlign: "left",
  },
  makeThePhotoClearAndHighParent: {
    marginLeft: -162,
    top: 517,
    gap: Gap.gap_sm,
  },
  scrollChild: {
    width: 12,
    height: 12,
  },
  scroll: {
    marginLeft: -24,
    top: 706,
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
    left: 266,
  },
  buttons1: {
    left: 16,
  },
  imageContainer: {
    backgroundColor: Color.colorMediumaquamarine_300,
    zIndex: 0,
  },
  flower15Icon: {
    zIndex: 1,
  },
  blur: {
    top: 0,
    backgroundColor: Color.colorMediumaquamarine_400,
    left: 0,
    position: "absolute",
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
    top: -2,
    zIndex: 3,
  },
  worngImage: {
    width: 320,
    gap: Gap.gap_xs,
  },
  check: {
    top: -3,
    zIndex: 1,
  },
  flower15Icon1: {
    zIndex: 2,
  },
  correctImage: {
    gap: Gap.gap_xs,
  },
  container2: {
    top: 131,
    left: 20,
    gap: Gap.gap_2xs,
    position: "absolute",
  },
  scanersnapTip2: {
    height: 767,
    width: 360,
  },
  snaptip2: {
    flex: 1,
    height: 776,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.shadesWhite01,
  },
});

export default Snaptip2;
