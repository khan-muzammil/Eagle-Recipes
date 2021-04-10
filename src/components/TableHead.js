import { Checkbox, TableCell, TableHead, TableRow } from "@material-ui/core"

const headCells = [
	{
		id: "name",
		numeric: false,
		label: "NAME",
	},
	{
		id: "lastUpdated",
		numeric: false,

		label: "Last Updated",
	},
	{ id: "cogs", numeric: true, label: "COGS%" },
	{ id: "cost", numeric: true, label: "COST PRICE" },
	{ id: "sale", numeric: true, label: "SALE PRICE" },
	{
		id: "grossMargin",
		numeric: true,

		label: "GROSS MARGIN",
	},
	{ id: "tags", numeric: false, label: "TAGS/ACTIONS" },
]

export default function EnhancedTableHead(props) {
	const { classes, onSelectAllClick, numSelected, rowCount } = props

	return (
		<TableHead>
			<TableRow className={classes.tableHead}>
				<TableCell padding="checkbox">
					<Checkbox
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={rowCount > 0 && numSelected === rowCount}
						onChange={onSelectAllClick}
						inputProps={{ "aria-label": "select all desserts" }}
					/>
				</TableCell>
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={headCell.numeric ? "right" : "left"}
						/* padding={headCell.disablePadding ? "none" : "default"} */
						style={{ color: "#fff" }}
					>
						{headCell.label}
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	)
}
