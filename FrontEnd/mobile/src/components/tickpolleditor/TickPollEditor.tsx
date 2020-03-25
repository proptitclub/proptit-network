import React from "react"
import { View, Icon } from "native-base"
import ItemTickPollEditor from "./ItemTickPollEditor"
import colors from "../../values/colors"
import { TouchableOpacity } from "react-native-gesture-handler"

interface TickPollEditorProps {
    onClose: () => void
}

interface TickPollEditorState {
    listOptions: Array<string>
}

class TickPollEditor extends React.Component<TickPollEditorProps, TickPollEditorState> {

    constructor(props: TickPollEditorProps) {
        super(props)
        this.state = {
            listOptions: [""]
        }
    }

    render() {

        const { listOptions } = this.state
        const { onClose } = this.props

        return (
            <View style={{ alignItems: "center", width: 300 }}>
                {
                    listOptions.map((value, index) => <ItemTickPollEditor index={index} showClose={index == listOptions.length - 1} onClickClose={() => {
                        console.log(listOptions.length)
                        if (index == 0) {
                            onClose()
                        } else {
                            listOptions.pop()
                            this.setState({
                                listOptions: listOptions
                            })
                        }
                    }} />)
                }
                <TouchableOpacity onPress={() => this.onPressAddOptions()}>
                    <Icon name="pluscircle" type="AntDesign" style={{ color: colors.mainBlue }} />
                </TouchableOpacity>
            </View>
        )
    }

    onPressAddOptions() {
        this.state.listOptions.push("")
        this.setState({
            listOptions: this.state.listOptions
        })
    }
}

export default TickPollEditor