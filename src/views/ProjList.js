import React, { Component, Fragment } from 'react';
import { Badge, Table } from 'reactstrap';
import { Link } from "react-router-dom";

class Contents extends Component {

  render() {
    return (
      <Fragment>
        <div className="position-relative">

          <span className="d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold">
            Project List
            {/* <Badge pill color="success" className="text-uppercase px-2 py-1 ml-3 mb-1 align-middle" style={{ fontSize: '0.75rem' }}>New</Badge> */}
          </span>

          <span className="d-block pb-4 h2 text-dark border-bottom border-gray">Project List</span>

          {/* <article className="pt-5 text-secondary text-justify" style={{ fontSize: '0.9rem', whiteSpace: 'pre-line' }}>
          Project List
          </article> */}

          <Table bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>Project Name</th>
                <th>기간</th>
                <th>참여인원</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>가금사양관리</td>
                <td>2017.03 ~ 2018.06</td>
                <td>3명</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>키드키득</td>
                <td>2019.12 ~ 2020.01</td>
                <td>3명</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>사구팔구</td>
                <td>2019.09 ~ 2019.10</td>
                <td>4명</td>
              </tr>
            </tbody>
          </Table>

        </div>
      </Fragment>
    );
  }

}

export default Contents;