(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/HeaderMenu.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/HeaderMenu.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/store.js */ "./resources/js/utils/store.js");
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
  components: {},
  data: function data() {
    return {
      isOn: false,
      isOpen: false,
      showMenu: false
    };
  },
  methods: {
    toggleNavbar: function toggleNavbar() {
      console.log('Navbar');
      this.showMenu = !this.showMenu;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/Layout.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_HeaderMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/HeaderMenu */ "./resources/js/Shared/HeaderMenu.vue");
/* harmony import */ var _utils_store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/store.js */ "./resources/js/utils/store.js");
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
  components: {
    HeaderMenu: _Shared_HeaderMenu__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {};
  },
  watch: {
    '$page.props.user.id': {
      handler: function handler(oldval, newval) {
        this.$page.props.user !== null ? this.$store.logged = true : this.$store.logged = false;
      }
    }
  },
  methods: {
    url: function url() {
      return location.pathname.substr(1);
    }
  },
  created: function created() {
    this.$page.props.user !== null ? this.$store.logged = true : this.$store.logged = false;
    this.$page.props.user !== null && this.$page.props.user.adm == 1 ? this.$store.adm = true : this.$store.adm = false;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/HeaderMenu.vue?vue&type=template&id=22644030&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/HeaderMenu.vue?vue&type=template&id=22644030& ***!
  \*********************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("nav", { staticClass: "bg-gray-800" }, [
      _c("div", { staticClass: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
        _c("div", { staticClass: "flex items-center justify-between h-16" }, [
          _c("div", { staticClass: "flex items-center" }, [
            _c(
              "div",
              { staticClass: "flex-shrink-0" },
              [
                _c("inertia-link", { attrs: { href: "/" } }, [
                  _c("img", {
                    staticClass: "h-8 w-8",
                    attrs: {
                      src:
                        "https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",
                      alt: "Workflow"
                    }
                  })
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "hidden md:block" }, [
              _vm.$store.logged
                ? _c(
                    "div",
                    { staticClass: "ml-5 flex items-baseline space-x-4" },
                    [
                      _c(
                        "inertia-link",
                        {
                          staticClass:
                            "px-3 py-2 rounded-md text-sm font-medium",
                          class: _vm.route().current("dashboard.index")
                            ? "text-white bg-gray-900"
                            : "text-gray-300 hover:text-white hover:bg-gray-700",
                          attrs: { href: _vm.route("dashboard.index") }
                        },
                        [
                          _vm._v(
                            "\r\n                                    Dashboard\r\n                        "
                          )
                        ]
                      )
                    ],
                    1
                  )
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "hidden md:block" }, [
            _c("div", { staticClass: "ml-4 flex items-center md:ml-6" }, [
              _c(
                "div",
                { staticClass: "space-x-4" },
                [
                  !_vm.$store.logged
                    ? _c(
                        "inertia-link",
                        {
                          staticClass:
                            "px-3 py-2 rounded-md text-sm font-medium",
                          class: _vm.route().current("login")
                            ? "text-white bg-gray-900"
                            : "text-gray-300 hover:text-white hover:bg-gray-700",
                          attrs: { href: _vm.route("login") }
                        },
                        [
                          _vm._v(
                            "\r\n                                    Login\r\n                        "
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.$store.logged
                    ? _c(
                        "inertia-link",
                        {
                          staticClass:
                            "px-3 py-2 rounded-md text-sm font-medium",
                          class: _vm.route().current("register")
                            ? "text-white bg-gray-900"
                            : "text-gray-300 hover:text-white hover:bg-gray-700",
                          attrs: { href: _vm.route("register") }
                        },
                        [
                          _vm._v(
                            "\r\n                                    Register\r\n                        "
                          )
                        ]
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _vm.$store.logged
                ? _c(
                    "div",
                    { staticClass: "ml-3 relative" },
                    [
                      _c("div", [
                        _c(
                          "button",
                          {
                            staticClass:
                              "max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
                            attrs: { id: "user-menu", "aria-haspopup": "true" },
                            on: {
                              click: function($event) {
                                _vm.isOpen = !_vm.isOpen
                              }
                            }
                          },
                          [
                            _c("span", { staticClass: "sr-only" }, [
                              _vm._v("Open user menu")
                            ]),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "h-8 w-8 rounded-full",
                              attrs: { src: "/img/user.png", alt: "" }
                            })
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "transition",
                        {
                          attrs: {
                            "enter-active-class":
                              "transition ease-out duration-100 transform",
                            "enter-class": "opacity-0 scale-95",
                            "enter-to-class": "opacity-100 scale-100",
                            "leave-active-class":
                              "transition ease-in duration-75 transform",
                            "leave-class": "opacity-100 scale-100",
                            "leave-to-class": "opacity-0 scale-95"
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.isOpen,
                                  expression: "isOpen"
                                }
                              ],
                              staticClass:
                                "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "rounded-md bg-white shadow-xs"
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5",
                                      attrs: {
                                        role: "menu",
                                        "aria-orientation": "vertical",
                                        "aria-labelledby": "user-menu"
                                      }
                                    },
                                    [
                                      _c(
                                        "inertia-link",
                                        {
                                          staticClass:
                                            "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                                          attrs: {
                                            href: _vm.route("profile.index")
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\r\n                                                        Profile\r\n                                        "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm.$store.logged
                                        ? _c(
                                            "inertia-link",
                                            {
                                              staticClass:
                                                "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                                              attrs: {
                                                href: "/logout",
                                                method: "post",
                                                as: "button",
                                                type: "button"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                                                    Logout\r\n                                        "
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ],
                    1
                  )
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "-mr-2 flex md:hidden" }, [
            _c(
              "button",
              {
                staticClass:
                  "bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
                on: {
                  click: function($event) {
                    return _vm.toggleNavbar()
                  }
                }
              },
              [
                _c("span", { staticClass: "sr-only" }, [
                  _vm._v("Open main menu")
                ]),
                _vm._v(" "),
                _c(
                  "svg",
                  {
                    staticClass: "h-6 w-6",
                    class: { block: !_vm.showMenu, hidden: _vm.showMenu },
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      "aria-hidden": "true"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M4 6h16M4 12h16M4 18h16"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "svg",
                  {
                    staticClass: "h-6 w-6",
                    class: { hidden: !_vm.showMenu, block: _vm.showMenu },
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      "aria-hidden": "true"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M6 18L18 6M6 6l12 12"
                      }
                    })
                  ]
                )
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "block md:hidden",
          class: { hidden: !_vm.showMenu, block: _vm.showMenu }
        },
        [
          _c(
            "div",
            { staticClass: "px-2 pt-2 pb-3 space-y-1 sm:px-3" },
            [
              !_vm.$store.logged
                ? _c(
                    "inertia-link",
                    {
                      staticClass:
                        "block px-3 py-2 rounded-md text-base font-medium",
                      class: _vm.route().current("login")
                        ? "text-white bg-gray-900"
                        : "text-gray-300 hover:text-white hover:bg-gray-700",
                      attrs: { href: _vm.route("login") }
                    },
                    [
                      _vm._v(
                        "\r\n                            Login\r\n            "
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.$store.logged
                ? _c(
                    "inertia-link",
                    {
                      staticClass:
                        "block px-3 py-2 rounded-md text-base font-medium",
                      class: _vm.route().current("register")
                        ? "text-white bg-gray-900"
                        : "text-gray-300 hover:text-white hover:bg-gray-700",
                      attrs: { href: _vm.route("register") }
                    },
                    [
                      _vm._v(
                        "\r\n                            Register\r\n            "
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.$store.logged
                ? _c(
                    "inertia-link",
                    {
                      staticClass:
                        "block px-3 py-2 rounded-md text-base font-medium",
                      class: _vm.route().current("dashboard.index")
                        ? "text-white bg-gray-900"
                        : "text-gray-300 hover:text-white hover:bg-gray-700",
                      attrs: { href: _vm.route("dashboard.index") }
                    },
                    [
                      _vm._v(
                        "\r\n                            Dashboard\r\n            "
                      )
                    ]
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _vm.$store.logged
            ? _c("div", { staticClass: "pt-4 pb-3 border-t border-gray-700" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "mt-3 px-2 space-y-1" },
                  [
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700",
                        attrs: { href: _vm.route("profile.index") }
                      },
                      [
                        _vm._v(
                          "\r\n                                Profile\r\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      {
                        staticClass:
                          "block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700",
                        attrs: {
                          href: "/logout",
                          method: "post",
                          as: "button",
                          type: "button"
                        }
                      },
                      [
                        _vm._v(
                          "\r\n                            Logout\r\n                "
                        )
                      ]
                    )
                  ],
                  1
                )
              ])
            : _vm._e()
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex items-center px-5" }, [
      _c("div", { staticClass: "flex-shrink-0" }, [
        _c("img", {
          staticClass: "h-10 w-10 rounded-full",
          attrs: { src: "/img/user.png", alt: "" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "ml-3" }, [
        _c(
          "div",
          { staticClass: "text-base font-medium leading-none text-white" },
          [_vm._v("My Settings")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086& ***!
  \*****************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c("header-menu", { key: _vm.url() }),
      _vm._v(" "),
      _vm._t("default"),
      _vm._v("\n      " + _vm._s(_vm.$page) + " "),
      _c("br"),
      _vm._v("\n      " + _vm._s(_vm.$store) + "\n ")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/Shared/HeaderMenu.vue":
/*!********************************************!*\
  !*** ./resources/js/Shared/HeaderMenu.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeaderMenu_vue_vue_type_template_id_22644030___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderMenu.vue?vue&type=template&id=22644030& */ "./resources/js/Shared/HeaderMenu.vue?vue&type=template&id=22644030&");
/* harmony import */ var _HeaderMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderMenu.vue?vue&type=script&lang=js& */ "./resources/js/Shared/HeaderMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HeaderMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeaderMenu_vue_vue_type_template_id_22644030___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HeaderMenu_vue_vue_type_template_id_22644030___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/HeaderMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/HeaderMenu.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Shared/HeaderMenu.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/HeaderMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/HeaderMenu.vue?vue&type=template&id=22644030&":
/*!***************************************************************************!*\
  !*** ./resources/js/Shared/HeaderMenu.vue?vue&type=template&id=22644030& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderMenu_vue_vue_type_template_id_22644030___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderMenu.vue?vue&type=template&id=22644030& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/HeaderMenu.vue?vue&type=template&id=22644030&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderMenu_vue_vue_type_template_id_22644030___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderMenu_vue_vue_type_template_id_22644030___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Shared/Layout.vue":
/*!****************************************!*\
  !*** ./resources/js/Shared/Layout.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=6bf30086& */ "./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/Shared/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/Layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/Layout.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Shared/Layout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&":
/*!***********************************************************************!*\
  !*** ./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=template&id=6bf30086& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);