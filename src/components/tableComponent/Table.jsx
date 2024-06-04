import React, { useState, useEffect, useRef } from "react";
import {
  useGlobalFilter,
  usePagination,
  useTable,
  useSortBy,
  useFilters,
} from "react-table";
import { useReactToPrint } from "react-to-print";
import DataPagination from "./DataPagination";
import { DownloadTableExcel } from "react-export-table-to-excel";
import TableFilter from "react-table-filter";
import "react-table-filter/lib/styles.css";

import { IoFilterOutline } from "react-icons/io5";
import { RiSearch2Line } from "react-icons/ri";
import Button1 from "../Button1";
import { PiExportLight } from "react-icons/pi";

export default function Table({
  columns,
  data,
  title,
  action,
  hideSearch = false,
  hideFilter = false,
}) {
  const [filteredData, setFilteredData] = useState([]);

  const sortedColumns = React.useMemo(() => [...columns], [columns]);

  const TableInstance = useTable(
    {
      data: filteredData,
      columns: sortedColumns,
      initialState: { pageSize: 100 },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    setGlobalFilter,
    getTableBodyProps,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    gotoPage,
    pageCount,
    setPageSize,
    pageOptions,
    headerGroups,
    rows,
    prepareRow,
    state,
  } = TableInstance;

  const { globalFilter, pageIndex, pageSize } = state;
  const [show, setShow] = useState(false);
  const [customFilters, setCustomFilters] = useState({});

  const [toggleFilters, setToggleFilters] = useState(false);

  const updateFilterHandler = (newData) => {
    setFilteredData(newData);
  };

  useEffect(() => {
    filterRef?.current?.reset(data, true);
    setFilteredData(data);
  }, [data]);

  // limit the number of rows per page

  const filterRef = useRef(null);

  // export to pdf

  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: title,
    pageStyle: "print",
  });

  useEffect(() => {
    const filteredData = data?.filter((row) => {
      // Helper function to check for a match on a single property
      const matchesProperty = (row, filterProperty) => {
        const filterValue = customFilters[filterProperty];
        return !filterValue || row?.[filterProperty]?.includes(filterValue);
      };

      // Combine match conditions using AND operator
      return Object.keys(customFilters).every((filterProperty) =>
        matchesProperty(row, filterProperty)
      );
    });

    setFilteredData(filteredData);
  }, [data, customFilters]);

  return (
    <div className="w-full flex flex-col rounded-t-2xl font-sans">
      <div
        className={`w-full ${
          hideSearch ? "hidden" : "flex "
        }  flex-col lg:flex-row  justify-between items-center  py-4 rounded-t-2xl bg-white p-4`}
      >
        {title ? <div className="w-full">{title}</div> : null}
        <div className="flex gap-2 w-full capitalize">
          <div className="flex  w-full lg:w-[60%] border rounded-lg border-primary border-opacity-25 min-h-[40px] justify-center items-center px-2 gap-2">
            <RiSearch2Line size={25} color="#C9C9C9" />
            <input
              defaultValue={globalFilter || ""}
              placeholder="Search something"
              className="w-full rounded outline-none font-sans"
              onChange={(e) => {
                setGlobalFilter(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-row max-h-[40px] lg:justify-center items-center lg:ml-4 space-x-2">
            <div>
              <button
                type="button"
                onClick={() => {
                  setShow(!show);
                }}
                className="bg-white text-white px-4 w-max rounded "
              >
                <div className="flex items-center text-black gap-2">
                  <p className="text-lg"> Export</p>
                </div>
              </button>
              <ul
                className={`absolute  mt-2  shadow-lg z-10 ${
                  show ? "block" : "hidden"
                } group-hover:block w-[100px]`}
              >
                <svg
                  className="block fill-current  w-4 h-4 absolute text-white left-0 top-0 ml-3 -mt-3 z-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                </svg>
                <li className="p-1 whitespace-no-wrap  text-sm text-gray-600  hover:bg-[#D9D9D9] cursor-pointer">
                  <a className="px-2 py-1">
                    <span className="">
                      <DownloadTableExcel
                        filename="table"
                        sheet={title}
                        currentTableRef={componentRef.current}
                      >
                        <button>XLS</button>
                      </DownloadTableExcel>
                    </span>
                  </a>
                </li>
                <li className="p-1 whitespace-no-wrap text-sm  text-gray-600  hover:bg-[#D9D9D9] cursor-pointer">
                  <a className="px-2 py-1">
                    <span className="">
                      <button type="button" onClick={handlePrint}>
                        PDF
                      </button>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {action ? <div className="w-full mx-6">{action}</div> : null}
          {hideFilter ? null : (
            <Button1
              type="button"
              content={
                <div className="flex items-center gap-4 justify-center">
                  <IoFilterOutline size={20} />
                  <p className="text-fontGrey">Filter</p>
                </div>
              }
              loading={false}
              onClick={() => {
                setToggleFilters((prevData) => {
                  return !prevData;
                });
              }}
              btnColor="white"
              Style={
                "text-fontGrey h-12 w-fit border border-fontGrey rounded-lg"
              }
            />
          )}
        </div>
      </div>

      <div
        className={`rounded-b-2xl bg-white px-4 pb-4 transition-all ${
          toggleFilters ? "h-[108px] mb-4" : "h-[0px] opacity-0"
        }`}
      >
        <div className="flex justify-between gap-2 border-t-[2px] border-t-fontGrey/20 p-4">
          {columns.map((column) => {
            const { filterValue, setFilter } = column;
            return column.filtable === "true" ? (
              <div key={column.accessor} className="flex flex-col">
                <p className="w-fit font-sans mb-2">{column.Header}</p>
                <input
                  id={`filter-${column.accessor}`}
                  data-testid="filter-input"
                  defaultValue=""
                  placeholder={`Filter by ${column.Header}`}
                  className="w-full rounded-lg outline-none font-sans border border-fontGrey/50 p-2"
                  onChange={(e) =>
                    setCustomFilters({
                      ...customFilters,
                      [column.accessor]: e.target.value,
                    })
                  }
                />
              </div>
            ) : null;
          })}
        </div>
      </div>

      <table
        {...getTableProps()}
        className="w-full  border border-lightWhite border-spacing-2 bg-white"
        ref={componentRef}
      >
        <thead className="bg-white border border-lightWhite">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} style={{}}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column)}
                  className="p-[15px] text-start border-[5px] border-r-lightWhite border-l-white border-t-white border-b-lightWhite w-fit" //new changes
                  filterkey={column.Header}
                  showsearch={"true"}
                >
                  <div> {column.render("Header")}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {data?.length > 0 && (
          <tbody {...getTableBodyProps()} className="">
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className={`border-[3px] border-separate border-spacing-2 border-lightWhite`}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>
                        <div className="flex  p-[10px]  font-semibold font-sans text-sm">
                          {cell.render("Cell")}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
      <DataPagination
        pageOptions={pageOptions}
        canNextPage={canNextPage}
        gotoPage={gotoPage}
        columnLength={columns.length}
        canPreviousPage={canPreviousPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
        previousPage={previousPage}
        nextPage={nextPage}
        pageCount={pageCount}
        pageIndex={pageIndex}
      />
    </div>
  );
}
