import React from "react";
import TableRow from "./TableRow";

export interface ProductPropsTypes {
  id: string;
  productName: string;
  color: string;
  category: string;
  price: string;
}


const Table: React.FC<{ data: ProductPropsTypes[] }> = ({ data }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex flex-row-reverse items-center">
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              نام محصول
            </th>
            <th scope="col" className="px-6 py-3">
              رنگ
            </th>
            <th scope="col" className="px-6 py-3">
              دسته بندی
            </th>
            <th scope="col" className="px-6 py-3">
              قیمت
            </th>
            <th scope="col" className="px-6 py-3">
              ***
            </th>
          </tr>
        </thead>

        <tbody>
          {data?.map((product) => (
            <TableRow
              key={product.id}
              id={product.id}
              productName={product.productName}
              color={product.color}
              category={product.category}
              price={product.price}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
