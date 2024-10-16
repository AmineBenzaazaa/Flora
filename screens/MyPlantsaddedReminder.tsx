import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Gap,
  Padding,
} from "../GlobalStyles";

const MyPlantsaddedReminder = () => {
  return (
    <View style={styles.myPlantsaddedReminder}>
      <Image style={styles.statusBarLight} contentFit="cover" />
      <View style={[styles.search, styles.sitesPosition]}>
        <View style={[styles.searchChild, styles.container1Border]} />
        <View style={[styles.search1, styles.search1FlexBox]}>
          <Image style={styles.searchIcon} contentFit="cover" />
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
      <View style={[styles.sites, styles.sitesPosition]}>
        <Text style={styles.chooseSite}>Choose site</Text>
        <Text style={[styles.getPersonalizedSiteBased, styles.plantsTypo]}>
          Get personalized, Site-based plat care tips
        </Text>
        <View style={styles.livingFlexBox}>
          <Image
            style={styles.containerLayout}
            contentFit="cover"
            source={require("../assets/container.png")}
          />
          <Text style={[styles.livingRoom1, styles.labelTypo]}>
            Living room
          </Text>
        </View>
        <View style={styles.livingFlexBox}>
          <Image
            style={styles.containerLayout}
            contentFit="cover"
            source={require("../assets/container1.png")}
          />
          <Text style={[styles.livingRoom1, styles.labelTypo]}>Kitchen</Text>
        </View>
        <View style={styles.livingFlexBox}>
          <Image
            style={styles.containerLayout}
            contentFit="cover"
            source={require("../assets/container2.png")}
          />
          <Text style={[styles.livingRoom1, styles.labelTypo]}>Bedroom</Text>
        </View>
        <View style={styles.livingFlexBox}>
          <Image
            style={styles.containerLayout}
            contentFit="cover"
            source={require("../assets/container3.png")}
          />
          <Text style={[styles.livingRoom1, styles.labelTypo]}>Bathroom</Text>
        </View>
        <View style={styles.livingFlexBox}>
          <Image
            style={styles.containerLayout}
            contentFit="cover"
            source={require("../assets/container4.png")}
          />
          <Text style={[styles.livingRoom1, styles.labelTypo]}>Hall</Text>
        </View>
        <View style={styles.livingFlexBox}>
          <Image
            style={styles.containerLayout}
            contentFit="cover"
            source={require("../assets/container5.png")}
          />
          <Text style={[styles.livingRoom1, styles.labelTypo]}>Office</Text>
        </View>
        <View style={styles.livingFlexBox}>
          <Image
            style={styles.containerLayout}
            contentFit="cover"
            source={require("../assets/container6.png")}
          />
          <Text style={[styles.livingRoom1, styles.labelTypo]}>Porch</Text>
        </View>
        <View style={styles.livingFlexBox}>
          <Image
            style={styles.containerLayout}
            contentFit="cover"
            source={require("../assets/container7.png")}
          />
          <Text style={[styles.livingRoom1, styles.labelTypo]}>Terrace</Text>
        </View>
        <View style={styles.livingFlexBox}>
          <Image
            style={styles.containerLayout}
            contentFit="cover"
            source={require("../assets/container8.png")}
          />
          <Text style={[styles.livingRoom1, styles.labelTypo]}>Patio</Text>
        </View>
        <View style={styles.livingFlexBox}>
          <Image
            style={styles.containerLayout}
            contentFit="cover"
            source={require("../assets/container9.png")}
          />
          <Text style={[styles.livingRoom1, styles.labelTypo]}>Backyard</Text>
        </View>
        <View style={styles.livingFlexBox}>
          <Image
            style={styles.containerLayout}
            contentFit="cover"
            source={require("../assets/container10.png")}
          />
          <Text style={[styles.livingRoom1, styles.labelTypo]}>Balcony</Text>
        </View>
        <View style={styles.livingFlexBox}>
          <View style={[styles.container, styles.containerLayout]} />
          <Text style={[styles.customSite, styles.labelTypo]}>Custom site</Text>
          <Image
            style={styles.locationOnIcon}
            contentFit="cover"
            source={require("../assets/location-on.png")}
          />
        </View>
      </View>
      <View style={[styles.buttons, styles.search1FlexBox]}>
        <Text style={[styles.label, styles.labelTypo]}>Select sites</Text>
      </View>
      <View style={[styles.navigationBar, styles.barPosition]}>
        <View style={[styles.navbarChild, styles.mainBoxPosition]} />
        <View style={styles.content}>
          <Text style={styles.myPlants}>My Plants</Text>
          <Image
            style={styles.searchIcon}
            contentFit="cover"
            source={require("../assets/settings.png")}
          />
        </View>
        <View style={[styles.mainBox, styles.mainBoxPosition]}>
          <View style={styles.containerbox}>
            <View style={[styles.container1, styles.container1Border]} />
            <View style={styles.text}>
              <Text style={[styles.plants, styles.plantsTypo]}>Plants</Text>
              <Text style={[styles.tress, styles.labelTypo]}>Sites</Text>
            </View>
          </View>
          <View style={styles.line} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sitesPosition: {
    width: 328,
    marginLeft: -164,
    left: "50%",
    position: "absolute",
  },
  container1Border: {
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    zIndex: 0,
  },
  search1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
  plantsTypo: {
    fontFamily: FontFamily.xSmallParagraphRegular,
    lineHeight: 20,
    fontSize: FontSize.smallParagraphMedium_size,
    color: Color.neutralGray05,
  },
  labelTypo: {
    lineHeight: 20,
    fontWeight: "500",
    textAlign: "center",
  },
  containerLayout: {
    height: 72,
    width: 70,
    borderRadius: Border.br_9xs,
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
    borderWidth: 1,
    height: 48,
    zIndex: 0,
    borderRadius: Border.br_81xl,
    width: 328,
    backgroundColor: Color.shadesWhite01,
  },
  searchIcon: {
    width: 24,
    height: 24,
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
    top: 12,
    left: 16,
    zIndex: 1,
    gap: Gap.gap_2xs,
  },
  search: {
    top: 152,
    gap: Gap.gap_2xs,
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
    bottom: 3,
    flexDirection: "row",
  },
  chooseSite: {
    textAlign: "left",
    color: Color.shadesBlack02,
    fontFamily: FontFamily.paragraphMedium,
    fontWeight: "500",
    lineHeight: 28,
    letterSpacing: -0.4,
    fontSize: FontSize.heading6Medium_size,
  },
  getPersonalizedSiteBased: {
    textAlign: "left",
  },
  livingRoom1: {
    color: Color.shadesBlack02,
    fontFamily: FontFamily.paragraphMedium,
    fontSize: FontSize.xSmallParagraphRegular_size,
    lineHeight: 20,
  },
  livingFlexBox: {
    gap: Gap.gap_3xs,
    alignItems: "center",
  },
  container: {
    backgroundColor: Color.colorMediumseagreen_100,
    zIndex: 0,
  },
  customSite: {
    color: Color.shadesBlack02,
    fontFamily: FontFamily.paragraphMedium,
    fontSize: FontSize.xSmallParagraphRegular_size,
    lineHeight: 20,
    zIndex: 1,
  },
  locationOnIcon: {
    top: 14,
    left: 13,
    width: 44,
    height: 44,
    zIndex: 2,
    position: "absolute",
  },
  sites: {
    top: 228,
    flexWrap: "wrap",
    alignContent: "flex-start",
    gap: 24,
    flexDirection: "row",
  },
  label: {
    fontFamily: FontFamily.m3LabelLarge,
    color: Color.shadesWhite01,
    fontSize: FontSize.smallParagraphMedium_size,
    lineHeight: 20,
    letterSpacing: 0,
  },
  buttons: {
    top: 702,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.colorMediumseagreen_100,
    borderRadius: Border.br_81xl,
    width: 328,
    marginLeft: -164,
    justifyContent: "center",
    left: "50%",
    overflow: "hidden",
  },
  myPlants: {
    fontWeight: "600",
    fontFamily: FontFamily.heading4Semibold,
    textAlign: "left",
    color: Color.shadesBlack02,
    lineHeight: 28,
    letterSpacing: -0.4,
    fontSize: FontSize.heading6Medium_size,
  },
  content: {
    height: "35.82%",
    width: "91.11%",
    top: "2.99%",
    right: "4.44%",
    bottom: "61.19%",
    left: "4.44%",
    gap: Gap.gap_4xl,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  container1: {
    borderBottomWidth: 1,
    height: 50,
    width: 360,
    zIndex: 0,
  },
  plants: {
    textAlign: "center",
  },
  tress: {
    fontSize: FontSize.smallParagraphMedium_size,
    lineHeight: 20,
    fontFamily: FontFamily.paragraphMedium,
    color: Color.primaryColors500,
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
    left: 234,
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
    height: 858,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.shadesWhite01,
  },
});

export default MyPlantsaddedReminder;
