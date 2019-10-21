import React, { Component } from 'react';

class Display extends Component {
    render() {
        let {result} = this.props;
        return <tr>
            <td colSpan="4">
                <input 
                    value={result}
                    type="numbers" 
                    className="display-input"/>
            </td>
        </tr>
        
    }
}
export default Display;