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

const Snaptip1 = () => {
  return (
    <View style={styles.snaptip3}>
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
        style={[styles.snaptip3Child, styles.darkFrameSpaceBlock]}
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
      <View style={[styles.scanersnapTip3, styles.buttoncameraPosition]}>
        <View style={styles.scanersnapTip3Child} />
        <View style={styles.cancel}>
          <Image
            style={styles.closeIconLayout}
            contentFit="cover"
            source={require("../assets/close1.png")}
          />
        </View>
        <Text style={[styles.snapTips2, styles.snapTips2Typo]}>Snap Tips</Text>
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
          <Text style={[styles.label, styles.labelTypo]}>Done</Text>
        </View>
        <View style={[styles.buttons1, styles.buttonsFlexBox]}>
          <Text style={[styles.label, styles.labelTypo]}>Back</Text>
        </View>
        <View style={[styles.container2, styles.darkFramePosition]}>
          <View style={styles.worngImage}>
            <View style={styles.imageContainer} />
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
            <Image
              style={[styles.worngImageChild, styles.imageChildLayout]}
              contentFit="cover"
              source={require("../assets/group-2.png")}
            />
            <Image
              style={styles.subtractIcon1}
              contentFit="cover"
              source={require("../assets/subtract3.png")}
            />
          </View>
          <View style={styles.worngImage}>
            <View style={styles.imageContainer} />
            <Image
              style={styles.subtractIcon2}
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
            <Image
              style={[styles.correctImageChild, styles.imageChildLayout]}
              contentFit="cover"
              source={require("../assets/group-5.png")}
            />
          </View>
        </View>
        <View style={[styles.content1, styles.scrollPosition]}>
          <Text
            style={[styles.ifTheTree, styles.snapTips2Typo]}
          >{`If the tree is too large, take a photo
of it’s leaves`}</Text>
          <Text
            style={styles.ifTheTree1}
          >{`If the tree & plant is too large to fit in the
frame, capture its most recognizable parts,
such as leaves and flowers`}</Text>
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
  darkFrameSpaceBlock: {
    marginLeft: -180,
    width: 360,
  },
  closeIconLayout: {
    width: 24,
    height: 24,
  },
  darkFramePosition: {
    top: "50%",
    left: "50%",
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
  closePosition: {
    left: 280,
    flexDirection: "row",
    gap: Gap.gap_xs,
    position: "absolute",
  },
  imageChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
  snaptip3Child: {
    top: 56,
    height: 559,
    width: 360,
    left: "50%",
    position: "absolute",
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
    backgroundColor: Color.colorGray_100,
    height: 800,
    width: 360,
    marginLeft: -180,
  },
  scanersnapTip3Child: {
    top: 15,
    left: 0,
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    height: 752,
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
    left: 263,
  },
  buttons1: {
    left: 16,
  },
  imageContainer: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorMediumaquamarine_300,
    width: 320,
    height: 180,
    zIndex: 0,
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
    zIndex: 1,
  },
  worngImageChild: {
    height: "97.06%",
    width: "58.78%",
    top: "0.56%",
    right: "20.59%",
    bottom: "2.39%",
    left: "20.63%",
    zIndex: 2,
  },
  subtractIcon1: {
    width: 104,
    height: 104,
    zIndex: 3,
  },
  worngImage: {
    gap: Gap.gap_xs,
  },
  subtractIcon2: {
    width: 120,
    height: 120,
    zIndex: 1,
  },
  check: {
    top: -3,
    zIndex: 2,
  },
  correctImageChild: {
    height: "39.39%",
    width: "31.22%",
    top: "30.56%",
    right: "34.41%",
    bottom: "30.06%",
    left: "34.38%",
    zIndex: 3,
  },
  container2: {
    marginTop: -252.5,
    marginLeft: -160,
    gap: Gap.gap_2xs,
  },
  ifTheTree: {
    fontSize: FontSize.paragraphMedium_size,
    lineHeight: 28,
  },
  ifTheTree1: {
    fontSize: FontSize.paragraph2Medium_size,
    lineHeight: 24,
    fontFamily: FontFamily.xSmallParagraphRegular,
    color: Color.neutralGray05,
    textAlign: "left",
  },
  content1: {
    marginLeft: -163,
    top: 517,
    gap: Gap.gap_sm,
  },
  scanersnapTip3: {
    height: 767,
    width: 360,
  },
  snaptip3: {
    flex: 1,
    height: 776,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.shadesWhite01,
  },
});

export default Snaptip1;
