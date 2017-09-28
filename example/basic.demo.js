var React = require('react')
var Picker = require('picker.react').default
var App = React.createClass({
    getInitialState: function () {
        return {
            show: true
        }
    },
    render: function () {
        var self = this
        return (
            <div>
                {
                    self.state.show?
                    (
                        <Picker onClose={function() {
                                self.setState({
                                    show: false
                                })
                            }} >basic</Picker>
                    ):null
                }
            </div>
        )
    }
})
module.exports = App
