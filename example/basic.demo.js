var React = require('react')
var Picker = require('picker.react').default
var PickerView = require('picker.react').PickerView
var App = React.createClass({
    getInitialState: function () {
        return {

        }
    },
    render: function () {
        var self = this
        return (
            <div>
                <PickerView
                    data={[
                        {
                            label: 'a',
                            value: '1'
                        },
                        {
                            label: 'b',
                            value: '2'
                        },
                        {
                            label: 'c',
                            value: '3'
                        },
                        {
                            label: 'd',
                            value: '4'
                        },
                        {
                            label: 'e',
                            value: '5'
                        },
                        {
                            label: 'f',
                            value: '6'
                        },
                        {
                            label: 'g',
                            value: '7'
                        }
                        ,
                        {
                            label: 'h',
                            value: '8'
                        }
                    ]}
                />
            </div>
        )
    }
})
module.exports = App
