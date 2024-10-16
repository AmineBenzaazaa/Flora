import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import {
  Padding,
  Gap,
  Border,
  FontFamily,
  FontSize,
  Color,
} from "../GlobalStyles";

const TaskWildmintInfo = () => {
  return (
    <View style={styles.taskwildmintInfo}>
      <Image
        style={[styles.taskwildmintInfoChild, styles.bgcontainerPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-87.png")}
      />
      <Image
        style={[styles.statusBarLight, styles.editIconLayout]}
        contentFit="cover"
      />
      <Image style={styles.pepperFacePlantInASmallP} contentFit="cover" />
      <View style={[styles.edit, styles.editLayout]}>
        <Image
          style={[styles.editChild, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/arrow-background.png")}
        />
        <Image
          style={[styles.editIcon, styles.editIconLayout]}
          contentFit="cover"
          source={require("../assets/edit.png")}
        />
      </View>
      <View style={styles.tabs}>
        <View style={styles.container} />
        <View style={[styles.button, styles.buttonFlexBox]}>
          <Text style={[styles.care, styles.careTypo]}>Care</Text>
        </View>
        <View style={[styles.button1, styles.buttonFlexBox]}>
          <Text style={[styles.care1, styles.careTypo]}>Info</Text>
        </View>
      </View>
      <View style={styles.taskwildmintInfoItem} />
      <Text style={[styles.conditions, styles.conditionsPosition]}>
        Conditions
      </Text>
      <View style={[styles.demography, styles.conditionsPosition]}>
        <Text style={[styles.wildMint, styles.family1Typo]}>Wild mint</Text>
        <View style={styles.demography1}>
          <Text
            style={[styles.scientificNameMenthaContainer, styles.careTypo1]}
          >
            <Text style={[styles.scientificName, styles.family1Typo]}>
              Scientific name:
            </Text>
            <Text style={styles.menthaArvensis}> Mentha arvensis</Text>
          </Text>
          <Text
            style={[styles.scientificNameMenthaContainer, styles.careTypo1]}
          >
            <Text style={styles.family}>
              <Text style={styles.family1Typo}>Family:</Text>
            </Text>
            <Text style={styles.lamiaceae}>
              <Text style={styles.family}>{` `}</Text>
              <Text style={styles.lamiaceae1}>Lamiaceae</Text>
            </Text>
          </Text>
          <Text
            style={[styles.scientificNameMenthaContainer, styles.careTypo1]}
          >
            <Text style={styles.family}>
              <Text style={styles.family1Typo}>Rank:</Text>
            </Text>
            <Text style={styles.lamiaceae}>
              <Text style={styles.family}>{` `}</Text>
              <Text style={styles.lamiaceae1}>Species</Text>
            </Text>
          </Text>
          <Text
            style={[styles.scientificNameMenthaContainer, styles.careTypo1]}
          >
            <Text style={styles.family}>
              <Text style={styles.family1Typo}>Higher classification:</Text>
              <Text style={styles.lamiaceae}>{` `}</Text>
            </Text>
            <Text style={styles.lamiaceae}>
              <Text style={styles.lamiaceae1}>Mint</Text>
            </Text>
          </Text>
          <Text
            style={[styles.scientificNameMenthaContainer, styles.careTypo1]}
          >
            <Text style={styles.family}>
              <Text style={styles.family1Typo}>Kingdom:</Text>
              <Text style={styles.lamiaceae}>{` `}</Text>
            </Text>
            <Text style={styles.lamiaceae}>
              <Text style={styles.lamiaceae1}>Plantae</Text>
            </Text>
          </Text>
          <Text
            style={[styles.scientificNameMenthaContainer, styles.careTypo1]}
          >
            <Text style={styles.family}>
              <Text style={styles.family1Typo}>Order:</Text>
            </Text>
            <Text style={styles.lamiaceae}>
              <Text style={styles.family}>{` `}</Text>
              <Text style={styles.lamiaceae1}>Lamiales</Text>
            </Text>
          </Text>
        </View>
        <Text style={[styles.menthaArvensisThe, styles.careTypo1]}>
          Mentha arvensis, the corn mint, field mint, or wild mint, is a species
          of flowering plant in the mint family Lamiaceae. It has a circumboreal
          distribution, being native to the temperate regions of Europe and
          western and central Asia, east to the Himalaya and eastern Siberia,
          and North America.
        </Text>
      </View>
      <View style={[styles.bgcontainer, styles.bgcontainerPosition]} />
      <View style={[styles.conditions1, styles.backArrowPosition]}>
        <View style={styles.containervariant4}>
          <View style={styles.containervariant4Child} />
          <View style={styles.content}>
            <View style={styles.object}>
              <Image
                style={[styles.objectChild, styles.childLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-10.png")}
              />
              <Image
                style={[styles.editIcon, styles.editIconLayout]}
                contentFit="cover"
                source={require("../assets/device-thermostat.png")}
              />
            </View>
            <View style={styles.content1}>
              <Text style={styles.temperature}>Temperature</Text>
              <View style={styles.object}>
                <Text style={[styles.c30, styles.careTypo]}>10 C / 30 C</Text>
                <Image
                  style={[styles.ellipse9Stroke, styles.ellipse9Layout]}
                  contentFit="cover"
                  source={require("../assets/ellipse-9-stroke.png")}
                />
                <Image
                  style={[styles.ellipse9Stroke1, styles.ellipse9Layout]}
                  contentFit="cover"
                  source={require("../assets/ellipse-9-stroke.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.containervariant4}>
          <View style={styles.containervariant4Child} />
          <View style={styles.content}>
            <View style={styles.object}>
              <Image
                style={[styles.objectChild, styles.childLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-10.png")}
              />
              <Image
                style={[styles.editIcon, styles.editIconLayout]}
                contentFit="cover"
                source={require("../assets/humidity-high.png")}
              />
            </View>
            <View style={styles.content1}>
              <Text style={styles.temperature}>Humidity</Text>
              <View style={styles.object}>
                <Text style={[styles.c30, styles.careTypo]}>40 C / 60 C</Text>
                <Image
                  style={[styles.ellipse9Stroke, styles.ellipse9Layout]}
                  contentFit="cover"
                  source={require("../assets/ellipse-9-stroke.png")}
                />
                <Image
                  style={[styles.ellipse9Stroke1, styles.ellipse9Layout]}
                  contentFit="cover"
                  source={require("../assets/ellipse-9-stroke.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.containervariant4}>
          <View style={styles.containervariant4Child} />
          <View style={styles.content}>
            <View style={styles.object}>
              <Image
                style={[styles.objectChild, styles.childLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-10.png")}
              />
              <Image
                style={[styles.editIcon, styles.editIconLayout]}
                contentFit="cover"
                source={require("../assets/globe-uk.png")}
              />
            </View>
            <View style={styles.content1}>
              <Text style={styles.temperature}>Hardiness zones</Text>
              <View style={styles.object}>
                <Text style={[styles.c30, styles.careTypo]}>40 C / 60 C</Text>
                <Image
                  style={[styles.ellipse9Stroke, styles.ellipse9Layout]}
                  contentFit="cover"
                  source={require("../assets/ellipse-9-stroke.png")}
                />
                <Image
                  style={[styles.ellipse9Stroke1, styles.ellipse9Layout]}
                  contentFit="cover"
                  source={require("../assets/ellipse-9-stroke.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.mildMintimages, styles.conditionsPosition]}>
        <Image
          style={styles.image1Icon}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <Image
          style={styles.image1Icon}
          contentFit="cover"
          source={require("../assets/image-2.png")}
        />
        <Image
          style={styles.image1Icon}
          contentFit="cover"
          source={require("../assets/image-3.png")}
        />
        <Image
          style={styles.image1Icon}
          contentFit="cover"
          source={require("../assets/image-4.png")}
        />
      </View>
      <View style={[styles.backArrow, styles.backArrowPosition]}>
        <Image
          style={[styles.editChild, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/arrow-background.png")}
        />
        <Image
          style={[styles.editIcon, styles.editIconLayout]}
          contentFit="cover"
          source={require("../assets/arrow-back.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgcontainerPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  editIconLayout: {
    height: 24,
    position: "absolute",
  },
  editLayout: {
    padding: Padding.p_3xs,
    top: 16,
    gap: Gap.gap_xs,
    height: 40,
    width: 40,
  },
  childLayout: {
    height: 40,
    width: 40,
    zIndex: 0,
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    top: 5,
    borderRadius: Border.br_81xl,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  careTypo: {
    fontFamily: FontFamily.heading6Medium,
    fontWeight: "500",
  },
  conditionsPosition: {
    left: 15,
    position: "absolute",
  },
  family1Typo: {
    fontFamily: FontFamily.heading2Semibold,
    fontWeight: "600",
  },
  careTypo1: {
    fontSize: FontSize.m3LabelLarge_size,
    lineHeight: 20,
  },
  backArrowPosition: {
    left: 16,
    position: "absolute",
  },
  ellipse9Layout: {
    height: 3,
    width: 3,
    top: 3,
    position: "absolute",
  },
  taskwildmintInfoChild: {
    height: 289,
    top: -24,
  },
  statusBarLight: {
    marginLeft: -181,
    width: 362,
    left: "50%",
    top: -24,
  },
  pepperFacePlantInASmallP: {
    top: 412,
    left: 360,
    width: 858,
    height: 858,
    position: "absolute",
  },
  editChild: {
    top: 0,
    zIndex: 0,
    left: 0,
    height: 40,
    width: 40,
    position: "absolute",
  },
  editIcon: {
    top: 8,
    left: 8,
    width: 24,
    zIndex: 1,
  },
  edit: {
    left: 304,
    gap: Gap.gap_xs,
    position: "absolute",
  },
  container: {
    width: 216,
    height: 50,
    borderRadius: Border.br_81xl,
    zIndex: 0,
    backgroundColor: Color.shadesWhite01,
  },
  care: {
    textAlign: "center",
    color: Color.shadesBlack02,
    lineHeight: 20,
    fontSize: FontSize.m3LabelLarge_size,
  },
  button: {
    left: 5,
    zIndex: 1,
  },
  care1: {
    color: Color.shadesWhite01,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.m3LabelLarge_size,
  },
  button1: {
    left: 111,
    backgroundColor: Color.primaryColors600,
    zIndex: 2,
  },
  tabs: {
    marginLeft: -108,
    top: 177,
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowRadius: 17,
    elevation: 17,
    shadowOpacity: 1,
    gap: Gap.gap_xs,
    left: "50%",
    position: "absolute",
  },
  taskwildmintInfoItem: {
    top: 253,
    left: -1,
    borderTopLeftRadius: Border.br_lgi,
    borderTopRightRadius: Border.br_lgi,
    width: 361,
    height: 843,
    position: "absolute",
    backgroundColor: Color.shadesWhite01,
  },
  conditions: {
    top: 836,
    fontSize: FontSize.heading6Medium_size,
    letterSpacing: -0.4,
    lineHeight: 28,
    textAlign: "left",
    color: Color.shadesBlack02,
    fontFamily: FontFamily.heading6Medium,
    fontWeight: "500",
  },
  wildMint: {
    fontSize: FontSize.heading4Medium_size,
    letterSpacing: -0.5,
    lineHeight: 32,
    textAlign: "center",
    color: Color.shadesBlack02,
  },
  scientificName: {
    color: Color.shadesBlack02,
  },
  menthaArvensis: {
    color: Color.neutralGray05,
    fontFamily: FontFamily.paragraphy2Regular,
  },
  scientificNameMenthaContainer: {
    textAlign: "left",
    lineHeight: 20,
  },
  family: {
    color: Color.shadesBlack02,
  },
  lamiaceae1: {
    color: Color.neutralGray05,
  },
  lamiaceae: {
    fontFamily: FontFamily.paragraphy2Regular,
  },
  demography1: {
    gap: Gap.gap_3xs,
  },
  menthaArvensisThe: {
    width: 328,
    height: 145,
    fontFamily: FontFamily.paragraphy2Regular,
    textAlign: "left",
    color: Color.shadesBlack02,
    lineHeight: 20,
  },
  demography: {
    top: 296,
    gap: 16,
  },
  bgcontainer: {
    top: 880,
    backgroundColor: Color.primaryColors30,
    height: 161,
  },
  containervariant4Child: {
    borderRadius: Border.br_xs,
    width: 117,
    height: 108,
    zIndex: 0,
    backgroundColor: Color.shadesWhite01,
  },
  objectChild: {
    zIndex: 0,
  },
  object: {
    flexDirection: "row",
    gap: Gap.gap_xs,
  },
  temperature: {
    fontSize: FontSize.xSmallParagraphRegular_size,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.paragraphy2Regular,
    textAlign: "left",
    lineHeight: 20,
  },
  c30: {
    textAlign: "left",
    color: Color.shadesBlack02,
    lineHeight: 20,
    fontSize: FontSize.m3LabelLarge_size,
    zIndex: 0,
  },
  ellipse9Stroke: {
    left: 17,
    zIndex: 1,
  },
  ellipse9Stroke1: {
    left: 62,
    zIndex: 2,
  },
  content1: {
    gap: Gap.gap_5xs,
  },
  content: {
    top: 10,
    left: 10,
    gap: Gap.gap_3xs,
    zIndex: 1,
    position: "absolute",
  },
  containervariant4: {
    gap: Gap.gap_xs,
  },
  conditions1: {
    top: 907,
    width: 345,
    gap: Gap.gap_sm,
    flexDirection: "row",
  },
  image1Icon: {
    borderRadius: Border.br_smi,
    width: 172,
    height: 127,
  },
  mildMintimages: {
    top: 673,
    width: 344,
    gap: Gap.gap_2xs,
    flexDirection: "row",
  },
  backArrow: {
    gap: Gap.gap_xs,
    padding: Padding.p_3xs,
    top: 16,
    height: 40,
    width: 40,
  },
  taskwildmintInfo: {
    flex: 1,
    width: "100%",
    height: 1098,
    overflow: "hidden",
    backgroundColor: Color.shadesWhite01,
  },
});

export default TaskWildmintInfo;
