var menuList = [
    { link: 'common-component-desc.html', label: '共通コンポーネントについて', desc: '' },
    { link: 'ex01.html', label: 'ex01', desc: 'テンプレートコード生成ツール' },
    { link: 'ex02.html', label: 'ex02', desc: '入力フォームのコンポーネント化のサンプル。' },
];

var app = new Vue({
    el: '#app',
    data: {
        menuList: menuList,
    },
    components: {
        ...formComponents
    },
});