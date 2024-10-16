import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import {
  Color,
  Padding,
  FontFamily,
  Gap,
  Border,
  FontSize,
} from "../GlobalStyles";

const ReminderChanfeSchedule1 = () => {
  return (
    <View style={[styles.reminderchanfeSchedule, styles.navbarChildLayout]}>
      <Image style={styles.statusBarLight} contentFit="cover" />
      <View style={[styles.navbar, styles.navbarPosition]}>
        <View style={styles.navbarcomplex}>
          <View style={styles.navbar1} />
          <View style={[styles.content, styles.contentFlexBox]}>
            <Text style={styles.explore}>Explore</Text>
            <View
              style={[
                styles.notificationsNoneWrapper,
                styles.inputChipsFlexBox,
              ]}
            >
              <Image
                style={[styles.notificationsNoneIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/notifications-none1.png")}
              />
            </View>
          </View>
          <View style={[styles.mainBox, styles.navbarPosition]}>
            <View style={styles.navbarcomplex}>
              <View style={styles.container} />
              <View style={styles.text}>
                <Text style={[styles.plants, styles.plantsTypo]}>Plants</Text>
                <Text style={styles.tress}>Tress</Text>
              </View>
            </View>
          </View>
          <View style={styles.line} />
        </View>
      </View>
      <View style={[styles.search, styles.searchPosition]}>
        <View style={[styles.searchChild, styles.inputChipsBorder]} />
        <View style={[styles.search1, styles.searchPosition]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/search.png")}
          />
          <Text style={styles.searchPlants}>Mild mint|</Text>
        </View>
      </View>
      <View
        style={[
          styles.notificationactiveStateWate,
          styles.notificationactivePosition,
        ]}
      >
        <View style={styles.notificationactiveStateWateChild} />
        <View style={styles.content1}>
          <ImageBackground
            style={[styles.waterIcon, styles.imageIconLayout]}
            resizeMode="cover"
            source={require("../assets/water1.png")}
          >
            <View style={styles.water}>
              <View style={[styles.image, styles.imageIconLayout]} />
            </View>
          </ImageBackground>
          <View style={styles.contentFlexBox}>
            <View style={styles.contentFlexBox}>
              <View style={styles.text1}>
                <Text style={[styles.mildMint, styles.plantsTypo]}>
                  Mild mint
                </Text>
                <View style={styles.search1FlexBox}>
                  <Text style={styles.menthaArvensis}>Mentha arvensis</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.inputChips, styles.inputChipsBorder]}>
          <Image
            style={styles.addIcon}
            contentFit="cover"
            source={require("../assets/add.png")}
          />
          <Image
            style={styles.addIcon}
            contentFit="cover"
            source={require("../assets/potted-plant.png")}
          />
        </View>
      </View>
      <View
        style={[
          styles.notificationactiveStateWate1,
          styles.notificationactivePosition,
        ]}
      >
        <View style={styles.notificationactiveStateWateChild} />
        <View style={styles.content1}>
          <ImageBackground
            style={[styles.waterIcon, styles.imageIconLayout]}
            resizeMode="cover"
            source={require("../assets/water2.png")}
          >
            <View style={styles.water}>
              <Image
                style={styles.imageIconLayout}
                contentFit="cover"
                source={require("../assets/image2.png")}
              />
            </View>
          </ImageBackground>
          <View style={styles.contentFlexBox}>
            <View style={styles.contentFlexBox}>
              <View style={styles.text1}>
                <Text style={[styles.mildMint, styles.plantsTypo]}>
                  Spearmint
                </Text>
                <View style={styles.search1FlexBox}>
                  <Text style={styles.menthaArvensis}>Mentha spicata</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.inputChips, styles.inputChipsBorder]}>
          <Image
            style={styles.addIcon}
            contentFit="cover"
            source={require("../assets/add.png")}
          />
          <Image
            style={styles.addIcon}
            contentFit="cover"
            source={require("../assets/potted-plant.png")}
          />
        </View>
      </View>
      <View style={styles.topBar}>
        <View style={styles.topBar1}>
          <View style={styles.nabbar}>
            <View style={[styles.navbar2, styles.navbarLayout]}>
              <Text style={[styles.caption, styles.captionTypo1]}>
                Reminder
              </Text>
              <Image
                style={[styles.icon, styles.iconPosition]}
                contentFit="cover"
              />
              <Image
                style={[styles.alarmIcon, styles.alarmIconPosition]}
                contentFit="cover"
                source={require("../assets/alarm1.png")}
              />
            </View>
            <View style={[styles.navbar2, styles.navbarLayout]}>
              <Text style={[styles.caption1, styles.captionTypo1]}>
                Explore
              </Text>
              <Image
                style={styles.iconPosition}
                contentFit="cover"
                source={require("../assets/actionsearch-24px1.png")}
              />
            </View>
            <View style={styles.navbarLayout}>
              <View style={[styles.navbarChild, styles.navbarChildLayout]} />
              <View style={[styles.scaner, styles.scanerPosition]}>
                <Image style={styles.scanerChild} contentFit="cover" />
                <Image
                  style={[styles.scanerItem, styles.alarmIconPosition]}
                  contentFit="cover"
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
                />
              </View>
              <Image
                style={[styles.articleIcon, styles.scanerPosition]}
                contentFit="cover"
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
                  source={require("../assets/actionsettings1.png")}
                />
                <Image
                  style={[styles.alarmIcon, styles.alarmIconPosition]}
                  contentFit="cover"
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
  navbarChildLayout: {
    width: "100%",
    backgroundColor: Color.shadesWhite01,
  },
  navbarPosition: {
    left: 0,
    position: "absolute",
  },
  contentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  inputChipsFlexBox: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  plantsTypo: {
    textAlign: "center",
    fontFamily: FontFamily.heading6Medium,
    fontWeight: "500",
  },
  searchPosition: {
    gap: Gap.gap_3xs,
    position: "absolute",
  },
  inputChipsBorder: {
    borderWidth: 1,
    borderRadius: Border.br_81xl,
    borderStyle: "solid",
  },
  notificationactivePosition: {
    marginLeft: -164,
    left: "50%",
  },
  imageIconLayout: {
    width: 52,
    borderRadius: Border.br_9xs,
    height: 50,
  },
  navbarLayout: {
    height: 56,
    width: 72,
  },
  captionTypo1: {
    top: 32,
    fontFamily: FontFamily.caption,
    lineHeight: 16,
    letterSpacing: 0,
    fontSize: FontSize.xSmallParagraphRegular_size,
    textAlign: "center",
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
  scanerPosition: {
    top: "14.29%",
    position: "absolute",
  },
  captionTypo: {
    color: Color.neutralGray04,
    top: 32,
    fontFamily: FontFamily.caption,
    lineHeight: 16,
    letterSpacing: 0,
    fontSize: FontSize.xSmallParagraphRegular_size,
    textAlign: "center",
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
  navbar1: {
    height: 134,
    zIndex: 0,
    width: 360,
    backgroundColor: Color.shadesWhite01,
  },
  explore: {
    fontSize: FontSize.heading6Medium_size,
    letterSpacing: -0.4,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.heading2Semibold,
    textAlign: "left",
    color: Color.shadesBlack02,
  },
  notificationsNoneIcon: {
    overflow: "hidden",
  },
  notificationsNoneWrapper: {
    width: 48,
    height: 48,
    padding: Padding.p_3xs,
  },
  content: {
    top: 4,
    gap: Gap.gap_6xl,
    zIndex: 1,
    left: 16,
    position: "absolute",
  },
  container: {
    borderBottomWidth: 1,
    height: 50,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    zIndex: 0,
    width: 360,
  },
  plants: {
    color: Color.primaryColors600,
    lineHeight: 20,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "center",
    fontFamily: FontFamily.heading6Medium,
    fontWeight: "500",
  },
  tress: {
    color: Color.neutralGray05,
    fontFamily: FontFamily.paragraphy2Regular,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.m3LabelLarge_size,
  },
  text: {
    top: 21,
    left: 81,
    gap: Gap.gap_2xl,
    zIndex: 1,
    flexDirection: "row",
    position: "absolute",
  },
  navbarcomplex: {
    gap: Gap.gap_2xs,
  },
  mainBox: {
    top: 66,
    zIndex: 2,
  },
  line: {
    top: 115,
    left: 73,
    backgroundColor: Color.primaryColors600,
    width: 57,
    height: 1,
    zIndex: 3,
    position: "absolute",
  },
  navbar: {
    top: 0,
  },
  searchChild: {
    width: 328,
    borderColor: Color.colorGainsboro,
    borderRadius: Border.br_81xl,
    height: 48,
    zIndex: 0,
    backgroundColor: Color.shadesWhite01,
  },
  searchPlants: {
    color: Color.neutralGray06,
    fontFamily: FontFamily.caption,
    lineHeight: 16,
    letterSpacing: 0,
    fontSize: FontSize.xSmallParagraphRegular_size,
    textAlign: "center",
  },
  search1: {
    top: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    zIndex: 1,
    left: 16,
  },
  search: {
    top: 152,
    width: 328,
    marginLeft: -164,
    left: "50%",
  },
  notificationactiveStateWateChild: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorMediumaquamarine_400,
    height: 78,
    width: 328,
    zIndex: 0,
  },
  image: {
    backgroundColor: Color.neutralGray02,
  },
  water: {
    borderTopLeftRadius: Border.br_9xs,
    display: "none",
    flexDirection: "row",
  },
  waterIcon: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  mildMint: {
    fontSize: FontSize.paragraphy2Regular_size,
    lineHeight: 24,
    color: Color.shadesBlack02,
  },
  menthaArvensis: {
    fontSize: FontSize.xSmallParagraphRegular_size,
    color: Color.neutralGray05,
    fontFamily: FontFamily.paragraphy2Regular,
    textAlign: "center",
    lineHeight: 20,
  },
  search1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text1: {
    gap: Gap.gap_6xs,
  },
  content1: {
    top: 14,
    left: 14,
    gap: Gap.gap_xs,
    zIndex: 1,
    flexDirection: "row",
    position: "absolute",
  },
  addIcon: {
    width: 18,
    height: 18,
  },
  inputChips: {
    top: 23,
    left: 250,
    borderColor: Color.primaryColors600,
    height: 32,
    gap: Gap.gap_3xs,
    position: "absolute",
    zIndex: 2,
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  notificationactiveStateWate: {
    top: 236,
    gap: Gap.gap_2xs,
    position: "absolute",
  },
  notificationactiveStateWate1: {
    top: 322,
    gap: Gap.gap_2xs,
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
  navbar2: {
    backgroundColor: Color.shadesWhite01,
    height: 56,
    width: 72,
  },
  caption1: {
    width: "58.33%",
    left: "20.28%",
    color: Color.primaryColors600,
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
  topBar1: {
    flexDirection: "row",
  },
  topBar: {
    marginLeft: -180,
    bottom: 13,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  reminderchanfeSchedule: {
    flex: 1,
    height: 789,
    overflow: "hidden",
  },
});

export default ReminderChanfeSchedule1;
