import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import {
  Color,
  FontFamily,
  Padding,
  Border,
  FontSize,
  Gap,
} from "../GlobalStyles";

const ReminderTaskFertilizer = () => {
  return (
    <View style={[styles.remindertaskFertilizer, styles.navbarChildLayout]}>
      <View style={styles.remindertaskFertilizerChild} />
      <Image style={styles.statusBarLight} contentFit="cover" />
      <Image style={styles.pepperFacePlantInASmallP} contentFit="cover" />
      <Text style={[styles.tasksForYou, styles.wildMintTypo]}>
        Tasks for you
      </Text>
      <Text style={[styles.wateringYourPlants, styles.allTypo]}>
        Watering your plants
      </Text>
      <View style={styles.tabs}>
        <View style={styles.container} />
        <View style={[styles.component1, styles.componentLayout]}>
          <Text style={[styles.all, styles.allLayout]}>All</Text>
        </View>
        <View style={[styles.component3, styles.componentLayout]}>
          <Text style={[styles.all1, styles.all1Typo]}>Fertilizer</Text>
        </View>
        <View style={[styles.component2, styles.componentLayout]}>
          <Text style={[styles.all, styles.allLayout]}>Water</Text>
        </View>
      </View>
      <View style={[styles.tasks, styles.tasksLayout]}>
        <View style={[styles.tasksChild, styles.tasksLayout]} />
        <Image
          style={styles.imageIcon}
          contentFit="cover"
          source={require("../assets/image.png")}
        />
        <View style={styles.content}>
          <View style={styles.text}>
            <Text style={[styles.wildMint, styles.wildMintTypo]}>
              Wild mint
            </Text>
            <View style={[styles.frameParent, styles.container2FlexBox]}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/frame-8.png")}
              />
              <View style={[styles.lbWrapper, styles.lbWrapperFlexBox]}>
                <Text style={styles.lb}>2 lb</Text>
              </View>
            </View>
          </View>
          <View style={[styles.timeSchedule, styles.lbWrapperFlexBox]}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/today.png")}
            />
            <Text style={styles.today}>Today</Text>
          </View>
        </View>
        <View style={styles.taskCompletion}>
          <Image
            style={styles.taskCompletionChild}
            contentFit="cover"
            source={require("../assets/ellipse-3.png")}
          />
          <Image
            style={[styles.fertilizerIcon, styles.container2Position]}
            contentFit="cover"
            source={require("../assets/fertilizer1.png")}
          />
        </View>
        <Image
          style={[styles.fertilizerIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/fertilizer2.png")}
        />
      </View>
      <View style={[styles.navbar, styles.navbarPosition]}>
        <View style={styles.container1} />
        <View style={[styles.container2, styles.container2Position]}>
          <Text style={[styles.remember, styles.all1Typo]}>Remember</Text>
          <Image
            style={[styles.notificationsNoneIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/notifications-none.png")}
          />
        </View>
      </View>
      <View style={[styles.topBar, styles.navbarPosition]}>
        <View style={styles.nabbar}>
          <View style={[styles.navbar1, styles.navbarLayout]}>
            <Text style={styles.caption}>Reminder</Text>
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
  wildMintTypo: {
    textAlign: "center",
    fontFamily: FontFamily.heading2Semibold,
    fontWeight: "600",
  },
  allTypo: {
    fontFamily: FontFamily.heading6Medium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.shadesBlack02,
  },
  componentLayout: {
    padding: Padding.p_3xs,
    width: 100,
    top: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  allLayout: {
    lineHeight: 20,
    fontSize: FontSize.m3LabelLarge_size,
  },
  all1Typo: {
    color: Color.shadesWhite01,
    fontFamily: FontFamily.heading6Medium,
    fontWeight: "500",
    textAlign: "center",
  },
  tasksLayout: {
    height: 102,
    width: 328,
    position: "absolute",
  },
  container2FlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  lbWrapperFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  container2Position: {
    top: 14,
    zIndex: 1,
    position: "absolute",
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  navbarPosition: {
    marginLeft: -180,
    left: "50%",
    position: "absolute",
  },
  navbarLayout: {
    width: 72,
    height: 56,
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
  captionTypo: {
    color: Color.neutralGray04,
    fontFamily: FontFamily.caption,
    lineHeight: 16,
    letterSpacing: 0,
    top: 32,
    fontSize: FontSize.xSmallParagraphRegular_size,
    textAlign: "center",
    position: "absolute",
  },
  scanerPosition: {
    top: "14.29%",
    position: "absolute",
  },
  remindertaskFertilizerChild: {
    top: 290,
    backgroundColor: Color.colorMediumaquamarine_300,
    height: 142,
    width: 360,
    left: 0,
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
  pepperFacePlantInASmallP: {
    top: 412,
    left: 360,
    width: 858,
    height: 858,
    position: "absolute",
  },
  tasksForYou: {
    top: 91,
    fontSize: FontSize.heading3Semibold_size,
    letterSpacing: -0.6,
    lineHeight: 36,
    color: Color.shadesBlack02,
    textAlign: "center",
    fontFamily: FontFamily.heading2Semibold,
    fontWeight: "600",
    left: 16,
    position: "absolute",
  },
  wateringYourPlants: {
    top: 242,
    fontSize: FontSize.heading4Medium_size,
    letterSpacing: -0.5,
    lineHeight: 32,
    left: 16,
    position: "absolute",
  },
  container: {
    backgroundColor: Color.primaryColors30,
    width: 322,
    height: 50,
    zIndex: 0,
    borderRadius: Border.br_81xl,
  },
  all: {
    fontFamily: FontFamily.heading6Medium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.shadesBlack02,
  },
  component1: {
    left: 5,
    zIndex: 1,
  },
  all1: {
    lineHeight: 20,
    fontSize: FontSize.m3LabelLarge_size,
  },
  component3: {
    left: 217,
    backgroundColor: Color.primaryColors600,
    zIndex: 2,
  },
  component2: {
    left: 111,
    zIndex: 3,
  },
  tabs: {
    marginLeft: -161,
    top: 156,
    gap: Gap.gap_2xs,
    left: "50%",
    position: "absolute",
  },
  tasksChild: {
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
    borderColor: Color.primaryColors600,
    borderWidth: 2,
    top: 0,
    left: 0,
    height: 102,
    width: 328,
    backgroundColor: Color.shadesWhite01,
  },
  imageIcon: {
    top: 2,
    left: 2,
    borderTopLeftRadius: Border.br_11xs,
    borderTopRightRadius: Border.br_9xs,
    borderBottomRightRadius: Border.br_9xs,
    borderBottomLeftRadius: Border.br_11xs,
    width: 93,
    height: 98,
    position: "absolute",
  },
  wildMint: {
    fontSize: FontSize.paragraphy2Regular_size,
    lineHeight: 24,
    color: Color.neutralGray02,
    textAlign: "center",
    fontFamily: FontFamily.heading2Semibold,
    fontWeight: "600",
  },
  lb: {
    fontFamily: FontFamily.paragraphy2Regular,
    color: Color.neutralGray05,
    fontSize: FontSize.xSmallParagraphRegular_size,
    lineHeight: 20,
    textAlign: "center",
  },
  lbWrapper: {
    flexDirection: "row",
  },
  frameParent: {
    flexDirection: "row",
  },
  text: {
    gap: Gap.gap_5xs,
  },
  today: {
    color: Color.primaryColors600,
    fontSize: FontSize.xSmallParagraphRegular_size,
    lineHeight: 20,
    fontFamily: FontFamily.heading6Medium,
    fontWeight: "500",
    textAlign: "center",
  },
  timeSchedule: {
    gap: Gap.gap_6xs,
    flexDirection: "row",
  },
  content: {
    top: 11,
    left: 109,
    gap: Gap.gap_5xs,
    position: "absolute",
  },
  taskCompletionChild: {
    width: 52,
    height: 52,
    zIndex: 0,
  },
  fertilizerIcon: {
    left: 14,
    display: "none",
    width: 24,
    height: 24,
  },
  taskCompletion: {
    top: 25,
    left: 256,
    flexDirection: "row",
    gap: Gap.gap_2xs,
    position: "absolute",
  },
  fertilizerIcon1: {
    top: 39,
    left: 270,
    position: "absolute",
  },
  tasks: {
    marginLeft: -164,
    top: 310,
    left: "50%",
  },
  container1: {
    backgroundColor: Color.primary500,
    height: 56,
    zIndex: 0,
    width: 360,
  },
  remember: {
    fontSize: FontSize.heading6Medium_size,
    letterSpacing: -0.4,
    lineHeight: 28,
  },
  notificationsNoneIcon: {
    overflow: "hidden",
  },
  container2: {
    gap: Gap.gap_5xl,
    flexDirection: "row",
    alignItems: "center",
    left: 16,
  },
  navbar: {
    top: 0,
    gap: Gap.gap_2xs,
  },
  caption: {
    left: "11.94%",
    fontFamily: FontFamily.caption,
    lineHeight: 16,
    letterSpacing: 0,
    top: 32,
    color: Color.primaryColors600,
    fontSize: FontSize.xSmallParagraphRegular_size,
    textAlign: "center",
    position: "absolute",
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
    flexDirection: "row",
    gap: Gap.gap_2xs,
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
    bottom: 2,
    flexDirection: "row",
  },
  remindertaskFertilizer: {
    flex: 1,
    height: 778,
    overflow: "hidden",
  },
});

export default ReminderTaskFertilizer;