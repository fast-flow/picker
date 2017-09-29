import "./index.css"
import { Component } from "react"
import util from "util.react"
import setProps from "./props"
import classNames from "classnames"
import PickerView from "./PickerView/index"
class Picker extends Component {
    render() {
        const self = this
        const pcls = self.props.prefixClassName
        return (
            <div className={classNames({
                    [`${pcls}`]: true,
                    [util.themes(self.props)]: true
                })} >
                <div className={`${pcls}-cnt`}>
                    {self.props.children}
                </div>
                <span ref="close" className={`${pcls}-close`} onClick={self.props.onClose} >
                    ×
                </span>
            </div>
        )
    }
}
setProps(Picker)
export default Picker
export { PickerView }
