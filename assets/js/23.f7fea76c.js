(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{244:function(t,s,e){"use strict";e.r(s);var n=e(1),a=Object(n.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("Any hints and suggestions to improve or circumnavigate the pitfalls in smarter ways are highly appreciated.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),e("p",[t._v("Instantiation of these classes will happen like this")]),t._v(" "),t._m(7),e("p",[t._v("or")]),t._v(" "),t._m(8),e("p",[t._v("For more and detailed information refer to the "),e("a",{attrs:{href:"https://jenkins.io/doc/book/pipeline/shared-libraries/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jenkins documentation"),e("OutboundLink")],1)]),t._v(" "),t._m(9),t._v(" "),e("p",[t._v("As seen above and as discussed in the "),e("a",{attrs:{href:"https://jenkins.io/doc/book/pipeline/shared-libraries/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jenkins documentation"),e("OutboundLink")],1),t._v(" classes must implement the "),e("code",[t._v("Serializable")]),t._v(" interface. This is necessary so that pipeline jobs remain 'restartable', i.e. when the Jenkins node fails during execution of a job, the job is able to resume work from the place were it got interrupted. For this to be possible, Jenkins needs to be able to store the state of all instantiated objects.")]),t._v(" "),e("p",[t._v("This bears some implications when it comes to the use of third party classes that are not serializable. Trying to re-use objects of such classes will likely result in")]),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),e("p",[t._v("Simply put, class constructors in Groovy cannot use methods, be it own internal methods, or instantiating other classes and using their methods. Anything other than 'simple' variable initialization will result in")]),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),e("p",[t._v("There are certain plugins that within their execution set variables that are exposed to the rest of the script. Two of these plugins being used throughout the examples are "),e("a",{attrs:{href:"https://wiki.jenkins.io/display/JENKINS/Config+File+Provider+Plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Config File Provider "),e("code",[t._v("configFileProvider")]),e("OutboundLink")],1),t._v(" and "),e("a",{attrs:{href:"https://wiki.jenkins.io/display/JENKINS/Credentials+Binding+Plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Credentials Binding "),e("code",[t._v("withCredentials")]),e("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),e("p",[t._v("Unfortunately, while this works perfectly fine in the main script, trying to use such plugins in classes 'external' to the script class will likely result in exceptions like the following:")]),t._v(" "),t._m(23),e("p",[t._v("This seems to be "),e("a",{attrs:{href:"https://groups.google.com/forum/#!topic/jenkinsci-users/8wd8Omvs74Y",target:"_blank",rel:"noopener noreferrer"}},[t._v("Groovy specific"),e("OutboundLink")],1),t._v(" and the only work around so far seems to be to execute these plugins in the main script. That is why the "),e("code",[t._v("mailList.config")]),t._v(" down not get read in the "),e("code",[t._v("PipelineConfig")]),t._v(" class as one would expect, but in the main script.")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"things-to-consider-when-using-jenkins-groovy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#things-to-consider-when-using-jenkins-groovy","aria-hidden":"true"}},[this._v("#")]),this._v(" Things to consider when using Jenkins Groovy")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v('Having learned Groovy and pipeline scripting at the same time from ground up - without having any decent background in any of the underlying "'),s("em",[this._v("modern")]),this._v('" principles or languages - has been an interesting experience. This section is dedicated to listing and pointing out those pitfalls and learning experiences that we went through, to help people saving the same struggle and speed up their getting productive. And the same time it is supposed as a "reference" to explain why some things were done things way they are done in the showcased examples.')])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"using-steps-in-classes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-steps-in-classes","aria-hidden":"true"}},[this._v("#")]),this._v(" Using steps in classes")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Using pipeline steps, i.e. almost every execution of a plugin, within classes that are not the main script, require the script "),s("code",[this._v("steps")]),this._v(" to be passed to the class and executing the corresponding methods of this "),s("code",[this._v("steps")]),this._v(" class. Failure to do so will result in")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("groovy.lang.MissingPropertyException\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("for the respective method. This starts with a simple "),s("code",[this._v("prinln")]),this._v(". Almost all classes in use in our examples perform one or the other "),s("code",[this._v("steps")]),this._v(" method. Therefore, a common scheme is to declare the class and its constructor as follows:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-groovy extra-class"},[e("pre",{pre:!0,attrs:{class:"language-groovy"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IspwHelper")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Serializable")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" steps\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("IspwHelper")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("steps "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("steps              "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" steps\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-groovy extra-class"},[e("pre",{pre:!0,attrs:{class:"language-groovy"}},[e("code",[t._v("    ispwHelper  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IspwHelper")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("steps "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-groovy extra-class"},[e("pre",{pre:!0,attrs:{class:"language-groovy"}},[e("code",[t._v("    ispwHelper  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IspwHelper")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("steps "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"non-serializable-classes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#non-serializable-classes","aria-hidden":"true"}},[this._v("#")]),this._v(" Non serializable classes")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("java.io.NotSerializableException\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("Example are the "),e("code",[t._v("JsonSlurper")]),t._v(" class or the "),e("code",[t._v("responseBody")]),t._v(" class. The latter is being returned by a native "),e("code",[t._v("httpRequest")]),t._v(", the former is used to digest the JSON "),e("code",[t._v("responseBody")]),t._v(" from an "),e("code",[t._v("httpRequest")]),t._v(". The simplest way to use these classes without running into "),e("code",[t._v("java.io.NotSerializableException")]),t._v(" we found, is to de-reference the objects as soon as possible in the code. That way there is no need to store their state across method boundaries:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-groovy extra-class"},[e("pre",{pre:!0,attrs:{class:"language-groovy"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" ArrayList "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAssigmentList")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String cesToken"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String level"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" returnList  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" taskIds     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSetTaskIdList")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cesToken"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" level"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" response "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" steps"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("httpRequest")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            url"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                        "),e("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ispwUrl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("/ispw/"),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ispwRuntime"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("/releases/"),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ispwRelease"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v('/tasks"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            consoleLogResponseBody"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n            customHeaders"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("              "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                                        maskValue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                        name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("       "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'authorization'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                        value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("cesToken"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v('"')]),t._v("\n                                        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" jsonSlurper "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JsonSlurper")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" resp        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" jsonSlurper"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseText")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        response        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" null\n        jsonSlurper     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" null\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("In the example "),e("code",[t._v("response")]),t._v(" recieves the result of the "),e("code",[t._v("httpRequest")]),t._v(", "),e("code",[t._v("jsonSlurper")]),t._v(" get instantiated and "),e("code",[t._v("resp")]),t._v(" receives the content of "),e("code",[t._v("response")]),t._v(" as list. Once the two objects are not needed they get de-referenced by")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-groovy extra-class"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[this._v("        response        "),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v(" null\n        jsonSlurper     "),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v(" null\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"using-methods-in-class-constructors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-methods-in-class-constructors","aria-hidden":"true"}},[this._v("#")]),this._v(" Using methods in class constructors")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("hudson.remoting.ProxyException: com.cloudbees.groovy.cps.impl.CpsCallableInvocation\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Therefore, many of the classes in use here, have an "),s("code",[this._v("initialize")]),this._v(" method that performs any additional work necessary after the constructor executed before any of the other methods can be used.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"plugins-setting-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugins-setting-variables","aria-hidden":"true"}},[this._v("#")]),this._v(" Plugins setting variables")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The first one allows accessing a file that has been defined using the Config File Provider plugin like the ["),s("code",[this._v("mailList.config")]),this._v(" file](../tool_configuration/Config_Files.html#The email list). You pass the "),s("code",[this._v("fileID")]),this._v(" and retrieve a variable that contains the (temporary) path to the file. In the following snippet variable "),s("code",[this._v("mailListFilePath")]),this._v(" will contain that path.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-groovy extra-class"},[e("pre",{pre:!0,attrs:{class:"language-groovy"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("configFileProvider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("configFile")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                fileId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MailList'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                variable"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mailListFilePath'")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        File mailConfigFile "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("File")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mailListFilePath"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("mailConfigFile"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("exists")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            steps"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("error "),e("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"File - '),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mailListFilePath"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(' - not found! \\n Aborting Pipeline"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        mailListlines "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mailConfigFile"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("readLines")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("The second one allows retrieving the information stored in a Jenkins credentials token, in cases when certain plugins require the content in clear text. This is the case for example when using native "),e("code",[t._v("httpRequest")]),t._v(" to interact with REST APIs. Some of the example code makes use of the "),e("code",[t._v("httpRequest")]),t._v(" and the ISPW API requires the CES credentials to be passed. Other than the ISPW operations plugin the "),e("code",[t._v("httpRequest")]),t._v(" cannot use the Jenkins secret text token storing the CES token. Using the "),e("code",[t._v("withCredentials")]),t._v(", one can use the Jenkins in "),e("code",[t._v("credentialsID")]),t._v(" token to retrieve the 'clear text' CES token during runtime (stored in variable "),e("code",[t._v("cesToken")]),t._v(" in the example below), without having to expose the token in the code:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-groovy extra-class"},[e("pre",{pre:!0,attrs:{class:"language-groovy"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("withCredentials")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("credentialsId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("CES_Token"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v('"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" variable"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cesToken'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        response1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" steps"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("httpRequest")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            url"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                    "),e("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ISPW_URL"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("/ispw/"),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ISPW_Runtime"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("/sets/"),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ISPW_Container"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v('/tasks"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            httpMode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("               "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            consoleLogResponseBody"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            customHeaders"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("maskValue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'authorization'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("cesToken"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v('"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("groovy.lang.MissingPropertyException: No such property: mailConfigPath for class: com.compuware.devops.util.PipelineConfig\n")])])])}],!1,null,null,null);s.default=a.exports}}]);