import{_ as s,c as i,o as a,U as p}from"./chunks/framework.-9Q_U4ls.js";const u=JSON.parse('{"title":"Linux 上如何选择用 pip3 还是 sudo pip3","description":"","frontmatter":{"counter":true},"headers":[],"relativePath":"编程语言/Python/Linux上如何选择用pip3还是sudopip3.md","filePath":"编程语言/Python/Linux上如何选择用pip3还是sudopip3.md","lastUpdated":1705116614000}'),l={name:"编程语言/Python/Linux上如何选择用pip3还是sudopip3.md"},n=p(`<h1 id="linux-上如何选择用-pip3-还是-sudo-pip3" tabindex="-1">Linux 上如何选择用 pip3 还是 sudo pip3 <a class="header-anchor" href="#linux-上如何选择用-pip3-还是-sudo-pip3" aria-label="Permalink to &quot;Linux 上如何选择用 pip3 还是 sudo pip3&quot;">​</a></h1><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ==================================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Author : mikigo</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ==================================</span></span></code></pre></div><h2 id="_1-sudo-pip3" tabindex="-1">（1）sudo pip3 <a class="header-anchor" href="#_1-sudo-pip3" aria-label="Permalink to &quot;（1）sudo pip3&quot;">​</a></h2><p>如果这个包是带有<strong>命令行工具</strong>的，推荐使用<code>sudo pip3 install xxx</code> 进行安装;</p><p>这样命令行工具才能写入到系统目录下，一般是在 <code>/usr/local/bin/</code> 下面；</p><hr><blockquote><p>如果你没有加 <code>sudo</code> 安装，命令行工具无法写入到系统目录下，而是写入到 <code>$HOME/.local/bin</code>，这个路径很明显不是系统的环境变量，因此无法<strong>直接</strong>使用此命令，要想使用它你有<strong>两种</strong>方法：</p><p>第一种：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入到命令目录 </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.local/bin/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 给命令执行赋权限</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mycmd</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 执行它</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./mycmd</span></span></code></pre></div><p>第二种：</p><p>将 <code>$HOME/.local/bin</code> 添加到 <code>PATH</code> 里面:</p><p>临时修改：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/home/uos/.local/bin:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$PATH</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#或者把PATH放在前面</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$PATH</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:/home/uos/.local/bin</span></span></code></pre></div><p>用户级别永久修改：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.bashrc</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在最后一行加上</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$PATH</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:/home/uos/.local/bin</span></span></code></pre></div><p>系统级别永久修改：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.bash_profile</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在最后一行加上</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$PATH</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:/home/uusama/mysql/bin</span></span></code></pre></div></blockquote><p>你看如果带命令行工具的库，安装的时候没有加 <code>sudo</code> 你要多做多少事情；</p><p>所以请记住，带有<strong>命令行工具</strong>的三方库，安装的时候使用 <code>sudo pip3 install</code>。</p><h2 id="_2-pip3" tabindex="-1">（2）pip3 <a class="header-anchor" href="#_2-pip3" aria-label="Permalink to &quot;（2）pip3&quot;">​</a></h2><p>如果这个库没有命令行工具，或者说它安装过程中不需要写入系统目录，你使用 pip3 或 sudo pip3 安装都可以；</p><p>但是，我个人推荐<strong>不要加 <code>sudo</code></strong>；</p><p>原因就需要介绍一点点<strong>背景知识</strong>：</p><blockquote><p>在 Linux 上，Python 三方包通常被安装在以下三个路径中：</p><ol><li><code>/usr/lib/pythonX.X/site-packages</code></li></ol><p>这个路径中安装的是系统默认的 Python 解释器的三方包，X.X 代表 Python 版本号，如 2.7、3.6;</p><ol start="2"><li><code>/usr/local/lib/pythonX.X/site-packages</code></li></ol><p>这个路径中安装的是用户自己安装的 Python 解释器的三方包，X.X 代表 Python 版本号，如 2.7、3.6;</p><ol start="3"><li><code>$HOME/.local/lib/pythonX.X/site-packages</code></li></ol><p>这个路径中安装的是当前用户的 Python 解释器的三方包，X.X代表 Python 版本号，如 2.7、3.6;</p><p>在加载Python三方包时，系统会<strong>按照以下顺序查找三方包的路径</strong>：</p><ol><li>先查找当前工作目录是否有需要的包;想</li><li>查找 <code>$HOME/.local/lib/pythonX.X/site-packages</code>;</li><li>查找 <code>/usr/local/lib/pythonX.X/site-packages</code></li><li>查找 <code>/usr/lib/pythonX.X/site-packages</code></li></ol><p>如果在以上路径中找到了需要的包，就会加载它们；</p><p>如果没有找到，则会抛出ImportError异常；</p><p>需要注意的是，如果相同的包存在于多个路径中，系统会加载最先找到的那个包，而不是后面找到的那个包；</p><p>因此，如果有多个Python解释器或版本，并且使用了不同的路径安装三方包，就需要确认加载的包是否正确。</p></blockquote><p>使用 <code>pip3</code> 安装的时候是安装到 <code>$HOME/.local/lib/pythonX.X/site-packages</code> 路径下；</p><p>而使用 <code>sudo pip3</code> 安装的时候是安装到 <code>/usr/local/lib/pythonX.X/site-packages</code> 路径下</p><p>基于前面的背景知识，这个路径是排在前面的，是会被<strong>优先加载到</strong>；</p><p>因此，<strong>结论：我始终推荐优先考虑使用 <code>pip3</code> 安装（不加<code>sudo</code> ）；</strong></p><p>有同学要问了，凭啥优先加载到，我就要用它呢？你的领导做啥都先想到你，你觉得是不是好事，你细品～～</p><hr>`,20),e=[n];function t(o,h,d,c,k,r){return a(),i("div",null,e)}const y=s(l,[["render",t]]);export{u as __pageData,y as default};
