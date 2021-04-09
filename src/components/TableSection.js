import { AppBar, Box, Tab, Tabs, Typography } from "@material-ui/core"
import React from "react"
import TableComponent from "./TableComponent"

export default function TableSection() {
	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}
	return (
		<div style={{ marginTop: 20, width: "98%" }}>
			<AppBar position="static">
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="simple tabs example"
				>
					<Tab label="All Recipe(s)" />
					<Tab label="Incorrect" />
					<Tab label="Untagged" />
					<Tab label="disabled" disabled />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				<TableComponent />
			</TabPanel>
			<TabPanel value={value} index={1}>
				No data available
			</TabPanel>
			<TabPanel value={value} index={2}>
				No data available
			</TabPanel>
		</div>
	)
}

function TabPanel(props) {
	const { children, value, index, ...other } = props

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	)
}
