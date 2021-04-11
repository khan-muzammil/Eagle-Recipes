import { useEffect, useState } from "react"
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TablePagination,
	TableRow,
	Checkbox,
	Chip,
	makeStyles,
} from "@material-ui/core"

import TableHead from "./TableHead"
import {
	getRecipesByPagination,
	getIncorrectDataByPagination,
	getUntaggedDataByPagination,
	getDisabledDataByPagination,
} from "../lib/utils"

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		padding: "12px 0px",
	},
	paper: {
		width: "100%",
		marginBottom: theme.spacing(2),
	},
	visuallyHidden: {
		border: 0,
		clip: "rect(0 0 0 0)",
		height: 1,
		margin: -1,
		overflow: "hidden",
		padding: 0,
		position: "absolute",
		top: 20,
		width: 1,
	},
	tableHead: {
		backgroundColor: "#84a9ff",
		color: "#fff",
	},
}))

export default function EnhancedTable({ type }) {
	const classes = useStyles()
	const [selected, setSelected] = useState([])
	const [page, setPage] = useState(0)
	const [rowsPerPage, setRowsPerPage] = useState(5)
	const [rows, setRows] = useState([])

	const getAllData = async () => {
		const data = await getRecipesByPagination()
		console.log("All data from paginated api", data)
		setRows(data)
	}
	const getIncorrectData = async () => {
		const data = await getIncorrectDataByPagination()
		console.log("Incorrect Recipes data from paginated api", data)
		setRows(data)
	}
	const getUntaggedData = async () => {
		const data = await getUntaggedDataByPagination()
		console.log("Untagged data from paginated api", data)
		setRows(data)
	}
	const getDisabledData = async () => {
		const data = await getDisabledDataByPagination()
		console.log("Disabled data from paginated api", data)
		setRows(data)
	}

	useEffect(() => {
		switch (type) {
			case "all":
				getAllData()
				break
			case "incorrect":
				getIncorrectData()
				break
			case "untagged":
				getUntaggedData()
				break
			case "disabled":
				getDisabledData()
				break
			default:
				break
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const handleSelectAllClick = (event) => {
		if (event.target.checked) {
			const newSelecteds = rows.map((n) => n.name)
			setSelected(newSelecteds)
			return
		}
		setSelected([])
	}

	const handleClick = (event, name) => {
		const selectedIndex = selected.indexOf(name)
		let newSelected = []

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, name)
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1))
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1))
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1)
			)
		}

		setSelected(newSelected)
	}

	const handleChangePage = (event, newPage) => {
		setPage(newPage)
	}

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10))
		setPage(0)
	}

	const isSelected = (name) => selected.indexOf(name) !== -1

	const emptyRows =
		rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

	return (
		<div className={classes.root}>
			<TableContainer>
				<Table
					aria-labelledby="tableTitle"
					size="medium"
					aria-label="enhanced table"
				>
					<TableHead
						classes={classes}
						numSelected={selected.length}
						onSelectAllClick={handleSelectAllClick}
						rowCount={rows.length}
					/>
					<TableBody>
						{rows.length > 0 ? (
							rows
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((row, index) => {
									const isItemSelected = isSelected(row.name)
									const labelId = `enhanced-table-checkbox-${index}`

									return (
										<TableRow
											hover
											onClick={(event) => handleClick(event, row.name)}
											role="checkbox"
											aria-checked={isItemSelected}
											tabIndex={-1}
											key={row.name}
											selected={isItemSelected}
										>
											<TableCell padding="checkbox">
												<Checkbox
													checked={isItemSelected}
													inputProps={{ "aria-labelledby": labelId }}
												/>
											</TableCell>
											<TableCell component="th" id={labelId} scope="row">
												{row.name}
											</TableCell>
											<TableCell>
												{new Date(row.lastUpdated)
													.toDateString()
													.split(" ")
													.slice(1)
													.join(" ")}
											</TableCell>
											<TableCell align="right">{row.cogs}%</TableCell>
											<TableCell align="right">{row.cost}</TableCell>
											<TableCell align="right">{row.sale}</TableCell>
											<TableCell align="right">{row.grossMargin}%</TableCell>
											<TableCell>
												{" "}
												{row.tags.map((tag, index) => (
													<Chip label={tag.name} key={index} />
												))}
											</TableCell>
										</TableRow>
									)
								})
						) : (
							<TableRow>
								<TableCell
									component="th"
									scope="row"
									align="center"
									colSpan={7}
								>
									No data available
								</TableCell>
							</TableRow>
						)}
						{emptyRows > 0 && (
							<TableRow style={{ height: 53 * emptyRows }}>
								<TableCell colSpan={6} />
							</TableRow>
						)}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[5, 10, 25]}
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</div>
	)
}
