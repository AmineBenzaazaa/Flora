import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import {
  Color,
  FontFamily,
  FontSize,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";

const ReminderAddplant = () => {
  return (
    <View style={[styles.reminderAddplant, styles.navbarChildLayout]}>
      <Image style={styles.statusBarLight} contentFit="cover" />
      <Image style={styles.pepperFacePlantInASmallP} contentFit="cover" />
      <View style={styles.addPlant}>
        <Image
          style={styles.plantillustrationIcon}
          contentFit="cover"
          source={require("../assets/plantillustration.png")}
        />
        <View style={styles.addPlantsContainer}>
          <View style={styles.imageheadingbody}>
            <View style={styles.imagetext}>
              <Text style={styles.letsGetStarted}>Let’s get started</Text>
            </View>
            <Text style={styles.getProfessionalPlant}>
              Get professional plant care guidance to keep your plant alive!
            </Text>
          </View>
          <View style={styles.buttons}>
            <Image
              style={styles.iconsadd24px}
              contentFit="cover"
              source={require("../assets/iconsadd-24px.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>Add plants</Text>
          </View>
        </View>
      </View>
      <View style={styles.navbar}>
        <View style={styles.container} />
        <View style={styles.container1}>
          <Text style={[styles.remember, styles.labelTypo]}>Remember</Text>
          <Image
            style={styles.notificationsNoneIcon}
            contentFit="cover"
            source={require("../assets/notifications-none.png")}
          />
        </View>
      </View>
      <View style={styles.topBar}>
        <View style={styles.nabbar}>
          <View style={[styles.navbar1, styles.navbarLayout]}>
            <Text style={[styles.caption, styles.captionTypo]}>Reminder</Text>
            <Image
              style={[styles.icon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/icon1.png")}
            />
            <Image
              style={[styles.alarmIcon, styles.alarmIconPosition]}
              contentFit="cover"
              source={require("../assets/alarm.png")}
            />
          </View>
          <View style={[styles.navbar1, styles.navbarLayout]}>
            <Text style={[styles.caption1, styles.captionTypo]}>Explore</Text>
            <Image
              style={styles.iconPosition}
              contentFit="cover"
              source={require("../assets/actionsearch-24px.png")}
            />
          </View>
          <View style={styles.navbarLayout}>
            <View style={[styles.navbarChild, styles.navbarChildLayout]} />
            <View style={[styles.scaner, styles.scanerPosition]}>
              <Image
                style={styles.scanerChild}
                contentFit="cover"
                source={require("../assets/ellipse-4.png")}
              />
              <Image
                style={[styles.scanerItem, styles.alarmIconPosition]}
                contentFit="cover"
                source={require("../assets/frame-14.png")}
              />
            </View>
          </View>
          <View style={styles.navbarLayout}>
            <View style={[styles.navbarChild, styles.navbarChildLayout]}>
              <Text style={[styles.caption2, styles.captionTypo]}>
                Care Guide
              </Text>
              <Image
                style={[styles.icon, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/socialnotifications-24px.png")}
              />
            </View>
            <Image
              style={[styles.articleIcon, styles.scanerPosition]}
              contentFit="cover"
              source={require("../assets/article.png")}
            />
          </View>
          <View style={styles.navbarLayout}>
            <View style={[styles.navbarChild, styles.navbarChildLayout]}>
              <Text style={[styles.caption3, styles.captionTypo]}>
                My Plants
              </Text>
              <Image
                style={[styles.icon, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/actionsettings.png")}
              />
              <Image
                style={[styles.alarmIcon, styles.alarmIconPosition]}
                contentFit="cover"
                source={require("../assets/psychiatry.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarChildLayout: {
    width: "100%",
    backgroundColor: Color.shadesWhite01,
  },
  labelTypo: {
    color: Color.shadesWhite01,
    fontWeight: "500",
    textAlign: "center",
  },
  navbarLayout: {
    width: 72,
    height: 56,
  },
  captionTypo: {
    fontFamily: FontFamily.caption,
    lineHeight: 16,
    fontSize: FontSize.xSmallParagraphRegular_size,
    top: 32,
    letterSpacing: 0,
    textAlign: "center",
    position: "absolute",
  },
  iconPosition: {
    marginLeft: -12,
    marginTop: -20,
    width: 24,
    top: "50%",
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
  scanerPosition: {
    top: "14.29%",
    position: "absolute",
  },
  statusBarLight: {
    marginLeft: -181,
    top: -24,
    width: 362,
    display: "none",
    height: 24,
    left: "50%",
    position: "absolute",
  },
  pepperFacePlantInASmallP: {
    top: 412,
    left: 360,
    width: 858,
    height: 858,
    position: "absolute",
  },
  plantillustrationIcon: {
    width: 204,
    height: 255,
  },
  letsGetStarted: {
    fontSize: FontSize.heading3Semibold_size,
    letterSpacing: -0.6,
    lineHeight: 36,
    fontWeight: "600",
    fontFamily: FontFamily.heading2Semibold,
    color: Color.shadesBlack02,
    textAlign: "center",
  },
  imagetext: {
    alignItems: "center",
  },
  getProfessionalPlant: {
    fontSize: FontSize.paragraphy2Regular_size,
    lineHeight: 24,
    fontFamily: FontFamily.paragraphy2Regular,
    width: 323,
    color: Color.neutralGray04,
    textAlign: "center",
  },
  imageheadingbody: {
    gap: Gap.gap_sm,
    alignItems: "center",
  },
  iconsadd24px: {
    width: 18,
    height: 18,
  },
  label: {
    fontSize: FontSize.m3LabelLarge_size,
    lineHeight: 20,
    fontFamily: FontFamily.m3LabelLarge,
    letterSpacing: 0,
    color: Color.shadesWhite01,
    fontWeight: "500",
  },
  buttons: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.primaryColors600,
    width: 328,
    justifyContent: "center",
    paddingLeft: 16,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_5xl,
    paddingBottom: Padding.p_3xs,
    gap: Gap.gap_2xs,
    flexDirection: "row",
    alignItems: "center",
  },
  addPlantsContainer: {
    gap: 24,
    alignItems: "center",
  },
  addPlant: {
    marginTop: -233,
    marginLeft: -164,
    gap: 28,
    alignItems: "center",
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  container: {
    backgroundColor: Color.primary500,
    width: 360,
    zIndex: 0,
    height: 56,
  },
  remember: {
    fontSize: FontSize.heading6Medium_size,
    letterSpacing: -0.4,
    lineHeight: 28,
    fontFamily: FontFamily.heading6Medium,
  },
  notificationsNoneIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  container1: {
    top: 14,
    left: 16,
    gap: Gap.gap_4xl,
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  navbar: {
    marginLeft: -180,
    top: 0,
    gap: Gap.gap_xs,
    left: "50%",
    position: "absolute",
  },
  caption: {
    left: "11.94%",
    color: Color.primaryColors600,
  },
  icon: {
    display: "none",
  },
  alarmIcon: {
    left: 24,
  },
  navbar1: {
    backgroundColor: Color.shadesWhite01,
    width: 72,
  },
  caption1: {
    width: "58.33%",
    left: "20.28%",
    color: Color.neutralGray04,
  },
  navbarChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
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
    color: Color.neutralGray04,
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
    color: Color.neutralGray04,
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
  topBar: {
    bottom: 0,
    left: 0,
    flexDirection: "row",
    position: "absolute",
  },
  reminderAddplant: {
    flex: 1,
    height: 776,
    overflow: "hidden",
  },
});

export default ReminderAddplant;
