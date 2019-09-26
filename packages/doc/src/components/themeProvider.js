import * as React from "react";

import { ThemeProvider as GympassThemeProvider } from "@gympass/design-system/"
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import {default as defaultTheme } from "./theme";

import Header from './Header';
import './styles.css';

export default function ThemeProvider({ children, theme = {}, location }) {
	return ( 
		<div>
			<GympassThemeProvider>

				<Header location = {location}/>
				<EmotionThemeProvider theme = {{...defaultTheme,...theme}}>
					{children}
				</EmotionThemeProvider>
				
			</GympassThemeProvider>
		</div>
	);
}