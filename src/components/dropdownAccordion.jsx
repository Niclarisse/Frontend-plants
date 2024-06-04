import React from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';
const text = `
Finding the right health plan ensures you & your family stay financially protected when unexpected illness or injury strikes. But why stop there? ACKO Platinum Health Insurance Plans take it up a notch! With zero deductions on claims, and fantastic built-in add-ons, we provide an extra cushion during medicinal emergencies.
`;
const getItems = (panelStyle) => [
  {
    key: '1',
    label: <h1 className='text-lg font-medium'>medicinal Plants</h1>,
    children: <ul className='text-xl py-2 pl-10 cursor-pointer'>
        <li className='pt-1 cursor-pointer'>Vegetables</li>
        <li className='pt-1 cursor-pointer'>Flowers</li>
        <li className='pt-1 cursor-pointer'>Spices</li>
        <li className='pt-1 cursor-pointer'>Edible Plants</li>
        <li className='pt-1 cursor-pointer'>Not for kitchen daily activities</li>
    </ul>,
    style: panelStyle,
  },
  {
    key: '2',
    label: <h1 className='text-lg font-medium cursor-pointer'>Shop With Our Parteners</h1>,
    children:  <ul className='text-xl py-2 pl-10'>
    <li className='pt-1 cursor-pointer'>Cigna HealthCare</li>
    <li className='pt-1 cursor-pointer'>CoverSure</li>
    <li className='pt-1 cursor-pointer'>Acko</li>
</ul>,
    style: panelStyle,
  },
  {
    key: '3',
    label:  <h1 className='text-lg font-medium cursor-pointer'>Benefits</h1>,
    children: <p className='text-base pl-10'>{text}</p>,
    style: panelStyle,
  },
];
const DropDownAccordion = () => {
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
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      style={{
        background: token.colorBgContainer,
      }}
      items={getItems(panelStyle)}
    />
  );
};
export default DropDownAccordion;