import React from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Register ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerALign: "left",
      align: "left",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    {
      field: "email",
      headerName: "E-mail",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of contacts for Future References"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.lightpink[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.lightpurple[700],
            borderBottom: "none",
          },
          "$ .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: colors.yellow[700],
          },
          "& .MuiDatagrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </Box>
    </Box>
  );
};

export default Team;
