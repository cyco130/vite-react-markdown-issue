const { createServer } = require("vite");

createServer().then(async (server) => {
	await server.ssrLoadModule("./ssr-module.mjs");
	await server.close();
});
