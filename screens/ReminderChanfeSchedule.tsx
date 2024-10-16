import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import {
  Gap,
  FontFamily,
  Border,
  Color,
  FontSize,
  Padding,
} from "../GlobalStyles";

const ReminderChanfeSchedule = () => {
  return (
    <View style={styles.reminderchanfeSchedule}>
      <Image style={styles.statusBarLight} contentFit="cover" />
      <View style={[styles.containerPlant, styles.navbarPosition]}>
        <View style={styles.containerPlantChild} />
        <Image
          style={styles.containerPlantItem}
          contentFit="cover"
          source={require("../assets/rectangle-90.png")}
        />
        <View style={styles.text}>
          <Text style={styles.wildMint}>Wild mint</Text>
          <Text style={[styles.menthaArvensis, styles.waterIn4Typo]}>
            Mentha arvensis
          </Text>
        </View>
      </View>
      <View style={[styles.reminder, styles.reminderLayout]}>
        <View style={styles.remindercontainer}>
          <View style={[styles.container, styles.reminderLayout]} />
          <View style={[styles.water, styles.waterFlexBox]}>
            <View style={styles.water1}>
              <Image
                style={styles.waterIcon}
                contentFit="cover"
                source={require("../assets/plant.png")}
              />
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon.png")}
              />
            </View>
            <View style={styles.contentFlexBox}>
              <View>
                <Text style={styles.water2}>Water</Text>
                <Text style={[styles.waterIn4, styles.waterIn4Typo]}>
                  Water in 4 days
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.water3, styles.waterFlexBox]}>
            <View style={styles.water1}>
              <Image
                style={styles.waterIcon}
                contentFit="cover"
                source={require("../assets/plant.png")}
              />
              <Image
                style={[styles.fertilizerIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/fertilizer.png")}
              />
            </View>
            <View style={styles.contentFlexBox}>
              <View>
                <Text style={styles.water2}>Fertilizer</Text>
                <Text style={[styles.waterIn4, styles.waterIn4Typo]}>
                  Fertilizer in 1 week
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.buttons}>
            <Text style={styles.label}>Change schedule</Text>
          </View>
        </View>
      </View>
      <View style={[styles.navbar, styles.navbarPosition]}>
        <View style={styles.container1} />
        <View style={styles.content2}>
          <View style={[styles.container2, styles.contentFlexBox]}>
            <Text style={styles.remember}>Edit</Text>
          </View>
          <Image
            style={[styles.arrowBackIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/arrow-back1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarPosition: {
    gap: Gap.gap_2xs,
    position: "absolute",
  },
  waterIn4Typo: {
    fontFamily: FontFamily.paragraphy2Regular,
    lineHeight: 20,
  },
  reminderLayout: {
    height: 222,
    width: 328,
    position: "absolute",
  },
  waterFlexBox: {
    gap: Gap.gap_xs,
    left: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout: {
    width: 24,
    height: 24,
    position: "absolute",
  },
  contentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  statusBarLight: {
    marginLeft: -181,
    top: -24,
    width: 362,
    height: 24,
    left: "50%",
    position: "absolute",
  },
  containerPlantChild: {
    borderRadius: Border.br_7xs,
    zIndex: 0,
    height: 74,
    width: 328,
    backgroundColor: Color.colorMediumaquamarine_300,
  },
  containerPlantItem: {
    borderTopLeftRadius: Border.br_7xs,
    borderBottomLeftRadius: Border.br_7xs,
    width: 86,
    zIndex: 1,
    left: 0,
    top: 0,
    height: 74,
    position: "absolute",
  },
  wildMint: {
    textAlign: "left",
    color: Color.shadesBlack02,
    fontFamily: FontFamily.heading6Medium,
    fontWeight: "500",
    lineHeight: 28,
    fontSize: FontSize.paragraphMedium_size,
  },
  menthaArvensis: {
    color: Color.neutralGray05,
    fontSize: FontSize.m3LabelLarge_size,
    fontFamily: FontFamily.paragraphy2Regular,
    textAlign: "left",
  },
  text: {
    top: 12,
    left: 100,
    gap: Gap.gap_6xs,
    zIndex: 2,
    position: "absolute",
  },
  containerPlant: {
    top: 96,
    left: 16,
  },
  container: {
    borderRadius: Border.br_sm,
    left: 0,
    top: 0,
    backgroundColor: Color.colorMediumaquamarine_300,
    height: 222,
  },
  waterIcon: {
    width: 50,
    height: 50,
    zIndex: 0,
  },
  icon: {
    height: "40%",
    width: "40%",
    top: "30%",
    right: "30%",
    bottom: "30%",
    left: "30%",
    maxWidth: "100%",
    maxHeight: "100%",
    zIndex: 1,
    position: "absolute",
    overflow: "hidden",
  },
  water1: {
    flexDirection: "row",
    gap: Gap.gap_2xs,
  },
  water2: {
    textAlign: "center",
    color: Color.shadesBlack02,
    fontSize: FontSize.paragraphMedium_size,
    fontFamily: FontFamily.heading6Medium,
    fontWeight: "500",
    lineHeight: 28,
  },
  waterIn4: {
    fontSize: FontSize.xSmallParagraphRegular_size,
    color: Color.neutralGray04,
    textAlign: "center",
  },
  water: {
    top: 20,
  },
  fertilizerIcon: {
    top: 13,
    left: 13,
    zIndex: 1,
  },
  water3: {
    top: 84,
  },
  label: {
    letterSpacing: 0,
    fontFamily: FontFamily.m3LabelLarge,
    color: Color.primaryColors600,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.m3LabelLarge_size,
    fontWeight: "500",
  },
  buttons: {
    top: 162,
    left: 25,
    borderRadius: Border.br_81xl,
    borderStyle: "solid",
    borderColor: Color.colorSeagreen,
    borderWidth: 1,
    width: 278,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  remindercontainer: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  reminder: {
    marginLeft: -164,
    top: 194,
    height: 222,
    left: "50%",
  },
  container1: {
    backgroundColor: Color.primaryColors600,
    width: 360,
    height: 56,
    zIndex: 0,
  },
  remember: {
    fontSize: FontSize.heading6Medium_size,
    letterSpacing: -0.4,
    color: Color.shadesWhite01,
    textAlign: "center",
    fontFamily: FontFamily.heading6Medium,
    fontWeight: "500",
    lineHeight: 28,
  },
  container2: {
    left: 48,
    top: 0,
    position: "absolute",
  },
  arrowBackIcon: {
    top: 2,
    left: 0,
  },
  content2: {
    top: 14,
    width: 149,
    height: 28,
    zIndex: 1,
    left: 16,
    position: "absolute",
  },
  navbar: {
    left: 0,
    top: 0,
  },
  reminderchanfeSchedule: {
    backgroundColor: Color.shadesWhite01,
    flex: 1,
    height: 784,
    overflow: "hidden",
    width: "100%",
  },
});

export default ReminderChanfeSchedule;