import{_ as s,c as a,o as t,U as p,af as i,ag as e,ah as _,ai as n,aj as o,ak as l}from"./chunks/framework.-9Q_U4ls.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"常见问题/报错Python字符串不相等.md","filePath":"常见问题/报错Python字符串不相等.md","lastUpdated":1705116614000}'),r={name:"常见问题/报错Python字符串不相等.md"},c=p(`<div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ==================================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Author : mikigo</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ==================================</span></span></code></pre></div><p><img src="`+i+'" alt="img"> 这两个明明是一样的，为啥会报错~~</p><p>于是我直接debug看看：</p><p><img src="'+e+'" alt="img"></p><p>我去，明明字符串也是一样的，还就是不对，，这是什么操作，一瞬间直接感觉小脑萎缩了~~</p><p>找不同： 把resourceName打印出来也是一样的，尝试split反斜杠或空格，也是一样的~~ 一时竟也不知如何入手~</p><p>在编辑器里面直接copy value，再粘贴出来是这样的：</p><p><img src="'+_+'" alt="img"></p><p>这后面多个什么玩意儿，不管了，直接干掉试试</p><p><img src="'+n+'" alt="img"></p><p>然后，就报错了，</p><p><img src="'+o+'" alt="img"></p><p>结合数据源是从咱们操作系统中cmdline文件中来的，这玩意儿是C语言生成的，多半是C中的字符串结束符的问题，尝试直接把 \\x00 干掉，</p><p><img src="'+l+'" alt="img"></p><p>这会儿得劲儿了</p>',15),m=[c];function h(d,g,k,u,y,A){return t(),a("div",null,m)}const D=s(r,[["render",h]]);export{v as __pageData,D as default};
