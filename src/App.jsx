import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
	Redirect,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Account from "components/Account";
import Chains from "components/Chains";
import NFTBalance from "components/NFTBalance";
import NFTTokenIds from "components/NFTTokenIds";
import { Menu, Layout } from "antd";
//import SearchCollections from "components/SearchCollections";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import "./style.css";
//import Text from "antd/lib/typography/Text";
import NFTMarketTransactions from "components/NFTMarketTransactions";
const { Header, Footer } = Layout;

const styles = {
	accentColor: {
		color: "#121619",
	},
	content: {
		display: "flex",
		justifyContent: "center",
		fontFamily: "america",
		color: "#041836",
		marginTop: "84px",
	},
	header: {
		position: "relative",
		zIndex: 1,
		width: "100%",
		background: "#F2F4F8",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		fontFamily: "trailers",
		textTransform: "uppercase",
		marginBottom: "58px"
	},
	headerRight: {
		display: "flex",
		gap: "20px",
		alignItems: "center",
		fontSize: "15px",
		fontWeight: "600",
	},
	mainTitle: {
		fontWeight: "800",
		fontSize: "80px",
		lineHeight: "88px",
		textTransform: "uppercase",
		fontFamily: "trailers"
	},
	secondTitle: {
		fontWeight: "800",
		fontSize: "72px",
		lineHeight: "80px",
		fontFamily: "trailers",
		textTransform: "uppercase"
	},
	mediumTitle: {
		fontSize: "32px",
		lineHeight: "40px",
		color: "#121619",
		fontWeight: "800",
		fontFamily: "trailers",
		textTransform: "uppercase"
	},
	contact: {
		background: "#DDE1E6",
		padding: "160px 0",
	},
	footerList: {
		display: "flex",
		listStyle: "none",
		paddingLeft: "0"
	}
};
const App = ({ isServerInfo }) => {
	const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
		useMoralis();



	const [inputValue, setInputValue] = useState("explore");

	useEffect(() => {
		if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuthenticated, isWeb3Enabled]);

	return (
		<Layout style={{ height: "100%", overflow: "auto", }}>
			<Router>
				<Container fluid>
					<Col>
						<Row>
							<Header style={styles.header}>
								<Logo />
								<div style={{display: "flex", alignItems: "center"}}>
								<Menu
									style={{
										display: "flex",
										fontSize: "18px",
										fontWeight: "800",
										width: "100%",
									}}
									defaultSelectedKeys={["nftMarket"]}
								>
									<Menu.Item key="nftMarket" onClick={() => setInputValue("explore")} >
										<NavLink to="/NFTMarketPlace">🛒 Explore Market</NavLink>
									</Menu.Item>
									<Menu.Item key="nft">
										<NavLink to="/nftBalance">About</NavLink>
									</Menu.Item>
									<Menu.Item key="nft">
										<NavLink to="/nftBalance">Nft's</NavLink>
									</Menu.Item>
									<Menu.Item key="transactions">
										<NavLink to="/Transactions">📑 Your Transactions</NavLink>
									</Menu.Item>
								</Menu>
								<div style={styles.headerRight}>
									<Chains />
									<NativeBalance />
									<Account />
								</div>
								</div>
							</Header>
						</Row>
					</Col>
				</Container>
				<div style={styles.mainTitle} className="before">
					Nft's
				</div>
				<div className="filter" style={{paddingTop: "40px", display: "flex", alignItems: "center", justifyContent: "space-between", margin: "auto"}}>
					<button className="active">All</button>
					<button>Andriyancev Sergey</button>
					<button>Valeriy Kopnyak</button>
					<button>Alexandra Grigorievskaya</button>
					<button>Vladimir Surkin</button>
				</div>
				<Container>
					<Row>
						<Col>
						<div style={styles.content}>
					<Switch>
						<Route path="/nftBalance">
							<NFTBalance />
						</Route>
						<Route path="/NFTMarketPlace">
							<NFTTokenIds inputValue={inputValue} setInputValue={setInputValue} />
						</Route>
						<Route path="/Transactions">
							<NFTMarketTransactions />
						</Route>
					</Switch>
					<Redirect to="/NFTMarketPlace" />
				</div>
						</Col>
					</Row>
				</Container>
			</Router>
			<Contact />
			<Footer style={{background: "#DDE1E6" }}>
				<Container>
					<Row>
						<Col>
							<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
								<div className="terms" style={{fontSize: "14px",color: "#4D5358", fontWeight: "400"}}>
									<p>© human enoteca Inc.</p>
									<ul style={styles.footerList}>
										<li><a href="#" style={{color: "#4D5358"}}>Terms of use</a></li>
										<li><a href="#" style={{color: "#4D5358"}}>Data privacy</a></li>
									</ul>
								</div>
								<div className="social">
									<ul style={styles.footerList}>
										<li>
											<a href="#">
												<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M9.36525 0.0037452L7.03105 0C4.40866 0 2.71396 1.73871 2.71396 4.42982V6.47227H0.36703C0.164227 6.47227 0 6.63668 0 6.83949L0 9.79876C0 10.0016 0.164415 10.1658 0.36703 10.1658H2.71396L2.71396 17.633C2.71396 17.8358 2.87819 18 3.08099 18H6.14307C6.34587 18 6.5101 17.8356 6.5101 17.633L6.5101 10.1658H9.25421C9.45701 10.1658 9.62123 10.0016 9.62123 9.79876L9.62236 6.83949C9.62236 6.74211 9.5836 6.64886 9.51487 6.57994C9.44615 6.51103 9.35252 6.47227 9.25514 6.47227L6.5101 6.47227V4.74086C6.5101 3.90868 6.7084 3.48622 7.79245 3.48622L9.36488 3.48566C9.56749 3.48566 9.73172 3.32124 9.73172 3.11863V0.370775C9.73172 0.168347 9.56768 0.00411972 9.36525 0.0037452Z" fill="#242527"/>
												</svg>
											</a>
										</li>
										<li>
											<a href="#">
												<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M10 1.80078C12.6719 1.80078 12.9883 1.8125 14.0391 1.85937C15.0156 1.90234 15.543 2.06641 15.8945 2.20313C16.3594 2.38281 16.6953 2.60156 17.043 2.94922C17.3945 3.30078 17.6094 3.63281 17.7891 4.09766C17.9258 4.44922 18.0898 4.98047 18.1328 5.95313C18.1797 7.00781 18.1914 7.32422 18.1914 9.99219C18.1914 12.6641 18.1797 12.9805 18.1328 14.0313C18.0898 15.0078 17.9258 15.5352 17.7891 15.8867C17.6094 16.3516 17.3906 16.6875 17.043 17.0352C16.6914 17.3867 16.3594 17.6016 15.8945 17.7813C15.543 17.918 15.0117 18.082 14.0391 18.125C12.9844 18.1719 12.668 18.1836 10 18.1836C7.32813 18.1836 7.01172 18.1719 5.96094 18.125C4.98438 18.082 4.45703 17.918 4.10547 17.7813C3.64063 17.6016 3.30469 17.3828 2.95703 17.0352C2.60547 16.6836 2.39063 16.3516 2.21094 15.8867C2.07422 15.5352 1.91016 15.0039 1.86719 14.0313C1.82031 12.9766 1.80859 12.6602 1.80859 9.99219C1.80859 7.32031 1.82031 7.00391 1.86719 5.95312C1.91016 4.97656 2.07422 4.44922 2.21094 4.09766C2.39063 3.63281 2.60938 3.29688 2.95703 2.94922C3.30859 2.59766 3.64063 2.38281 4.10547 2.20313C4.45703 2.06641 4.98828 1.90234 5.96094 1.85937C7.01172 1.8125 7.32813 1.80078 10 1.80078ZM10 0C7.28516 0 6.94531 0.0117187 5.87891 0.0585938C4.81641 0.105469 4.08594 0.277344 3.45313 0.523438C2.79297 0.78125 2.23438 1.12109 1.67969 1.67969C1.12109 2.23438 0.78125 2.79297 0.523438 3.44922C0.277344 4.08594 0.105469 4.8125 0.0585938 5.875C0.0117188 6.94531 0 7.28516 0 10C0 12.7148 0.0117188 13.0547 0.0585938 14.1211C0.105469 15.1836 0.277344 15.9141 0.523438 16.5469C0.78125 17.207 1.12109 17.7656 1.67969 18.3203C2.23438 18.875 2.79297 19.2188 3.44922 19.4727C4.08594 19.7188 4.8125 19.8906 5.875 19.9375C6.94141 19.9844 7.28125 19.9961 9.99609 19.9961C12.7109 19.9961 13.0508 19.9844 14.1172 19.9375C15.1797 19.8906 15.9102 19.7188 16.543 19.4727C17.1992 19.2188 17.7578 18.875 18.3125 18.3203C18.8672 17.7656 19.2109 17.207 19.4648 16.5508C19.7109 15.9141 19.8828 15.1875 19.9297 14.125C19.9766 13.0586 19.9883 12.7188 19.9883 10.0039C19.9883 7.28906 19.9766 6.94922 19.9297 5.88281C19.8828 4.82031 19.7109 4.08984 19.4648 3.45703C19.2188 2.79297 18.8789 2.23438 18.3203 1.67969C17.7656 1.125 17.207 0.78125 16.5508 0.527344C15.9141 0.28125 15.1875 0.109375 14.125 0.0625C13.0547 0.0117188 12.7148 0 10 0Z" fill="#242527"/>
													<path d="M10 4.86328C7.16406 4.86328 4.86328 7.16406 4.86328 10C4.86328 12.8359 7.16406 15.1367 10 15.1367C12.8359 15.1367 15.1367 12.8359 15.1367 10C15.1367 7.16406 12.8359 4.86328 10 4.86328ZM10 13.332C8.16016 13.332 6.66797 11.8398 6.66797 10C6.66797 8.16016 8.16016 6.66797 10 6.66797C11.8398 6.66797 13.332 8.16016 13.332 10C13.332 11.8398 11.8398 13.332 10 13.332Z" fill="#242527"/>
													<path d="M16.5391 4.66028C16.5391 5.32434 16 5.8595 15.3398 5.8595C14.6758 5.8595 14.1406 5.32044 14.1406 4.66028C14.1406 3.99622 14.6797 3.46106 15.3398 3.46106C16 3.46106 16.5391 4.00012 16.5391 4.66028Z" fill="#242527"/>
												</svg>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</Footer>
		</Layout>
	);
};

export const Logo = () => (
	<a href="/" style={{ display: "flex" }}>
		<svg width="136" height="15" viewBox="0 0 136 15" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M46.7439 1.25595C46.3839 1.29095 45.7859 1.30895 45.2499 1.30895C44.5819 1.30895 43.7209 1.29095 43.2369 1.25595V1.61595C44.9419 1.85295 45.0479 2.37195 45.0479 4.77995V9.03395L37.6909 1.25595C37.2429 1.29095 36.6279 1.30895 36.0299 1.30895C35.4939 1.30895 34.8959 1.29095 34.5359 1.25595V1.61595C35.6169 1.66895 35.8189 1.85295 35.8189 3.16295V10.8359C35.8189 12.8659 35.6339 13.4019 34.5359 13.6359V13.9999C34.8999 13.9649 35.4939 13.9469 36.0299 13.9469C36.6979 13.9469 37.5679 13.9649 38.0509 13.9999V13.6399C36.3379 13.3999 36.2319 12.8839 36.2319 10.4759V5.28995L44.1999 13.9999C44.4369 13.9819 44.6569 13.9739 44.8769 13.9739C45.0969 13.9739 45.2899 13.9829 45.4659 13.9999V4.41995C45.4659 2.38995 45.6419 1.85395 46.7399 1.61995L46.7439 1.25595ZM64.2899 1.25595C64.0089 1.28195 63.6749 1.29095 63.3499 1.29095C63.0249 1.29095 62.6909 1.28195 62.4009 1.25595L58.3999 11.5299C57.8299 13.0239 57.2999 13.5519 56.7489 13.6399V13.9999C57.1089 13.9649 57.6629 13.9469 58.1379 13.9469C58.9639 13.9469 59.5969 13.9649 60.4929 13.9999V13.6399C59.5349 13.6049 58.8669 13.3849 58.8669 12.3299C58.924 11.5201 59.1202 10.7262 59.4469 9.98295L59.7549 9.17395H63.3849L64.4569 12.1269C64.5778 12.3968 64.6522 12.6852 64.6769 12.9799C64.6769 13.4719 64.2639 13.6039 63.4109 13.6389V13.9999C64.0529 13.9649 65.2109 13.9469 66.4339 13.9469C67.6209 13.9469 68.8419 13.9649 69.7119 13.9999V13.6399C69.3869 13.6219 68.9739 13.3149 68.6489 12.4889L64.2899 1.25595ZM63.2619 8.81395H59.8999L61.6309 4.31395L63.2619 8.81395ZM92.6729 13.0419C92.604 13.1202 92.5185 13.1821 92.4227 13.2231C92.3268 13.2641 92.2231 13.2832 92.1189 13.2789C91.7059 13.2789 91.4859 13.0069 91.3099 12.1099L90.9319 10.2379C90.6519 8.77095 89.4569 8.03195 86.9999 7.89195C90.4369 7.55795 91.3999 5.98495 91.3999 4.40295C91.3999 2.28495 89.6329 1.27395 85.9769 1.27395C85.5109 1.27395 84.2899 1.30895 83.0849 1.30895C81.9339 1.30895 80.6679 1.29095 79.9849 1.25595V1.61595C81.0659 1.66895 81.2679 1.85295 81.2679 3.16295V12.0929C81.2679 13.4029 81.0829 13.5869 79.9849 13.6399V13.9999C80.6709 13.9649 81.8919 13.9469 83.1929 13.9469C84.3089 13.9469 85.4929 13.9649 86.1989 13.9999V13.6399C85.1149 13.5869 84.9129 13.3999 84.9129 12.0929V7.95295H85.7299C86.6439 7.95295 86.9519 9.03395 87.1629 10.5109L87.4349 12.2999C87.6549 13.7769 88.6349 14.2509 90.2119 14.2509C90.7053 14.2877 91.2009 14.2197 91.6662 14.0515C92.1315 13.8833 92.556 13.6187 92.9119 13.2749L92.6729 13.0419ZM85.8879 1.61595C87.1619 1.61595 87.6189 2.71595 87.6189 4.60395C87.6189 6.25595 87.2409 7.59195 85.4039 7.59195H84.9119V3.16195C84.9129 1.92395 85.0799 1.61595 85.8879 1.61595ZM114.888 1.25595C113.183 1.30895 110.713 1.30895 109.026 1.30895C107.339 1.30895 104.851 1.30895 103.137 1.25595C103.225 2.67995 103.26 4.12095 103.26 4.82395C103.264 5.25523 103.246 5.68645 103.207 6.11595H103.62C104.473 2.71595 105.852 1.66895 107.171 1.66895H107.189V11.9689C107.189 13.4459 106.846 13.6389 105.189 13.6389V13.9999C106 13.9819 107.4 13.9469 108.892 13.9469C110.465 13.9469 111.992 13.9819 112.838 13.9999V13.6399C111.186 13.6399 110.838 13.4469 110.838 11.9699V1.66995H110.856C112.148 1.66995 113.556 2.73295 114.398 6.11695H114.811C114.771 5.68745 114.754 5.25623 114.758 4.82495C114.763 4.12095 114.8 2.67995 114.886 1.25595H114.888ZM131 0.999948C128.68 0.999948 126.544 2.04595 126.544 4.39995C126.544 6.38595 128.038 7.42295 129.744 8.56595C131.273 9.58595 132.372 10.4559 132.372 11.9499C132.372 13.0659 131.528 13.7079 130.21 13.7079C127.91 13.7079 127.081 11.4399 126.94 8.89995H126.527C126.527 11.9849 126.501 13.2069 126.448 14.1209H126.861C126.94 13.6019 127.028 13.3299 127.261 13.3299C127.482 13.3586 127.692 13.4468 127.867 13.5849C128.858 14.0686 129.955 14.2982 131.057 14.2529C133.685 14.2529 135.957 13.1189 135.957 10.6849C135.957 8.72495 134.639 7.73195 133.039 6.61595C130.771 5.03395 129.866 4.49795 129.866 3.16195C129.861 2.92664 129.906 2.69292 129.999 2.4766C130.091 2.26028 130.229 2.0664 130.404 1.90807C130.578 1.74974 130.784 1.63065 131.008 1.55887C131.232 1.48708 131.469 1.46425 131.703 1.49195C133.575 1.49195 134.709 3.59195 134.841 5.57895H135.254C135.254 2.87195 135.289 1.95795 135.342 1.18395H134.929C134.859 1.70295 134.771 1.97495 134.529 1.97495C134.306 1.94279 134.094 1.85511 133.914 1.71995C133.033 1.20163 132.021 0.951416 131 0.999948Z" fill="#121619" />
			<path d="M19 0H0V14H19V0Z" fill="#0F62FE" />
		</svg>
	</a>
);

export const Contact = () => (
	<section style={styles.contact}>
		<Container>
			<Row>
				<Col lg={6}>
					<div style={styles.secondTitle}>
						Still have a question?<br />Contact Us
					</div>
					<div style={{ display: "flex", alignItems: "center", marginTop: "38px" }}>
						<div>
							<p style={{ color: "#4D5358" }}>Telegram</p>
							<a style={styles.mediumTitle} href="#">@projectname</a>
						</div>
						<div style={{ marginLeft: "80px" }}>
							<p style={{ color: "#4D5358" }}>Email</p>
							<a style={styles.mediumTitle} href="mailto:#">Albert@projectname.domain</a>
						</div>
					</div>
				</Col>
				<Col lg={6}>
					<form className="contact-form">
						<div className="form-floating">
							<input type="text" id="fullname" name="user_name" placeholder="fullname" required />
							<label htmlFor="fullname">Full name</label>
						</div>
						<div className="form-floating">
							<input type="email" id="email" name="user_email" placeholder="email" required />
							<label htmlFor="email">Email</label>
						</div>
						<div className="form-floating">
							<input type="text" id="message" name="user_message" placeholder="Message" />
							<label htmlFor="message">Message</label>
						</div>
						<div style={{ display: "flex", alignItems: "center" }}>
							<button>
								<svg width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clip-path="url(#clip0_68_928)">
										<path d="M16.6493 0.707153H15.0378C15.0378 4.06615 16.4888 6.53865 19.3903 8.09715H0.717773V9.81715H19.3898C16.4883 11.3757 15.0373 13.8482 15.0373 17.2072H16.6493C16.6493 14.9232 17.4553 13.0957 19.0403 11.7787C20.6253 10.4622 22.8823 9.81715 25.7568 9.81715V8.09715C22.8818 8.09715 20.6253 7.42565 19.0403 6.10865C17.4553 4.79165 16.6493 2.99115 16.6493 0.707153Z" fill="#121619" />
									</g>
									<defs>
										<clipPath id="clip0_68_928">
											<rect width="25.5" height="16.5" fill="white" transform="translate(0.717773 0.707153)" />
										</clipPath>
									</defs>
								</svg>
							</button>
							<div style={{ color: "#4D5358", fontSize: "14px", marginLeft: "32px" }}>
								By clicking submit you are agreeing to the <a href="#" style={{ color: "#121619", textDecoration: "underline" }}>Terms and Conditions</a>
							</div>
						</div>
					</form>
				</Col>
			</Row>
		</Container>
	</section>
);

export default App;
