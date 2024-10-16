import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Gap, Border } from "../GlobalStyles";

const MyPlantsaddedReminder2 = () => {
  return (
    <View style={styles.myPlantsaddedReminder}>
      <View style={[styles.myPlantsaddedReminderChild, styles.barPosition]} />
      <Image style={styles.statusBarLight} contentFit="cover" />
      <View style={[styles.topBar, styles.barPosition]}>
        <View style={styles.topBar1}>
          <View style={styles.nabbar}>
            <View style={[styles.navbar, styles.navbarLayout]}>
              <Text style={[styles.caption, styles.captionTypo]}>Reminder</Text>
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
              />
              <Image
                style={[styles.alarmIcon, styles.iconLayout]}
                contentFit="cover"
              />
            </View>
            <View style={[styles.navbar, styles.navbarLayout]}>
              <Text style={[styles.caption1, styles.captionTypo]}>Explore</Text>
              <Image
                style={[styles.actionsearch24pxIcon, styles.iconLayout]}
                contentFit="cover"
              />
            </View>
            <View style={styles.navbarLayout}>
              <View style={[styles.navbarChild, styles.mainBoxPosition]} />
              <View style={[styles.scaner, styles.scanerPosition]}>
                <Image style={styles.scanerChild} contentFit="cover" />
                <Image
                  style={[styles.scanerItem, styles.textPosition]}
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
                  style={[styles.icon, styles.iconLayout]}
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
                  style={[styles.icon, styles.iconLayout]}
                  contentFit="cover"
                />
                <Image
                  style={[styles.alarmIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/psychiatry1.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.navigationBar, styles.barPosition]}>
        <View style={[styles.navbarChild, styles.mainBoxPosition]} />
        <View style={[styles.content, styles.contentFlexBox]}>
          <Text style={[styles.myPlants, styles.myPlantsTypo]}>My Plants</Text>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/settings.png")}
          />
        </View>
        <View style={[styles.mainBox, styles.mainBoxPosition]}>
          <View style={styles.containerbox}>
            <View style={styles.container} />
            <View style={[styles.text, styles.textPosition]}>
              <Text style={[styles.plants, styles.plantsTypo]}>Plants</Text>
              <Text style={styles.tress}>Sites</Text>
            </View>
          </View>
          <View style={[styles.line, styles.textPosition]} />
        </View>
      </View>
      <View style={[styles.site, styles.sitePosition]}>
        <View style={styles.siteChild} />
        <Image
          style={[styles.moreVertIcon, styles.textPosition]}
          contentFit="cover"
          source={require("../assets/more-vert1.png")}
        />
        <View style={styles.content1}>
          <View>
            <View style={styles.objectName}>
              <Text style={[styles.livingRoom, styles.myPlantsTypo]}>
                Living room
              </Text>
              <Text style={[styles.plants1, styles.plantsTypo]}>0 plants</Text>
            </View>
          </View>
          <View>
            <View style={[styles.siteSelection, styles.contentFlexBox]}>
              <Image
                style={styles.indirectSunlightIcon}
                contentFit="cover"
                source={require("../assets/indirect-sunlight.png")}
              />
              <Text style={[styles.plants1, styles.plantsTypo]}>
                Indirect sunlight
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.images}>
          <View style={[styles.imagesChild, styles.imagesChildPosition]} />
          <View style={[styles.imagesItem, styles.imagesLayout]} />
          <View style={[styles.imagesInner, styles.imagesLayout]} />
        </View>
      </View>
      <View style={[styles.site1, styles.sitePosition]}>
        <View style={styles.siteChild} />
        <Image
          style={[styles.moreVertIcon, styles.textPosition]}
          contentFit="cover"
          source={require("../assets/more-vert2.png")}
        />
        <View style={styles.content1}>
          <View>
            <View style={styles.objectName}>
              <Text style={[styles.livingRoom, styles.myPlantsTypo]}>
                Home plants
              </Text>
              <Text style={[styles.plants1, styles.plantsTypo]}>1 plants</Text>
            </View>
          </View>
          <View>
            <View style={[styles.siteSelection, styles.contentFlexBox]}>
              <Image
                style={styles.indirectSunlightIcon}
                contentFit="cover"
                source={require("../assets/cloud.png")}
              />
              <Text style={[styles.plants1, styles.plantsTypo]}>
                Full shade
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.images}>
          <Image
            style={[styles.rectangleIcon, styles.imagesChildPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-741.png")}
          />
          <View style={[styles.imagesItem, styles.imagesLayout]} />
          <View style={[styles.imagesInner, styles.imagesLayout]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barPosition: {
    left: "50%",
    marginLeft: -180,
    position: "absolute",
  },
  navbarLayout: {
    height: 56,
    width: 72,
  },
  captionTypo: {
    textAlign: "center",
    color: Color.neutralGray05,
    fontFamily: FontFamily.caption,
    lineHeight: 16,
    letterSpacing: 0,
    top: 32,
    fontSize: FontSize.xSmallParagraphRegular_size,
    position: "absolute",
  },
  iconLayout: {
    width: 24,
    height: 24,
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
  textPosition: {
    zIndex: 1,
    position: "absolute",
  },
  contentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  myPlantsTypo: {
    color: Color.shadesBlack02,
    fontFamily: FontFamily.heading4Semibold,
    fontWeight: "600",
    textAlign: "left",
  },
  plantsTypo: {
    fontFamily: FontFamily.xSmallParagraphRegular,
    lineHeight: 20,
    color: Color.neutralGray05,
  },
  sitePosition: {
    marginLeft: -164,
    gap: Gap.gap_xs,
    left: "50%",
    position: "absolute",
  },
  imagesChildPosition: {
    width: 74,
    borderBottomLeftRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    left: 0,
    top: 0,
    height: 103,
    position: "absolute",
  },
  imagesLayout: {
    height: 51,
    width: 44,
    left: 75,
    backgroundColor: Color.primaryColors30,
    position: "absolute",
  },
  myPlantsaddedReminderChild: {
    top: 159,
    backgroundColor: Color.colorMediumaquamarine_400,
    height: 290,
    width: 360,
  },
  statusBarLight: {
    marginLeft: -181,
    top: -19,
    width: 362,
    height: 24,
    left: "50%",
    position: "absolute",
  },
  caption: {
    left: "11.94%",
  },
  icon: {
    display: "none",
    top: "50%",
    marginLeft: -12,
    marginTop: -20,
    width: 24,
    left: "50%",
    position: "absolute",
  },
  alarmIcon: {
    left: 24,
    top: 8,
    position: "absolute",
  },
  navbar: {
    backgroundColor: Color.shadesWhite01,
  },
  caption1: {
    width: "58.33%",
    left: "20.28%",
  },
  actionsearch24pxIcon: {
    top: "50%",
    marginLeft: -12,
    marginTop: -20,
    width: 24,
    left: "50%",
    position: "absolute",
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
    top: 8,
    width: 24,
    height: 24,
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
    textAlign: "center",
    fontFamily: FontFamily.caption,
    lineHeight: 16,
    letterSpacing: 0,
    fontSize: FontSize.xSmallParagraphRegular_size,
    top: 32,
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
    bottom: 0,
    flexDirection: "row",
  },
  myPlants: {
    fontSize: FontSize.heading6Medium_size,
    letterSpacing: -0.4,
    lineHeight: 28,
    textAlign: "left",
  },
  content: {
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
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderBottomWidth: 1,
    height: 50,
    zIndex: 0,
    width: 360,
  },
  plants: {
    fontSize: FontSize.smallParagraphMedium_size,
    fontFamily: FontFamily.xSmallParagraphRegular,
    textAlign: "center",
  },
  tress: {
    fontWeight: "500",
    fontFamily: FontFamily.paragraphMedium,
    lineHeight: 20,
    fontSize: FontSize.smallParagraphMedium_size,
    color: Color.primaryColors500,
    textAlign: "center",
  },
  text: {
    top: 21,
    left: 81,
    gap: Gap.gap_3xl,
    flexDirection: "row",
  },
  containerbox: {
    zIndex: 0,
    gap: Gap.gap_xs,
  },
  line: {
    top: 49,
    left: 234,
    backgroundColor: Color.primaryColors500,
    width: 57,
    height: 1,
  },
  mainBox: {
    height: "37.31%",
    top: "49.25%",
    bottom: "13.43%",
    gap: Gap.gap_xs,
  },
  navigationBar: {
    top: 5,
    height: 134,
    width: 360,
  },
  siteChild: {
    borderRadius: Border.br_5xs,
    width: 328,
    height: 119,
    zIndex: 0,
    backgroundColor: Color.shadesWhite01,
  },
  moreVertIcon: {
    left: 300,
    height: 18,
    width: 20,
    top: 8,
  },
  livingRoom: {
    fontSize: FontSize.paragraph2Medium_size,
    lineHeight: 24,
    textAlign: "left",
  },
  plants1: {
    textAlign: "left",
    fontFamily: FontFamily.xSmallParagraphRegular,
    fontSize: FontSize.xSmallParagraphRegular_size,
  },
  objectName: {
    gap: Gap.gap_5xs,
  },
  indirectSunlightIcon: {
    height: 20,
    width: 20,
  },
  siteSelection: {
    gap: Gap.gap_4xs,
  },
  content1: {
    top: 18,
    left: 139,
    gap: Gap.gap_lg,
    zIndex: 2,
    position: "absolute",
  },
  imagesChild: {
    backgroundColor: Color.primaryColors30,
    width: 74,
    borderBottomLeftRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    left: 0,
  },
  imagesItem: {
    top: 52,
    borderBottomRightRadius: Border.br_9xs,
  },
  imagesInner: {
    borderTopRightRadius: Border.br_5xs,
    top: 0,
    height: 51,
    width: 44,
    left: 75,
  },
  images: {
    width: 119,
    zIndex: 3,
    height: 103,
    left: 8,
    top: 8,
    position: "absolute",
  },
  site: {
    top: 179,
  },
  rectangleIcon: {
    width: 74,
    borderBottomLeftRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    left: 0,
  },
  site1: {
    top: 310,
  },
  myPlantsaddedReminder: {
    flex: 1,
    height: 781,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.shadesWhite01,
  },
});

export default MyPlantsaddedReminder2;
