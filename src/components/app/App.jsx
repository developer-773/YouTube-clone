import { Box, Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Navbar, Channel, Main, Search, VideoDetails } from "../index";

export const App = () => {
	return (
		<Container maxWidth="xl">
			<Box>
				<Navbar />
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/channlel?:id" element={<Channel />} />
					<Route path="/videodetails/:id" element={<VideoDetails />} />
					<Route path="/search/:id" element={<Search />} />
				</Routes>
			</Box>
		</Container>
	);
};
