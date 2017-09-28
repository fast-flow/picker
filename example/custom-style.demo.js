var React = require('react')
var Picker = require('picker.react').default
var App = React.createClass({
    render: function () {
        return (
            <Picker themes="info" >basic</Picker>
        )
    }
})
module.exports = App
