import {
	Box,
	Card,
	CardContent,
	CardHeader,
	CircularProgress,
	makeStyles,
	Typography,
} from "@material-ui/core"
import axios from "axios"
import React, { useEffect, useState } from "react"

const useStyles = makeStyles((theme) => ({
	card: {
		margin: "0px 10px",
	},
	cardHeaderText: {
		fontSize: 16,
		textAlign: "center",
		color: "grey",
		fontWeight: 600,
	},
	cardHeader: {
		backgroundColor: "#f3edfc",
	},
	circularProgress: {
		color: "green",
	},
	circularProgressRed: {
		color: "red",
	},
	progressComponenet: {
		textAlign: "center",
		margin: "0px 10px",
	},
	progressTitle: {
		wordWrap: "break-word",
		fontWeight: 400,
		color: "grey",
	},
}))

export default function RecipeCardByMargin({ marginOrder }) {
	const classes = useStyles()
	const [data, setData] = useState([])

	const fetchMargin = async (order) => {
		const { data } = await axios.get(
			`https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/margin-group/?order=${
				order ? "top" : "bottom"
			}`
		)

		setData(data.results)
	}
	useEffect(() => {
		fetchMargin(marginOrder)

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		<Card className={classes.card}>
			<CardHeader
				classes={{ title: classes.cardHeaderText }}
				className={classes.cardHeader}
				title={`High Margin Recipies`}
			/>
			<CardContent style={{ display: "flex" }}>
				{data &&
					data.map((elem, id) => (
						<div className={classes.progressComponenet} key={elem.name}>
							<p className={classes.progressTitle}>{elem.name}</p>
							<CircularProgressWithLabel
								variant="determinate"
								value={elem.margin}
								className={
									marginOrder
										? classes.circularProgress
										: classes.circularProgressRed
								}
							/>
						</div>
					))}
			</CardContent>
		</Card>
	)
}

function CircularProgressWithLabel(props) {
	return (
		<Box position="relative" display="inline-flex">
			<CircularProgress variant="determinate" {...props} size={60} />
			<Box
				top={0}
				left={0}
				bottom={0}
				right={0}
				position="absolute"
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<Typography
					variant="caption"
					component="div"
					color="textSecondary"
				>{`${Math.round(props.value)}%`}</Typography>
			</Box>
		</Box>
	)
}
