import React from "react";
import { SafeAreaView, View, Text, Image } from "react-native";
import { Container, Col, Content } from "native-base";
import ButtonWithIcon from "./ButtonWithIcon";
import { GroupState, AppState, GroupAction } from "../core";
import { bindActionCreators, Dispatch, AnyAction } from "redux";
import { groupAction, signInAction } from "../core/actions";
import { connect } from "react-redux";
import { logD } from "../common/LogTool";
import { DrawerContentComponentProps } from "react-navigation-drawer";
import { NavigationActions } from "react-navigation";

class MenuHomeSideBar extends React.Component<MenuHomeSideBarProps> {

    constructor(props: MenuHomeSideBarProps) {
        super(props);
    }

    hideDrawer() {
        this.props.navigation.closeDrawer();
    }

    handlePressSignOut() {
        this.hideDrawer()
        console.log("AppLog", this.props.navigation.navigate("AuthStack"));
    }

    handlePressSetting() {
        this.hideDrawer();
        // console.log("AppLog", this.props.navigation.navigate("Setting"));
    }

    render() {
        logD("AppLog", this.props.groupState?.groups);
        return (
            <Container>
                <Content>
                    <View style={{ paddingLeft: 20, paddingTop: 10 }}>
                        <Image source={require('../data/images/ic_app.png')} style={{ width: 50, height: 50, borderRadius: 50 }} />
                        <Text style={{ fontSize: 15, color: 'rgb(0, 0, 0)', fontWeight: 'bold', marginTop: 10 }}>icongkhanh</Text>
                        <Text>Thành viên</Text>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray', marginTop: 20 }} />
                    <ButtonWithIcon name="user" text="Hồ sơ" onPress={() => this.handlePressSetting()} />
                    <ButtonWithIcon name="team" text="Nhóm" onPress={() => {
                        this.props.getGroups("admin");

                    }} />
                    <ButtonWithIcon name="setting" text="Cài đặt" onPress={() => this.handlePressSetting()} />
                    <ButtonWithIcon name="logout" colorIcon="red" text="Đăng xuất" onPress={() => this.handlePressSignOut()} />
                </Content>
            </Container>
        );

    }
}

interface MenuHomeSideBarProps extends DrawerContentComponentProps {
    groupState: GroupState,
    getGroups: typeof groupAction.getGroups,
    signOut: typeof signInAction.signOut
}

const mapStateToProps = (state: AppState) => ({
    groupState: state.group
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => bindActionCreators(Object.assign(groupAction, signInAction), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MenuHomeSideBar)