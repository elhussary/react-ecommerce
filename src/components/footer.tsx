import FooterLogo from '@/assets/footer-logo.png';

const Footer = () => {
	return (
		<footer className="bg-white pt-20 border-t">
			<section className="container grid md:grid-cols-2 justify-between">
				<div className="space-y-4 mb-10">
					<img src={FooterLogo} alt="Footer Logo" />
					<p className="text-muted-foreground">
						DevCut is a YouTube channel for <br></br>practical project-based learning.
					</p>

					<ul className="flex space-x-6">
						<li>
							<a href="#">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
										fill="#5C5F6A"
									/>
								</svg>
							</a>
						</li>

						<li>
							<a href="#">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M11.9973 6.86903C9.15795 6.86903 6.86644 9.16058 6.86644 12C6.86644 14.8394 9.15795 17.131 11.9973 17.131C14.8367 17.131 17.1282 14.8394 17.1282 12C17.1282 9.16058 14.8367 6.86903 11.9973 6.86903ZM11.9973 15.3348C10.1611 15.3348 8.66262 13.8362 8.66262 12C8.66262 10.1638 10.1611 8.66525 11.9973 8.66525C13.8335 8.66525 15.332 10.1638 15.332 12C15.332 13.8362 13.8335 15.3348 11.9973 15.3348ZM17.3383 5.46308C16.6754 5.46308 16.14 5.99845 16.14 6.66139C16.14 7.32434 16.6754 7.8597 17.3383 7.8597C18.0013 7.8597 18.5366 7.32684 18.5366 6.66139C18.5368 6.50397 18.5059 6.34806 18.4458 6.20259C18.3856 6.05711 18.2974 5.92493 18.1861 5.81362C18.0748 5.70231 17.9426 5.61405 17.7971 5.5539C17.6516 5.49375 17.4957 5.46289 17.3383 5.46308ZM21.9989 12C21.9989 10.6191 22.0114 9.25064 21.9338 7.87221C21.8563 6.27113 21.4911 4.85017 20.3203 3.67938C19.147 2.50609 17.7286 2.14334 16.1275 2.06579C14.7466 1.98824 13.3782 2.00074 11.9998 2.00074C10.6189 2.00074 9.25051 1.98824 7.8721 2.06579C6.27105 2.14334 4.85012 2.50859 3.67935 3.67938C2.50608 4.85267 2.14334 6.27113 2.06579 7.87221C1.98824 9.25314 2.00074 10.6216 2.00074 12C2.00074 13.3784 1.98824 14.7494 2.06579 16.1278C2.14334 17.7289 2.50858 19.1498 3.67935 20.3206C4.85262 21.4939 6.27105 21.8567 7.8721 21.9342C9.25301 22.0118 10.6214 21.9993 11.9998 21.9993C13.3807 21.9993 14.7491 22.0118 16.1275 21.9342C17.7286 21.8567 19.1495 21.4914 20.3203 20.3206C21.4936 19.1473 21.8563 17.7289 21.9338 16.1278C22.0139 14.7494 21.9989 13.3809 21.9989 12ZM19.7974 17.899C19.6148 18.3543 19.3947 18.6945 19.0419 19.0448C18.6892 19.3975 18.3515 19.6176 17.8962 19.8003C16.5803 20.3231 13.4558 20.2055 11.9973 20.2055C10.5389 20.2055 7.4118 20.3231 6.09593 19.8028C5.64064 19.6201 5.30041 19.4 4.95018 19.0473C4.59745 18.6945 4.37731 18.3568 4.19469 17.9015C3.67434 16.5831 3.79192 13.4585 3.79192 12C3.79192 10.5415 3.67434 7.4144 4.19469 6.09851C4.37731 5.6432 4.59745 5.30298 4.95018 4.95274C5.30291 4.6025 5.64064 4.37985 6.09593 4.19723C7.4118 3.67688 10.5389 3.79446 11.9973 3.79446C13.4558 3.79446 16.5828 3.67688 17.8987 4.19723C18.354 4.37985 18.6942 4.6 19.0444 4.95274C19.3972 5.30548 19.6173 5.6432 19.7999 6.09851C20.3203 7.4144 20.2027 10.5415 20.2027 12C20.2027 13.4585 20.3203 16.5831 19.7974 17.899Z"
										fill="#5C5F6A"
									/>
								</svg>
							</a>
						</li>

						<li>
							<a href="#">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z"
										fill="#5C5F6A"
									/>
								</svg>
							</a>
						</li>
					</ul>

					<div>
						<h3 className="text-muted-foreground">ACCEPTED PAYMENTS</h3>
						<ul className="flex space-x-5">
							<li>
								<svg
									width="31"
									height="32"
									viewBox="0 0 31 32"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clip-path="url(#clip0_5416_34)">
										<path
											d="M15.017 22.85C13.3637 24.2432 11.27 25.005 9.108 25C4.078 25 0 20.97 0 16C0 11.03 4.078 7.00002 9.108 7.00002C11.363 7.00002 13.426 7.81002 15.017 9.15002C16.67 7.75705 18.7633 6.99526 20.925 7.00002C25.955 7.00002 30.033 11.03 30.033 16C30.033 20.97 25.955 25 20.925 25C18.7633 25.0048 16.67 24.243 15.017 22.85Z"
											fill="#ED0006"
										/>
										<path
											d="M15.017 22.85C16.0186 22.0115 16.8242 20.9636 17.377 19.7801C17.9299 18.5966 18.2166 17.3063 18.217 16C18.217 13.257 16.975 10.8 15.017 9.15002C16.67 7.75705 18.7633 6.99526 20.925 7.00002C25.955 7.00002 30.033 11.03 30.033 16C30.033 20.97 25.955 25 20.925 25C18.7633 25.0048 16.67 24.243 15.017 22.85Z"
											fill="#F9A000"
										/>
										<path
											d="M15.017 22.85C16.975 21.2 18.217 18.743 18.217 16C18.217 13.257 16.975 10.8 15.017 9.15002C14.0154 9.98856 13.2098 11.0365 12.657 12.22C12.1041 13.4035 11.8174 14.6938 11.817 16C11.817 18.743 13.058 21.2 15.017 22.85Z"
											fill="#FF5E00"
										/>
									</g>
									<defs>
										<clipPath id="clip0_5416_34">
											<rect width="30.033" height="32" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</li>

							<li>
								<svg
									width="57"
									height="32"
									viewBox="0 0 57 32"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M10.224 10L5.03296 21.826H11.248L12.018 19.941H13.779L14.55 21.827H21.39V20.387L22 21.827H25.54L26.149 20.357V21.827H40.376L42.106 19.99L43.726 21.827L51.033 21.842L45.825 15.946L51.033 10H43.839L42.155 11.803L40.586 10H25.109L23.779 13.053L22.42 10H16.219V11.39L15.529 10H10.226H10.224ZM11.427 11.68H14.457L17.9 19.699V11.679H21.219L23.879 17.429L26.329 11.679H29.633V20.166H27.623L27.607 13.516L24.677 20.166H22.88L19.935 13.516V20.166H15.801L15.018 18.263H10.783L10.001 20.164H7.78696L11.427 11.679V11.68ZM39.64 11.68H31.47V20.16H39.513L42.106 17.35L44.605 20.16H47.217L43.42 15.945L47.217 11.679H44.718L42.138 14.458L39.64 11.679V11.68ZM12.9 13.115L11.506 16.505H14.294L12.901 13.115H12.9ZM33.487 14.985V13.435H38.585L40.809 15.912L38.486 18.404H33.487V16.712H37.944V14.986H33.487V14.985Z"
										fill="#016FD0"
									/>
								</svg>
							</li>

							<li>
								<svg
									width="43"
									height="32"
									viewBox="0 0 43 32"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clip-path="url(#clip0_5416_38)">
										<path
											d="M27.515 9.00008C28.5598 8.99548 29.5959 9.19135 30.567 9.57708L30.104 12.5031L29.796 12.3601C29.003 11.9927 28.1355 11.8147 27.262 11.8401C25.919 11.8401 25.316 12.4311 25.302 13.0081C25.302 13.6431 26.032 14.0611 27.222 14.6811C29.182 15.6471 30.09 16.8291 30.077 18.3711C30.049 21.1841 27.725 23.0001 24.155 23.0001C22.629 22.9851 21.159 22.6531 20.361 22.2791L20.837 19.2361L21.285 19.4531C22.391 19.9581 23.119 20.1731 24.477 20.1731C25.457 20.1731 26.507 19.7551 26.52 18.8481C26.52 18.2561 26.073 17.8241 24.757 17.1601C23.469 16.5111 21.747 15.4301 21.775 13.4841C21.789 10.8451 24.155 9.00008 27.515 9.00008ZM14.831 22.7981H18.233L20.361 9.24608H16.959L14.831 22.7981Z"
											fill="#00579F"
										/>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M39.288 9.24608H36.657C35.845 9.24608 35.229 9.49108 34.878 10.3701L29.825 22.7981H33.395L34.109 20.7651H38.477C38.575 21.2411 38.883 22.7981 38.883 22.7981H42.033L39.288 9.24608ZM35.088 17.9961L36.448 14.2061C36.441 14.2161 36.486 14.0901 36.552 13.9011C36.65 13.6211 36.795 13.2081 36.895 12.9081L37.132 14.0751C37.132 14.0751 37.777 17.3191 37.917 17.9971H35.089L35.088 17.9961Z"
											fill="#00579F"
										/>
										<path
											d="M8.65696 18.4871L11.989 9.24608H15.587L10.239 22.7841H6.64096L3.58896 10.9321C5.74496 12.1001 7.67696 14.4501 8.29296 16.6121L8.65696 18.4871Z"
											fill="#00579F"
										/>
										<path
											d="M5.56296 9.24608H0.0889592L0.032959 9.51908C4.30296 10.6441 7.13096 13.3551 8.29296 16.6131L7.10296 10.3851C6.90696 9.51908 6.30496 9.27508 5.56296 9.24508V9.24608Z"
											fill="#FAA61A"
										/>
									</g>
									<defs>
										<clipPath id="clip0_5416_38">
											<rect
												width="42"
												height="32.0001"
												fill="white"
												transform="translate(0.032959)"
											/>
										</clipPath>
									</defs>
								</svg>
							</li>
						</ul>
					</div>
				</div>

				<div className="grid md:grid-cols-3">
					<div className="space-y-6 mb-6">
						<h3 className="text-muted-foreground">SUPPORT</h3>
						<ul className="space-y-4">
							<li>
								<a href="#">FAQ</a>
							</li>

							<li>
								<a href="#">Terms of use</a>
							</li>

							<li>
								<a href="#">Privacy Policy</a>
							</li>
						</ul>
					</div>

					<div className="space-y-6 mb-6">
						<h3 className="text-muted-foreground">SUPPORT</h3>
						<ul className="space-y-4">
							<li>
								<a href="#">FAQ</a>
							</li>

							<li>
								<a href="#">Terms of use</a>
							</li>

							<li>
								<a href="#">Privacy Policy</a>
							</li>
						</ul>
					</div>

					<div className="space-y-6 mb-6">
						<h3 className="text-muted-foreground">SUPPORT</h3>
						<ul className="space-y-4">
							<li>
								<a href="#">FAQ</a>
							</li>

							<li>
								<a href="#">Terms of use</a>
							</li>

							<li>
								<a href="#">Privacy Policy</a>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
