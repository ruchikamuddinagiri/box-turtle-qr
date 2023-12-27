import React from 'react'

export default class MyQRcode extends React.Component {
    render () {
        return (
            <div id={this.props.printableId}>
                <canvas id="canvas" align="center" />
            </div>
        )
    }
}