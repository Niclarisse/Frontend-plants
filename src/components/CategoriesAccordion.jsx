import React from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';
const text = `
Finding the right health plan ensures you & your family stay financially protected when unexpected illness or injury strikes. But why stop there? ACKO Platinum Health Insurance Plans take it up a notch! With zero deductions on claims, and fantastic built-in add-ons, we provide an extra cushion during medicinal emergencies.
`;
const getItems = (panelStyle) => [
  {
    key: '1',
    label: <h1 className='text-lg font-medium'>Categories</h1>,
    children: <ul className='text-xl py-2 pl-10 cursor-pointer'>
        <li className='pt-1 cursor-pointer'>Vegetables</li>
        <li className='pt-1 cursor-pointer'>Flowers</li>
        <li className='pt-1 cursor-pointer'>Spices</li>
        <li className='pt-1 cursor-pointer'>Leaves</li>
        <li className='pt-1 cursor-pointer'>Fruit</li>
        <li className='pt-1 cursor-pointer'>Stem</li>
        <li className='pt-1 cursor-pointer'>Roots</li>
        <li className='pt-1 cursor-pointer'>Seeds</li>
        <li className='pt-1 cursor-pointer'>Lesser- known </li>
        <li className='pt-1 cursor-pointer'>Edible Plants</li>
        <li className='pt-1 cursor-pointer'>Not for kitchen daily activities</li>
    </ul>,
    style: panelStyle,
  },
];
const CategoriesAccordion = () => {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };
  return (
    <Collapse
      bordered={false}
    //   defaultActiveKey={['1']}
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      style={{
        background: token.colorBgContainer,
        width:"250px"
      }}
      items={getItems(panelStyle)}
    />
  );
};
export default CategoriesAccordion;