import React from 'react';
import Table from '../../../src/components/Table';
import DivWithStyle from './PropsTable.style';


function PropsTable({type}) {
  if (!type) {
    return;
  }

  const typeName = type.__docgenInfo.displayName;
  const props = type.__docgenInfo.props || {};

  const dataSource = Object.keys(props).map((prop, index) => {
    const type = (props[prop].type.name !== 'enum') ? props[prop].type.name : `${props[prop].type.name}: ${props[prop].type.value.map(v => v.value).join(', ')}`
    return {
      key: index+1,
      property: `${prop} ${(props[prop].required) ? '(required)' : ''}`,
      description: props[prop].description,
      type,
      default: (props[prop].defaultValue) ? props[prop].defaultValue.value : '-'
    }
  });


  const columns = [
    {
      title: 'Property',
      key: 'property',
      dataIndex: 'property'
    },
    {
      title: 'Description',
      key: 'description',
      dataIndex: 'description'
    },
    {
      title: 'Type',
      key: 'type',
      dataIndex: 'type'
    },
    {
      title: 'Default',
      key: 'default',
      dataIndex: 'default'
    },
  ]

  return (
    <DivWithStyle>
      <h2>{typeName} Props</h2>
      <Table columns={columns} dataSource={dataSource} pagination={false} direction="ltr" />
    </DivWithStyle>
  )
}

export default PropsTable;
