import {
	Box,
	Card,
	CardContent,
	CardHeader,
	CircularProgress,
	makeStyles,
	Typography,
} from "@material-ui/core"
import React from "react"

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
	progressComponenet: {
		textAlign: "center",
		margin: "0px 10px",
		/* width: "100px", */
	},
	progressTitle: {
		wordWrap: "break-word",
		fontWeight: 400,
		color: "grey",
	},
}))

export default function CardSection() {
	const classes = useStyles()
	return (
		<div style={{ display: "flex" }}>
			<Card className={classes.card}>
				<CardHeader
					classes={{ title: classes.cardHeaderText }}
					className={classes.cardHeader}
					title="High Margin Recipies"
				/>
				<CardContent style={{ display: "flex" }}>
					<div className={classes.progressComponenet}>
						<p className={classes.progressTitle}>Ambari Biryani</p>
						<CircularProgressWithLabel
							variant="determinate"
							value={75}
							className={classes.circularProgress}
						/>
					</div>
					<div className={classes.progressComponenet}>
						<p className={classes.progressTitle}>Ambari Biryani MAsala asdf</p>
						<CircularProgressWithLabel
							variant="determinate"
							value={75}
							className={classes.circularProgress}
						/>
					</div>
					<div className={classes.progressComponenet}>
						<p className={classes.progressTitle}>Ambari Biryani</p>
						<CircularProgressWithLabel
							variant="determinate"
							value={75}
							className={classes.circularProgress}
						/>
					</div>
				</CardContent>
			</Card>
			<Card className={classes.card}>
				<CardHeader
					classes={{ title: classes.cardHeaderText }}
					className={classes.cardHeader}
					title="High Margin Recipies"
				/>
				<CardContent style={{ display: "flex" }}>
					<div className={classes.progressComponenet}>
						<p className={classes.progressTitle}>Ambari Biryani</p>
						<CircularProgressWithLabel
							variant="determinate"
							value={75}
							className={classes.circularProgress}
						/>
					</div>
					<div className={classes.progressComponenet}>
						<p className={classes.progressTitle}>Ambari Biryani MAsala asdf</p>
						<CircularProgressWithLabel
							variant="determinate"
							value={75}
							className={classes.circularProgress}
						/>
					</div>
					<div className={classes.progressComponenet}>
						<p className={classes.progressTitle}>Ambari Biryani</p>
						<CircularProgressWithLabel
							variant="determinate"
							value={75}
							className={classes.circularProgress}
						/>
					</div>
				</CardContent>
			</Card>
			<Card className={classes.card}>
				<CardHeader
					classes={{ title: classes.cardHeaderText }}
					className={classes.cardHeader}
					title="High Margin Recipies"
				/>
				<CardContent style={{ display: "flex" }}>
					<div className={classes.progressComponenet}>
						<p className={classes.progressTitle}>Ambari Biryani</p>
						<CircularProgressWithLabel
							variant="determinate"
							value={75}
							className={classes.circularProgress}
						/>
					</div>
					<div className={classes.progressComponenet}>
						<p className={classes.progressTitle}>Ambari Biryani MAsala asdf</p>
						<CircularProgressWithLabel
							variant="determinate"
							value={75}
							className={classes.circularProgress}
						/>
					</div>
					<div className={classes.progressComponenet}>
						<p className={classes.progressTitle}>Ambari Biryani</p>
						<CircularProgressWithLabel
							variant="determinate"
							value={75}
							className={classes.circularProgress}
						/>
					</div>
				</CardContent>
			</Card>
		</div>
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
