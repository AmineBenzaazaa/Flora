import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import {
  Color,
  Gap,
  FontFamily,
  FontSize,
  Border,
  Padding,
} from "../GlobalStyles";

const CareGuide = () => {
  return (
    <View style={[styles.careGuide, styles.careGuideLayout]}>
      <Image
        style={styles.statusBarLight}
        contentFit="cover"
        source={require("../assets/status-bar-light.png")}
      />
      <View style={[styles.navbar, styles.frameIconPosition]}>
        <View style={styles.container} />
        <View style={styles.container1}>
          <Text style={styles.remember}>Care guide</Text>
          <Image
            style={[styles.notificationsNoneIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/notifications-none.png")}
          />
        </View>
      </View>
      <View style={[styles.search, styles.searchPosition]}>
        <View style={[styles.searchChild, styles.childBorder]} />
        <View style={styles.search1}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/search.png")}
          />
          <Text style={styles.searchPlants}>Search plants</Text>
        </View>
      </View>
      <Text style={[styles.plantCareLesions, styles.plantCareLesionsTypo]}>
        Plant Care Lesions
      </Text>
      <Text style={[styles.generalKnowledge, styles.plantCareLesionsTypo]}>
        General knowledge
      </Text>
      <View style={styles.blogs}>
        <View style={[styles.plantCareblog01, styles.plantLayout]}>
          <View style={[styles.plantCareblog01Child, styles.plantLayout]} />
          <Text style={styles.houseplantsHowTo}>{`Houseplants: How to turn 
your brown thumb green`}</Text>
          <ImageBackground
            style={[styles.frameIcon, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/frame.png")}
          >
            <View style={[styles.photo, styles.photoLayout]}>
              <Text style={[styles.lessons, styles.lessonsLayout]}>
                6 Lessons
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.plantLayout}>
          <View style={[styles.plantCareblog01Child, styles.plantLayout]} />
          <Text style={styles.houseplantsHowTo}>{`Lawn care: the guide to a
prize-winning yard`}</Text>
          <ImageBackground
            style={[styles.frameIcon1, styles.frameIconPosition]}
            resizeMode="cover"
            source={require("../assets/frame1.png")}
          >
            <Image
              style={[styles.frameChild, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-62.png")}
            />
            <View style={[styles.photo1, styles.photoLayout]}>
              <Text style={[styles.lessons, styles.lessonsLayout]}>
                12 Lessons
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.plantLayout}>
          <View style={[styles.plantCareblog01Child, styles.plantLayout]} />
          <Text style={styles.houseplantsHowTo}>{`Vertical gardening: indoor 
& outdoor vines growing`}</Text>
          <ImageBackground
            style={[styles.frameIcon1, styles.frameIconPosition]}
            resizeMode="cover"
            source={require("../assets/frame1.png")}
          >
            <Image
              style={[styles.frameChild, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-621.png")}
            />
            <View style={[styles.photo1, styles.photoLayout]}>
              <Text style={[styles.lessons, styles.lessonsLayout]}>
                8 Lessons
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.plantLayout}>
          <View style={[styles.plantCareblog01Child, styles.plantLayout]} />
          <Text style={styles.houseplantsHowTo}>{`Trees: Shade your yard in
summer`}</Text>
          <ImageBackground
            style={[styles.frameIcon1, styles.frameIconPosition]}
            resizeMode="cover"
            source={require("../assets/frame1.png")}
          >
            <Image
              style={[styles.frameChild, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-622.png")}
            />
            <View style={[styles.photo1, styles.photoLayout]}>
              <Text style={[styles.lessons, styles.lessonsLayout]}>
                6 Lessons
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
      <View style={[styles.generalBlogs, styles.searchPosition]}>
        <View style={styles.generallessions0104}>
          <View style={[styles.generallessions0104Child, styles.childBorder]} />
          <Image
            style={styles.generallessions0104Item}
            contentFit="cover"
            source={require("../assets/rectangle-71.png")}
          />
          <View style={[styles.content, styles.contentPosition]}>
            <Text
              style={[styles.howToSet, styles.lessonsLayout]}
            >{`How to set up plant in
living room`}</Text>
            <Text style={[styles.lesions, styles.lessonsLayout]}>
              4 Lesions
            </Text>
          </View>
        </View>
        <View style={styles.generallessions0104}>
          <View style={[styles.generallessions0104Child, styles.childBorder]} />
          <Image
            style={styles.generallessions0104Item}
            contentFit="cover"
            source={require("../assets/rectangle-711.png")}
          />
          <View style={[styles.content, styles.contentPosition]}>
            <Text
              style={[styles.howToSet, styles.lessonsLayout]}
            >{`Garden safety: protect 
yourself from toxic plants`}</Text>
            <Text style={[styles.lesions, styles.lessonsLayout]}>
              12 Lesions
            </Text>
          </View>
        </View>
        <View style={styles.generallessions0104}>
          <View style={[styles.generallessions0104Child, styles.childBorder]} />
          <Image
            style={styles.generallessions0104Item}
            contentFit="cover"
            source={require("../assets/rectangle-712.png")}
          />
          <View style={[styles.content, styles.contentPosition]}>
            <Text
              style={[styles.howToSet, styles.lessonsLayout]}
            >{`Floral design 101: basic 
principle to create elegant`}</Text>
            <Text style={[styles.lesions, styles.lessonsLayout]}>
              2 Lesions
            </Text>
          </View>
        </View>
        <View style={styles.generallessions0104}>
          <View style={[styles.generallessions0104Child, styles.childBorder]} />
          <Image
            style={styles.generallessions0104Item}
            contentFit="cover"
            source={require("../assets/rectangle-713.png")}
          />
          <View style={[styles.content, styles.contentPosition]}>
            <Text
              style={[styles.howToSet, styles.lessonsLayout]}
            >{`Penjing 101: history, style, 
and how to make`}</Text>
            <Text style={[styles.lesions, styles.lessonsLayout]}>
              4 Lesions
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.topBar}>
        <View style={styles.topBar1}>
          <View style={styles.nabbar}>
            <View style={[styles.navbar1, styles.navbarLayout]}>
              <Text style={[styles.caption, styles.captionTypo]}>Reminder</Text>
              <Image
                style={[styles.icon, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/icon2.png")}
              />
              <Image
                style={[styles.alarmIcon, styles.contentPosition]}
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
              <View style={[styles.navbarChild, styles.careGuideLayout]} />
              <View style={[styles.scaner, styles.scanerPosition]}>
                <Image
                  style={styles.scanerChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-4.png")}
                />
                <Image
                  style={[styles.scanerItem, styles.contentPosition]}
                  contentFit="cover"
                  source={require("../assets/frame-14.png")}
                />
              </View>
            </View>
            <View style={styles.navbarLayout}>
              <View style={[styles.navbarChild, styles.careGuideLayout]}>
                <Text style={[styles.caption2, styles.captionTypo1]}>
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
              <View style={[styles.navbarChild, styles.careGuideLayout]}>
                <Text style={[styles.caption3, styles.captionTypo1]}>
                  My Plants
                </Text>
                <Image
                  style={[styles.icon, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/actionsettings.png")}
                />
                <Image
                  style={[styles.alarmIcon, styles.contentPosition]}
                  contentFit="cover"
                  source={require("../assets/psychiatry.png")}
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
  careGuideLayout: {
    width: "100%",
    backgroundColor: Color.shadesWhite01,
  },
  frameIconPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  searchPosition: {
    gap: Gap.gap_2xs,
    position: "absolute",
  },
  childBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.shadesWhite01,
  },
  plantCareLesionsTypo: {
    color: Color.shadesBlack02,
    fontFamily: FontFamily.heading4Semibold,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 28,
    letterSpacing: -0.4,
    fontSize: FontSize.heading6Medium_size,
    left: 16,
    position: "absolute",
  },
  plantLayout: {
    height: 243,
    width: 242,
  },
  frameLayout: {
    height: 161,
    borderTopRightRadius: Border.br_xs,
    borderTopLeftRadius: Border.br_xs,
    width: 242,
  },
  photoLayout: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_lgi,
    height: 29,
    width: 82,
    borderRadius: Border.br_9xs,
    left: 10,
    top: 122,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.shadesWhite01,
  },
  lessonsLayout: {
    lineHeight: 20,
    textAlign: "left",
    color: Color.shadesBlack02,
  },
  contentPosition: {
    top: 8,
    position: "absolute",
  },
  navbarLayout: {
    width: 72,
    height: 56,
  },
  captionTypo: {
    color: Color.neutralGray05,
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
  scanerPosition: {
    top: "14.29%",
    position: "absolute",
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
  statusBarLight: {
    marginLeft: -181,
    top: -24,
    width: 362,
    height: 24,
    left: "50%",
    position: "absolute",
  },
  container: {
    backgroundColor: Color.colorMediumseagreen_100,
    width: 360,
    zIndex: 0,
    height: 56,
  },
  remember: {
    color: Color.shadesWhite01,
    textAlign: "center",
    lineHeight: 28,
    letterSpacing: -0.4,
    fontSize: FontSize.heading6Medium_size,
    fontFamily: FontFamily.paragraphMedium,
    fontWeight: "500",
  },
  notificationsNoneIcon: {
    overflow: "hidden",
  },
  container1: {
    top: 14,
    gap: 203,
    zIndex: 1,
    alignItems: "center",
    flexDirection: "row",
    left: 16,
    position: "absolute",
  },
  navbar: {
    gap: Gap.gap_xs,
  },
  searchChild: {
    borderRadius: Border.br_81xl,
    borderColor: Color.colorGainsboro_200,
    height: 48,
    width: 328,
    zIndex: 0,
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
    gap: Gap.gap_2xs,
    zIndex: 1,
    alignItems: "center",
    flexDirection: "row",
    left: 16,
    position: "absolute",
  },
  search: {
    marginLeft: -164,
    top: 80,
    width: 328,
    left: "50%",
  },
  plantCareLesions: {
    top: 168,
  },
  generalKnowledge: {
    top: 481,
  },
  plantCareblog01Child: {
    borderColor: Color.primaryColors500,
    borderRadius: Border.br_xs,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.shadesWhite01,
    left: 0,
    top: 0,
    position: "absolute",
  },
  houseplantsHowTo: {
    top: 173,
    left: 12,
    fontSize: FontSize.paragraph2Medium_size,
    lineHeight: 24,
    color: Color.neutralGray01,
    textAlign: "left",
    fontFamily: FontFamily.heading4Semibold,
    fontWeight: "600",
    position: "absolute",
  },
  lessons: {
    lineHeight: 20,
    fontSize: FontSize.xSmallParagraphRegular_size,
    fontFamily: FontFamily.paragraphMedium,
    fontWeight: "500",
  },
  photo: {
    zIndex: 0,
  },
  frameIcon: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  plantCareblog01: {
    borderRadius: Border.br_xs,
  },
  frameChild: {
    zIndex: 0,
  },
  photo1: {
    zIndex: 1,
  },
  frameIcon1: {
    borderRadius: Border.br_xs,
    gap: Gap.gap_xs,
  },
  blogs: {
    top: 214,
    width: 345,
    gap: 11,
    flexDirection: "row",
    left: 16,
    position: "absolute",
  },
  generallessions0104Child: {
    borderRadius: Border.br_7xs,
    borderColor: Color.colorMediumaquamarine_100,
    height: 81,
    width: 328,
    zIndex: 0,
  },
  generallessions0104Item: {
    top: 1,
    left: 1,
    borderRadius: Border.br_8xs,
    width: 96,
    height: 79,
    zIndex: 1,
    position: "absolute",
  },
  howToSet: {
    fontSize: FontSize.smallParagraphMedium_size,
    fontFamily: FontFamily.heading4Semibold,
    fontWeight: "600",
    lineHeight: 20,
  },
  lesions: {
    fontFamily: FontFamily.xSmallParagraphRegular,
    lineHeight: 20,
    fontSize: FontSize.xSmallParagraphRegular_size,
  },
  content: {
    left: 111,
    gap: Gap.gap_4xs,
    zIndex: 2,
  },
  generallessions0104: {
    gap: Gap.gap_xs,
  },
  generalBlogs: {
    top: 527,
    left: 16,
  },
  caption: {
    left: "11.94%",
  },
  icon: {
    display: "none",
  },
  alarmIcon: {
    left: 24,
    width: 24,
    height: 24,
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
    width: 24,
    height: 24,
    zIndex: 1,
  },
  scaner: {
    height: "71.43%",
    width: "55.56%",
    right: "22.22%",
    bottom: "14.29%",
    left: "22.22%",
    flexDirection: "row",
    gap: Gap.gap_xs,
  },
  caption2: {
    left: "6.39%",
    color: Color.primaryColors500,
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
    color: Color.colorDimgray_100,
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
    bottom: 0,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  careGuide: {
    flex: 1,
    height: 988,
    overflow: "hidden",
  },
});

export default CareGuide;
