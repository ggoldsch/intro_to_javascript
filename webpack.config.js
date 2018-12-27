module.exports = {

    entry:'./src/client.js',
    output:{
        path:"/home/george/intro_to_javascript/src",
        filename:'index.js',
    },

	devServer:{
		inline:true,
		contentBase:'./public',
		port:3000
	},
    module: {
        rules:[
            {test:/\.js$/,
            exclude:/node_modules/,
            loader:'babel-loader'
            }
        ]
    },
};
