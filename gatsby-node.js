exports.modifyBabelrc = ({ babelrc }) => {
	return {
		plugins: babelrc.plugins.concat(['styled-jsx/babel'])
	};
};
