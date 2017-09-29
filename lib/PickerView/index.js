import React, { PropTypes } from 'react'
import setProps from "./props"
import util from "util.react"
import classNames from "classnames"
import "./index.css"
class PickerView extends React.Component {
    componentDidMount () {
        const self = this
    }
    render () {
        const self = this
        const pcls = self.props.prefixClassName + '-view'
        return (
            <div
                className={classNames({
                    [`${pcls}`]: true,
                    [util.themes(self.props, 'view')]: true
                })}
                ref="root"
            >
                <div className={`${pcls}-scroll`} ref="scroll" ></div>
                {
                    self.props.data.map(function (item, index) {
                        return (
                            <div key={index} >
                                {item.label}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

setProps(PickerView)
export default PickerView;
