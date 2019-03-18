import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { Table } from '../../index';


const dataSource = [];
for (let i = 0; i < 46; i++) {
  dataSource.push({
    key: i+1,
    name: `ישראל ה${i}`,
    age: (i+1)*3,
    address: `תל אביב יפו, הגרדום ${i+1}`,
  });
}

const columns = [
  {
    title: 'שם',
    key: 'name',
    dataIndex: 'name',
    className: 'column-name',
    width: '20%'
  },
  {
    title: 'גיל',
    key: 'age',
    dataIndex: 'age',
    width: '60px'
  },
  {
    title: 'כתובת',
    key: 'address',
    dataIndex: 'address'
  }
];

const paginationOnchange = (page, pagesize) => (
  console.log(`page ${page} and page size is ${pagesize}`)
)

const paginationConfig = {
  defaultCurrent: 1,
  onChange: paginationOnchange,
  pageSize: 5
}


class TableWithDataFromServer extends Component {
  constructor(props) {
    super(props);

    this.url = 'https://randomuser.me/api';

    this.columns = [
      {
        title: 'שם',
        key: 'name',
        dataIndex: 'name',
        render: name => `${name.first} ${name.last}`
      },
      {
        title: 'מין',
        key: 'gender',
        dataIndex: 'gender'
      },
      {
        title: 'דואר אלקטרוני',
        key: 'email',
        dataIndex: 'email'
      }
    ];

    this.state = {
      data: [],
      pagination: {
        onChange: this.handlePaginationChange,
        pageSize: 10,
        page: 1
      },
      loading: false
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = (params = {}) => {
    this.setState({loading: true});
    fetch(`${this.url}/?results=10&page=${this.state.pagination.page}`,)
      .then(result => result.json())
      .then(data => {
        const pagination = { ...this.state.pagination };
        pagination.total = 200; // Read total count from server

        this.setState({
          loading: false,
          data: data.results,
          pagination
        })
      })
  }

  handlePaginationChange = (page, pagesize) => {
    // console.log('page', page);
    // console.log('pagesize', pagesize);
    // console.log('this', this);

    let pagination = { ...this.state.pagination };
    pagination.current = page;

    console.log('page', page);

    this.setState({
      pagination
    })

    this.fetchData();
  }

  render() {
    return (
      <Table
        pagination={this.state.pagination}
        dataSource={this.state.data}
        columns={this.columns}
        loading={this.state.loading} />
    )
  }
}





storiesOf('Table', module)
  .add('default', () => (
    <Table dataSource={dataSource.slice(0, 4)} columns={columns} />
  ))
  .add('accessibility', () => (
    <Table
      caption="כותרת טבלה"
      summary="תיאור טבלה לקורא נגישות"
      dataSource={dataSource}
      columns={columns}
    />
  ))
  .add('footer', () => (
    <Table
      bordered
      dataSource={dataSource.slice(0, 4)}
      columns={columns}
      foot="תחתית הטבלה"
    />
  ))
  .add('pagination', () => (
    <Table pagination={paginationConfig} dataSource={dataSource} columns={columns} />
  ))
  .add('bordered', () => (
    <Table pagination={false} bordered dataSource={dataSource.slice(0, 4)} columns={columns} />
  ))
  .add('loading', () => (
    <Table pagination={false} dataSource={dataSource.slice(0, 4)} columns={columns} loading={true} />
  ))
  .add('empty data', () => (
    <Table pagination={false} columns={columns} />
  ))
  .add('get data from server', () => (
    <TableWithDataFromServer />
  ))
