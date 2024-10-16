import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import {
  FontFamily,
  Gap,
  Padding,
  Border,
  FontSize,
  Color,
} from "../GlobalStyles";

const ChangeScheduleeditOnState = () => {
  return (
    <View style={styles.changeScheduleeditOnState}>
      <Image style={styles.statusBarLight} contentFit="cover" />
      <View style={styles.containerPlant}>
        <View style={styles.containerPlantChild} />
        <Image
          style={styles.containerPlantItem}
          contentFit="cover"
          source={require("../assets/rectangle-90.png")}
        />
        <View style={styles.text}>
          <Text style={[styles.wildMint, styles.waterTypo]}>Wild mint</Text>
          <Text style={styles.menthaArvensis}>Mentha arvensis</Text>
        </View>
      </View>
      <View style={[styles.reminder, styles.reminderLayout]}>
        <View style={styles.remindercontainer}>
          <View style={[styles.container, styles.reminderLayout]} />
          <View style={[styles.water, styles.waterPosition]}>
            <View style={styles.water1}>
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
            <View style={styles.content}>
              <View>
                <Text style={[styles.water2, styles.waterTypo]}>Water</Text>
                <Text style={styles.waterIn4}>Water in 4 days</Text>
              </View>
            </View>
          </View>
          <View style={[styles.water3, styles.waterPosition]}>
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
        <View style={styles.container1} />
        <View style={styles.content2}>
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
      <View style={[styles.pop, styles.popPosition]}>
        <View style={styles.popChild} />
        <View style={styles.content3}>
          <Text style={styles.suggestWaterContainer}>
            <Text style={styles.suggestWater}>
              <Text style={styles.text7Typo}>Suggest Water:</Text>
            </Text>
            <Text style={styles.every714Days}>
              <Text style={styles.suggestWater}> -</Text>
              <Text style={styles.every7}> every 7 - 14 days</Text>
            </Text>
          </Text>
          <Text style={styles.suggestFertilizationMildContainer}>
            <Text style={styles.suggestWater}>
              <Text style={styles.text7Typo}>Suggest Fertilization:</Text>
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
        <View style={[styles.buttons1, styles.buttonsFlexBox]}>
          <Text style={[styles.label1, styles.labelTypo]}>Done</Text>
        </View>
        <View style={[styles.box, styles.waterPosition]}>
          <View>
            <View
              style={[styles.waterRescheduleonStateDa, styles.container3Layout]}
            >
              <View style={[styles.container3, styles.container3Layout]} />
              <View style={[styles.recomanded, styles.recomandedPosition]}>
                <Text style={styles.recomanded1}>Recomanded</Text>
                <Text style={[styles.every4Days, styles.text7Typo]}>
                  Every 4 Days
                </Text>
              </View>
              <View style={[styles.tabs, styles.tabsFlexBox]}>
                <View style={styles.box1} />
                <View style={styles.tab}>
                  <Text style={[styles.days, styles.waterTypo]}>Days</Text>
                  <Text style={styles.weeks}>Weeks</Text>
                  <Text style={styles.weeks}>Months</Text>
                </View>
                <View style={[styles.line, styles.lineBg]} />
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
                      style={styles.icon}
                      contentFit="cover"
                      source={require("../assets/icon.png")}
                    />
                  </View>
                  <View style={styles.content}>
                    <View>
                      <Text style={[styles.water7, styles.waterTypo]}>
                        Water
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.switch}>
                  <View style={[styles.track, styles.lineBg]} />
                  <View style={[styles.handleContainer, styles.handlePosition]}>
                    <View style={[styles.handle, styles.handlePosition]} />
                  </View>
                </View>
              </View>
              <View style={[styles.ndProgressBar, styles.tabsFlexBox]}>
                <View style={[styles.barCircle, styles.barLayout]}>
                  <View style={[styles.activeBar, styles.barLayout]} />
                  <Image
                    style={styles.circleIcon}
                    contentFit="cover"
                    source={require("../assets/circle.png")}
                  />
                </View>
                <View style={[styles.textBg, styles.lineBg]}>
                  <View style={styles.text6}>
                    <Text style={[styles.text7, styles.text7Typo]}>45</Text>
                  </View>
                  <Image
                    style={styles.polygonIcon}
                    contentFit="cover"
                    source={require("../assets/polygon.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.editSchedule1, styles.container3Layout]}>
            <View style={[styles.container3, styles.container3Layout]} />
            <View style={[styles.recomandedParent, styles.recomandedPosition]}>
              <Text style={styles.recomanded1}>Recomanded</Text>
              <Text style={[styles.every4Days, styles.text7Typo]}>
                Every 4 - 6 weeks
              </Text>
            </View>
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
                <View style={[styles.track, styles.lineBg]} />
                <View style={[styles.handleContainer, styles.handlePosition]}>
                  <View style={[styles.handle, styles.handlePosition]} />
                </View>
              </View>
            </View>
            <View style={[styles.tabs, styles.tabsFlexBox]}>
              <View style={styles.box1} />
              <View style={styles.tab}>
                <Text style={[styles.days, styles.waterTypo]}>Days</Text>
                <Text style={styles.weeks}>Weeks</Text>
                <Text style={styles.weeks}>Months</Text>
              </View>
              <View style={[styles.line, styles.lineBg]} />
            </View>
            <View style={[styles.ndProgressBar, styles.tabsFlexBox]}>
              <View style={[styles.barCircle, styles.barLayout]}>
                <View style={[styles.activeBar, styles.barLayout]} />
                <Image
                  style={styles.circleIcon}
                  contentFit="cover"
                  source={require("../assets/circle.png")}
                />
              </View>
              <View style={[styles.textBg, styles.lineBg]}>
                <View style={styles.text6}>
                  <Text style={[styles.text7, styles.text7Typo]}>45</Text>
                </View>
                <Image
                  style={styles.polygonIcon}
                  contentFit="cover"
                  source={require("../assets/polygon.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  waterTypo: {
    fontFamily: FontFamily.heading6Medium,
    fontWeight: "500",
  },
  reminderLayout: {
    height: 222,
    width: 328,
    position: "absolute",
  },
  waterPosition: {
    gap: Gap.gap_xs,
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
  handlePosition: {
    top: "50%",
    position: "absolute",
  },
  popPosition: {
    marginLeft: -180,
    left: "50%",
  },
  container3Layout: {
    height: 272,
    width: 328,
  },
  recomandedPosition: {
    top: 90,
    flexDirection: "row",
    left: 16,
    position: "absolute",
  },
  text7Typo: {
    fontFamily: FontFamily.heading2Semibold,
    fontWeight: "600",
  },
  tabsFlexBox: {
    alignItems: "flex-end",
    position: "absolute",
  },
  lineBg: {
    backgroundColor: Color.primaryColors600,
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
  barLayout: {
    borderRadius: Border.br_3xs,
    zIndex: 0,
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
    lineHeight: 28,
    fontWeight: "500",
    fontSize: FontSize.paragraphMedium_size,
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
    gap: Gap.gap_6xs,
    zIndex: 2,
    position: "absolute",
  },
  containerPlant: {
    top: 96,
    gap: Gap.gap_2xs,
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
    zIndex: 1,
    position: "absolute",
    overflow: "hidden",
  },
  water1: {
    flexDirection: "row",
    gap: Gap.gap_2xs,
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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: 20,
    gap: Gap.gap_xs,
  },
  fertilizerIcon: {
    top: 13,
    left: 13,
    zIndex: 1,
    position: "absolute",
  },
  water3: {
    top: 84,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: 20,
    gap: Gap.gap_xs,
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
    marginLeft: -164,
    top: 194,
    left: "50%",
  },
  container1: {
    height: 56,
    width: 360,
    backgroundColor: Color.primary500,
    zIndex: 0,
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
    zIndex: 1,
    left: 16,
    position: "absolute",
  },
  navbar: {
    left: 0,
    top: 0,
    gap: Gap.gap_2xs,
    position: "absolute",
  },
  darkFrame: {
    marginTop: -524,
    backgroundColor: Color.colorGray_100,
    height: 1024,
    marginLeft: -180,
    left: "50%",
    width: 360,
  },
  popChild: {
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    height: 907,
    width: 360,
    zIndex: 0,
    backgroundColor: Color.shadesWhite01,
  },
  suggestWater: {
    color: Color.shadesBlack02,
  },
  every7: {
    color: Color.neutralGray03,
  },
  every714Days: {
    fontFamily: FontFamily.paragraphy2Regular,
  },
  suggestWaterContainer: {
    fontSize: FontSize.xSmallParagraphRegular_size,
    textAlign: "center",
    lineHeight: 20,
  },
  mildMintShould: {
    color: Color.neutralGray05,
  },
  suggestFertilizationMildContainer: {
    fontSize: FontSize.xSmallParagraphRegular_size,
    lineHeight: 20,
    textAlign: "left",
  },
  content3: {
    top: 86,
    gap: Gap.gap_5xs,
    zIndex: 1,
    left: 16,
    position: "absolute",
  },
  label1: {
    color: Color.shadesWhite01,
  },
  buttons1: {
    marginLeft: -160,
    top: 790,
    width: 320,
    backgroundColor: Color.primary500,
    zIndex: 2,
    left: "50%",
    overflow: "hidden",
  },
  container3: {
    left: 0,
    top: 0,
    height: 272,
    borderRadius: Border.br_7xs,
    position: "absolute",
    backgroundColor: Color.shadesWhite01,
  },
  recomanded1: {
    color: Color.neutralGray03,
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
    gap: Gap.gap_4xl,
  },
  box1: {
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
    zIndex: 1,
    position: "absolute",
  },
  line: {
    top: 60,
    left: 30,
    width: 42,
    height: 1,
    zIndex: 2,
  },
  tabs: {
    top: 122,
    left: 23,
    width: 282,
    justifyContent: "center",
    gap: Gap.gap_2xs,
  },
  water7: {
    fontSize: FontSize.paragraphy2Regular_size,
    lineHeight: 24,
    textAlign: "center",
    color: Color.shadesBlack02,
  },
  water5: {
    gap: Gap.gap_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  track: {
    right: 0,
    bottom: 0,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.primaryColors600,
    left: 0,
    top: 0,
  },
  handle: {
    marginTop: -12,
    marginLeft: -12,
    borderRadius: Border.br_4xl,
    width: 24,
    height: 24,
    left: "50%",
    backgroundColor: Color.shadesWhite01,
  },
  handleContainer: {
    marginTop: -24,
    right: -8,
    width: 48,
    height: 48,
  },
  switch: {
    width: 52,
    height: 32,
  },
  container4: {
    gap: Gap.gap_3xl,
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
    zIndex: 1,
    position: "absolute",
  },
  barCircle: {
    backgroundColor: Color.primaryColors30,
    gap: Gap.gap_2xs,
    flex: 1,
  },
  text7: {
    color: Color.shadesWhite01,
    fontSize: FontSize.xSmallParagraphRegular_size,
    textAlign: "left",
  },
  text6: {
    flexDirection: "row",
    zIndex: 0,
  },
  polygonIcon: {
    top: 19,
    left: 7,
    borderRadius: Border.br_12xs,
    width: 10,
    height: 10,
    zIndex: 1,
    position: "absolute",
  },
  textBg: {
    top: -29,
    left: 186,
    borderRadius: Border.br_9xs,
    padding: Padding.p_9xs,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    gap: Gap.gap_2xs,
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
    height: 272,
  },
  recomandedParent: {
    gap: 117,
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
    height: 272,
  },
  box: {
    zIndex: 3,
    top: 194,
    left: 16,
  },
  pop: {
    bottom: 0,
    flexDirection: "row",
    gap: Gap.gap_2xs,
    position: "absolute",
  },
  changeScheduleeditOnState: {
    height: 1000,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.shadesWhite01,
  },
});

export default ChangeScheduleeditOnState;