import "./globals.css";

export const metadata = {
				title: "Pages Authenticator Activity",
};
			
export default function RootLayout({ children }) {
	return (
		<html>
			<body>{children}</body>
		</html>
);
}
