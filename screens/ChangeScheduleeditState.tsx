import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import {
  Gap,
  FontFamily,
  FontSize,
  Padding,
  Color,
  Border,
} from "../GlobalStyles";

const ChangeScheduleeditState = () => {
  return (
    <View style={styles.changeScheduleeditState}>
      <Image style={styles.statusBarLight} contentFit="cover" />
      <View style={[styles.containerPlant, styles.navbarPosition]}>
        <View style={styles.containerPlantChild} />
        <Image
          style={styles.containerPlantItem}
          contentFit="cover"
          source={require("../assets/rectangle-90.png")}
        />
        <View style={styles.text}>
          <Text style={[styles.wildMint, styles.water2Layout]}>Wild mint</Text>
          <Text style={styles.menthaArvensis}>Mentha arvensis</Text>
        </View>
      </View>
      <View style={[styles.reminder, styles.reminderLayout]}>
        <View style={styles.remindercontainer}>
          <View style={[styles.container, styles.reminderLayout]} />
          <View style={[styles.water, styles.waterPosition]}>
            <View style={styles.popFlexBox}>
              <Image
                style={styles.waterIcon}
                contentFit="cover"
                source={require("../assets/water.png")}
              />
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon.png")}
              />
            </View>
            <View style={styles.contentFlexBox}>
              <View>
                <Text style={[styles.water2, styles.water2Layout]}>Water</Text>
                <Text style={[styles.waterIn4, styles.waterContainerTypo]}>
                  Water in 4 days
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.water3, styles.waterPosition]}>
            <View style={styles.popFlexBox}>
              <Image
                style={styles.waterIcon}
                contentFit="cover"
                source={require("../assets/water.png")}
              />
              <Image
                style={[styles.fertilizerIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/fertilizer.png")}
              />
            </View>
            <View style={styles.contentFlexBox}>
              <View>
                <Text style={[styles.water2, styles.water2Layout]}>
                  Fertilizer
                </Text>
                <Text style={[styles.waterIn4, styles.waterContainerTypo]}>
                  Fertilizer in 1 week
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.buttons, styles.buttonsFlexBox]}>
            <Text style={[styles.label, styles.labelTypo]}>
              Change schedule
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.navbar, styles.navbarPosition]}>
        <View style={styles.container1} />
        <View style={styles.content2}>
          <View style={[styles.container2, styles.contentFlexBox]}>
            <Text style={[styles.remember, styles.label1Typo]}>Edit</Text>
          </View>
          <Image
            style={[styles.arrowBackIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/arrow-back1.png")}
          />
        </View>
      </View>
      <View style={[styles.darkFrame, styles.popPosition]} />
      <View style={[styles.pop, styles.popPosition]}>
        <View style={styles.popChild} />
        <View style={styles.content3}>
          <Text
            style={[styles.suggestWaterContainer, styles.waterContainerTypo]}
          >
            <Text style={styles.suggestWater}>
              <Text style={styles.suggestWater1}>Suggest Water:</Text>
            </Text>
            <Text style={styles.every714Days}>
              <Text style={styles.suggestWater}> -</Text>
              <Text style={styles.every7}> every 7 - 14 days</Text>
            </Text>
          </Text>
          <Text
            style={[
              styles.suggestFertilizationMildContainer,
              styles.waterContainerTypo,
            ]}
          >
            <Text style={styles.suggestWater}>
              <Text style={styles.suggestWater1}>Suggest Fertilization:</Text>
            </Text>
            <Text style={styles.every714Days}>
              <Text style={styles.suggestWater}>{` `}</Text>
              <Text
                style={styles.mildMintShould}
              >{`Mild mint should be fertilized
During its growing season, typically early spring or
late winter months`}</Text>
            </Text>
          </Text>
        </View>
        <View style={[styles.buttons1, styles.handlePosition]}>
          <Text style={[styles.label1, styles.label1Typo]}>Done</Text>
        </View>
        <View style={[styles.boxSchedule, styles.waterPosition]}>
          <View style={[styles.editSchedule, styles.editLayout]}>
            <View style={[styles.container3, styles.editLayout]} />
            <View style={[styles.container4, styles.containerPosition]}>
              <View style={[styles.water5, styles.waterFlexBox]}>
                <View style={styles.popFlexBox}>
                  <Image
                    style={styles.waterIcon}
                    contentFit="cover"
                    source={require("../assets/plant.png")}
                  />
                  <Image
                    style={styles.icon}
                    contentFit="cover"
                    source={require("../assets/icon.png")}
                  />
                </View>
                <View style={styles.contentFlexBox}>
                  <View>
                    <Text style={styles.water7}>Water</Text>
                  </View>
                </View>
              </View>
              <View style={styles.switch}>
                <View style={[styles.track, styles.trackBorder]} />
                <View style={styles.handleContainer}>
                  <View style={[styles.handle, styles.handlePosition]} />
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.editSchedule1, styles.editLayout]}>
            <View style={[styles.container3, styles.editLayout]} />
            <View style={[styles.container6, styles.containerPosition]}>
              <View style={[styles.water5, styles.waterFlexBox]}>
                <View style={styles.popFlexBox}>
                  <Image
                    style={styles.waterIcon}
                    contentFit="cover"
                    source={require("../assets/plant.png")}
                  />
                  <Image
                    style={[styles.fertilizerIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/fertilizer.png")}
                  />
                </View>
                <View style={styles.contentFlexBox}>
                  <View>
                    <Text style={styles.water7}>Fertilizer</Text>
                  </View>
                </View>
              </View>
              <View style={styles.switch}>
                <View style={[styles.track, styles.trackBorder]} />
                <View style={styles.handleContainer}>
                  <View style={[styles.handle, styles.handlePosition]} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarPosition: {
    gap: Gap.gap_xs,
    position: "absolute",
  },
  water2Layout: {
    lineHeight: 28,
    fontFamily: FontFamily.heading6Medium,
  },
  reminderLayout: {
    height: 222,
    width: 328,
    position: "absolute",
  },
  waterPosition: {
    gap: Gap.gap_sm,
    position: "absolute",
  },
  waterContainerTypo: {
    fontSize: FontSize.xSmallParagraphRegular_size,
    lineHeight: 20,
  },
  iconLayout: {
    width: 24,
    height: 24,
    position: "absolute",
  },
  buttonsFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_5xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  labelTypo: {
    fontFamily: FontFamily.m3LabelLarge,
    letterSpacing: 0,
    lineHeight: 20,
    fontSize: FontSize.m3LabelLarge_size,
  },
  contentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  label1Typo: {
    color: Color.shadesWhite01,
    textAlign: "center",
    fontWeight: "500",
  },
  popPosition: {
    marginLeft: -180,
    left: "50%",
    position: "absolute",
  },
  handlePosition: {
    backgroundColor: Color.primaryColors600,
    borderRadius: Border.br_81xl,
    left: "50%",
    position: "absolute",
  },
  editLayout: {
    height: 82,
    width: 328,
  },
  containerPosition: {
    top: 16,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: 16,
    position: "absolute",
  },
  waterFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  trackBorder: {
    borderStyle: "solid",
    borderRadius: Border.br_81xl,
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
  containerPlantChild: {
    zIndex: 0,
    height: 74,
    width: 328,
    backgroundColor: Color.colorMediumaquamarine_300,
    borderRadius: Border.br_7xs,
  },
  containerPlantItem: {
    borderTopLeftRadius: Border.br_7xs,
    borderBottomLeftRadius: Border.br_7xs,
    width: 86,
    zIndex: 1,
    left: 0,
    top: 0,
    height: 74,
    position: "absolute",
  },
  wildMint: {
    textAlign: "left",
    color: Color.shadesBlack02,
    fontFamily: FontFamily.heading6Medium,
    fontWeight: "500",
    fontSize: FontSize.paragraphMedium_size,
    lineHeight: 28,
  },
  menthaArvensis: {
    color: Color.neutralGray05,
    fontFamily: FontFamily.paragraphy2Regular,
    lineHeight: 20,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "left",
  },
  text: {
    top: 12,
    left: 100,
    gap: Gap.gap_5xs,
    zIndex: 2,
    position: "absolute",
  },
  containerPlant: {
    top: 96,
    left: 16,
  },
  container: {
    borderRadius: Border.br_sm,
    left: 0,
    top: 0,
    backgroundColor: Color.colorMediumaquamarine_300,
    height: 222,
  },
  waterIcon: {
    width: 50,
    height: 50,
    zIndex: 0,
  },
  icon: {
    height: "40%",
    width: "40%",
    top: "30%",
    right: "30%",
    bottom: "30%",
    left: "30%",
    maxWidth: "100%",
    maxHeight: "100%",
    zIndex: 1,
    position: "absolute",
    overflow: "hidden",
  },
  popFlexBox: {
    flexDirection: "row",
    gap: Gap.gap_xs,
  },
  water2: {
    textAlign: "center",
    color: Color.shadesBlack02,
    fontFamily: FontFamily.heading6Medium,
    fontWeight: "500",
    fontSize: FontSize.paragraphMedium_size,
    lineHeight: 28,
  },
  waterIn4: {
    color: Color.neutralGray04,
    textAlign: "center",
    fontFamily: FontFamily.paragraphy2Regular,
  },
  water: {
    top: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: 20,
    gap: Gap.gap_sm,
  },
  fertilizerIcon: {
    top: 13,
    left: 13,
    zIndex: 1,
  },
  water3: {
    top: 84,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: 20,
    gap: Gap.gap_sm,
  },
  label: {
    color: Color.primary500,
    textAlign: "center",
    fontWeight: "500",
  },
  buttons: {
    top: 162,
    left: 25,
    borderColor: Color.colorSeagreen,
    borderWidth: 1,
    width: 278,
    borderStyle: "solid",
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  remindercontainer: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  reminder: {
    marginLeft: -164,
    top: 194,
    height: 222,
    left: "50%",
  },
  container1: {
    backgroundColor: Color.primary500,
    height: 56,
    width: 360,
    zIndex: 0,
  },
  remember: {
    fontSize: FontSize.heading6Medium_size,
    letterSpacing: -0.4,
    fontFamily: FontFamily.heading6Medium,
    lineHeight: 28,
  },
  container2: {
    left: 48,
    top: 0,
    position: "absolute",
  },
  arrowBackIcon: {
    top: 2,
    left: 0,
  },
  content2: {
    top: 14,
    width: 149,
    height: 28,
    zIndex: 1,
    left: 16,
    position: "absolute",
  },
  navbar: {
    left: 0,
    top: 0,
  },
  darkFrame: {
    marginTop: -416,
    backgroundColor: Color.colorGray_100,
    height: 800,
    top: "50%",
    width: 360,
  },
  popChild: {
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    height: 523,
    width: 360,
    zIndex: 0,
    backgroundColor: Color.shadesWhite01,
  },
  suggestWater1: {
    fontWeight: "600",
    fontFamily: FontFamily.heading2Semibold,
  },
  suggestWater: {
    color: Color.shadesBlack02,
  },
  every7: {
    color: Color.colorDarkslategray,
  },
  every714Days: {
    fontFamily: FontFamily.paragraphy2Regular,
  },
  suggestWaterContainer: {
    textAlign: "center",
  },
  mildMintShould: {
    color: Color.neutralGray05,
  },
  suggestFertilizationMildContainer: {
    textAlign: "left",
  },
  content3: {
    top: 86,
    gap: Gap.gap_4xs,
    zIndex: 1,
    left: 16,
    position: "absolute",
  },
  label1: {
    fontFamily: FontFamily.m3LabelLarge,
    letterSpacing: 0,
    lineHeight: 20,
    fontSize: FontSize.m3LabelLarge_size,
  },
  buttons1: {
    marginLeft: -160,
    top: 410,
    width: 320,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_5xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    zIndex: 2,
    overflow: "hidden",
  },
  container3: {
    left: 0,
    top: 0,
    height: 82,
    borderRadius: Border.br_7xs,
    position: "absolute",
    backgroundColor: Color.shadesWhite01,
  },
  water7: {
    fontSize: FontSize.paragraphy2Regular_size,
    lineHeight: 24,
    textAlign: "center",
    color: Color.shadesBlack02,
    fontFamily: FontFamily.heading6Medium,
    fontWeight: "500",
  },
  water5: {
    gap: Gap.gap_2xs,
  },
  track: {
    right: 0,
    bottom: 0,
    backgroundColor: Color.primaryColors30,
    borderColor: Color.primaryColors600,
    borderWidth: 2,
    left: 0,
    top: 0,
  },
  handle: {
    marginTop: -8,
    marginLeft: -8,
    width: 16,
    height: 16,
    top: "50%",
  },
  handleContainer: {
    marginTop: -24,
    left: -8,
    width: 48,
    height: 48,
    top: "50%",
    position: "absolute",
  },
  switch: {
    width: 52,
    height: 32,
  },
  container4: {
    gap: Gap.gap_2xl,
  },
  editSchedule: {
    shadowOpacity: 1,
    elevation: 1,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.14)",
    height: 82,
  },
  container6: {
    gap: Gap.gap_xl,
  },
  editSchedule1: {
    shadowOpacity: 1,
    elevation: 1,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.14)",
    height: 82,
  },
  boxSchedule: {
    zIndex: 3,
    top: 194,
    left: 16,
  },
  pop: {
    bottom: 8,
    height: 523,
    flexDirection: "row",
    gap: Gap.gap_xs,
  },
  changeScheduleeditState: {
    flex: 1,
    height: 784,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.shadesWhite01,
  },
});

export default ChangeScheduleeditState;
