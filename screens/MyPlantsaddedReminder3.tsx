import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import {
  Border,
  Gap,
  FontFamily,
  FontSize,
  Color,
  Padding,
} from "../GlobalStyles";

const MyPlantsaddedReminder3 = () => {
  return (
    <View style={styles.myPlantsaddedReminder}>
      <View style={styles.myPlantsaddedReminderChild} />
      <Image style={styles.statusBarLight} contentFit="cover" />
      <View style={[styles.search, styles.searchPosition]}>
        <View style={[styles.searchChild, styles.buttonsLayout]} />
        <View style={[styles.search1, styles.search1FlexBox]}>
          <Image style={styles.iconLayout2} contentFit="cover" />
          <Text style={styles.searchPlants}>Search plants</Text>
        </View>
      </View>
      <View style={[styles.topBar, styles.barPosition]}>
        <View style={styles.topBar1}>
          <View style={styles.nabbar}>
            <View style={[styles.navbar, styles.navbarLayout]}>
              <Text style={[styles.caption, styles.captionTypo]}>Reminder</Text>
              <Image
                style={[styles.icon, styles.iconPosition]}
                contentFit="cover"
              />
              <Image
                style={[styles.alarmIcon, styles.alarmIconPosition]}
                contentFit="cover"
              />
            </View>
            <View style={[styles.navbar, styles.navbarLayout]}>
              <Text style={[styles.caption1, styles.captionTypo]}>Explore</Text>
              <Image style={styles.iconPosition} contentFit="cover" />
            </View>
            <View style={styles.navbarLayout}>
              <View style={[styles.navbarChild, styles.mainBoxPosition]} />
              <View style={styles.scaner}>
                <Image style={styles.scanerChild} contentFit="cover" />
                <Image
                  style={[styles.scanerItem, styles.alarmIconPosition]}
                  contentFit="cover"
                />
              </View>
            </View>
            <View style={styles.navbarLayout}>
              <View style={[styles.navbarChild, styles.mainBoxPosition]}>
                <Text style={[styles.caption2, styles.captionTypo]}>
                  Care Guide
                </Text>
                <Image
                  style={[styles.icon, styles.iconPosition]}
                  contentFit="cover"
                />
              </View>
              <Image
                style={[styles.articleIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/article1.png")}
              />
            </View>
            <View style={styles.navbarLayout}>
              <View style={[styles.navbarChild, styles.mainBoxPosition]}>
                <Text style={[styles.caption3, styles.captionTypo]}>
                  My Plants
                </Text>
                <Image
                  style={[styles.icon, styles.iconPosition]}
                  contentFit="cover"
                />
                <Image
                  style={[styles.alarmIcon, styles.alarmIconPosition]}
                  contentFit="cover"
                  source={require("../assets/psychiatry1.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.setReminder, styles.searchPosition]}>
        <View style={styles.setReminderChild} />
        <Image
          style={[styles.setReminderItem, styles.search1Position]}
          contentFit="cover"
          source={require("../assets/rectangle-74.png")}
        />
        <Image
          style={[styles.moreVertIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/more-vert.png")}
        />
        <View style={styles.contentParent}>
          <View>
            <View style={styles.objectName}>
              <Text style={[styles.wildMint, styles.wildMintTypo]}>
                Wild mint
              </Text>
              <Text style={[styles.menthaArvensis, styles.waterIn4Typo]}>
                Mentha arvensis
              </Text>
            </View>
          </View>
          <View style={styles.content1}>
            <View style={[styles.siteSelection, styles.contentFlexBox]}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/location-on1.png")}
              />
              <Text style={[styles.menthaArvensis, styles.waterIn4Typo]}>
                Site selected
              </Text>
            </View>
            <View style={[styles.siteSelection, styles.contentFlexBox]}>
              <Image
                style={[styles.droplets02Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/droplets02.png")}
              />
              <Text style={[styles.menthaArvensis, styles.waterIn4Typo]}>
                Every 4 days
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.water1, styles.waterFlexBox]}>
          <View style={styles.water2}>
            <Image
              style={styles.waterIcon}
              contentFit="cover"
              source={require("../assets/water1.png")}
            />
            <Image
              style={[styles.icon1, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/icon3.png")}
            />
          </View>
          <View style={styles.contentFlexBox}>
            <View>
              <Text style={styles.water3}>Water</Text>
              <Text style={[styles.waterIn4, styles.waterIn4Typo]}>
                Water in 4 days
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.water4, styles.waterFlexBox]}>
          <View style={styles.water2}>
            <Image
              style={styles.waterIcon}
              contentFit="cover"
              source={require("../assets/water1.png")}
            />
            <Image
              style={[styles.fertilizerIcon, styles.iconLayout2]}
              contentFit="cover"
              source={require("../assets/fertilizer1.png")}
            />
          </View>
          <View style={styles.contentFlexBox}>
            <View>
              <Text style={styles.water3}>Fertilizer</Text>
              <Text style={[styles.waterIn4, styles.waterIn4Typo]}>
                Water in 1 week
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.buttons, styles.search1FlexBox]}>
        <Image
          style={styles.iconsadd24px}
          contentFit="cover"
          source={require("../assets/iconsadd-24px.png")}
        />
        <Text style={[styles.label, styles.labelTypo]}>Add plant</Text>
      </View>
      <View style={[styles.navigationBar, styles.barPosition]}>
        <View style={[styles.navbarChild, styles.mainBoxPosition]} />
        <View style={[styles.content4, styles.contentFlexBox]}>
          <Text style={[styles.myPlants, styles.wildMintTypo]}>My Plants</Text>
          <Image
            style={styles.iconLayout2}
            contentFit="cover"
            source={require("../assets/settings1.png")}
          />
        </View>
        <View style={[styles.mainBox, styles.mainBoxPosition]}>
          <View style={styles.containerbox}>
            <View style={[styles.container, styles.containerBorder]} />
            <View style={styles.text2}>
              <Text style={[styles.plants, styles.labelTypo]}>Plants</Text>
              <Text style={styles.sites}>Sites</Text>
            </View>
          </View>
          <View style={styles.line} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchPosition: {
    marginLeft: -164,
    left: "50%",
  },
  buttonsLayout: {
    borderWidth: 1,
    borderRadius: Border.br_81xl,
    borderStyle: "solid",
    width: 328,
  },
  search1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: Gap.gap_2xs,
    position: "absolute",
  },
  barPosition: {
    marginLeft: -180,
    left: "50%",
    position: "absolute",
  },
  navbarLayout: {
    height: 56,
    width: 72,
  },
  captionTypo: {
    top: 32,
    textAlign: "center",
    fontFamily: FontFamily.caption,
    lineHeight: 16,
    letterSpacing: 0,
    fontSize: FontSize.xSmallParagraphRegular_size,
    position: "absolute",
  },
  iconPosition: {
    top: "50%",
    marginLeft: -12,
    marginTop: -20,
    width: 24,
    height: 24,
    left: "50%",
    position: "absolute",
  },
  alarmIconPosition: {
    top: 8,
    width: 24,
    height: 24,
    position: "absolute",
  },
  mainBoxPosition: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  search1Position: {
    top: 12,
    zIndex: 1,
  },
  iconLayout2: {
    width: 24,
    height: 24,
  },
  wildMintTypo: {
    color: Color.shadesBlack02,
    fontFamily: FontFamily.heading4Semibold,
    fontWeight: "600",
    lineHeight: 28,
    textAlign: "left",
  },
  waterIn4Typo: {
    fontFamily: FontFamily.xSmallParagraphRegular,
    lineHeight: 20,
    fontSize: FontSize.xSmallParagraphRegular_size,
  },
  contentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  waterFlexBox: {
    top: 147,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: Gap.gap_2xs,
    position: "absolute",
  },
  labelTypo: {
    color: Color.colorMediumseagreen_100,
    fontWeight: "500",
    fontSize: FontSize.smallParagraphMedium_size,
    lineHeight: 20,
    textAlign: "center",
  },
  containerBorder: {
    borderColor: Color.colorGainsboro_200,
    zIndex: 0,
  },
  myPlantsaddedReminderChild: {
    top: 224,
    left: 0,
    backgroundColor: Color.colorMediumaquamarine_400,
    height: 245,
    width: 360,
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
  searchChild: {
    height: 48,
    zIndex: 0,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.shadesWhite01,
  },
  searchPlants: {
    color: Color.neutralGray06,
    textAlign: "center",
    fontFamily: FontFamily.caption,
    lineHeight: 16,
    fontSize: FontSize.xSmallParagraphRegular_size,
    letterSpacing: 0,
  },
  search1: {
    left: 16,
    zIndex: 1,
    top: 12,
  },
  search: {
    top: 152,
    gap: Gap.gap_2xs,
    width: 328,
    position: "absolute",
  },
  caption: {
    left: "11.94%",
    color: Color.neutralGray05,
  },
  icon: {
    display: "none",
  },
  alarmIcon: {
    left: 24,
  },
  navbar: {
    backgroundColor: Color.shadesWhite01,
  },
  caption1: {
    width: "58.33%",
    left: "20.28%",
    color: Color.neutralGray05,
  },
  navbarChild: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    backgroundColor: Color.shadesWhite01,
  },
  scanerChild: {
    width: 40,
    height: 40,
    zIndex: 0,
  },
  scanerItem: {
    left: 8,
    zIndex: 1,
  },
  scaner: {
    height: "71.43%",
    width: "55.56%",
    right: "22.22%",
    bottom: "14.29%",
    left: "22.22%",
    gap: Gap.gap_xs,
    top: "14.29%",
    flexDirection: "row",
    position: "absolute",
  },
  caption2: {
    left: "6.39%",
    color: Color.neutralGray05,
  },
  articleIcon: {
    height: "42.86%",
    width: "33.33%",
    right: "33.33%",
    bottom: "42.86%",
    left: "33.33%",
    top: "14.29%",
  },
  caption3: {
    left: "10.56%",
    color: Color.primaryColors500,
  },
  nabbar: {
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    flexDirection: "row",
  },
  topBar1: {
    flexDirection: "row",
  },
  topBar: {
    bottom: 5,
    flexDirection: "row",
  },
  setReminderChild: {
    borderRadius: Border.br_sm,
    height: 206,
    zIndex: 0,
    width: 328,
    backgroundColor: Color.shadesWhite01,
  },
  setReminderItem: {
    borderRadius: Border.br_5xs,
    width: 100,
    height: 117,
    left: 12,
    zIndex: 1,
    position: "absolute",
  },
  moreVertIcon: {
    top: 11,
    left: 292,
    zIndex: 2,
    position: "absolute",
  },
  wildMint: {
    fontSize: FontSize.paragraphMedium_size,
    textAlign: "left",
  },
  menthaArvensis: {
    textAlign: "left",
    color: Color.neutralGray05,
  },
  objectName: {
    gap: Gap.gap_5xs,
  },
  siteSelection: {
    gap: Gap.gap_2xs,
  },
  droplets02Icon: {
    overflow: "hidden",
  },
  content1: {
    gap: Gap.gap_4xs,
  },
  contentParent: {
    top: 20,
    left: 122,
    zIndex: 3,
    gap: Gap.gap_2xs,
    position: "absolute",
  },
  waterIcon: {
    width: 32,
    height: 32,
    zIndex: 0,
  },
  icon1: {
    height: "40%",
    width: "40%",
    top: "30%",
    right: "30%",
    bottom: "30%",
    left: "30%",
    zIndex: 1,
  },
  water2: {
    gap: Gap.gap_xs,
    flexDirection: "row",
  },
  water3: {
    lineHeight: 20,
    color: Color.shadesBlack02,
    fontFamily: FontFamily.heading4Semibold,
    fontWeight: "600",
    textAlign: "center",
    fontSize: FontSize.xSmallParagraphRegular_size,
  },
  waterIn4: {
    color: Color.colorDimgray_100,
    textAlign: "center",
  },
  water1: {
    zIndex: 4,
    left: 12,
  },
  fertilizerIcon: {
    top: 4,
    left: 4,
    zIndex: 1,
    position: "absolute",
  },
  water4: {
    left: 164,
    zIndex: 5,
  },
  setReminder: {
    top: 244,
    height: 206,
    gap: Gap.gap_xs,
    position: "absolute",
  },
  iconsadd24px: {
    width: 18,
    height: 18,
  },
  label: {
    fontFamily: FontFamily.m3LabelLarge,
    letterSpacing: 0,
    color: Color.colorMediumseagreen_100,
    fontWeight: "500",
  },
  buttons: {
    top: 505,
    borderColor: Color.colorMediumseagreen_100,
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_5xl,
    paddingBottom: Padding.p_3xs,
    borderWidth: 1,
    borderRadius: Border.br_81xl,
    borderStyle: "solid",
    width: 328,
    marginLeft: -164,
    left: "50%",
  },
  myPlants: {
    fontSize: FontSize.heading6Medium_size,
    letterSpacing: -0.4,
    textAlign: "left",
  },
  content4: {
    height: "35.82%",
    width: "91.11%",
    top: "2.99%",
    right: "4.44%",
    bottom: "61.19%",
    left: "4.44%",
    gap: Gap.gap_4xl,
    position: "absolute",
  },
  container: {
    borderBottomWidth: 1,
    height: 50,
    zIndex: 0,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    width: 360,
  },
  plants: {
    fontFamily: FontFamily.paragraphMedium,
  },
  sites: {
    fontSize: FontSize.smallParagraphMedium_size,
    fontFamily: FontFamily.xSmallParagraphRegular,
    lineHeight: 20,
    color: Color.neutralGray05,
    textAlign: "center",
  },
  text2: {
    top: 21,
    left: 81,
    gap: Gap.gap_3xl,
    zIndex: 1,
    flexDirection: "row",
    position: "absolute",
  },
  containerbox: {
    gap: Gap.gap_xs,
    zIndex: 0,
  },
  line: {
    top: 49,
    left: 73,
    backgroundColor: Color.primaryColors500,
    width: 57,
    height: 1,
    zIndex: 1,
    position: "absolute",
  },
  mainBox: {
    height: "37.31%",
    top: "49.25%",
    bottom: "13.43%",
    gap: Gap.gap_xs,
  },
  navigationBar: {
    top: 0,
    height: 134,
    width: 360,
  },
  myPlantsaddedReminder: {
    flex: 1,
    height: 781,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.shadesWhite01,
  },
});

export default MyPlantsaddedReminder3;
