async function brequire(name) {
	 let text = await (async ()=>{
	 	try {
			let res = await fetch(`https://cdn.jsdelivr.net/gh/realredtext/owot-lib-min@main/${name}.js`);
			let t = await res.text();
			return t;
		} catch(e) {
			return 404;
		}
	 })();
	 if(text === 404) return;

	 let result = (()=>{
	 	try {
	 		return Function(text)();
	 	} catch(e) {
	 		return 403;
	 	};
	 })();

	 return result===403?undefined:result;
}

function view(package) {
	location.href = `https://cdn.jsdelivr.net/gh/realredtext/owot-lib/min@main/${package}.js`;
}
