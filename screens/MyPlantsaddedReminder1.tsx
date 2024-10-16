import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  FontSize,
  Color,
  FontFamily,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const MyPlantsaddedReminder1 = () => {
  return (
    <View style={styles.myPlantsaddedReminder}>
      <Image style={styles.statusBarLight} contentFit="cover" />
      <View style={styles.navbar}>
        <View style={styles.container} />
        <View style={styles.content}>
          <View style={[styles.container1, styles.buttonsFlexBox]}>
            <Text style={styles.remember}>Settings</Text>
          </View>
          <Image
            style={[styles.arrowBackIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/arrow-back1.png")}
          />
        </View>
      </View>
      <View style={[styles.premium, styles.premiumLayout]}>
        <Image
          style={[styles.premiumIcon, styles.premiumLayout]}
          contentFit="cover"
          source={require("../assets/premium.png")}
        />
        <LinearGradient
          style={[styles.premium1, styles.premiumLayout]}
          locations={[0.33, 1]}
          colors={["#000", "rgba(0, 0, 0, 0)"]}
        >
          <Text style={[styles.upgradeTo, styles.labelTypo]}>Upgrade to</Text>
          <Text style={styles.premium2}>{`🥇 Premium `}</Text>
          <View style={[styles.buttons, styles.buttonsFlexBox]}>
            <Text style={[styles.label, styles.labelTypo]}>Free trial</Text>
          </View>
        </LinearGradient>
      </View>
      <View style={[styles.account, styles.accountShadowBox]}>
        <View style={styles.boxLayout}>
          <View style={[styles.box, styles.boxPosition]} />
          <Image
            style={[styles.chevronRightIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chevron-right.png")}
          />
          <Text style={[styles.myasirk2001gmailcom, styles.myasirk2001Typo]}>
            m.yasir.k.2001@gmail.com
          </Text>
          <Text style={[styles.email, styles.emailTypo]}>Email</Text>
        </View>
        <View style={styles.boxLayout}>
          <View style={[styles.box1, styles.boxPosition]} />
          <Image
            style={[styles.chevronRightIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chevron-right.png")}
          />
          <Text style={[styles.myasirk2001, styles.myasirk2001Typo]}>
            m.yasir.k.2001
          </Text>
          <Text style={[styles.email, styles.emailTypo]}>Username</Text>
        </View>
        <View style={styles.boxLayout}>
          <View style={[styles.box1, styles.boxPosition]} />
          <Image
            style={[styles.chevronRightIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chevron-right.png")}
          />
          <Text style={[styles.muhammadYasir, styles.myasirk2001Typo]}>
            Muhammad Yasir
          </Text>
          <Text style={[styles.email, styles.emailTypo]}>Full name</Text>
        </View>
      </View>
      <View style={[styles.account1, styles.accountShadowBox]}>
        <View style={styles.boxLayout}>
          <View style={[styles.box, styles.boxPosition]} />
          <Image
            style={[styles.chevronRightIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chevron-right.png")}
          />
          <Text style={[styles.email, styles.emailTypo]}>Notification</Text>
        </View>
        <View style={styles.boxLayout}>
          <View style={[styles.box1, styles.boxPosition]} />
          <Image
            style={[styles.chevronRightIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chevron-right.png")}
          />
          <Text style={[styles.email, styles.emailTypo]}>Share app</Text>
        </View>
      </View>
      <View style={[styles.account2, styles.accountShadowBox]}>
        <View style={styles.boxLayout}>
          <View style={[styles.box, styles.boxPosition]} />
          <Image
            style={[styles.chevronRightIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chevron-right.png")}
          />
          <Text style={[styles.email, styles.emailTypo]}>Rate Us</Text>
        </View>
        <View style={styles.boxLayout}>
          <View style={[styles.box1, styles.boxPosition]} />
          <Image
            style={[styles.chevronRightIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chevron-right.png")}
          />
          <Text style={[styles.email, styles.emailTypo]}>Privacy policy</Text>
        </View>
        <View style={styles.boxLayout}>
          <View style={[styles.box1, styles.boxPosition]} />
          <Image
            style={[styles.chevronRightIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chevron-right.png")}
          />
          <Text style={[styles.email, styles.emailTypo]}>Terms of use</Text>
        </View>
        <View style={styles.boxLayout}>
          <View style={[styles.box1, styles.boxPosition]} />
          <Image
            style={[styles.chevronRightIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chevron-right.png")}
          />
          <Text style={[styles.email, styles.emailTypo]}>Contact us</Text>
        </View>
      </View>
      <View style={[styles.contaiiner9, styles.boxLayout]}>
        <View style={[styles.box1, styles.boxPosition]} />
        <Image
          style={[styles.chevronRightIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/chevron-right.png")}
        />
        <Text style={[styles.email, styles.emailTypo]}>Change password</Text>
      </View>
      <View style={[styles.contaiiner10, styles.box10Layout]}>
        <View style={[styles.box10, styles.box10Layout]} />
        <View style={styles.frameParent}>
          <View style={styles.logOutParent}>
            <Text style={styles.emailTypo}>Log Out</Text>
            <Text style={styles.versionTypo}>m.yasir.k.2001@gmail.com</Text>
          </View>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/chevron-right.png")}
          />
        </View>
      </View>
      <Text style={[styles.version, styles.versionTypo]}>Version ??</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  premiumLayout: {
    height: 121,
    position: "absolute",
  },
  labelTypo: {
    lineHeight: 20,
    fontSize: FontSize.smallParagraphMedium_size,
    textAlign: "center",
    color: Color.shadesWhite01,
  },
  accountShadowBox: {
    shadowOpacity: 1,
    elevation: 1,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    marginLeft: -164,
    left: "50%",
  },
  boxPosition: {
    borderBottomWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    backgroundColor: Color.colorMediumaquamarine_200,
    left: 0,
    top: 0,
  },
  myasirk2001Typo: {
    color: Color.primaryColors700,
    fontFamily: FontFamily.xSmallParagraphRegular,
    top: 15,
    lineHeight: 20,
    fontSize: FontSize.smallParagraphMedium_size,
    textAlign: "center",
    position: "absolute",
  },
  emailTypo: {
    color: Color.shadesBlack02,
    lineHeight: 20,
    fontSize: FontSize.smallParagraphMedium_size,
    textAlign: "center",
    fontFamily: FontFamily.paragraphMedium,
    fontWeight: "500",
  },
  boxLayout: {
    height: 50,
    width: 328,
  },
  box10Layout: {
    height: 74,
    width: 328,
    position: "absolute",
  },
  versionTypo: {
    color: Color.neutralGray05,
    fontFamily: FontFamily.xSmallParagraphRegular,
    fontSize: FontSize.xSmallParagraphRegular_size,
    lineHeight: 20,
    textAlign: "center",
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
    backgroundColor: Color.primaryColors500,
    zIndex: 0,
    width: 360,
    height: 56,
  },
  remember: {
    fontSize: FontSize.heading6Medium_size,
    letterSpacing: -0.4,
    lineHeight: 28,
    textAlign: "center",
    color: Color.shadesWhite01,
    fontFamily: FontFamily.paragraphMedium,
    fontWeight: "500",
  },
  container1: {
    left: 48,
    top: 0,
  },
  arrowBackIcon: {
    top: 2,
    left: 0,
    position: "absolute",
  },
  content: {
    width: 149,
    height: 28,
    zIndex: 1,
    left: 16,
    top: 14,
    position: "absolute",
  },
  navbar: {
    marginLeft: -180,
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  premiumIcon: {
    left: 0,
    width: 360,
    top: 0,
  },
  upgradeTo: {
    top: 9,
    fontWeight: "600",
    fontFamily: FontFamily.heading4Semibold,
    left: 16,
    position: "absolute",
  },
  premium2: {
    top: 35,
    left: 29,
    fontSize: FontSize.xSmallParagraphRegular_size,
    lineHeight: 20,
    textAlign: "center",
    color: Color.shadesWhite01,
    fontFamily: FontFamily.paragraphMedium,
    fontWeight: "500",
    position: "absolute",
  },
  label: {
    letterSpacing: 0,
    fontFamily: FontFamily.m3LabelLarge,
    fontWeight: "500",
    fontSize: FontSize.smallParagraphMedium_size,
  },
  buttons: {
    top: 73,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorMediumseagreen_100,
    height: 35,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
    left: 16,
    overflow: "hidden",
  },
  premium1: {
    left: 1,
    backgroundColor: "transparent",
    width: 360,
    top: 0,
  },
  premium: {
    top: 80,
    width: 361,
    left: 0,
  },
  box: {
    borderTopLeftRadius: Border.br_9xs,
    borderTopRightRadius: Border.br_9xs,
    height: 50,
    width: 328,
    position: "absolute",
  },
  chevronRightIcon: {
    top: 13,
    left: 292,
    position: "absolute",
  },
  myasirk2001gmailcom: {
    left: 103,
  },
  email: {
    top: 15,
    color: Color.shadesBlack02,
    left: 16,
    position: "absolute",
  },
  box1: {
    height: 50,
    width: 328,
    position: "absolute",
  },
  myasirk2001: {
    left: 183,
  },
  muhammadYasir: {
    left: 164,
  },
  account: {
    top: 225,
    position: "absolute",
  },
  account1: {
    top: 391,
    position: "absolute",
  },
  account2: {
    top: 507,
    position: "absolute",
  },
  contaiiner9: {
    top: 723,
    shadowOpacity: 1,
    elevation: 1,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    marginLeft: -164,
    left: "50%",
    position: "absolute",
  },
  box10: {
    borderBottomWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    backgroundColor: Color.colorMediumaquamarine_200,
    left: 0,
    top: 0,
  },
  logOutParent: {
    gap: Gap.gap_3xs,
  },
  frameParent: {
    gap: 126,
    flexDirection: "row",
    left: 16,
    top: 14,
    alignItems: "center",
    position: "absolute",
  },
  contaiiner10: {
    top: 789,
    shadowOpacity: 1,
    elevation: 1,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    marginLeft: -164,
    left: "50%",
  },
  version: {
    top: 879,
    left: 16,
    position: "absolute",
  },
  myPlantsaddedReminder: {
    backgroundColor: Color.shadesWhite01,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default MyPlantsaddedReminder1;
