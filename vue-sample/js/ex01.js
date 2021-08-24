var app = new Vue({
    el: '#app',
    data: {
        title: 'title',
        appid: 'app',
    },
    methods: {
        copyHtml: function() {
            navigator.clipboard.writeText(this.$refs.gencode.textContent);
        },
        copyJs: function() {
            navigator.clipboard.writeText(this.$refs.genJs.textContent);
        },
    },
    components: {
        ...formComponents
    },
});
