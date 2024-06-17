export async function loaderJs() {
	const currentPath = window.location.pathname;

	const pathOperations = { 
        '/qrcode': async () => {
            await loadModuleAndCss( () =>
                import(/* webpackChunkName: "qrcode" */ "../modules/qrcode.js"),
                '/css/modules/_qrcode.css'
            );
        },
		"/password-generator": () => {
			import(
				/* webpackChunkName: "password-generator" */ "../modules/password-generator.js"
			).then(() => {
				loadCss("/css/modules/_password-generator.css");
			});
		},

		"/screensize": async () => {
			await loadModuleAndCss(
				() =>
					import(
						/* webpackChunkName: "screensize" */ "../modules/screensize.js"
					),
				"/css/modules/_screensize.css"
			);
		},
		"/whatsmyip": async () => {
			await loadModuleAndCss(
				() =>
					import(/* webpackChunkName: "ipgrabber" */ "../modules/ipgrabber.js"),
				"/css/modules/_ipgrabber.css"
			);
		},
		"/requests": async () => {
			await loadModuleAndCss(
				() =>
					import(
						/* webpackChunkName: "requestForm" */ "../modules/requestForm.js"
					),
				"/css/modules/_requests.css"
			);
		},
		"/box-shadow": async () => {
			await loadModuleAndCss(
				() =>
					import(/* webpackChunkName: "boxshadow" */ "../modules/boxshadow.js"),
				"/css/modules/_boxshadow.css"
			);
		},
		"/lorem-ipsum": async () => {
			await loadModuleAndCss(
				() =>
					import(
						/* webpackChunkName: "loremipsum" */ "../modules/loremipsum.js"
					),
				"/css/modules/_loremipsum.css"
			);
		},
	};

	if (pathOperations[currentPath]) {
		try {
			await pathOperations[currentPath]();
		} catch (error) {
			console.error(`Failed to load module for path ${currentPath}`, error);
		}
	}
}

async function loadModuleAndCss(loadModule, cssUrl) {
	try {
		const modules = document.querySelectorAll(".onion-module");
		const spinner = document.querySelector(".loader");
		await loadModule();
		loadCss(cssUrl);
		setTimeout(() => {
			modules.forEach((elm) => {
				elm.classList.add("loaded");
				spinner.style.display = "none";
			});
		}, 300);
	} catch (error) {
		console.error(`Error loading module or CSS: ${cssUrl}`, error);
	}
}

const loadedCssFiles = new Set();

function loadCss(url) {
	if (!loadedCssFiles.has(url)) {
		const link = document.createElement("link");
		link.href = url;
		link.type = "text/css";
		link.rel = "stylesheet";
		document.head.appendChild(link);
		loadedCssFiles.add(url);
	}
}
