import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import {
  FontFamily,
  FontSize,
  Gap,
  Color,
  Border,
  Padding,
} from "../GlobalStyles";

const PlantDetails = () => {
  return (
    <View style={styles.plantDetails}>
      <Image
        style={[styles.plantDetailsChild, styles.addPlantsPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-87.png")}
      />
      <Image
        style={styles.statusBarLight}
        contentFit="cover"
        source={require("../assets/status-bar-light.png")}
      />
      <Image
        style={styles.pepperFacePlantInASmallP}
        contentFit="cover"
        source={require("../assets/pepper-face-plant-in-a-small-pot-no-bg.png")}
      />
      <View style={styles.plantDetailsItem} />
      <Text style={[styles.conditions, styles.c30Typo]}>Conditions</Text>
      <View style={styles.demography}>
        <Text style={[styles.wildMint, styles.family1Typo]}>Wild mint</Text>
        <View style={styles.demography1}>
          <Text
            style={[styles.scientificNameMenthaContainer, styles.c30Layout]}
          >
            <Text style={[styles.scientificName, styles.family1Typo]}>
              Scientific name:
            </Text>
            <Text style={styles.menthaArvensis}> Mentha arvensis</Text>
          </Text>
          <Text
            style={[styles.scientificNameMenthaContainer, styles.c30Layout]}
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
            style={[styles.scientificNameMenthaContainer, styles.c30Layout]}
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
            style={[styles.scientificNameMenthaContainer, styles.c30Layout]}
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
            style={[styles.scientificNameMenthaContainer, styles.c30Layout]}
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
            style={[styles.scientificNameMenthaContainer, styles.c30Layout]}
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
        <Text style={styles.menthaArvensisThe}>
          Mentha arvensis, the corn mint, field mint, or wild mint, is a species
          of flowering plant in the mint family Lamiaceae. It has a circumboreal
          distribution, being native to the temperate regions of Europe and
          western and central Asia, east to the Himalaya and eastern Siberia,
          and North America.
        </Text>
      </View>
      <View style={[styles.bgcontainer, styles.addPlantsPosition]} />
      <View style={[styles.conditions1, styles.backArrowPosition]}>
        <View style={styles.containervariant4}>
          <View style={styles.containervariant4Child} />
          <View style={styles.content}>
            <View style={styles.object}>
              <Image
                style={[styles.objectChild, styles.arrowLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-10.png")}
              />
              <Image
                style={[styles.deviceThermostatIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/device-thermostat.png")}
              />
            </View>
            <View style={styles.content1}>
              <Text style={[styles.temperature, styles.noToxicTypo]}>
                Temperature
              </Text>
              <View style={styles.object}>
                <Text style={[styles.c30, styles.c30Layout]}>10 C / 30 C</Text>
                <Image
                  style={styles.ellipse9Stroke}
                  contentFit="cover"
                  source={require("../assets/ellipse-9-stroke.png")}
                />
                <Image
                  style={styles.ellipse9Stroke1}
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
                style={[styles.objectChild, styles.arrowLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-10.png")}
              />
              <Image
                style={[styles.deviceThermostatIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/humidity-high.png")}
              />
            </View>
            <View style={styles.content1}>
              <Text style={[styles.temperature, styles.noToxicTypo]}>
                Humidity
              </Text>
              <View style={styles.object}>
                <Text style={[styles.c30, styles.c30Layout]}>40 C / 60 C</Text>
                <Image
                  style={styles.ellipse9Stroke}
                  contentFit="cover"
                  source={require("../assets/ellipse-9-stroke.png")}
                />
                <Image
                  style={styles.ellipse9Stroke1}
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
                style={[styles.objectChild, styles.arrowLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-10.png")}
              />
              <Image
                style={[styles.deviceThermostatIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/globe-uk.png")}
              />
            </View>
            <View style={styles.content1}>
              <Text style={[styles.temperature, styles.noToxicTypo]}>
                Hardiness zones
              </Text>
              <View style={styles.object}>
                <Text style={[styles.c30, styles.c30Layout]}>40 C / 60 C</Text>
                <Image
                  style={styles.ellipse9Stroke}
                  contentFit="cover"
                  source={require("../assets/ellipse-9-stroke.png")}
                />
                <Image
                  style={styles.ellipse9Stroke1}
                  contentFit="cover"
                  source={require("../assets/ellipse-9-stroke.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.mildMintimages, styles.buttonsPosition]}>
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
      <View style={[styles.backArrow, styles.arrowLayout]}>
        <Image
          style={[styles.arrowBackgroundIcon, styles.arrowLayout]}
          contentFit="cover"
          source={require("../assets/arrow-background.png")}
        />
        <Image
          style={[styles.deviceThermostatIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrow-back.png")}
        />
      </View>
      <Text style={[styles.careGuide, styles.wildMintTypo]}>Care guide</Text>
      <View style={[styles.careGuide1, styles.buttonsPosition]}>
        <View style={styles.containervariant4}>
          <View style={[styles.container2, styles.containerLayout]} />
          <Image
            style={[styles.plantIcon, styles.plantIconPosition]}
            contentFit="cover"
            source={require("../assets/plant.png")}
          />
          <View style={[styles.content6, styles.contentPosition]}>
            <Text style={[styles.toxicity, styles.c30Typo]}>Toxicity</Text>
            <Text style={[styles.noToxic, styles.noToxicTypo]}>No toxic</Text>
          </View>
          <Image
            style={[styles.skullIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/skull.png")}
          />
        </View>
        <View style={styles.careGuideeasy1}>
          <View style={[styles.container3, styles.containerLayout]} />
          <Image
            style={[styles.plantIcon1, styles.plantIconPosition]}
            contentFit="cover"
            source={require("../assets/plant.png")}
          />
          <View style={[styles.content7, styles.contentPosition]}>
            <Text style={[styles.toxicity, styles.c30Typo]}>Water</Text>
            <Text
              style={[styles.noToxic, styles.noToxicTypo]}
            >{`It usually doesn't need to be watered 
regularly, but it should be watered 
every two weeks in the summer and
every three weeks in the winter`}</Text>
          </View>
          <Image
            style={[styles.icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/icon1.png")}
          />
        </View>
        <View style={styles.careGuideeasy1}>
          <View style={[styles.container3, styles.containerLayout]} />
          <Image
            style={[styles.plantIcon, styles.plantIconPosition]}
            contentFit="cover"
            source={require("../assets/plant.png")}
          />
          <View style={[styles.content6, styles.contentPosition]}>
            <Text style={[styles.toxicity, styles.c30Typo]}>Sunlight</Text>
            <Text
              style={[styles.noToxic, styles.noToxicTypo]}
            >{`It needs partial sun to stay healthy,
but too much much direct sunlight
can burn its leaves. Too little sunlight
can cause the leaves to turn yellow.`}</Text>
          </View>
          <Image
            style={[styles.skullIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/sunny.png")}
          />
        </View>
        <View style={styles.careGuideeasy3}>
          <View style={[styles.careGuideeasyInner, styles.containerLayout]} />
          <Image
            style={[styles.plantIcon, styles.plantIconPosition]}
            contentFit="cover"
            source={require("../assets/plant.png")}
          />
          <View style={[styles.content6, styles.contentPosition]}>
            <Text style={[styles.toxicity, styles.c30Typo]}>Temperature</Text>
            <Text
              style={[styles.noToxic, styles.noToxicTypo]}
            >{`Plants outdoors in late spring and early
summer. Soil temperature must be 60 F
(15 C) or warmer. `}</Text>
          </View>
          <Image
            style={[styles.skullIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/thermometer.png")}
          />
        </View>
      </View>
      <View style={[styles.addPlants, styles.addPlantsPosition]}>
        <View style={styles.addPlantsChild} />
        <View style={[styles.buttons, styles.buttonsPosition]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/bookmark.png")}
          />
          <Text style={[styles.addToMy, styles.c30Layout]}>
            Add to my plants
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addPlantsPosition: {
    left: 0,
    position: "absolute",
  },
  c30Typo: {
    fontFamily: FontFamily.paragraphMedium,
    fontWeight: "500",
  },
  family1Typo: {
    fontFamily: FontFamily.heading4Semibold,
    fontWeight: "600",
  },
  c30Layout: {
    lineHeight: 20,
    fontSize: FontSize.smallParagraphMedium_size,
  },
  backArrowPosition: {
    left: 16,
    position: "absolute",
  },
  arrowLayout: {
    width: 40,
    height: 40,
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  noToxicTypo: {
    fontSize: FontSize.xSmallParagraphRegular_size,
    fontFamily: FontFamily.xSmallParagraphRegular,
    lineHeight: 20,
    textAlign: "left",
  },
  buttonsPosition: {
    gap: Gap.gap_2xs,
    position: "absolute",
  },
  wildMintTypo: {
    lineHeight: 32,
    letterSpacing: -0.5,
    fontSize: FontSize.heading4Medium_size,
    textAlign: "center",
    color: Color.shadesBlack02,
  },
  containerLayout: {
    backgroundColor: Color.colorMediumaquamarine_400,
    borderRadius: Border.br_sm,
    zIndex: 0,
    width: 328,
  },
  plantIconPosition: {
    height: 50,
    width: 50,
    left: 14,
    zIndex: 1,
    position: "absolute",
  },
  contentPosition: {
    left: 76,
    zIndex: 2,
    gap: Gap.gap_5xs,
    position: "absolute",
  },
  iconPosition: {
    zIndex: 3,
    position: "absolute",
  },
  plantDetailsChild: {
    height: 289,
    width: 360,
    top: -24,
    left: 0,
  },
  statusBarLight: {
    marginLeft: -181,
    width: 362,
    height: 24,
    left: "50%",
    top: -24,
    position: "absolute",
  },
  pepperFacePlantInASmallP: {
    top: 412,
    left: 360,
    width: 858,
    height: 858,
    position: "absolute",
  },
  plantDetailsItem: {
    top: 253,
    left: -1,
    borderTopLeftRadius: Border.br_lgi,
    borderTopRightRadius: Border.br_lgi,
    width: 361,
    height: 1451,
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
    left: 15,
    position: "absolute",
  },
  wildMint: {
    textAlign: "center",
    lineHeight: 32,
    letterSpacing: -0.5,
    fontSize: FontSize.heading4Medium_size,
    color: Color.shadesBlack02,
  },
  scientificName: {
    color: Color.shadesBlack02,
  },
  menthaArvensis: {
    color: Color.neutralGray05,
    fontFamily: FontFamily.xSmallParagraphRegular,
  },
  scientificNameMenthaContainer: {
    textAlign: "left",
  },
  family: {
    color: Color.shadesBlack02,
  },
  lamiaceae1: {
    color: Color.neutralGray05,
  },
  lamiaceae: {
    fontFamily: FontFamily.xSmallParagraphRegular,
  },
  demography1: {
    gap: Gap.gap_3xs,
  },
  menthaArvensisThe: {
    height: 145,
    width: 328,
    color: Color.neutralGray03,
    fontFamily: FontFamily.xSmallParagraphRegular,
    lineHeight: 20,
    fontSize: FontSize.smallParagraphMedium_size,
    textAlign: "left",
  },
  demography: {
    top: 296,
    gap: 16,
    left: 15,
    position: "absolute",
  },
  bgcontainer: {
    top: 880,
    backgroundColor: Color.primaryColors30,
    height: 161,
    width: 360,
  },
  containervariant4Child: {
    borderRadius: Border.br_xs,
    width: 117,
    height: 108,
    zIndex: 0,
    backgroundColor: Color.shadesWhite01,
  },
  objectChild: {
    height: 40,
    zIndex: 0,
  },
  deviceThermostatIcon: {
    top: 8,
    left: 8,
    zIndex: 1,
    position: "absolute",
  },
  object: {
    gap: Gap.gap_xs,
    flexDirection: "row",
  },
  temperature: {
    color: Color.neutralGray03,
    fontSize: FontSize.xSmallParagraphRegular_size,
  },
  c30: {
    zIndex: 0,
    textAlign: "left",
    color: Color.shadesBlack02,
    fontFamily: FontFamily.paragraphMedium,
    fontWeight: "500",
  },
  ellipse9Stroke: {
    left: 17,
    height: 3,
    width: 3,
    top: 3,
    zIndex: 1,
    position: "absolute",
  },
  ellipse9Stroke1: {
    left: 62,
    zIndex: 2,
    height: 3,
    width: 3,
    top: 3,
    position: "absolute",
  },
  content1: {
    gap: Gap.gap_5xs,
  },
  content: {
    top: 10,
    left: 10,
    zIndex: 1,
    gap: Gap.gap_3xs,
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
    flexDirection: "row",
    left: 15,
  },
  arrowBackgroundIcon: {
    top: 0,
    height: 40,
    zIndex: 0,
    left: 0,
    position: "absolute",
  },
  backArrow: {
    padding: Padding.p_3xs,
    top: 16,
    height: 40,
    gap: Gap.gap_xs,
    left: 16,
    position: "absolute",
  },
  careGuide: {
    top: 1069,
    textAlign: "center",
    fontFamily: FontFamily.paragraphMedium,
    fontWeight: "500",
    left: 15,
    position: "absolute",
  },
  container2: {
    height: 74,
  },
  plantIcon: {
    top: 12,
  },
  toxicity: {
    fontSize: FontSize.paragraph2Medium_size,
    lineHeight: 24,
    textAlign: "left",
    color: Color.shadesBlack02,
  },
  noToxic: {
    color: Color.neutralGray05,
  },
  content6: {
    top: 14,
  },
  skullIcon: {
    top: 25,
    left: 27,
    width: 24,
    height: 24,
  },
  container3: {
    height: 140,
  },
  plantIcon1: {
    top: 14,
  },
  content7: {
    top: 16,
  },
  icon: {
    height: "14.29%",
    width: "6.1%",
    top: "20.71%",
    right: "85.06%",
    bottom: "65%",
    left: "8.84%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  careGuideeasy1: {
    height: 140,
    gap: Gap.gap_xs,
  },
  careGuideeasyInner: {
    height: 122,
  },
  careGuideeasy3: {
    height: 122,
    gap: Gap.gap_xs,
  },
  careGuide1: {
    marginLeft: -164,
    top: 1119,
    left: "50%",
    gap: Gap.gap_2xs,
  },
  addPlantsChild: {
    height: 88,
    zIndex: 0,
    width: 360,
    backgroundColor: Color.shadesWhite01,
  },
  addToMy: {
    letterSpacing: 0,
    fontFamily: FontFamily.m3LabelLarge,
    color: Color.shadesWhite01,
    textAlign: "center",
    fontWeight: "500",
    fontSize: FontSize.smallParagraphMedium_size,
  },
  buttons: {
    marginLeft: -163,
    top: 24,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorMediumseagreen_100,
    width: 327,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_5xl,
    paddingBottom: Padding.p_3xs,
    height: 40,
    zIndex: 1,
    flexDirection: "row",
    left: "50%",
    gap: Gap.gap_2xs,
  },
  addPlants: {
    top: 1704,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    gap: Gap.gap_xs,
  },
  plantDetails: {
    flex: 1,
    width: "100%",
    height: 1792,
    overflow: "hidden",
    backgroundColor: Color.shadesWhite01,
  },
});

export default PlantDetails;
