import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter, Roboto, Rubik, Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

// const inter = Inter({ subsets: ["latin"] });
// const roboto = Roboto({ weight: "400", subsets: ["latin"] });
// const rubik = Rubik({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
	title: "Animia",
	description: "A FullStack Website Created Using Next13",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<ThemeProvider>
					<div className="container">
						<Navbar />
						{children}
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
