import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Keypad extends Component {
    createTable = () => {
        let table = [];
        let number = 1;
        let operations = [ "+", "-", "*", "/"]
        let i= 0;

        for (i; i < 3; i++) {
            let children = [];
            for (let j = 0; j < 3; j++) {
                children.push(
                    <td>
                        <Button style={{height: "50px", width: "50px"}} key={number}>{number}</Button>
                    </td>)
                number++;
            }

            children.push(
                <td>
                    <Button style={{height: "50px", width: "50px"}} key={operations[i]}>{operations[i]}</Button>
                </td>)

            table.push(<tr>{children}</tr>)
        }

        table.push(
            <tr>
                <td />
                <td>
                    <Button style={{height: "50px", width: "50px"}} key="0">0</Button>
                </td>
                <td />
                <td>
                    <Button style={{height: "50px", width: "50px"}} key={operations[i]}>{operations[i]}</Button>
                </td>
            </tr>)

        return table;
    }

    render() {
        return <table>
            {this.createTable()}
        </table>;
    }
}

export default Keypad;