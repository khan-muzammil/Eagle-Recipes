import React from "react"
import RecipeCardByFluctuation from "./RecipeCardByFluctuation"
import RecipeCardByMargin from "./RecipeCardByMargin"

export default function CardSection() {
	return (
		<div style={{ display: "flex" }}>
			<RecipeCardByMargin marginOrder={true} />
			<RecipeCardByMargin marginOrder={false} />

			<RecipeCardByFluctuation />
		</div>
	)
}
