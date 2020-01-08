import React from "react";
import { Container, Left, Icon, Title, Body, Right, Button, Text, Content, Header } from "native-base";
import { BaseScreen, BaseScreenProps } from "./BaseScreen";
import { NavigationActions } from "react-navigation";
import colors from "../values/colors";
import { TextInput } from "react-native-gesture-handler";

interface SearchProps extends BaseScreenProps {

}

class Search extends BaseScreen<SearchProps> {

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: "white" }}>
                    <Left style={{ flex: 0 }}>
                        <Button transparent onPress={() => this.showDrawer()} >
                            <Icon name='menu' style={{ color: colors.blue01 }} />
                        </Button>
                    </Left>
                    <Body style={{ marginHorizontal: 10 }}>
                        <TextInput placeholder="Tìm kiếm" style={{ height: 40, backgroundColor: 'rgb(233, 236, 241)', borderRadius: 10, width: '100%' }} />
                    </Body>
                    <Right style={{ flex: 0 }}>
                        <Button rounded style={{ backgroundColor: colors.blue02, justifyContent: 'center' }}
                            onPressIn={() => { }}>
                            <Text style={{ color: 'white' }}>Tìm kiếm</Text>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Text>SearchScreen</Text>
                </Content>
            </Container>
        )
    }
}

export default Search;