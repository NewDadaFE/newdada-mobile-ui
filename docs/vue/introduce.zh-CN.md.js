webpackJsonp([2,8],{

/***/ 384:
/***/ function(module, exports) {

	"use strict";

	module.exports = {
	  "content": ["article", ["p", ["code", "antd-mobile"], " 是 Ant Design 的移动规范的 React 实现，服务于蚂蚁及口碑无线业务。"], ["div", {
	    "class": "pic-plus"
	  }, ["img", {
	    "width": "160",
	    "src": "https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png"
	  }], ["span", "+"], ["img", {
	    "width": "160",
	    "src": "https://t.alipayobjects.com/images/rmsweb/T16xRhXkxbXXXXXXXX.svg"
	  }]], ["style", "\n.pic-plus > * {\n  display: inline-block;\n  vertical-align: middle;\n}\n.pic-plus {\n  margin: 40px 0;\n}\n.pic-plus span {\n  font-size: 30px;\n  color: #aaa;\n  margin: 0 40px;\n}\n"], ["p", ["a", {
	    "title": null,
	    "href": "http://ant.design"
	  }, "Ant Design"], " 在中后台领域的耕耘取得了很多成绩，使得 Ant Design 设计规范和 React 逐渐成为蚂蚁金服主流的前端产品开发模式，也受到社区的广泛关注。我们没有止步于此，一年后推出了 Ant Design 移动端规范及其实现。"], ["p", "随着蚂蚁金服中后台的移动端需求增多，不同的设计规范及研发方式，给设计者和开发者带来大量的重复工作，降低了产品的研发效率。"], ["p", "我们希望为设计者和开发者提供一套统一的设计规范，可以降低设计、开发成本，减少沟通误差。不同于大多数设计规范，我们抽象出通用组件的基础样式和组件属性，使得拓展性更强。基于这套规范我们可以快速实现页面，提高研发效率，也希望借此推进蚂蚁金服各应用向设计规范化的方向发展。"], ["p", "在工程方面，我们继续推进和发展 React 全家桶技术栈，探索多端同栈、可预测、高效的研发模式。"], ["h2", "特性"], ["ul", ["li", ["p", "基于 Ant Design 移动设计规范。"]], ["li", ["p", "规则化的视觉样式配置，适应各类产品风格。"]], ["li", ["p", "基于 React Native 的多平台支持。"]], ["li", ["p", "使用 TypeScript 开发，提供类型定义文件。"]]], ["h2", "安装"], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span> antd-mobile --save\n$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span> babel-plugin-import --save-dev"
	  }, ["code", "$ npm install antd-mobile --save\n$ npm install babel-plugin-import --save-dev"]], ["h2", "使用"], ["blockquote", ["p", "遇到报错，请先参考 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design-mobile/issues/56"
	  }, "示例脚手架"]]], ["h4", "Web 使用方式"], ["ol", ["li", ["p", "首先需要引入『高清方案』设置：具体方法"], ["p", "见 wiki 里 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design-mobile/wiki/antd-mobile-0.8-%E4%BB%A5%E4%B8%8A%E7%89%88%E6%9C%AC%E3%80%8C%E9%AB%98%E6%B8%85%E3%80%8D%E6%96%B9%E6%A1%88%E8%AE%BE%E7%BD%AE"
	  }, "antd-mobile-0.8-以上版本「高清」方案设置"]]], ["li", ["p", "Set webpack to resolve .web.js suffix"], ["pre", {
	    "lang": null,
	    "highlighted": "resolve<span class=\"token punctuation\">:</span> {\n  modulesDirectories<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'node_modules'</span><span class=\"token punctuation\">,</span> path<span class=\"token punctuation\">.</span><span class=\"token function\">join</span><span class=\"token punctuation\">(</span>__dirname<span class=\"token punctuation\">,</span> <span class=\"token string\">'../node_modules'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  extensions<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">''</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'.web.js'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'.js'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'.json'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span>"
	  }, ["code", "resolve: {\n  modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],\n  extensions: ['', '.web.js', '.js', '.json'],\n},"]]], ["li", ["p", "无需单独引入样式，使用 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/babel-plugin-import"
	  }, "babel-plugin-import"], " 按需加载，插件设置如下："], ["pre", {
	    "lang": "js",
	    "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// .babelrc</span>\n<span class=\"token punctuation\">{</span><span class=\"token string\">\"plugins\"</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">[</span><span class=\"token string\">\"import\"</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> <span class=\"token string\">\"style\"</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"css\"</span><span class=\"token punctuation\">,</span> <span class=\"token string\">\"libraryName\"</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"antd-mobile\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span>\n<span class=\"token comment\" spellcheck=\"true\">// or webpack config file</span>\nwebpackConfig<span class=\"token punctuation\">.</span>babel<span class=\"token punctuation\">.</span>plugins<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">[</span><span class=\"token string\">'import'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> libraryName<span class=\"token punctuation\">:</span> <span class=\"token string\">'antd-mobile'</span><span class=\"token punctuation\">,</span> style<span class=\"token punctuation\">:</span> <span class=\"token string\">'css'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }, ["code", "// .babelrc\n{\"plugins\": [[\"import\", { \"style\": \"css\", \"libraryName\": \"antd-mobile\" }]]}\n// or webpack config file\nwebpackConfig.babel.plugins.push(['import', { libraryName: 'antd-mobile', style: 'css' }]);"]]]], ["p", "实例："], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// import js and css modularly, parsed by babel-plugin-import</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd-mobile'</span><span class=\"token punctuation\">;</span>\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>Start<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }, ["code", "// import js and css modularly, parsed by babel-plugin-import\nimport { Button } from 'antd-mobile';\nReactDOM.render(<Button>Start</Button>, mountNode);"]], ["p", "如何自定义主题？", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/antd-init/blob/master/examples/customize-antd-theme/README.md"
	  }, "见此文档"]], ["h4", "React-Native 使用方式"], ["blockquote", ["p", "注：", ["code", "Accordion"], "、", ["code", "Icon"], "、", ["code", "Result"], "、", ["code", "Table"], "、", ["code", "Menu"], "、", ["code", "NavBar"], " 组件暂无 React Native 版本；"]], ["ol", ["li", ["p", ["code", ".babelrc"], " 文件添加以下配置"], ["pre", {
	    "lang": "json",
	    "highlighted": "<span class=\"token punctuation\">{</span><span class=\"token property\">\"plugins\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">[</span><span class=\"token string\">\"import\"</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> <span class=\"token property\">\"libraryName\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"antd-mobile\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span>"
	  }, ["code", "{\"plugins\": [[\"import\", { \"libraryName\": \"antd-mobile\" }]]}"]]]], ["p", "实例："], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> React<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> Component <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> AppRegistry <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react-native'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd-mobile'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">HelloWorldApp</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>Start<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nAppRegistry<span class=\"token punctuation\">.</span><span class=\"token function\">registerComponent</span><span class=\"token punctuation\">(</span><span class=\"token string\">'HelloWorldApp'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> HelloWorldApp<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }, ["code", "import React, { Component } from 'react';\nimport { AppRegistry } from 'react-native';\nimport { Button } from 'antd-mobile';\n\nclass HelloWorldApp extends Component {\n  render() {\n    return <Button>Start</Button>;\n  }\n}\n\nAppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);"]], ["blockquote", ["p", "更多常见问题，请查看 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design-mobile/wiki"
	  }, "wiki pages"]]], ["h2", "版本"], ["ul", ["li", ["p", "稳定版：", ["a", {
	    "title": null,
	    "href": "http://npmjs.com/package/antd-mobile"
	  }, ["img", {
	    "title": null,
	    "src": "http://img.shields.io/npm/v/antd-mobile.svg?style=flat-square",
	    "alt": "npm package"
	  }]]]], ["li", ["p", "开发版：", ["a", {
	    "title": null,
	    "href": "http://npmjs.com/package/antd-mobile"
	  }, ["img", {
	    "title": null,
	    "src": "https://cnpmjs.org/badge/v/antd-mobile.svg?tag=beta&style=flat-square",
	    "alt": "npm package"
	  }]]]]], ["h2", "体积"], ["ul", ["li", ["p", "构建后总体积：", ["code", "~110KB"]]], ["li", ["p", "按需加载：只需引入业务中需要的组件即可，未 import 进来的组件不会打包进来。"]]], ["h2", "浏览器支持"], ["ul", ["li", ["p", ["code", "iOS"]]], ["li", ["p", ["code", "Android 4.0+"]]]], ["h2", "链接"], ["ul", ["li", ["p", ["a", {
	    "title": null,
	    "href": "/"
	  }, "首页"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "http://github.com/ant-design/ant-design-mobile/blob/master/development.md"
	  }, "开发文档"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "http://github.com/react-component"
	  }, "React 模块"]]]], ["h2", "谁在使用"], ["ul", ["li", ["p", "蚂蚁金服"]], ["li", ["p", "阿里巴巴"]], ["li", ["p", "口碑"]]], ["h2", "欢迎参与"], ["p", "有任何建议或意见您可以进行 ", ["a", {
	    "title": null,
	    "href": "http://github.com/ant-design/ant-design-mobile/issues"
	  }, "提问"], "。"]],
	  "meta": {
	    "order": 0,
	    "english": "NewDada Mobile UI",
	    "filename": "docs/vue/introduce.zh-CN.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#特性"
	  }, "特性"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#安装"
	  }, "安装"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#使用"
	  }, "使用"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#版本"
	  }, "版本"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#体积"
	  }, "体积"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#浏览器支持"
	  }, "浏览器支持"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#链接"
	  }, "链接"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#谁在使用"
	  }, "谁在使用"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#欢迎参与"
	  }, "欢迎参与"]]]
	};

/***/ }

});