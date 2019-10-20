import React, { Component } from 'react';

class Display extends Component {
    render() {
        return <tr>
            <td colSpan="4">
                <input 
                    type="numbers" 
                    className="display-input"/>
            </td>
        </tr>
        
    }
}
export default Display;