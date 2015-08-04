/**
 * Created by Ivana on 4.8.2015..
 */

import Sidebar from '../Sidebar/Sidebar'
import React from 'react';
import FixedDataTable from 'fixed-data-table';

var Table = FixedDataTable.Table;
var Column = FixedDataTable.Column;

var rows = [
    ['a1', 'b1', 'c1'],
    ['a2', 'b3', 'c2'],
    ['a3', 'b3', 'c3']
];
function rowGetter(rowIndex) {
    return rows[rowIndex];
}

class UserList extends React.Component {
    render() {
        return (
            <div id="body">
                <Table
                    rowHeight={50}
                    rowGetter={rowGetter}
                    rowsCount={rows.length}
                    width={3000}
                    height={5000}
                    headerHeight={50}>
                    <Column
                        label="Col 1"
                        width={1000}
                        dataKey={0}
                        />
                    <Column
                        label="Col 2"
                        width={2000}
                        dataKey={1}
                        />
                </Table>
            </div>
        );
    }
}

export default class extends React.Component {
    render() {
        return (
            <div id='container'>
                <Sidebar />
                <UserList />
            </div>
        );
    }
}