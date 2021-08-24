var setting = setting || {};
setting = {
    topUrl: "index.html",
    navbar : {
        brand: { href: setting.topUrl, label: "Vueサンプル" },
    },
};

// app-header
Vue.component('app-header', {
    template: '<div><a href="index.html">HOME</a></div>'
});

// fnp-header
var fnpHeader = Vue.extend({
    data() {
        return {
            setting: setting,
        }
    },
    template: `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" :href="setting.topUrl"><i class="fas fa-arrow-alt-circle-right"></i>{{setting.navbar.brand.label}}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    `
});
Vue.component('fnp-header', fnpHeader);

var fnpFormInput = Vue.extend({
  props: {
    'label': String,
    'placeholder': { type:String, default:'入力してください:' },
    'value': String,
  },
  template: `
    <div class="mb-1 row">
      <div class="col-sm-2 col-form-label">{{label}}</div>
      <div class="col-sm-10"><input type="text" class="form-control" id="inputPassword" :placeholder="placeholder" :value="value" @input="$emit('input', $event.target.value)"></div>
    </div>
  `,
});

var formSelect = Vue.extend({
  props: {
    'name': String,
    'label': String,
    'itemList': {
      type: Array,
      default: () => []
    },
    'value': String,
  },
  template: `
    <div class="mb-1 row">
      <div class="col-sm-2 col-form-label">{{label}}</div>
      <div class="col-sm-10 py-2">
        <select class="form-select" @change="onChange">
          <option selected>選択してください</option>
          <option v-for="item in itemList" :value="item.value">{{item.label}}</option>
        </select>
      </div>
    </div>
  `,
  methods: {
    onChange(e) {
      this.$emit('input', e.target.value)
    },
    getId(index) {
      return this.name + '-' + (index + 1);
    },
  },
});

var formCheck = Vue.extend({
  props: {
    'name': String,
    'label': String,
    'itemList': {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => [],
    },
  },
  template: `
    <div class="mb-1 row">
      <div class="col-sm-2 col-form-label">{{label}}</div>
      <div class="col-sm-10 py-2">
        <div v-for="(item, index) in itemList" :key="index" class="form-check form-switch form-check-inline">
          <input class="form-check-input" type="checkbox" :value="item.value" :id="getId(index)" :checked="value.includes(item.value)" @change="atChange(item.value)">
          <label class="form-check-label" :for="getId(index)">
            {{item.label}}
          </label>
        </div>
      </div>
    </div>
  `,
  methods: {
    atChange(itemId) {
      this.$emit('input', 
        this.value.includes(itemId) 
          ? this.value.filter(v => v !== itemId)
          : [...this.value, itemId]
      )
    },
    getId(index) {
      return this.name + '-' + (index + 1);
    },
  },
});

var formRadio = Vue.extend({
  props: {
    'name': String,
    'label': String,
    'itemList': Object,
    'value': String,
  },
  template: `
    <div class="mb-1 row">
      <div class="col-sm-2 col-form-label">{{label}}</div>
      <div class="col-sm-10 py-2">
        <div v-for="(item, index) in itemList" :key="index" class="form-check form-check-inline">
          <input class="form-check-input" type="radio" :name="name" :id="getId(index)" :value="item.value" :checked="item.value === value" @change="$emit('input', $event.target.value)">
          <label class="form-check-label" :for="getId(index)">{{item.label}}</label>
        </div>
      </div>
    </div>
  `,
  methods: {
    getId(index) {
      return this.name + '-' + (index + 1);
    },
  },
});

var fnpModal = Vue.extend({
  props: {
    'id': String,
    'title': { type: String, default: '確認' },
  },
  template: `
    <div class="modal fade" :id="id" tabindex="-1" :aria-labelledby="id+'Label'" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" :id="id+'Label'">{{title}}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-secondary" @click="onClickModalClose()">閉じ</button>
                    ,
                </div>
            </div>
        </div>
    </div>
  `,
  methods: {
      onClickModalClose() {
         alert('hi!'); var dlg = bootstrap.Modal.getInstance(document.getElementById(this.id)); dlg.hide();
         },
  }

});

var fnpAccordion = Vue.extend({
  props: {
    'id': String,
    'content': Array,
  },
  template: `
    <div class="accordion" :id="id">
      <div class="accordion-item" v-for="(item, index) in content">
        <h2 class="accordion-header" :id="id + '-header-' + index">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + id + '-body-' + index" aria-expanded="false" :aria-controls="id + '-body-' + index">
            {{item.header}}
          </button>
        </h2>
        <div :id="id + '-body-' + index" class="accordion-collapse collapse" :aria-labelledby="id + '-header-' + index" :data-bs-parent="'#' + id">
          <div class="accordion-body">
            <pre><code>{{item.body}}</code></pre>
          </div>
        </div>
      </div>
    </div>
  `,
});

// var fnpAccordionItem = Vue.extend({
//   props: {
//     'parentId': String,
//     'headerId': String,
//     'bodyId': String,
//   },
//   template: `
//     <div class="accordion-item">
//       <h2 class="accordion-header" :id="headerId">
//         <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + bodyId" aria-expanded="true" :aria-controls="bodyId">
//           <slot name="header"></slot>
//         </button>
//       </h2>
//       <div :id="bodyId" class="accordion-collapse collapse show" :aria-labelledby="headerId" :data-bs-parent="'#' + parentId">
//         <div class="accordion-body">
//           <slot name="body"></slot>
//         </div>
//       </div>
//     </div>
//   `,
// });

var formComponents = {
    'fnp-form-input': fnpFormInput,
    'fnp-form-check': formCheck,
    'fnp-form-radio': formRadio,
    'fnp-form-select': formSelect,
    'fnp-modal': fnpModal,
    'fnp-accordion': fnpAccordion,
    // 'fnp-accordion-item': fnpAccordionItem,
};