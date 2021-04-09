import React from "react"

import { DataGrid } from "@material-ui/data-grid"
import { makeStyles, Paper } from "@material-ui/core"

const columns = [
	{ field: "name", headerName: "NAME", width: 200 },
	{ field: "lastUpdated", headerName: "LAST UPDATED", width: 200 },
	{ field: "cogs", headerName: "COGS%", width: 200 },
	{
		field: "cost",
		headerName: "COST PRICE",
		type: "number",
		width: 90,
	},
	{
		field: "sale",
		headerName: "SALE PRICE",
		description: "This column has a value getter and is not sortable.",
		sortable: false,
		width: 160,
		valueGetter: (params) =>
			`${params.getValue("firstName") || ""} ${
				params.getValue("lastName") || ""
			}`,
	},
	{
		field: "grossMargin",
		headerName: "GROSS MARGIN",
		type: "number",
		width: 90,
	},
	{
		field: "tags",
		headerName: "TAGS/ACTIONS",
		width: 90,
	},
]

const rows = [
	{
		id: 1,
		name: 1,
		lastUpdated: "Snow",
		cogs: "Jon",
		cost: 35,
		sale: 1400,
		grossMargin: 10,
		tags: "Indian",
	},
	{
		id: 2,
		name: 2,
		lastUpdated: "Lannister",
		cogs: "Cersei",
		cost: 42,
		sale: 1400,
		grossMargin: 10,
		tags: "Indian",
	},
	{
		id: 3,
		name: 3,
		lastUpdated: "Lannister",
		cogs: "Jaime",
		cost: 45,
		sale: 1400,
		grossMargin: 10,
		tags: "Indian",
	},
	{
		id: 4,
		name: 4,
		lastUpdated: "Stark",
		cogs: "Arya",
		cost: 16,
		sale: 1400,
		grossMargin: 10,
		tags: "Indian",
	},
	{
		id: 5,
		name: 5,
		lastUpdated: "Targaryen",
		cogs: "Daenerys",
		cost: null,
		sale: 1400,
		grossMargin: 10,
		tags: "Indian",
	},
	{
		id: 6,
		name: 6,
		lastUpdated: "Melisandre",
		cogs: null,
		cost: 150,
		sale: 1400,
		grossMargin: 10,
		tags: "Indian",
	},
	{
		id: 7,
		name: 7,
		lastUpdated: "Clifford",
		cogs: "Ferrara",
		cost: 44,
		sale: 1400,
		grossMargin: 10,
		tags: "Indian",
	},
	{
		id: 8,
		name: 8,
		lastUpdated: "Frances",
		cogs: "Rossini",
		cost: 36,
		sale: 1400,
		grossMargin: 10,
		tags: "Indian",
	},
	{
		id: 9,
		name: 9,
		lastUpdated: "Roxie",
		cogs: "Harvey",
		cost: 65,
		sale: 1400,
		grossMargin: 10,
		tags: "Indian",
	},
]

export default function TableComponent() {
	return (
		<Paper style={{ height: 400, width: "100%" }} className="table-class">
			<DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
		</Paper>
	)
}
