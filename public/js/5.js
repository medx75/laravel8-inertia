(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var _Components_AuthCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/AuthCard */ "./resources/js/Components/AuthCard.vue");
/* harmony import */ var _Components_AuthValidationErrors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/AuthValidationErrors */ "./resources/js/Components/AuthValidationErrors.vue");
/* harmony import */ var _Components_AuthSessionStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/AuthSessionStatus */ "./resources/js/Components/AuthSessionStatus.vue");
/* harmony import */ var _Components_Label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Components/Label */ "./resources/js/Components/Label.vue");
/* harmony import */ var _Components_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Components/Input */ "./resources/js/Components/Input.vue");
/* harmony import */ var _Components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Components/Button */ "./resources/js/Components/Button.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
  layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"],
  props: {
    errors: Object,
    status: String
  },
  components: {
    AuthCard: _Components_AuthCard__WEBPACK_IMPORTED_MODULE_2__["default"],
    AuthValidationErrors: _Components_AuthValidationErrors__WEBPACK_IMPORTED_MODULE_3__["default"],
    AuthSessionStatus: _Components_AuthSessionStatus__WEBPACK_IMPORTED_MODULE_4__["default"],
    Label: _Components_Label__WEBPACK_IMPORTED_MODULE_5__["default"],
    Input: _Components_Input__WEBPACK_IMPORTED_MODULE_6__["default"],
    Button: _Components_Button__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    };
  },
  methods: {
    login: function login() {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__["Inertia"].post('/register', this.form, {
        preserveScroll: true,
        onProgress: function onProgress(form) {
          document.querySelector('Button').classList.add('cursor-not-allowed', 'opacity-25');
        },
        onFinish: function onFinish(form) {
          document.querySelector('Button').classList.remove('cursor-not-allowed', 'opacity-25');
        }
      });
    }
  },
  metaInfo: {
    title: 'Register'
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "AuthCard",
    [
      _c("AuthSessionStatus", {
        staticClass: "mb-4",
        attrs: { status: _vm.status }
      }),
      _vm._v(" "),
      _c("AuthValidationErrors", {
        staticClass: "mb-4",
        attrs: { errors: _vm.errors }
      }),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.login($event)
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "mb-4" },
            [
              _c("Label", { attrs: { for: "name", value: "Name" } }),
              _vm._v(" "),
              _c("Input", {
                staticClass: "mt-1 block w-full",
                attrs: { type: "text", id: "name", autofocus: "" },
                model: {
                  value: _vm.form.name,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "name", $$v)
                  },
                  expression: "form.name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mb-4" },
            [
              _c("Label", { attrs: { for: "email", value: "Email" } }),
              _vm._v(" "),
              _c("Input", {
                staticClass: "mt-1 block w-full",
                attrs: { type: "email", id: "email" },
                model: {
                  value: _vm.form.email,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "email", $$v)
                  },
                  expression: "form.email"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mb-4" },
            [
              _c("Label", { attrs: { for: "password", value: "Password" } }),
              _vm._v(" "),
              _c("Input", {
                staticClass: "mt-1 block w-full",
                attrs: {
                  type: "password",
                  id: "password",
                  autocomplete: "current-password"
                },
                model: {
                  value: _vm.form.password,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "password", $$v)
                  },
                  expression: "form.password"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "block mt-4" },
            [
              _c("Label", {
                attrs: {
                  for: "password_confirmation",
                  value: "Confirm Password"
                }
              }),
              _vm._v(" "),
              _c("Input", {
                staticClass: "mt-1 block w-full",
                attrs: { type: "password", id: "password_confirmation" },
                model: {
                  value: _vm.form.password_confirmation,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "password_confirmation", $$v)
                  },
                  expression: "form.password_confirmation"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex items-center justify-end mt-4" },
            [
              _c(
                "inertia-link",
                {
                  staticClass:
                    "underline text-sm text-gray-600 hover:text-gray-900",
                  attrs: { href: _vm.route("login") }
                },
                [_vm._v("\n                Already Registered?\n            ")]
              ),
              _vm._v(" "),
              _c("Button", { staticClass: "ml-4" }, [
                _vm._v("\n                Register\n            ")
              ])
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Auth/Register.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Auth/Register.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_e59c811e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=e59c811e& */ "./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_e59c811e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_e59c811e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Auth/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_e59c811e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=e59c811e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_e59c811e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_e59c811e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);