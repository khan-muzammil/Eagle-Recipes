import "./App.css"
import { Box } from "@material-ui/core"
import CardSection from "./components/CardSection"
import TableSection from "./components/TableSection"

function App() {
	return (
		<Box className="container">
			<CardSection />
			<TableSection />
		</Box>
	)
}

export default App
