import {
	Card,
	CardContent,
	CardHeader,
	makeStyles,
	Typography,
} from "@material-ui/core"
import axios from "axios"
import React, { useEffect, useState } from "react"

const useStyles = makeStyles((theme) => ({
	card: {
		margin: "0px 10px",
		width: 500,
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
	progressComponenet: {
		textAlign: "center",
		margin: "0px 10px",
	},
	progressTitle: {
		wordWrap: "break-word",
		fontWeight: 400,
		color: "grey",
	},
	redText: {
		color: "red",
	},
	greenText: {
		color: "green",
	},
}))

export default function RecipeCardByFluctuation() {
	const classes = useStyles()
	const [data, setData] = useState([])

	const fetchFluctuations = async (order) => {
		const { data } = await axios.get(
			`https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/fluctuation-group/?order=top`
		)

		setData(data.results)
	}
	useEffect(() => {
		fetchFluctuations()

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
						<>
							<div className={classes.progressComponenet} key={elem.name}>
								<p className={classes.progressTitle}>{elem.name}</p>
								{Math.random() * 10 > 5 ? (
									<Typography
										variant="h6"
										component="div"
										className={classes.redText}
									>
										{`${Math.round(elem.fluctuation)}%`} ⇩
									</Typography>
								) : (
									<Typography
										variant="h6"
										component="div"
										className={classes.greenText}
									>
										{`${Math.round(elem.fluctuation)}%`} ⇧
									</Typography>
								)}
							</div>
						</>
					))}
			</CardContent>
		</Card>
	)
}
