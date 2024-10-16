import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import {
  FontFamily,
  Color,
  Gap,
  Padding,
  Border,
  FontSize,
} from "../GlobalStyles";

const ChangeScheduleedit1One = () => {
  return (
    <View style={styles.changeScheduleedit1One}>
      <Image style={styles.statusBarLight} contentFit="cover" />
      <View style={styles.containerPlant}>
        <View style={styles.containerPlantChild} />
        <Image
          style={[styles.containerPlantItem, styles.iconContentPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-90.png")}
        />
        <View style={styles.text}>
          <Text style={[styles.wildMint, styles.waterTypo]}>Wild mint</Text>
          <Text style={[styles.menthaArvensis, styles.menthaArvensisClr]}>
            Mentha arvensis
          </Text>
        </View>
      </View>
      <View style={[styles.reminder, styles.reminderLayout]}>
        <View style={styles.remindercontainer}>
          <View style={[styles.container, styles.reminderLayout]} />
          <View style={[styles.water, styles.waterFlexBox]}>
            <View style={styles.water1}>
              <Image
                style={styles.waterIcon}
                contentFit="cover"
                source={require("../assets/water.png")}
              />
              <Image
                style={[styles.icon, styles.iconContentPosition]}
                contentFit="cover"
                source={require("../assets/icon.png")}
              />
            </View>
            <View style={styles.content}>
              <View>
                <Text style={[styles.water2, styles.waterTypo]}>Water</Text>
                <Text style={styles.waterIn4}>Water in 4 days</Text>
              </View>
            </View>
          </View>
          <View style={[styles.water3, styles.waterFlexBox]}>
            <View style={styles.water1}>
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
            <View style={styles.content}>
              <View>
                <Text style={[styles.water2, styles.waterTypo]}>
                  Fertilizer
                </Text>
                <Text style={styles.waterIn4}>Fertilizer in 1 week</Text>
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
      <View style={styles.navbar}>
        <View style={[styles.container1, styles.popChildLayout]} />
        <View style={[styles.content2, styles.iconContentPosition]}>
          <View style={styles.container2}>
            <Text style={[styles.remember, styles.waterTypo]}>Edit</Text>
          </View>
          <Image
            style={[styles.arrowBackIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/arrow-back1.png")}
          />
        </View>
      </View>
      <View style={[styles.darkFrame, styles.handlePosition]} />
      <View style={styles.pop}>
        <View style={[styles.popChild, styles.popChildLayout]} />
        <View style={[styles.content3, styles.iconContentPosition]}>
          <Text style={styles.suggestWaterContainer}>
            <Text style={styles.suggestWater}>
              <Text style={styles.suggestTypo}>Suggest Water:</Text>
            </Text>
            <Text style={styles.every714Days}>
              <Text style={styles.suggestWater}>{` - `}</Text>
              <Text style={styles.every7}>every 7 - 14 days</Text>
            </Text>
          </Text>
          <Text style={styles.suggestFertilizationMildContainer}>
            <Text style={[styles.suggestFertilization, styles.suggestTypo]}>
              Suggest Fertilization:
            </Text>
            <Text
              style={styles.menthaArvensisClr}
            >{` Mild mint should be fertilized
During its growing season, typically early spring or
late winter months`}</Text>
          </Text>
        </View>
        <View style={[styles.buttons1, styles.buttonsFlexBox]}>
          <Text style={[styles.label1, styles.labelTypo]}>Done</Text>
        </View>
        <View style={styles.editSchedule}>
          <View
            style={[styles.waterRescheduleonStateDa, styles.container3Layout]}
          >
            <View style={[styles.container3, styles.container3Layout]} />
            <View style={styles.recomanded}>
              <Text style={styles.recomanded1}>Recomanded</Text>
              <Text style={[styles.every4Days, styles.suggestTypo]}>
                Every 4 Days
              </Text>
            </View>
            <View style={[styles.tabs, styles.tabsFlexBox]}>
              <View style={styles.box} />
              <View style={[styles.tab, styles.iconContentPosition]}>
                <Text style={[styles.days, styles.waterTypo]}>Days</Text>
                <Text style={styles.weeks}>Weeks</Text>
                <Text style={styles.weeks}>Months</Text>
              </View>
              <View style={styles.line} />
            </View>
            <View style={[styles.container4, styles.containerPosition]}>
              <View style={styles.water5}>
                <View style={styles.water1}>
                  <Image
                    style={styles.waterIcon}
                    contentFit="cover"
                    source={require("../assets/plant.png")}
                  />
                  <Image
                    style={[styles.icon, styles.iconContentPosition]}
                    contentFit="cover"
                    source={require("../assets/icon.png")}
                  />
                </View>
                <View style={styles.content}>
                  <View>
                    <Text style={[styles.water7, styles.waterTypo]}>Water</Text>
                  </View>
                </View>
              </View>
              <View style={styles.switch}>
                <View style={[styles.track, styles.trackPosition]} />
                <View
                  style={[
                    styles.handleContainer,
                    styles.handleContainerPosition,
                  ]}
                >
                  <View style={[styles.handle, styles.handlePosition]} />
                </View>
              </View>
            </View>
            <View style={[styles.ndProgressBar, styles.tabsFlexBox]}>
              <View style={[styles.barCircle, styles.barLayout]}>
                <View style={[styles.activeBar, styles.barLayout]} />
                <Image
                  style={[styles.circleIcon, styles.iconContentPosition]}
                  contentFit="cover"
                  source={require("../assets/circle.png")}
                />
              </View>
              <View style={[styles.textBg, styles.iconContentPosition]}>
                <View style={styles.text5}>
                  <Text style={[styles.text6, styles.suggestTypo]}>45</Text>
                </View>
                <Image
                  style={[styles.polygonIcon, styles.iconContentPosition]}
                  contentFit="cover"
                  source={require("../assets/polygon.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.editSchedule1, styles.container5Layout]}>
          <View style={[styles.container5, styles.container5Layout]} />
          <View style={[styles.container6, styles.containerPosition]}>
            <View style={styles.water5}>
              <View style={styles.water1}>
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
              <View style={styles.content}>
                <View>
                  <Text style={[styles.water7, styles.waterTypo]}>
                    Fertilizer
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.switch}>
              <View style={[styles.track1, styles.trackPosition]} />
              <View
                style={[
                  styles.handleContainer1,
                  styles.handleContainerPosition,
                ]}
              >
                <View style={[styles.handle1, styles.handlePosition]} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContentPosition: {
    zIndex: 1,
    position: "absolute",
  },
  waterTypo: {
    fontFamily: FontFamily.heading6Medium,
    fontWeight: "500",
  },
  menthaArvensisClr: {
    color: Color.neutralGray05,
    fontFamily: FontFamily.paragraphy2Regular,
  },
  reminderLayout: {
    height: 222,
    width: 328,
    position: "absolute",
  },
  waterFlexBox: {
    gap: Gap.gap_sm,
    left: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  buttonsFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_5xl,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  labelTypo: {
    fontFamily: FontFamily.m3LabelLarge,
    letterSpacing: 0,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.m3LabelLarge_size,
    fontWeight: "500",
  },
  popChildLayout: {
    width: 360,
    zIndex: 0,
  },
  handlePosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  suggestTypo: {
    fontFamily: FontFamily.heading2Semibold,
    fontWeight: "600",
  },
  container3Layout: {
    height: 272,
    width: 328,
  },
  tabsFlexBox: {
    alignItems: "flex-end",
    position: "absolute",
  },
  containerPosition: {
    top: 16,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: 16,
    position: "absolute",
  },
  trackPosition: {
    right: 0,
    bottom: 0,
    borderRadius: Border.br_81xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  handleContainerPosition: {
    height: 48,
    width: 48,
    marginTop: -24,
    top: "50%",
    position: "absolute",
  },
  barLayout: {
    borderRadius: Border.br_3xs,
    zIndex: 0,
  },
  container5Layout: {
    height: 82,
    width: 328,
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
    left: 0,
    top: 0,
    height: 74,
  },
  wildMint: {
    textAlign: "left",
    color: Color.shadesBlack02,
    lineHeight: 28,
    fontWeight: "500",
    fontSize: FontSize.paragraphMedium_size,
  },
  menthaArvensis: {
    lineHeight: 20,
    fontSize: FontSize.m3LabelLarge_size,
    color: Color.neutralGray05,
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
    gap: Gap.gap_xs,
    left: 16,
    position: "absolute",
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
    overflow: "hidden",
  },
  water1: {
    flexDirection: "row",
    gap: Gap.gap_xs,
  },
  water2: {
    textAlign: "center",
    color: Color.shadesBlack02,
    lineHeight: 28,
    fontWeight: "500",
    fontSize: FontSize.paragraphMedium_size,
  },
  waterIn4: {
    color: Color.neutralGray04,
    fontSize: FontSize.xSmallParagraphRegular_size,
    textAlign: "center",
    fontFamily: FontFamily.paragraphy2Regular,
    lineHeight: 20,
  },
  content: {
    alignItems: "center",
    flexDirection: "row",
  },
  water: {
    top: 20,
  },
  fertilizerIcon: {
    top: 13,
    left: 13,
    zIndex: 1,
    position: "absolute",
  },
  water3: {
    top: 84,
  },
  label: {
    color: Color.primary500,
  },
  buttons: {
    top: 162,
    left: 25,
    borderColor: Color.colorSeagreen,
    borderWidth: 1,
    width: 278,
    borderStyle: "solid",
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
    top: 194,
    marginLeft: -164,
    left: "50%",
  },
  container1: {
    backgroundColor: Color.primary500,
    height: 56,
  },
  remember: {
    fontSize: FontSize.heading6Medium_size,
    letterSpacing: -0.4,
    color: Color.shadesWhite01,
    textAlign: "center",
    lineHeight: 28,
    fontWeight: "500",
  },
  container2: {
    left: 48,
    alignItems: "center",
    flexDirection: "row",
    top: 0,
    position: "absolute",
  },
  arrowBackIcon: {
    top: 2,
    left: 0,
    position: "absolute",
  },
  content2: {
    top: 14,
    width: 149,
    height: 28,
    left: 16,
  },
  navbar: {
    left: 0,
    top: 0,
    gap: Gap.gap_xs,
    position: "absolute",
  },
  darkFrame: {
    marginTop: -412,
    backgroundColor: Color.colorGray_100,
    height: 800,
    marginLeft: -180,
    top: "50%",
    width: 360,
  },
  popChild: {
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    height: 707,
    backgroundColor: Color.shadesWhite01,
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
    fontSize: FontSize.xSmallParagraphRegular_size,
    textAlign: "center",
    lineHeight: 20,
  },
  suggestFertilization: {
    color: Color.shadesBlack02,
  },
  suggestFertilizationMildContainer: {
    fontSize: FontSize.xSmallParagraphRegular_size,
    lineHeight: 20,
    textAlign: "left",
  },
  content3: {
    top: 86,
    gap: Gap.gap_4xs,
    left: 16,
  },
  label1: {
    color: Color.shadesWhite01,
  },
  buttons1: {
    marginLeft: -160,
    top: 616,
    width: 320,
    backgroundColor: Color.primaryColors600,
    zIndex: 2,
    left: "50%",
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_5xl,
    overflow: "hidden",
  },
  container3: {
    left: 0,
    top: 0,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.shadesWhite01,
    position: "absolute",
  },
  recomanded1: {
    color: Color.colorDarkslategray,
    fontSize: FontSize.xSmallParagraphRegular_size,
    textAlign: "center",
    fontFamily: FontFamily.paragraphy2Regular,
    lineHeight: 20,
  },
  every4Days: {
    fontSize: FontSize.xSmallParagraphRegular_size,
    textAlign: "center",
    lineHeight: 20,
    color: Color.shadesBlack02,
  },
  recomanded: {
    top: 90,
    gap: Gap.gap_3xl,
    flexDirection: "row",
    left: 16,
    position: "absolute",
  },
  box: {
    borderColor: Color.colorMediumaquamarine_100,
    borderBottomWidth: 1,
    height: 61,
    width: 282,
    borderStyle: "solid",
    zIndex: 0,
  },
  days: {
    color: Color.primaryColors600,
    fontSize: FontSize.xSmallParagraphRegular_size,
    textAlign: "center",
    lineHeight: 20,
  },
  weeks: {
    color: Color.colorMediumaquamarine_200,
    fontSize: FontSize.xSmallParagraphRegular_size,
    textAlign: "center",
    fontFamily: FontFamily.paragraphy2Regular,
    lineHeight: 20,
  },
  tab: {
    top: 33,
    left: 37,
    gap: Gap.gap_lg,
    flexDirection: "row",
  },
  line: {
    top: 60,
    left: 30,
    width: 42,
    height: 1,
    backgroundColor: Color.primaryColors600,
    zIndex: 2,
    position: "absolute",
  },
  tabs: {
    top: 122,
    left: 23,
    width: 282,
    justifyContent: "center",
    gap: Gap.gap_xs,
  },
  water7: {
    fontSize: FontSize.paragraphy2Regular_size,
    lineHeight: 24,
    textAlign: "center",
    color: Color.shadesBlack02,
  },
  water5: {
    gap: Gap.gap_2xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  track: {
    backgroundColor: Color.primaryColors600,
  },
  handle: {
    marginTop: -12,
    marginLeft: -12,
    borderRadius: Border.br_4xl,
    width: 24,
    height: 24,
    backgroundColor: Color.shadesWhite01,
  },
  handleContainer: {
    right: -8,
  },
  switch: {
    width: 52,
    height: 32,
  },
  container4: {
    gap: Gap.gap_2xl,
  },
  activeBar: {
    backgroundColor: Color.primaryColors400,
    width: 198,
    height: 10,
  },
  circleIcon: {
    top: -5,
    left: 188,
    width: 20,
    height: 20,
  },
  barCircle: {
    backgroundColor: Color.primaryColors30,
    gap: Gap.gap_xs,
    flex: 1,
  },
  text6: {
    color: Color.shadesWhite01,
    fontSize: FontSize.xSmallParagraphRegular_size,
    textAlign: "left",
  },
  text5: {
    flexDirection: "row",
    zIndex: 0,
  },
  polygonIcon: {
    top: 19,
    left: 7,
    borderRadius: Border.br_12xs,
    width: 10,
    height: 10,
  },
  textBg: {
    top: -29,
    left: 186,
    borderRadius: Border.br_9xs,
    padding: Padding.p_9xs,
    backgroundColor: Color.primaryColors600,
    justifyContent: "center",
    alignItems: "center",
    gap: Gap.gap_xs,
  },
  ndProgressBar: {
    top: 228,
    left: 31,
    width: 266,
    flexDirection: "row",
  },
  waterRescheduleonStateDa: {
    shadowOpacity: 1,
    elevation: 1,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.14)",
  },
  editSchedule: {
    zIndex: 3,
    top: 194,
    left: 16,
    position: "absolute",
  },
  container5: {
    left: 0,
    top: 0,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.shadesWhite01,
  },
  track1: {
    borderColor: Color.primaryColors600,
    borderWidth: 2,
    backgroundColor: Color.primaryColors30,
    borderStyle: "solid",
  },
  handle1: {
    marginTop: -8,
    marginLeft: -8,
    width: 16,
    height: 16,
    backgroundColor: Color.primaryColors600,
    borderRadius: Border.br_81xl,
    top: "50%",
  },
  handleContainer1: {
    left: -8,
  },
  container6: {
    gap: Gap.gap_xl,
  },
  editSchedule1: {
    top: 478,
    zIndex: 4,
    shadowOpacity: 1,
    elevation: 1,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.14)",
    marginLeft: -164,
    left: "50%",
  },
  pop: {
    height: 707,
    bottom: 0,
    marginLeft: -180,
    flexDirection: "row",
    gap: Gap.gap_xs,
    left: "50%",
    position: "absolute",
  },
  changeScheduleedit1One: {
    height: 776,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.shadesWhite01,
  },
});

export default ChangeScheduleedit1One;
