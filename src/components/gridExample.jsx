import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";

// ✅ NEW: import and register AG Grid modules
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModule]);

// ✅ CSS for AG Grid
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export default function GridExample() {
  const [rowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  const [colDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
    { field: "discription"}
  ]);

  return (
    <div
      className="ag-theme-alpine"
      style={{ width: "100%", height: 300, marginTop: 20 }}
    >
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
}
