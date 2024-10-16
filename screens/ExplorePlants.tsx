import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import {
  Color,
  FontFamily,
  FontSize,
  Gap,
  Padding,
  Border,
} from "../GlobalStyles";

const ExplorePlants = () => {
  return (
    <View style={[styles.explorePlants, styles.navbarChildLayout]}>
      <Image style={styles.statusBarLight} contentFit="cover" />
      <View style={[styles.navbarcomplex, styles.topBarPosition]}>
        <View style={styles.navbar} />
        <View style={[styles.content, styles.contentFlexBox]}>
          <Text style={[styles.explore, styles.exploreTypo]}>Explore</Text>
          <View
            style={[styles.notificationsNoneWrapper, styles.search1FlexBox]}
          >
            <Image
              style={[styles.notificationsNoneIcon, styles.iconLayout]}
              contentFit="cover"
            />
          </View>
        </View>
        <View style={[styles.mainBox, styles.text1Position]}>
          <View style={styles.containerbox}>
            <View style={[styles.container, styles.containerBorder]} />
            <View style={styles.text}>
              <Text style={[styles.plants, styles.plantsTypo]}>Plants</Text>
              <Text style={styles.tress}>Tress</Text>
            </View>
          </View>
        </View>
        <View style={styles.line} />
      </View>
      <View style={[styles.search, styles.searchPosition]}>
        <View style={[styles.searchChild, styles.containerBorder]} />
        <View style={[styles.search1, styles.searchPosition]}>
          <Image style={styles.iconLayout} contentFit="cover" />
          <Text style={styles.searchPlants}>{`Search `}</Text>
        </View>
      </View>
      <View style={[styles.plants1, styles.contentFlexBox]}>
        <View style={styles.containerplants}>
          <Image
            style={styles.containerIcon}
            contentFit="cover"
            source={require("../assets/container.png")}
          />
          <View style={[styles.text1, styles.text1Position]}>
            <View style={styles.smallContainer} />
            <View style={[styles.content1, styles.contentPosition]}>
              <Text style={[styles.indianMallow, styles.plantsTypo]}>
                Indian mallow
              </Text>
              <Text style={[styles.abutilon, styles.abutilonTypo]}>
                Abutilon
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.containerplants}>
          <Image
            style={styles.containerIcon}
            contentFit="cover"
            source={require("../assets/container1.png")}
          />
          <View style={[styles.text1, styles.text1Position]}>
            <View style={styles.smallContainer} />
            <View style={[styles.content1, styles.contentPosition]}>
              <Text style={[styles.indianMallow, styles.plantsTypo]}>
                Spider plant
              </Text>
              <Text style={[styles.abutilon, styles.abutilonTypo]}>
                Chlorophytum comosum
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.containerplants}>
          <Image
            style={styles.containerIcon}
            contentFit="cover"
            source={require("../assets/container2.png")}
          />
          <View style={[styles.text1, styles.text1Position]}>
            <View style={styles.smallContainer} />
            <View style={[styles.content3, styles.contentPosition]}>
              <Text style={[styles.swissChesePlane, styles.plantsTypo]}>
                Swiss chese plane
              </Text>
              <Text style={[styles.monsteraDeliciosa, styles.abutilonTypo]}>
                Monstera deliciosa
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.containerplants}>
          <Image
            style={styles.containerIcon}
            contentFit="cover"
            source={require("../assets/container3.png")}
          />
          <View style={[styles.text1, styles.text1Position]}>
            <View style={styles.smallContainer} />
            <View style={[styles.content3, styles.contentPosition]}>
              <Text style={[styles.swissChesePlane, styles.plantsTypo]}>
                Plantain lilies
              </Text>
              <Text style={[styles.monsteraDeliciosa, styles.abutilonTypo]}>
                Hosta
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.containerplants}>
          <Image
            style={styles.containerIcon}
            contentFit="cover"
            source={require("../assets/container4.png")}
          />
          <View style={[styles.text1, styles.text1Position]}>
            <View style={styles.smallContainer} />
            <View style={[styles.content3, styles.contentPosition]}>
              <Text style={[styles.swissChesePlane, styles.plantsTypo]}>
                Zanzibar Gem
              </Text>
              <Text style={[styles.monsteraDeliciosa, styles.abutilonTypo]}>
                Zamioculcas
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.containerplants}>
          <Image
            style={styles.containerIcon}
            contentFit="cover"
            source={require("../assets/container5.png")}
          />
          <View style={[styles.text1, styles.text1Position]}>
            <View style={styles.smallContainer} />
            <View style={[styles.content3, styles.contentPosition]}>
              <Text style={[styles.indianMallow, styles.plantsTypo]}>
                Vervain
              </Text>
              <Text style={[styles.abutilon, styles.abutilonTypo]}>
                Verbena
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.containerplants}>
          <Image
            style={styles.containerIcon}
            contentFit="cover"
            source={require("../assets/container6.png")}
          />
          <View style={[styles.text1, styles.text1Position]}>
            <View style={styles.smallContainer} />
            <View style={[styles.content3, styles.contentPosition]}>
              <Text style={[styles.swissChesePlane, styles.plantsTypo]}>
                Sword fern
              </Text>
              <Text style={[styles.nephrolepisExaltata, styles.abutilonTypo]}>
                Nephrolepis exaltata
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.containerplants}>
          <Image
            style={styles.containerIcon}
            contentFit="cover"
            source={require("../assets/container7.png")}
          />
          <View style={[styles.text1, styles.text1Position]}>
            <View style={styles.smallContainer} />
            <View style={[styles.content3, styles.contentPosition]}>
              <Text style={[styles.swissChesePlane, styles.plantsTypo]}>
                Sword fern
              </Text>
              <Text style={[styles.nephrolepisExaltata, styles.abutilonTypo]}>
                Nephrolepis exaltata
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.topBar, styles.topBarPosition]}>
        <View style={styles.topBar1}>
          <View style={styles.nabbar}>
            <View style={[styles.navbar1, styles.navbarLayout]}>
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
              />
            </View>
            <View style={[styles.navbar1, styles.navbarLayout]}>
              <Text style={[styles.caption1, styles.captionTypo1]}>
                Explore
              </Text>
              <Image
                style={styles.iconPosition}
                contentFit="cover"
                source={require("../assets/actionsearch-24px2.png")}
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
  topBarPosition: {
    marginLeft: -180,
    left: "50%",
    position: "absolute",
  },
  contentFlexBox: {
    alignItems: "center",
    left: 16,
    flexDirection: "row",
    position: "absolute",
  },
  exploreTypo: {
    color: Color.shadesBlack02,
    fontFamily: FontFamily.heading2Semibold,
    fontWeight: "600",
  },
  search1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  text1Position: {
    left: 0,
    position: "absolute",
  },
  containerBorder: {
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    zIndex: 0,
  },
  plantsTypo: {
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.m3LabelLarge_size,
  },
  searchPosition: {
    gap: Gap.gap_3xs,
    left: 16,
    position: "absolute",
  },
  contentPosition: {
    gap: Gap.gap_6xs,
    top: 7,
    zIndex: 1,
    position: "absolute",
  },
  abutilonTypo: {
    fontSize: FontSize.xSmallParagraphRegular_size,
    fontFamily: FontFamily.paragraphy2Regular,
    textAlign: "center",
    lineHeight: 20,
  },
  navbarLayout: {
    width: 72,
    height: 56,
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
  navbar: {
    height: 134,
    zIndex: 0,
    width: 360,
    backgroundColor: Color.shadesWhite01,
  },
  explore: {
    fontSize: FontSize.heading6Medium_size,
    letterSpacing: -0.4,
    lineHeight: 28,
    textAlign: "left",
  },
  notificationsNoneIcon: {
    overflow: "hidden",
  },
  notificationsNoneWrapper: {
    width: 48,
    padding: Padding.p_3xs,
    height: 48,
  },
  content: {
    top: 4,
    gap: Gap.gap_6xl,
    zIndex: 1,
  },
  container: {
    borderBottomWidth: 1,
    height: 50,
    width: 360,
  },
  plants: {
    fontWeight: "500",
    fontFamily: FontFamily.heading6Medium,
    color: Color.primaryColors600,
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
  containerbox: {
    gap: Gap.gap_2xs,
  },
  mainBox: {
    top: 66,
    zIndex: 2,
  },
  line: {
    top: 115,
    left: 73,
    backgroundColor: Color.primary500,
    width: 57,
    height: 1,
    zIndex: 3,
    position: "absolute",
  },
  navbarcomplex: {
    top: 0,
    gap: Gap.gap_2xs,
  },
  searchChild: {
    borderRadius: Border.br_81xl,
    borderWidth: 1,
    width: 328,
    height: 48,
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
  },
  search: {
    top: 152,
    width: 328,
  },
  containerIcon: {
    borderRadius: Border.br_xs,
    height: 162,
    width: 156,
    zIndex: 0,
  },
  smallContainer: {
    borderBottomRightRadius: Border.br_xs,
    borderBottomLeftRadius: Border.br_xs,
    backgroundColor: Color.colorMediumaquamarine_300,
    height: 56,
    width: 156,
    zIndex: 0,
  },
  indianMallow: {
    color: Color.shadesWhite01,
    fontFamily: FontFamily.heading2Semibold,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.m3LabelLarge_size,
  },
  abutilon: {
    color: Color.colorWhitesmoke,
  },
  content1: {
    left: 8,
  },
  text1: {
    top: 106,
    zIndex: 1,
    gap: Gap.gap_2xs,
  },
  containerplants: {
    flexDirection: "row",
    gap: Gap.gap_2xs,
  },
  swissChesePlane: {
    color: Color.shadesBlack02,
    fontFamily: FontFamily.heading2Semibold,
    fontWeight: "600",
  },
  monsteraDeliciosa: {
    color: Color.neutralGray03,
  },
  content3: {
    left: 12,
  },
  nephrolepisExaltata: {
    color: Color.neutralGray02,
  },
  plants1: {
    top: 236,
    flexWrap: "wrap",
    alignContent: "center",
    gap: Gap.gap_sm,
    width: 328,
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
  navbar1: {
    backgroundColor: Color.shadesWhite01,
  },
  caption1: {
    width: "58.33%",
    left: "20.28%",
    color: Color.primary500,
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
    bottom: 9,
    flexDirection: "row",
  },
  explorePlants: {
    flex: 1,
    height: 1083,
    overflow: "hidden",
  },
});

export default ExplorePlants;
