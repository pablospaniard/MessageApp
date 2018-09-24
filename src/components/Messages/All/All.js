import React, { Component } from 'react'
import { Table } from 'reactstrap'

import { NoMessages } from '../../Messages'

class All extends Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Type</th>
            <th>Recipient</th>
            <th>Originator</th>
            <th>Message</th>
            <th>Status</th>
            <th>Date</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>></td>
            <td>+34672972125</td>
            <td>Pavel</td>
            <td>Text</td>
            <td>delivered</td>
            <td>09:52</td>
          </tr>
        </tbody>
      </Table>
    )
  }
}

export default All
