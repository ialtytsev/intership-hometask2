import React from "react";

const HeaderRow: React.FC<{
  columns: string[];
  isSummary?: boolean;
}> = ({ columns, isSummary = false }) => {
  return (
    <tr>
      <th> </th>

      {columns.map((col) => (
        <th key={col} className={`cell-${col}`}>
          {col}
        </th>
      ))}

      {isSummary === false && (
        <th className="cell-btn">
          <button className="btn-action btn-archive-white"></button>
          <button className="btn-action btn-trash-white"></button>
        </th>
      )}
    </tr>
  );
};

export default HeaderRow;
