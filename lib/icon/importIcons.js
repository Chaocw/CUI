let importAll = (requireContext) => requireContext.keys().forEach(requireContext);
try {
    importAll(require.context('./icons/', true, /\.svg$/));
} catch (error) {
    console.log('error import all svg');
}
//import a from './a'  importAll  静态引入  非静态加 载  方便  左边 方便使用tree-shaking技术 ==》