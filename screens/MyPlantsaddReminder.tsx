import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import {
  Color,
  FontFamily,
  FontSize,
  Padding,
  Border,
  Gap,
} from "../GlobalStyles";

const MyPlantsaddReminder = () => {
  return (
    <View style={styles.myPlantsaddReminder}>
      <View
        style={[styles.myPlantsaddReminderChild, styles.navigationBarLayout]}
      />
      <Image style={styles.statusBarLight} contentFit="cover" />
      <View style={[styles.search, styles.searchPosition]}>
        <View style={[styles.searchChild, styles.buttons1Layout]} />
        <View style={styles.search1}>
          <Image style={styles.iconLayout1} contentFit="cover" />
          <Text style={styles.searchPlants}>Search plants</Text>
        </View>
      </View>
      <View style={styles.topBar}>
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
              <View style={[styles.scaner, styles.scanerPosition]}>
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
                style={[styles.articleIcon, styles.scanerPosition]}
                contentFit="cover"
                source={require("../assets/article1.png")}
              />
            </View>
            <View style={styles.navbarLayout}>
              <View style={[styles.navbarChild, styles.mainBoxPosition]}>
                <Text style={styles.caption3}>My Plants</Text>
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
          style={styles.setReminderItem}
          contentFit="cover"
          source={require("../assets/rectangle-74.png")}
        />
        <Image
          style={[styles.moreVertIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/more-vert.png")}
        />
        <View style={styles.contentParent}>
          <View>
            <View style={styles.objectName}>
              <Text style={[styles.wildMint, styles.wildMintTypo]}>
                Wild mint
              </Text>
              <Text style={styles.menthaArvensis}>Mentha arvensis</Text>
            </View>
          </View>
          <View style={styles.content1}>
            <View style={[styles.siteSelection, styles.content2FlexBox]}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/location-on1.png")}
              />
              <Text style={styles.menthaArvensis}>No site selected</Text>
            </View>
            <View style={[styles.siteSelection, styles.content2FlexBox]}>
              <Image
                style={[styles.droplets02Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/droplets02.png")}
              />
              <Text style={styles.menthaArvensis}>Every 4 days</Text>
            </View>
          </View>
        </View>
        <View style={[styles.buttons, styles.buttonsPosition]}>
          <Image
            style={styles.alarmIcon1}
            contentFit="cover"
            source={require("../assets/alarm1.png")}
          />
          <Text style={[styles.addReminder, styles.labelTypo1]}>
            Add Reminder
          </Text>
        </View>
      </View>
      <View style={[styles.buttons1, styles.buttonsPosition]}>
        <Image
          style={styles.alarmIcon1}
          contentFit="cover"
          source={require("../assets/iconsadd-24px.png")}
        />
        <Text style={[styles.label, styles.labelTypo]}>Add plant</Text>
      </View>
      <View style={[styles.navigationBar, styles.navigationBarLayout]}>
        <View style={[styles.navbarChild, styles.mainBoxPosition]} />
        <View style={[styles.content2, styles.content2FlexBox]}>
          <Text style={[styles.myPlants, styles.wildMintTypo]}>My Plants</Text>
          <Image
            style={styles.iconLayout1}
            contentFit="cover"
            source={require("../assets/settings1.png")}
          />
        </View>
        <View style={[styles.mainBox, styles.mainBoxPosition]}>
          <View style={styles.containerbox}>
            <View style={[styles.container, styles.containerBorder]} />
            <View style={styles.text}>
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
  navigationBarLayout: {
    width: 360,
    position: "absolute",
  },
  searchPosition: {
    marginLeft: -164,
    left: "50%",
  },
  buttons1Layout: {
    borderWidth: 1,
    borderStyle: "solid",
    width: 328,
  },
  navbarLayout: {
    height: 56,
    width: 72,
  },
  captionTypo: {
    color: Color.neutralGray05,
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
  scanerPosition: {
    top: "14.29%",
    position: "absolute",
  },
  iconLayout1: {
    width: 24,
    height: 24,
  },
  wildMintTypo: {
    textAlign: "left",
    color: Color.shadesBlack02,
    fontFamily: FontFamily.heading4Semibold,
    fontWeight: "600",
    lineHeight: 28,
  },
  content2FlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  buttonsPosition: {
    paddingBottom: Padding.p_3xs,
    paddingRight: Padding.p_5xl,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_81xl,
    gap: Gap.gap_2xs,
    position: "absolute",
  },
  labelTypo1: {
    fontFamily: FontFamily.m3LabelLarge,
    letterSpacing: 0,
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
  myPlantsaddReminderChild: {
    top: 224,
    left: 0,
    backgroundColor: Color.colorMediumaquamarine_400,
    height: 245,
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
    borderRadius: Border.br_81xl,
    borderWidth: 1,
    backgroundColor: Color.shadesWhite01,
  },
  searchPlants: {
    color: Color.neutralGray06,
    textAlign: "center",
    fontFamily: FontFamily.caption,
    lineHeight: 16,
    letterSpacing: 0,
    fontSize: FontSize.xSmallParagraphRegular_size,
  },
  search1: {
    left: 16,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    top: 12,
    gap: Gap.gap_2xs,
    position: "absolute",
  },
  search: {
    top: 152,
    gap: Gap.gap_2xs,
    width: 328,
    position: "absolute",
  },
  caption: {
    left: "11.94%",
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
    flexDirection: "row",
  },
  caption2: {
    left: "6.39%",
  },
  articleIcon: {
    height: "42.86%",
    width: "33.33%",
    right: "33.33%",
    bottom: "42.86%",
    left: "33.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  caption3: {
    left: "10.56%",
    color: Color.primaryColors500,
    top: 32,
    textAlign: "center",
    fontFamily: FontFamily.caption,
    lineHeight: 16,
    letterSpacing: 0,
    fontSize: FontSize.xSmallParagraphRegular_size,
    position: "absolute",
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
    marginLeft: -180,
    bottom: 5,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
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
    top: 12,
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
  },
  menthaArvensis: {
    fontFamily: FontFamily.xSmallParagraphRegular,
    lineHeight: 20,
    textAlign: "left",
    color: Color.neutralGray05,
    fontSize: FontSize.xSmallParagraphRegular_size,
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
  alarmIcon1: {
    width: 18,
    height: 18,
  },
  addReminder: {
    color: Color.shadesWhite01,
    fontWeight: "500",
    fontFamily: FontFamily.m3LabelLarge,
    fontSize: FontSize.smallParagraphMedium_size,
    lineHeight: 20,
    textAlign: "center",
  },
  buttons: {
    top: 154,
    backgroundColor: Color.colorMediumseagreen_100,
    width: 304,
    zIndex: 4,
    left: 12,
  },
  setReminder: {
    top: 244,
    gap: Gap.gap_xs,
    position: "absolute",
  },
  label: {
    fontFamily: FontFamily.m3LabelLarge,
    letterSpacing: 0,
  },
  buttons1: {
    top: 505,
    borderColor: Color.colorMediumseagreen_100,
    borderWidth: 1,
    borderStyle: "solid",
    width: 328,
    marginLeft: -164,
    left: "50%",
  },
  myPlants: {
    fontSize: FontSize.heading6Medium_size,
    letterSpacing: -0.4,
  },
  content2: {
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
  text: {
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
    right: 0,
    height: 134,
  },
  myPlantsaddReminder: {
    flex: 1,
    height: 781,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.shadesWhite01,
  },
});

export default MyPlantsaddReminder;
