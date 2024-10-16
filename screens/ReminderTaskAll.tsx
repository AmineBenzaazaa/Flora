import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import {
  Color,
  FontFamily,
  Border,
  FontSize,
  Padding,
  Gap,
} from "../GlobalStyles";

const ReminderTaskAll = () => {
  return (
    <View style={[styles.remindertaskAll, styles.navbarChildLayout]}>
      <View
        style={[styles.remindertaskAllChild, styles.remindertaskPosition]}
      />
      <View style={[styles.remindertaskAllItem, styles.remindertaskPosition]} />
      <Image style={styles.statusBarLight} contentFit="cover" />
      <Image style={styles.pepperFacePlantInASmallP} contentFit="cover" />
      <Text style={[styles.tasksForYou, styles.fertilizerClr]}>
        Tasks for you
      </Text>
      <Text style={[styles.today, styles.todayTypo]}>{`Today `}</Text>
      <Text style={[styles.upcoming, styles.todayTypo]}>Upcoming</Text>
      <View style={[styles.tasks, styles.tasksPosition]}>
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
            <View style={styles.container2FlexBox}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/water-droplets.png")}
              />
              <View style={styles.mlWrapperFlexBox}>
                <Text style={[styles.ml, styles.mlTypo]}>200 ml</Text>
              </View>
            </View>
          </View>
          <View style={[styles.timeSchedule, styles.mlWrapperFlexBox]}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/today.png")}
            />
            <Text style={styles.today1}>Today</Text>
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
          style={[styles.droplets01Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/droplets01.png")}
        />
      </View>
      <View style={[styles.tasks1, styles.tasksPosition]}>
        <View style={styles.tasksItem} />
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
            <View style={styles.container2FlexBox}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/water-droplets.png")}
              />
              <View style={styles.mlWrapperFlexBox}>
                <Text style={[styles.ml, styles.mlTypo]}>200 ml</Text>
              </View>
            </View>
          </View>
          <View style={[styles.timeSchedule, styles.mlWrapperFlexBox]}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/today.png")}
            />
            <Text style={styles.today1}>Today</Text>
          </View>
        </View>
        <Image
          style={styles.checkCircleIcon}
          contentFit="cover"
          source={require("../assets/checkcircle.png")}
        />
      </View>
      <View style={[styles.tasks2, styles.tasksPosition]}>
        <View style={[styles.tasksInner, styles.tasksLayout]} />
        <Image
          style={styles.imageIcon}
          contentFit="cover"
          source={require("../assets/image1.png")}
        />
        <View style={styles.content}>
          <View style={styles.text}>
            <Text style={[styles.wildMint, styles.wildMintTypo]}>
              Aloe vera
            </Text>
            <View style={styles.container2FlexBox}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/water-droplets.png")}
              />
              <View style={styles.mlWrapperFlexBox}>
                <Text style={[styles.ml, styles.mlTypo]}>200 ml</Text>
              </View>
            </View>
          </View>
          <View style={[styles.timeSchedule, styles.mlWrapperFlexBox]}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/event-upcoming.png")}
            />
            <Text style={[styles.in6Days, styles.mlTypo]}>In 6 days</Text>
          </View>
        </View>
        <View style={styles.taskCompletion}>
          <Image
            style={styles.taskCompletionChild}
            contentFit="cover"
            source={require("../assets/ellipse-31.png")}
          />
          <Image
            style={[styles.fertilizerIcon, styles.container2Position]}
            contentFit="cover"
            source={require("../assets/fertilizer1.png")}
          />
        </View>
        <Image
          style={[styles.droplets01Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/droplets01.png")}
        />
      </View>
      <View style={styles.tabs}>
        <View style={styles.container} />
        <View style={[styles.component1, styles.componentLayout]}>
          <Text style={[styles.all, styles.allTypo]}>All</Text>
        </View>
        <View style={[styles.component3, styles.componentLayout]}>
          <Text style={[styles.fertilizer, styles.allTypo1]}>Fertilizer</Text>
        </View>
        <View style={[styles.component2, styles.componentLayout]}>
          <Text style={[styles.fertilizer, styles.allTypo1]}>Water</Text>
        </View>
      </View>
      <View style={[styles.navbar, styles.navbarPosition]}>
        <View style={styles.container1} />
        <View style={[styles.container2, styles.container2Position]}>
          <Text style={[styles.remember, styles.allTypo]}>Remember</Text>
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
  remindertaskPosition: {
    width: 360,
    backgroundColor: Color.colorMediumaquamarine_300,
    left: 0,
    position: "absolute",
  },
  fertilizerClr: {
    color: Color.shadesBlack02,
    textAlign: "center",
  },
  todayTypo: {
    fontFamily: FontFamily.heading6Medium,
    fontWeight: "500",
  },
  tasksPosition: {
    height: 102,
    width: 328,
    marginLeft: -164,
    left: "50%",
    position: "absolute",
  },
  tasksLayout: {
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    top: 0,
    height: 102,
    width: 328,
    left: 0,
    position: "absolute",
    backgroundColor: Color.shadesWhite01,
  },
  wildMintTypo: {
    fontFamily: FontFamily.heading2Semibold,
    fontWeight: "600",
  },
  mlTypo: {
    lineHeight: 20,
    fontSize: FontSize.xSmallParagraphRegular_size,
    textAlign: "center",
  },
  mlWrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
  componentLayout: {
    padding: Padding.p_3xs,
    width: 100,
    top: 5,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  allTypo: {
    color: Color.shadesWhite01,
    fontFamily: FontFamily.heading6Medium,
    fontWeight: "500",
    textAlign: "center",
  },
  allTypo1: {
    fontSize: FontSize.m3LabelLarge_size,
    lineHeight: 20,
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
    marginLeft: -12,
    marginTop: -20,
    top: "50%",
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
  remindertaskAllChild: {
    top: 290,
    height: 252,
  },
  remindertaskAllItem: {
    top: 614,
    height: 142,
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
    textAlign: "center",
    fontFamily: FontFamily.heading2Semibold,
    fontWeight: "600",
    left: 16,
    position: "absolute",
  },
  today: {
    top: 242,
    lineHeight: 32,
    letterSpacing: -0.5,
    fontSize: FontSize.heading4Medium_size,
    fontWeight: "500",
    textAlign: "center",
    color: Color.shadesBlack02,
    left: 16,
    position: "absolute",
  },
  upcoming: {
    top: 566,
    lineHeight: 32,
    letterSpacing: -0.5,
    fontSize: FontSize.heading4Medium_size,
    fontWeight: "500",
    textAlign: "center",
    color: Color.shadesBlack02,
    left: 16,
    position: "absolute",
  },
  tasksChild: {
    borderColor: Color.primaryColors600,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
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
  },
  ml: {
    fontFamily: FontFamily.paragraphy2Regular,
    color: Color.neutralGray05,
  },
  container2FlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    gap: Gap.gap_4xs,
  },
  today1: {
    color: Color.primaryColors600,
    lineHeight: 20,
    fontSize: FontSize.xSmallParagraphRegular_size,
    fontFamily: FontFamily.heading6Medium,
    fontWeight: "500",
    textAlign: "center",
  },
  timeSchedule: {
    gap: Gap.gap_5xs,
  },
  content: {
    top: 11,
    left: 109,
    gap: Gap.gap_4xs,
    position: "absolute",
  },
  taskCompletionChild: {
    zIndex: 0,
    height: 52,
    width: 52,
  },
  fertilizerIcon: {
    left: 14,
    zIndex: 1,
    display: "none",
    width: 24,
    height: 24,
  },
  taskCompletion: {
    top: 25,
    left: 256,
    gap: Gap.gap_xs,
    flexDirection: "row",
    position: "absolute",
  },
  droplets01Icon: {
    top: 39,
    left: 270,
    position: "absolute",
    overflow: "hidden",
  },
  tasks: {
    top: 310,
  },
  tasksItem: {
    backgroundColor: Color.primaryColors30,
    borderWidth: 2,
    borderColor: Color.primaryColors600,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    top: 0,
    height: 102,
    width: 328,
    left: 0,
    position: "absolute",
  },
  checkCircleIcon: {
    marginTop: -26,
    marginLeft: 93,
    top: "50%",
    height: 52,
    width: 52,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  tasks1: {
    top: 420,
  },
  tasksInner: {
    borderColor: Color.colorGainsboro,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
  },
  in6Days: {
    color: Color.neutralGray06,
    fontFamily: FontFamily.heading6Medium,
    fontWeight: "500",
  },
  tasks2: {
    top: 634,
  },
  container: {
    width: 322,
    height: 50,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.primaryColors30,
    zIndex: 0,
  },
  all: {
    fontSize: FontSize.m3LabelLarge_size,
    lineHeight: 20,
  },
  component1: {
    left: 5,
    backgroundColor: Color.primaryColors600,
    padding: Padding.p_3xs,
    width: 100,
    top: 5,
    zIndex: 1,
  },
  fertilizer: {
    fontFamily: FontFamily.heading6Medium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.shadesBlack02,
  },
  component3: {
    left: 217,
    zIndex: 2,
    padding: Padding.p_3xs,
    width: 100,
    top: 5,
  },
  component2: {
    left: 111,
    zIndex: 3,
    padding: Padding.p_3xs,
    width: 100,
    top: 5,
  },
  tabs: {
    marginLeft: -161,
    top: 156,
    gap: Gap.gap_xs,
    left: "50%",
    position: "absolute",
  },
  container1: {
    height: 56,
    backgroundColor: Color.primaryColors600,
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
    gap: Gap.gap_4xl,
    zIndex: 1,
    alignItems: "center",
    flexDirection: "row",
    left: 16,
  },
  navbar: {
    gap: Gap.gap_xs,
    top: 0,
    marginLeft: -180,
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
    flexDirection: "row",
  },
  remindertaskAll: {
    flex: 1,
    height: 856,
    overflow: "hidden",
  },
});

export default ReminderTaskAll;
