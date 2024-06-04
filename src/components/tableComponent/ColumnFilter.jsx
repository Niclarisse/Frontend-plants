import React from 'react';

const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <div className="flex flex-col">
      <p className="w-fit font-rubik mb-2">{column.Header}</p>
      <input
        defaultValue={filterValue || ''}
        placeholder={`Filter ${column.Header}`}
        className="w-full rounded-lg outline-none font-nunito border border-fontGrey/50 p-2"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
    </div>
  );
};

export default ColumnFilter;
