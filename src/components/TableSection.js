import { AppBar, Box, Container, Paper, Tab, Tabs } from "@material-ui/core"
import React from "react"
import TableComponent from "./TableComponent"

export default function TableSection() {
	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}
	return (
		<div style={{ marginTop: 20, width: "98%" }}>
			<AppBar
				position="static"
				style={{ color: "#000", backgroundColor: "#fff" }}
			>
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
				<Paper>
					<TableComponent />
				</Paper>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Paper
					style={{
						height: 400,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					No data available
				</Paper>
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Paper
					style={{
						height: 400,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					No data available
				</Paper>
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
				<Container style={{ margin: 0, padding: 0, maxWidth: "unset" }}>
					<Box as={Container}>{children}</Box>
				</Container>
			)}
		</div>
	)
}
