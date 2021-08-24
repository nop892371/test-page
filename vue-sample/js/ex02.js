var itemList = {};
itemList = {
    gender: [
        { value: 'm', label: '男性' },
        { value: 'f', label: '女性' },
    ],
    sample1: [
        { value: '1', label: '項目1' },
        { value: '2', label: '項目2' },
        { value: '3', label: '項目3' },
        { value: '4', label: '項目4' },
        { value: '5', label: '項目5' },
    ],
};

var app = new Vue({
    el: '#app',
    data: {
        itemList: itemList,
        formData: {
            name: '',
            mail: 'abc',
            address: '',
            gender: 'f',
            checkedIds: ['1','3'],
            select1: '',
        },
        modalButton: [
            { label: '閉じる',}
        ],
        accordion1: [
            { 
                header: '.html', 
                body: `<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ex02</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <link rel="Stylesheet" type="text/css" href="css/style.css" />
</head>
<body>
    <div id="app" class="container">
        <fnp-header></fnp-header>

        <form>
            <div class="card card-body mt-4">
                入力フォームのコンポーネント化のサンプル。
            </div>
            <div class="card card-body mt-4">
                <fnp-form-input label="名前" v-model="formData.name"></fnp-form-input>
                <fnp-form-input label="メール" v-model="formData.mail"></fnp-form-input>
                <fnp-form-input label="住所" v-model="formData.address"></fnp-form-input>
                <fnp-form-radio name="gender" label="性別" :item-list="itemList.gender" v-model="formData.gender"></fnp-form-radio>
                <fnp-form-check name="sample1" label="チェック1" :item-list="itemList.sample1" v-model="formData.checkedIds"></fnp-form-check>
                <fnp-form-select name="select1" label="セレクト1" :item-list="itemList.sample1" v-model="formData.select1"></fnp-form-select>
            </div>
        </form>
  
        <table class="table table-bordered mt-4">
            <tr>
                <th style="width: 120px">名前</th>
                <td>{{disptext(formData.name)}}</td>
            </tr>
            <tr>
                <th>メール</th>
                <td>{{disptext(formData.mail)}}</td>
            </tr>
            <tr>
                <th>住所</td>
                <td>{{disptext(formData.address)}}</td>
            </tr>
            <tr>
                <td>性別</td>
                <td>{{disp.gender}}</td>
            </tr>
            <tr>
                <td>チェック1</td>
                <td>{{disp.checkedIds}}</td>
            </tr>
            <tr>
                <td>セレクト1</td>
                <td>{{disp.select1}}</td>
            </tr>
        </table>

        <button class="btn btn-primary" @click="onClick">hoge</button>

        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#xxxxx">
            Launch demo modal
        </button>

        <fnp-modal id="xxxxx" title="ほげほげ">
            <pre>{{jsonForm}}</pre>
        </fnp-modal>

    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    <script src="js/common.js"></script>
    <script src="js/ex02.js"></script>
</body>
</html>
`
            },
            { 
                header: '.js', 
                body: `var itemList = {};
itemList = {
    gender: [
        { value: 'm', label: '男性' },
        { value: 'f', label: '女性' },
    ],
    sample1: [
        { value: '1', label: '項目1' },
        { value: '2', label: '項目2' },
        { value: '3', label: '項目3' },
        { value: '4', label: '項目4' },
        { value: '5', label: '項目5' },
    ],
};

var app = new Vue({
    el: '#app',
    data: {
        itemList: itemList,
        formData: {
            name: '',
            mail: 'abc',
            address: '',
            gender: 'f',
            checkedIds: ['1','3'],
            select1: '',
        },
        modalButton: [
            { label: '閉じる',}
        ],
    },
    computed: {
        disp() {
            return {
                gender: this.formData.gender !== '' ? itemList.gender.find(n => n.value === this.formData.gender).label : '', 
                checkedIds: this.formData.checkedIds.map(v => itemList.sample1.find(n => n.value === v).label).join("、"),
                select1: this.formData.select1 !== '' ? itemList.sample1.find(n => n.value === this.formData.select1).label : '', 
            }
        },
        jsonForm() {
            return JSON.stringify(this.$data.formData, null, '  ');
        },
    },
    methods: {
        disptext(v) { return (v !== '') ? v : '---' },
        onClick(e) { alert('hello!' + JSON.stringify(this.$data.formData)) },
    },
    components: {
        ...formComponents
    },
});
`

            },
        ],
    },
    computed: {
        disp() {
            return {
                gender: this.formData.gender !== '' ? itemList.gender.find(n => n.value === this.formData.gender).label : '', 
                checkedIds: this.formData.checkedIds.map(v => itemList.sample1.find(n => n.value === v).label).join("、"),
                select1: this.formData.select1 !== '' ? itemList.sample1.find(n => n.value === this.formData.select1).label : '', 
            }
        },
        jsonForm() {
            return JSON.stringify(this.$data.formData, null, '  ');
        },
    },
    methods: {
        disptext(v) { return (v !== '') ? v : '---' },
        onClick(e) { alert('hello!' + JSON.stringify(this.$data.formData)) },
    },
    components: {
        ...formComponents
    },
});