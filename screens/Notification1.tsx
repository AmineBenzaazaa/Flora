import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Gap, Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Notification1 = () => {
  return (
    <View style={styles.notification}>
      <Image
        style={styles.statusBarLight}
        contentFit="cover"
        source={require("../assets/status-bar-light.png")}
      />
      <View style={[styles.navbar, styles.notificationPosition]}>
        <View style={styles.container} />
        <View style={[styles.container1, styles.contentPosition]}>
          <Text style={styles.remember}>Notification</Text>
          <Image
            style={[styles.notificationsNoneIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/notifications-none.png")}
          />
        </View>
      </View>
      <Text style={[styles.today, styles.todayTypo]}>Today</Text>
      <Text style={[styles.yesterday, styles.todayTypo]}>Yesterday</Text>
      <View style={[styles.notification1, styles.notificationPosition]}>
        <View style={[styles.notificationChild, styles.notificationLayout]} />
        <View style={[styles.content, styles.contentPosition]}>
          <View style={styles.waterFlexBox}>
            <View style={styles.water1}>
              <Image
                style={styles.waterIcon}
                contentFit="cover"
                source={require("../assets/water.png")}
              />
            </View>
          </View>
          <View style={[styles.content1, styles.contentFlexBox]}>
            <View style={[styles.content2, styles.contentFlexBox]}>
              <View style={styles.text}>
                <Text style={[styles.mildMint, styles.todayTypo]}>
                  Mild Mint
                </Text>
                <View style={styles.waterFlexBox}>
                  <View style={styles.waterFlexBox}>
                    <View style={[styles.iconParent, styles.waterFlexBox]}>
                      <Image
                        style={styles.iconLayout}
                        contentFit="cover"
                        source={require("../assets/icon.png")}
                      />
                      <Text style={styles.waterToday}> Water Today!</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Image
              style={[styles.arrowForwardIosIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/arrow-forward-ios.png")}
            />
          </View>
        </View>
        <Image
          style={styles.notificationIcon}
          contentFit="cover"
          source={require("../assets/notification.png")}
        />
      </View>
      <View style={[styles.notification2, styles.notificationPosition]}>
        <View style={[styles.notificationChild, styles.notificationLayout]} />
        <View style={[styles.content, styles.contentPosition]}>
          <View style={styles.waterFlexBox}>
            <View style={styles.water1}>
              <Image
                style={styles.waterIcon}
                contentFit="cover"
                source={require("../assets/water.png")}
              />
            </View>
          </View>
          <View style={[styles.content1, styles.contentFlexBox]}>
            <View style={[styles.content2, styles.contentFlexBox]}>
              <View style={styles.text}>
                <Text style={[styles.mildMint, styles.todayTypo]}>
                  Mild Mint
                </Text>
                <View style={styles.waterFlexBox}>
                  <View style={[styles.iconParent, styles.waterFlexBox]}>
                    <Image
                      style={styles.iconLayout}
                      contentFit="cover"
                      source={require("../assets/fertilizer.png")}
                    />
                    <Text style={styles.waterToday}>Fertilizer Today!</Text>
                  </View>
                </View>
              </View>
            </View>
            <Image
              style={[styles.arrowForwardIosIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/arrow-forward-ios.png")}
            />
          </View>
        </View>
        <Image
          style={styles.notificationIcon}
          contentFit="cover"
          source={require("../assets/notification.png")}
        />
      </View>
      <View style={[styles.notification3, styles.notificationPosition]}>
        <View style={[styles.notificationInner, styles.notificationLayout]} />
        <View style={[styles.content, styles.contentPosition]}>
          <View style={styles.waterFlexBox}>
            <View style={styles.water1}>
              <Image
                style={styles.waterIcon}
                contentFit="cover"
                source={require("../assets/water.png")}
              />
            </View>
          </View>
          <View style={[styles.content1, styles.contentFlexBox]}>
            <View style={[styles.content2, styles.contentFlexBox]}>
              <View style={styles.text}>
                <Text style={[styles.mildMint, styles.todayTypo]}>
                  Mild Mint
                </Text>
                <View style={styles.waterFlexBox}>
                  <View style={styles.waterFlexBox}>
                    <View style={[styles.iconParent, styles.waterFlexBox]}>
                      <Image
                        style={styles.iconLayout}
                        contentFit="cover"
                        source={require("../assets/icon.png")}
                      />
                      <Text style={styles.waterToday}> Water Today!</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Image
              style={[styles.arrowForwardIosIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/arrow-forward-ios.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationPosition: {
    gap: Gap.gap_xs,
    position: "absolute",
  },
  contentPosition: {
    zIndex: 1,
    position: "absolute",
  },
  iconLayout1: {
    width: 24,
    height: 24,
  },
  todayTypo: {
    color: Color.shadesBlack02,
    textAlign: "center",
    fontFamily: FontFamily.paragraphMedium,
    fontWeight: "500",
    lineHeight: 28,
  },
  notificationLayout: {
    height: 78,
    width: 328,
    borderRadius: Border.br_7xs,
    zIndex: 0,
  },
  contentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  waterFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  statusBarLight: {
    marginLeft: -181,
    top: -24,
    left: "50%",
    width: 362,
    height: 24,
    position: "absolute",
  },
  container: {
    backgroundColor: Color.colorMediumseagreen_100,
    width: 360,
    height: 56,
    zIndex: 0,
  },
  remember: {
    color: Color.shadesWhite01,
    textAlign: "center",
    fontFamily: FontFamily.paragraphMedium,
    fontWeight: "500",
    lineHeight: 28,
    letterSpacing: -0.4,
    fontSize: FontSize.heading6Medium_size,
  },
  notificationsNoneIcon: {
    overflow: "hidden",
  },
  container1: {
    gap: 197,
    alignItems: "center",
    flexDirection: "row",
    left: 16,
    top: 14,
    zIndex: 1,
  },
  navbar: {
    left: 0,
    top: 0,
  },
  today: {
    top: 92,
    letterSpacing: -0.4,
    fontSize: FontSize.heading6Medium_size,
    color: Color.shadesBlack02,
    left: 16,
    position: "absolute",
  },
  yesterday: {
    top: 344,
    letterSpacing: -0.4,
    fontSize: FontSize.heading6Medium_size,
    color: Color.shadesBlack02,
    left: 16,
    position: "absolute",
  },
  notificationChild: {
    backgroundColor: Color.primaryColors30,
  },
  waterIcon: {
    width: 50,
    height: 50,
  },
  water1: {
    flexDirection: "row",
  },
  mildMint: {
    fontSize: FontSize.paragraphMedium_size,
  },
  iconLayout: {
    height: 18,
    width: 18,
  },
  waterToday: {
    fontSize: FontSize.xSmallParagraphRegular_size,
    lineHeight: 20,
    fontFamily: FontFamily.xSmallParagraphRegular,
    color: Color.colorDimgray_100,
    textAlign: "center",
  },
  iconParent: {
    gap: Gap.gap_2xs,
  },
  text: {
    gap: Gap.gap_5xs,
  },
  content2: {
    zIndex: 0,
  },
  arrowForwardIosIcon: {
    top: 13,
    left: 212,
    zIndex: 1,
    position: "absolute",
  },
  content1: {
    gap: Gap.gap_2xl,
  },
  content: {
    left: 14,
    gap: Gap.gap_md,
    flexDirection: "row",
    top: 14,
    zIndex: 1,
  },
  notificationIcon: {
    left: 318,
    width: 10,
    height: 10,
    zIndex: 2,
    top: 0,
    position: "absolute",
  },
  notification1: {
    top: 144,
    left: 16,
  },
  notification2: {
    top: 230,
    left: 16,
  },
  notificationInner: {
    borderStyle: "solid",
    borderColor: Color.colorMediumaquamarine_100,
    borderWidth: 1,
    backgroundColor: Color.shadesWhite01,
  },
  notification3: {
    top: 396,
    left: 16,
  },
  notification: {
    flex: 1,
    width: "100%",
    height: 776,
    overflow: "hidden",
    backgroundColor: Color.shadesWhite01,
  },
});

export default Notification1;
