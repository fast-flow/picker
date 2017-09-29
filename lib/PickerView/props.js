import { PropTypes } from "react"
import extend from "extend"

export default function (component) {
    extend(true, component, {
        defaultProps: {
            prefixClassName: 'r-picker',
            themes: '',
            data: []
        },
        propTypes: {
            prefixClassName: PropTypes.string,
            themes: PropTypes.string,
            data: PropTypes.array
        }
    })
}
