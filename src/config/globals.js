const { string } = require('joi');
const parseArgs = require('minimist')
require('dotenv').config()
const options = { alias: { p: "port", m: "modo" } };
const puerto = parseArgs(process.argv, options).port;

let modo = parseArgs(process.argv, options).modo
if (typeof modo === 'string') {	
	modo = modo.toUpperCase();
}
else{
	//console.log(modo)
	modo = "FORK"
}
  

module.exports = {
	NODE_ENV: process.env.NODE_ENV || 'development',
	HOST: process.env.HOST || 'localhost',
	PORT: puerto || process.env.PORT || 8080,
	MODO: modo || 'FORK',
	SESSION_MAXAGE: process.env.SESSION_MAXAGE || 600000,
	SECRET: process.env.SECRET || 'C0d3rTeco',
	//CORS_ORIG: process.env.CORS_ORIG || '*',
	TIPO_PERSISTENCIA: process.env.TIPO_PERSISTENCIA || 'Mongo',
	MONGO_URI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ecommerce',
	FIRESTORE_FILE: process.env.FIRESTORE_FILE || {
		"type": "service_account",
		"project_id": "node-8f502",
		"private_key_id": "0afe2c57cd075587682419ecae75ee87914faa8d",
		"private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCzGeksFtDyG6Kf\nKCMKT4O2z+65T7tuQuEqafX2Pse/ZFlYpTz3Iq6Y2E75hMw1KR5QjQekWIURgTvQ\nGbA5p0JfbaBDq3wk4Lug8Fq9o8wcX+S9mr9TlYqNQG4OhogjbaWyT3aGidB7eGAq\niHaeoVER3p6aJOe8whfcC/BklbQY2s6ESdM5Gy3RZtWq7Iiqgnp+sl8eRxpcrJlX\n712JCa1aJthdJsUS+zNf2Y09SycG53krAh1oL9FOEZm9XjnLyM8VlG1LRydj7g/6\nQRKV0uF0XWc6K9vYxTv2zsg5hKh91mmp7+aow80YwnYhoVEYxFOKqoGjN7vZ98aC\nV5aF3oZBAgMBAAECggEAAaVHIrFnpGnY7IHHvKRZZKMezD4YI0hjCEA7/dIQL3PX\nwabsW1BKxBBsvVcuhyiEZPS+xrr3fLSFclaMwM2Gyxismc09ZptYA1UMsw8KZOeu\nqDKqol/Oi5i1dNW18i645d1cDJq/OyXdKwGLps56+mE4xNgk9vOI7kEqfsoaAwZv\nqqXRZqoaGwOlrxP3zYL4nX5DsB0yvtZ1i3byQTk75SYDwNCPYERFc5AmYZ6JGXI5\nAaF7nl12DBmVhY09CBV6vyt7rKEBUwPGQeUviOei4gQozJ+7yvUqC0WY2crkY/tW\n+XZqjuI8bChBBxWPQh9RT7bkPPjOUz19iWiZk38l/wKBgQD8cbG/un0+A7caLYLD\n4uSPZH88GdyOAFnSktihttcT2o8277BVNEQbzaEDeGDactTpfgiAa64zUTHhZYUZ\nw7NSqxi0XDrQIqml0Edj4q2xLBfkQ7OOYASGxCQNpVaBoNxSwvMNIOAUa5svwvDB\nbw+CNN6+eiOiM1kVLEn9nJEyrwKBgQC1n76HokF/YKysFuRT/KRP8crnDfWOHeI8\nxrjmHswFiCIfn1pwXmeSFFa/Aj2ILOl8QLZ6ZxwMSI/0y7pEhtbZ4aKL5KCE4JQn\nIjSXxmqBIliURdBXGPmIcc9PEUc6QqCMCglh3th3iPE0Xt16wQ5oLB4dxYIVPPt3\nWUEdlQfSDwKBgQDbSGd+hCAGnnOO6bmNLqobZNChBFXxg5yCrcw/rPNm65M7xTkG\nyj/fZt9WhFqdZuJLcI8x/ldzfDQ39leH6db7GGR9RyBPa8yxnBpnSaBXJlYakjSG\nmCFWb0piEBz0vSalPXKjFMuQ8Wf8NPmtDSwLjqFuE+qgGrpnCfG7uyTlQQKBgCSQ\nloEj71+/jMPQkANAl6vol9rQeqEz7vohX9QkWxq5/3SyVjjNKLjGE3i88LpboF39\ngT8/RuxKJ4E3CrcFFngi7uCPFKnrtKf0QPZVYdfBnGetbnY6dvI7R2s5pUdbZosK\n8jyb6qSWE0lh1+EAwO/EAgQoYTn5Xv72Hx/fgwWNAoGAFSFqfkijMmGcMN/KSKDO\n44wYmkJiOby60ixja3lAFWdPu7dIFmidwg1iRIaAtOvyUGfD4oj2eNaCSfTGB0Xr\ndBpbCE3QfTEKgnNULFqhT3NfsRutZC6BW0h/AaPETYxZHchq70Hq2YBQjcekTl/F\nTKuxTZuT8v7+Nblht1pVZf4=\n-----END PRIVATE KEY-----\n",
		"client_email": "firebase-adminsdk-9ap5g@node-8f502.iam.gserviceaccount.com",
		"client_id": "111765045744194288493",
		"auth_uri": "https://accounts.google.com/o/oauth2/auth",
		"token_uri": "https://oauth2.googleapis.com/token",
		"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
		"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-9ap5g%40node-8f502.iam.gserviceaccount.com"
	}
}
