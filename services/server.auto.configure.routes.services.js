const fs = require('fs');

const routesFolder = './routes/';

module.exports = (app) => {
	injectRoutesIntoApp(app, routesFolder);

};

injectRoutesIntoApp = (app, dir) => {
	fs.readdirSync(dir).forEach(file => {
		let path = `${dir}${file}`;
		let pathStat = fs.lstatSync(path);

		if(pathStat.isFile()){
			let importedFile = require(`./.${dir}/${file}`);
			let callbackName = `${dir.replace('./routes/', '')}${file.replace('.routes.js', '')}`;

			try{
				app.use(`/${callbackName}`, importedFile);
			}
			catch (e){
				console.log(e);
			}
		}
		else{
			injectRoutesIntoApp(app, `${path}/`);
		}
		return;
	});
}