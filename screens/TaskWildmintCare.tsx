import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import {
  Padding,
  Gap,
  Border,
  Color,
  FontFamily,
  FontSize,
} from "../GlobalStyles";

const TaskWildmintCare = () => {
  return (
    <View style={styles.taskwildmintCare}>
      <Image
        style={styles.taskwildmintCareChild}
        contentFit="cover"
        source={require("../assets/rectangle-87.png")}
      />
      <Image style={styles.statusBarLight} contentFit="cover" />
      <Image style={styles.pepperFacePlantInASmallP} contentFit="cover" />
      <View style={[styles.backArrow, styles.editLayout]}>
        <Image
          style={styles.arrowBackgroundIcon}
          contentFit="cover"
          source={require("../assets/arrow-background.png")}
        />
        <Image
          style={[styles.arrowBackIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/arrow-back.png")}
        />
      </View>
      <View style={[styles.edit, styles.editLayout]}>
        <Image
          style={styles.arrowBackgroundIcon}
          contentFit="cover"
          source={require("../assets/arrow-background.png")}
        />
        <Image
          style={[styles.arrowBackIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/edit.png")}
        />
      </View>
      <View style={styles.tabs}>
        <View style={styles.tabs1}>
          <View style={styles.container} />
          <View style={[styles.button, styles.buttonFlexBox]}>
            <Text style={styles.care}>Care</Text>
          </View>
          <View style={styles.button1}>
            <Text style={[styles.care1, styles.care1Typo]}>Info</Text>
          </View>
        </View>
      </View>
      <View style={styles.taskwildmintCareItem} />
      <Text style={[styles.yourTasks, styles.yourTasksTypo]}>Your Tasks</Text>
      <Text style={[styles.careGuide, styles.yourTasksTypo]}>Care guide</Text>
      <View style={[styles.careGuide1, styles.reminderPosition]}>
        <View style={styles.tabs1}>
          <View style={[styles.container1, styles.containerLayout]} />
          <Image
            style={[styles.plantIcon, styles.plantIconLayout]}
            contentFit="cover"
            source={require("../assets/plant.png")}
          />
          <View style={[styles.content, styles.contentPosition]}>
            <Text style={[styles.toxicity, styles.care1Typo]}>Toxicity</Text>
            <Text style={[styles.noToxic, styles.noToxicTypo]}>No toxic</Text>
          </View>
          <Image
            style={[styles.skullIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/skull.png")}
          />
        </View>
        <View style={styles.careGuideeasy1}>
          <View style={[styles.container2, styles.containerLayout]} />
          <Image
            style={[styles.plantIcon1, styles.plantIconLayout]}
            contentFit="cover"
            source={require("../assets/plant.png")}
          />
          <View style={[styles.content1, styles.contentPosition]}>
            <Text style={[styles.toxicity, styles.care1Typo]}>Water</Text>
            <Text
              style={[styles.noToxic, styles.noToxicTypo]}
            >{`It usually doesn't need to be watered 
regularly, but it should be watered 
every two weeks in the summer and
every three weeks in the winter`}</Text>
          </View>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </View>
        <View style={styles.careGuideeasy1}>
          <View style={[styles.container2, styles.containerLayout]} />
          <Image
            style={[styles.plantIcon, styles.plantIconLayout]}
            contentFit="cover"
            source={require("../assets/plant.png")}
          />
          <View style={[styles.content, styles.contentPosition]}>
            <Text style={[styles.toxicity, styles.care1Typo]}>Sunlight</Text>
            <Text
              style={[styles.noToxic, styles.noToxicTypo]}
            >{`It needs partial sun to stay healthy,
but too much much direct sunlight
can burn its leaves. Too little sunlight
can cause the leaves to turn yellow.`}</Text>
          </View>
          <Image
            style={[styles.skullIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/sunny.png")}
          />
        </View>
        <View style={styles.careGuideeasy3}>
          <View style={[styles.careGuideeasyInner, styles.containerLayout]} />
          <Image
            style={[styles.plantIcon, styles.plantIconLayout]}
            contentFit="cover"
            source={require("../assets/plant.png")}
          />
          <View style={[styles.content, styles.contentPosition]}>
            <Text style={[styles.toxicity, styles.care1Typo]}>Temperature</Text>
            <Text
              style={[styles.noToxic, styles.noToxicTypo]}
            >{`Plants outdoors in late spring and early
summer. Soil temperature must be 60 F
(15 C) or warmer. `}</Text>
          </View>
          <Image
            style={[styles.skullIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/thermometer.png")}
          />
        </View>
      </View>
      <View style={[styles.reminder, styles.reminderLayout]}>
        <View style={styles.remindercontainer}>
          <View style={[styles.container3, styles.reminderLayout]} />
          <View style={[styles.water1, styles.waterFlexBox]}>
            <View style={styles.water2}>
              <Image
                style={[styles.waterIcon, styles.plantIconLayout]}
                contentFit="cover"
                source={require("../assets/plant.png")}
              />
              <Image
                style={[styles.icon1, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/icon.png")}
              />
            </View>
            <View style={styles.content4}>
              <View>
                <Text style={[styles.water3, styles.care1Typo]}>Water</Text>
                <Text style={[styles.waterIn4, styles.noToxicTypo]}>
                  Water in 4 days
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.water4, styles.waterFlexBox]}>
            <View style={styles.water2}>
              <Image
                style={[styles.waterIcon, styles.plantIconLayout]}
                contentFit="cover"
                source={require("../assets/plant.png")}
              />
              <Image
                style={[styles.fertilizerIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/fertilizer.png")}
              />
            </View>
            <View style={styles.content4}>
              <View>
                <Text style={[styles.water3, styles.care1Typo]}>
                  Fertilizer
                </Text>
                <Text style={[styles.waterIn4, styles.noToxicTypo]}>
                  Fertilizer in 1 week
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.buttons, styles.buttonFlexBox]}>
            <Text style={styles.label}>Reschedule</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  editLayout: {
    padding: Padding.p_3xs,
    height: 40,
    width: 40,
    gap: Gap.gap_2xs,
    top: 16,
    position: "absolute",
  },
  iconLayout1: {
    width: 24,
    height: 24,
    position: "absolute",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  care1Typo: {
    color: Color.shadesBlack02,
    fontFamily: FontFamily.heading6Medium,
    fontWeight: "500",
  },
  yourTasksTypo: {
    lineHeight: 32,
    letterSpacing: -0.5,
    fontSize: FontSize.heading4Medium_size,
    left: 15,
    color: Color.shadesBlack02,
    textAlign: "center",
    fontFamily: FontFamily.heading6Medium,
    fontWeight: "500",
    position: "absolute",
  },
  reminderPosition: {
    marginLeft: -164,
    left: "50%",
  },
  containerLayout: {
    width: 328,
    backgroundColor: Color.colorMediumaquamarine_300,
    borderRadius: Border.br_sm,
    zIndex: 0,
  },
  plantIconLayout: {
    width: 50,
    height: 50,
  },
  contentPosition: {
    gap: Gap.gap_6xs,
    left: 76,
    zIndex: 2,
    position: "absolute",
  },
  noToxicTypo: {
    fontFamily: FontFamily.paragraphy2Regular,
    fontSize: FontSize.xSmallParagraphRegular_size,
    lineHeight: 20,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  reminderLayout: {
    height: 222,
    width: 328,
    position: "absolute",
  },
  waterFlexBox: {
    gap: Gap.gap_xs,
    left: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  taskwildmintCareChild: {
    width: 360,
    height: 289,
    left: 0,
    top: -24,
    position: "absolute",
  },
  statusBarLight: {
    marginLeft: -181,
    width: 362,
    height: 24,
    left: "50%",
    top: -24,
    position: "absolute",
  },
  pepperFacePlantInASmallP: {
    top: 412,
    left: 360,
    width: 858,
    height: 858,
    position: "absolute",
  },
  arrowBackgroundIcon: {
    zIndex: 0,
    top: 0,
    height: 40,
    width: 40,
    left: 0,
    position: "absolute",
  },
  arrowBackIcon: {
    top: 8,
    left: 8,
    zIndex: 1,
  },
  backArrow: {
    left: 16,
    gap: Gap.gap_2xs,
  },
  edit: {
    left: 304,
    gap: Gap.gap_2xs,
  },
  container: {
    width: 216,
    height: 50,
    borderRadius: Border.br_81xl,
    zIndex: 0,
    backgroundColor: Color.shadesWhite01,
  },
  care: {
    color: Color.shadesWhite01,
    textAlign: "center",
    fontFamily: FontFamily.heading6Medium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.m3LabelLarge_size,
  },
  button: {
    left: 5,
    backgroundColor: Color.primaryColors600,
    width: 100,
    top: 5,
    justifyContent: "center",
    zIndex: 1,
    padding: Padding.p_3xs,
  },
  care1: {
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.m3LabelLarge_size,
    color: Color.shadesBlack02,
  },
  button1: {
    left: 111,
    zIndex: 2,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    top: 5,
    borderRadius: Border.br_81xl,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  tabs1: {
    gap: Gap.gap_2xs,
  },
  tabs: {
    marginLeft: -108,
    top: 177,
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowRadius: 17,
    elevation: 17,
    shadowOpacity: 1,
    left: "50%",
    position: "absolute",
  },
  taskwildmintCareItem: {
    top: 253,
    left: -1,
    borderTopLeftRadius: Border.br_lgi,
    borderTopRightRadius: Border.br_lgi,
    width: 361,
    height: 940,
    position: "absolute",
    backgroundColor: Color.shadesWhite01,
  },
  yourTasks: {
    top: 293,
  },
  careGuide: {
    top: 589,
  },
  container1: {
    height: 74,
  },
  plantIcon: {
    top: 12,
    left: 14,
    width: 50,
    zIndex: 1,
    position: "absolute",
  },
  toxicity: {
    fontSize: FontSize.paragraphy2Regular_size,
    lineHeight: 24,
    textAlign: "left",
  },
  noToxic: {
    color: Color.neutralGray05,
    textAlign: "left",
  },
  content: {
    top: 14,
  },
  skullIcon: {
    top: 25,
    left: 27,
    zIndex: 3,
  },
  container2: {
    height: 140,
  },
  plantIcon1: {
    top: 14,
    left: 14,
    width: 50,
    zIndex: 1,
    position: "absolute",
  },
  content1: {
    top: 16,
    gap: Gap.gap_6xs,
    left: 76,
  },
  icon: {
    height: "14.29%",
    width: "6.1%",
    top: "20.71%",
    right: "85.06%",
    bottom: "65%",
    left: "8.84%",
    zIndex: 3,
  },
  careGuideeasy1: {
    height: 140,
    gap: Gap.gap_2xs,
  },
  careGuideeasyInner: {
    height: 122,
  },
  careGuideeasy3: {
    height: 122,
    gap: Gap.gap_2xs,
  },
  careGuide1: {
    top: 639,
    gap: Gap.gap_3xs,
    position: "absolute",
  },
  container3: {
    backgroundColor: Color.colorMediumaquamarine_300,
    borderRadius: Border.br_sm,
    height: 222,
    top: 0,
    left: 0,
  },
  waterIcon: {
    zIndex: 0,
  },
  icon1: {
    height: "40%",
    width: "40%",
    top: "30%",
    right: "30%",
    bottom: "30%",
    left: "30%",
    zIndex: 1,
  },
  water2: {
    flexDirection: "row",
    gap: Gap.gap_2xs,
  },
  water3: {
    fontSize: FontSize.paragraphMedium_size,
    lineHeight: 28,
    textAlign: "center",
  },
  waterIn4: {
    color: Color.neutralGray04,
    textAlign: "center",
  },
  content4: {
    flexDirection: "row",
    alignItems: "center",
  },
  water1: {
    top: 20,
  },
  fertilizerIcon: {
    top: 13,
    left: 13,
    zIndex: 1,
  },
  water4: {
    top: 84,
  },
  label: {
    letterSpacing: 0,
    fontFamily: FontFamily.m3LabelLarge,
    color: Color.primaryColors600,
    textAlign: "center",
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.m3LabelLarge_size,
  },
  buttons: {
    top: 162,
    left: 25,
    borderStyle: "solid",
    borderColor: Color.colorSeagreen,
    borderWidth: 1,
    width: 278,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
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
    top: 341,
    marginLeft: -164,
    left: "50%",
  },
  taskwildmintCare: {
    flex: 1,
    height: 1193,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.shadesWhite01,
  },
});

export default TaskWildmintCare;