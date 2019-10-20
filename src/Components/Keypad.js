import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Keypad extends Component {
    createTable = () => {
        let table = [];
        let number = 1;
        let operations = ["+", "-", "*", "/"]
        let i = 0;

        for (i; i < 3; i++) {
            let children = [];
            for (let j = 0; j < 3; j++) {
                children.push(
                    <td>
                        <Button className="keypad-button" key={number}>{number}</Button>
                    </td>)
                number++;
            }

            children.push(
                <td>
                    <Button className="keypad-button operation" key={operations[i]}>{operations[i]}</Button>
                </td>)

            table.push(<tr>{children}</tr>)
        }

        table.push(
            <tr>
                <td colSpan="2">
                    <Button className="keypad-button-submit">=</Button>
                </td>
                <td>
                    <Button className="keypad-button" key="0">0</Button>
                </td>
                <td>
                    <Button className="keypad-button operation" key={operations[i]}>{operations[i]}</Button>
                </td>
            </tr>)

        return table;
    }

    render() {
        return this.createTable();
    }
}

export default Keypad;