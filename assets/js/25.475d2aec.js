(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{240:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"filehelper-groovy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filehelper-groovy","aria-hidden":"true"}},[t._v("#")]),t._v(" FileHelper.groovy")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("compuware"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("devops"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("util\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n Wrapper around the Git Plugin's Checkout Method\n @param URL - URL for the git server\n @param Branch - The branch that will be checked out of git\n @param Credentials - Jenkins credentials for logging into git\n @param Folder - Folder relative to the workspace that git will check out files into\n*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileHelper")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Serializable")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" steps\n")])])]),a("h2",{attrs:{id:"filehelper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filehelper","aria-hidden":"true"}},[t._v("#")]),t._v(" FileHelper")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FileHelper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("steps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("steps "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" steps\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"readlines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#readlines","aria-hidden":"true"}},[t._v("#")]),t._v(" readLines")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readLines")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        File configFile "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("File")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("configFile"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exists")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            steps"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("error "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"File - '),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(' - not found! \\n Aborting Pipeline"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" configFile"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readLines")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);s.default=n.exports}}]);