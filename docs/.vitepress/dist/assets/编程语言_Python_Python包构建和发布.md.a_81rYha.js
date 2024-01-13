import{_ as s,c as i,o as a,U as t}from"./chunks/framework.-9Q_U4ls.js";const g=JSON.parse('{"title":"Python包构建和发布","description":"","frontmatter":{"counter":true},"headers":[],"relativePath":"编程语言/Python/Python包构建和发布.md","filePath":"编程语言/Python/Python包构建和发布.md","lastUpdated":1705116614000}'),p={name:"编程语言/Python/Python包构建和发布.md"},e=t(`<h1 id="python包构建和发布" tabindex="-1">Python包构建和发布 <a class="header-anchor" href="#python包构建和发布" aria-label="Permalink to &quot;Python包构建和发布&quot;">​</a></h1><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ==================================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Author : mikigo</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ==================================</span></span></code></pre></div><h2 id="_1、必要的文件" tabindex="-1">1、必要的文件 <a class="header-anchor" href="#_1、必要的文件" aria-label="Permalink to &quot;1、必要的文件&quot;">​</a></h2><p>除了你的源代码以外，你还需要准备以下文件；</p><h3 id="license" tabindex="-1">LICENSE <a class="header-anchor" href="#license" aria-label="Permalink to &quot;LICENSE&quot;">​</a></h3><p>开源协议文件</p><p>这里以我的项目用到的开源协议举例：</p><p><a href="https://github.com/funny-dream/pdocr-rpc/blob/main/LICENSE" target="_blank" rel="noreferrer">https://github.com/funny-dream/pdocr-rpc/blob/main/LICENSE</a></p><h3 id="readme" tabindex="-1">README <a class="header-anchor" href="#readme" aria-label="Permalink to &quot;README&quot;">​</a></h3><p>介绍这个包的安装及使用，理论上你可以写任何东西在上面，主要让别人全方位了解这个包的使用；</p><h3 id="pyproject-toml" tabindex="-1">pyproject.toml <a class="header-anchor" href="#pyproject-toml" aria-label="Permalink to &quot;pyproject.toml&quot;">​</a></h3><p>网络上大多关于 Python 打包使用的都是 <code>setup.py</code>，最新最流行的是使用 <code>pyproject.toml</code>，<code>pypi</code> 官方也推荐使用它；</p><p>相比于<code>setup.py</code>，<code>pyproject.toml</code> 的描述更为精细，但也更为繁琐，如果你是高定玩家，当然首选 <code>pyproject.toml</code> ；</p><p>当然，常用的几个东西都差不多，下面就以我的项目举例简单介绍一下：<a href="https://github.com/funny-dream/pdocr-rpc/blob/main/pyproject.toml" target="_blank" rel="noreferrer">https://github.com/funny-dream/pdocr-rpc/blob/main/pyproject.toml</a></p><p>里面主要包含这些内容：</p><h4 id="build-system" tabindex="-1">build-system <a class="header-anchor" href="#build-system" aria-label="Permalink to &quot;build-system&quot;">​</a></h4><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">build-system</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">requires = [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hatchling&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">build-backend = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hatchling.build&quot;</span></span></code></pre></div><p>构建系统</p><h4 id="project" tabindex="-1">project <a class="header-anchor" href="#project" aria-label="Permalink to &quot;project&quot;">​</a></h4><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">project</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pdocr-rpc&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">authors = [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { name=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mikigo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, email=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1964191531@qq.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">description = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;PaddleOCR-RPC&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">readme = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;README.md&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">requires-python = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&gt;=3.7&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">classifiers = [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;Programming Language :: Python :: 3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;License :: OSI Approved :: Apache Software License&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;Operating System :: OS Independent&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dependencies = [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;pyscreenshot;sys_platform == &#39;linux&#39;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;pillow;sys_platform == &#39;win32&#39;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p>这里面就是一些基本信息，你可以按照自己的实际情况修改；</p><p>注意：</p><p>（1）<code>classifiers</code> 里面 <code>License</code> 字段要和项目的开源协议一致；在这里列出了所有的开源协议应该怎么写：<a href="https://pypi.org/classifiers/" target="_blank" rel="noreferrer">https://pypi.org/classifiers/</a></p><p>（2）<code>dependencies</code> 是你项目的依赖，别人使用 pip 安装的时候会同时安装上这些依赖；</p><p>注意这里如果有一些条件，比如有些包有版本的、操作系统、Python版本的限制，必须要按照规范写：<a href="https://peps.python.org/pep-0508/" target="_blank" rel="noreferrer">https://peps.python.org/pep-0508/</a></p><p>（3）可选依赖</p><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">project</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">optional-dependencies</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">test = [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;pytest&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">doc = [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mkdocs-material&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p>这些是可选的，安装的时候可以这样进行安装：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pdocr-rpc[test]</span></span></code></pre></div><p>这样就会安装 <code>pytest</code></p><p>（4）urls</p><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">project</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">urls</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Source = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://github.com/funny-dream/pdocr-rpc&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Documentation = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://funny-dream.github.io/pdocr-rpc&quot;</span></span></code></pre></div><p>这个在 <code>pypi</code> 的网页端能展示，别人可以通过那里跳转的你的文档或源码页面；</p><p>（5）version</p><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">path = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;allure_custom/__version__.py&quot;</span></span></code></pre></div><p>用一个 <code>__version__.py</code> 指定版本是比较优雅的方法；</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">__title__ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;allure_custom&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">__version__</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;2023.6.26&quot;</span></span></code></pre></div><p>关于 <code>project</code> 下的详细内容及规范，请查看：<a href="https://packaging.python.org/en/latest/specifications/declaring-project-metadata/#declaring-project-metadata" target="_blank" rel="noreferrer">https://packaging.python.org/en/latest/specifications/declaring-project-metadata/#declaring-project-metadata</a></p><h2 id="_2、打包" tabindex="-1">2、打包 <a class="header-anchor" href="#_2、打包" aria-label="Permalink to &quot;2、打包&quot;">​</a></h2><p>安装打包工具：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pip3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span></code></pre></div><p>打包：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python3</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span></code></pre></div><p>完成后应生成两个目录中的文件：<code>dist</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>dist/</span></span>
<span class="line"><span>├── xxx.whl</span></span>
<span class="line"><span>└── xxx.tar.gz</span></span></code></pre></div><h2 id="_3、发布" tabindex="-1">3、发布 <a class="header-anchor" href="#_3、发布" aria-label="Permalink to &quot;3、发布&quot;">​</a></h2><p>首先你需要注册一个 pypi 的账号：<a href="https://pypi.org/account/register/" target="_blank" rel="noreferrer">https://pypi.org/account/register/</a></p><p>安装发布工具：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pip3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> twine</span></span></code></pre></div><p>发布：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">twine</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upload</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dist/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span></span></code></pre></div><p>输入你的账号密码即可发布到 pypi，以后每次发布包记得更新版本；</p>`,52),n=[e];function l(h,o,k,r,d,c){return a(),i("div",null,n)}const y=s(p,[["render",l]]);export{g as __pageData,y as default};
