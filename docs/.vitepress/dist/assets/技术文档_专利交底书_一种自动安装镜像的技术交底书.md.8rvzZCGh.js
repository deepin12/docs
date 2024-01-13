import{_ as t,c as a,o as e,U as s,aB as i}from"./chunks/framework.-9Q_U4ls.js";const b=JSON.parse('{"title":"一种自动安装镜像的技术交底书","description":"","frontmatter":{},"headers":[],"relativePath":"技术文档/专利交底书/一种自动安装镜像的技术交底书.md","filePath":"技术文档/专利交底书/一种自动安装镜像的技术交底书.md","lastUpdated":1705116614000}'),n={name:"技术文档/专利交底书/一种自动安装镜像的技术交底书.md"},r=s(`<h1 id="一种自动安装镜像的技术交底书" tabindex="-1">一种自动安装镜像的技术交底书 <a class="header-anchor" href="#一种自动安装镜像的技术交底书" aria-label="Permalink to &quot;一种自动安装镜像的技术交底书&quot;">​</a></h1><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># =============================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Author : mikigo、安东、海针</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># =============================</span></span></code></pre></div><h2 id="_0、缩略语和关键术语定义" tabindex="-1"><strong>0、缩略语和关键术语定义</strong> <a class="header-anchor" href="#_0、缩略语和关键术语定义" aria-label="Permalink to &quot;**0、缩略语和关键术语定义**&quot;">​</a></h2><table><thead><tr><th style="text-align:center;"><strong>术语</strong></th><th style="text-align:center;"><strong>全称</strong></th><th style="text-align:center;"><strong>解释</strong></th></tr></thead><tbody><tr><td style="text-align:center;">MIPS</td><td style="text-align:center;">MIPS架构</td><td style="text-align:center;">是一种采取精简指令集（RISC）的处理器架构</td></tr><tr><td style="text-align:center;">PXE</td><td style="text-align:center;">Preboot eXecution Environment</td><td style="text-align:center;">提供了一种使用网络接口启动计算机的机制。这种机制让计算机的启动可以不依赖本地数据存储设备已安装的操作系统。</td></tr><tr><td style="text-align:center;">efibootmgr</td><td style="text-align:center;">efibootmgr</td><td style="text-align:center;">EFI引导管理器，Linux操作系统上管理启动项的工具。</td></tr><tr><td style="text-align:center;">OEM镜像</td><td style="text-align:center;">定制镜像</td><td style="text-align:center;">根据需要，满足个性化的定制，可以加入需求，实现安装过程无需人工介入，且安装好的系统符合预期需求。</td></tr></tbody></table><h2 id="_1、相关技术背景-背景技术-与本发明最相近似的现有实现方案-现有技术" tabindex="-1"><strong>1、相关技术背景（背景技术），与本发明最相近似的现有实现方案（现有技术）</strong> <a class="header-anchor" href="#_1、相关技术背景-背景技术-与本发明最相近似的现有实现方案-现有技术" aria-label="Permalink to &quot;**1、相关技术背景（背景技术），与本发明最相近似的现有实现方案（现有技术）**&quot;">​</a></h2><p>在基于国产Linux操作系统的自动化测试中，需要对每日构建的最新的系统镜像进行安装，以便能在每日最新的系统上执行自动化测试。</p><p>使用PXE安装系统镜像可以方便快速的实现大量测试机更新系统，通过下载每日最新的系统镜像文件，部署到PXE服务器上，测试机通过网络启动的方式重启，就可以拉取到PXE服务器上的镜像文件，从而实现安装最新系统。</p><h3 id="_1-1、与本发明相关的现有技术" tabindex="-1"><strong>1.1、与本发明相关的现有技术</strong> <a class="header-anchor" href="#_1-1、与本发明相关的现有技术" aria-label="Permalink to &quot;**1.1、与本发明相关的现有技术**&quot;">​</a></h3><h4 id="_1-1-1、现有技术的技术方案" tabindex="-1"><strong>1.1.1、现有技术的技术方案</strong> <a class="header-anchor" href="#_1-1-1、现有技术的技术方案" aria-label="Permalink to &quot;**1.1.1、现有技术的技术方案**&quot;">​</a></h4><p>在AMD和ARM平台的自动化测试中，通过PXE服务安装系统之后，下一次需要更新系统时，只需要使用efibootmgr命令，设置下一次启动以网络启动，然后使用reboot命令重启，即可进入网络启动，从而实现自动化无人值守安装最新镜像。</p><p>在AMD和ARM架构客户机中，BIOS中硬盘启动作为第一启动顺序，安装前须要远程登录客户机将机器下一次启动修改为网络启动。重启客户机之后，客户机以网络启动方式进入PXE引导、安装操作系统。安装完操作系统，安装器从硬盘启动引导客户机重启，随后进入安装后配置，完成系统安装。</p><p>设置下一次启动以网络启动的命令为：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">efibootmgr</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 网络启动项的序号</span></span></code></pre></div><h4 id="_1-1-2、现有技术的缺点" tabindex="-1"><strong>1.1.2、现有技术的缺点</strong> <a class="header-anchor" href="#_1-1-2、现有技术的缺点" aria-label="Permalink to &quot;**1.1.2、现有技术的缺点**&quot;">​</a></h4><p>（1）在AMD和ARM平台上，安装每日构建最新的UOS系统自动化部署流程中，有多处须要重启客户端操作。在安装完操作系统之后须要重启再进入后配置，客户端二次安装等操作。通过efibootmgr命令完成客户端对下次重启项的选择。</p><p>（2） MIPS平台上没有efibootmgr命令，需要通过PXE服务安装系统时，只能重启开机手动进入BIOS设置，将启动项一修改为网络启动，然后再次重启，才能进入PXE服务进行网络安装系统。无法实现自动化无人值守安装最新镜像。</p><p>（3） 部分机型执行efibootmgr命令之后无法准确获取到下次重启的启动号。</p><h2 id="_2、本发明技术方案的详细阐述" tabindex="-1"><strong>2、本发明技术方案的详细阐述</strong> <a class="header-anchor" href="#_2、本发明技术方案的详细阐述" aria-label="Permalink to &quot;**2、本发明技术方案的详细阐述**&quot;">​</a></h2><h3 id="_2-1、本发明所要解决的技术问题" tabindex="-1"><strong>2.1、本发明所要解决的技术问题</strong> <a class="header-anchor" href="#_2-1、本发明所要解决的技术问题" aria-label="Permalink to &quot;**2.1、本发明所要解决的技术问题**&quot;">​</a></h3><p>（1）在对UOS自动化测试的过程中，不依赖于efibootmgr这个工具，完成部署前、部署中客户端重启引导问题。</p><p>（2）解决MIPS平台无法进行自动化无人值守安装镜像的问题。</p><h3 id="_2-2、本发明提供的完整技术方案" tabindex="-1"><strong>2.2、本发明提供的完整技术方案</strong> <a class="header-anchor" href="#_2-2、本发明提供的完整技术方案" aria-label="Permalink to &quot;**2.2、本发明提供的完整技术方案**&quot;">​</a></h3><p>在进行自动化无人值守安装镜像的过程中，通过服务端流量精准控制，适时控制服务端不同种类数据流量，以便于客户端正确的完成网络引导或硬盘引导。</p><p><img src="`+i+'" alt=""></p><p>图（一）自动安装镜像流程图</p><h4 id="_2-2-1、配置启动项" tabindex="-1"><strong>2.2.1、配置启动项</strong> <a class="header-anchor" href="#_2-2-1、配置启动项" aria-label="Permalink to &quot;**2.2.1、配置启动项**&quot;">​</a></h4><p>在BIOS-启动里面配置开机启动顺序，将测试机启动项一设置为网络启动，启动项二为硬盘启动。进入BIOS的方法通常可以在开机时，按Delete键进入。</p><h4 id="_2-2-2、网络启动-服务端控制udp数据转发" tabindex="-1"><strong>2.2.2、网络启动，服务端控制UDP数据转发</strong> <a class="header-anchor" href="#_2-2-2、网络启动-服务端控制udp数据转发" aria-label="Permalink to &quot;**2.2.2、网络启动，服务端控制UDP数据转发**&quot;">​</a></h4><p>通过ssh远程连接方式重启测试机，同时，在服务端循环检测/var/log/daemon.log日志文件里面是否存在测试机tftp发送日志，如果存在，说明客户端已经完成UDP数据交互，开始下载引导文件并执行安装引导流程。此时即可关闭服务端针对该客户端UDP数据的发送。</p><p>添加防火墙规则，关闭客户端UDP数据转发的命令为：</p><p>其中IP为测试机的IP。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> iptables</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> OUTPUT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> IP</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> udp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -j</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> REJECT</span></span></code></pre></div><h4 id="_2-2-3、进入硬盘启动" tabindex="-1"><strong>2.2.3、进入硬盘启动</strong> <a class="header-anchor" href="#_2-2-3、进入硬盘启动" aria-label="Permalink to &quot;**2.2.3、进入硬盘启动**&quot;">​</a></h4><p>安装完成之后会有一次自动重启，测试机重启进入启动项一网络启动时，由于已经关闭该客户端UDP数据发送，启动项一会因为超时进入启动项二，启动项二为硬盘启动，这样就能正常进入系统。</p><h4 id="_2-2-4、解锁udp数据转发" tabindex="-1"><strong>2.2.4、解锁UDP数据转发</strong> <a class="header-anchor" href="#_2-2-4、解锁udp数据转发" aria-label="Permalink to &quot;**2.2.4、解锁UDP数据转发**&quot;">​</a></h4><p>正常进入系统之后，只要我们没有在服务器上打开客户端UDP数据转发，测试机重启都可以正常进入系统。</p><p>如果需要装机时，在服务器上打开客户端UDP数据转发，测试机重启即可进入网络装机。</p><p>清空防火墙规则，打开客户端UDP数据转发的命令为：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> iptables</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -F</span></span></code></pre></div><h3 id="_2-3、本发明技术方案带来的有益效果" tabindex="-1"><strong>2.3、本发明技术方案带来的有益效果</strong> <a class="header-anchor" href="#_2-3、本发明技术方案带来的有益效果" aria-label="Permalink to &quot;**2.3、本发明技术方案带来的有益效果**&quot;">​</a></h3><p>（1）解决了自动化测试过程中，MIPS平台无法通过PXE服务自动安装系统镜像的问题。</p><p>（2）解决了X86、ARM部分机器使用efibootmgr工具不生效，无法控制启动项的问题。</p><h3 id="_2-4、针对上述技术方案-是否还有替代方案同样能完成发明目的" tabindex="-1"><strong>2.4、针对上述技术方案，是否还有替代方案同样能完成发明目的</strong> <a class="header-anchor" href="#_2-4、针对上述技术方案-是否还有替代方案同样能完成发明目的" aria-label="Permalink to &quot;**2.4、针对上述技术方案，是否还有替代方案同样能完成发明目的**&quot;">​</a></h3><p>无</p><h2 id="_3、本发明的技术关键点和欲保护点是什么" tabindex="-1"><strong>3、本发明的技术关键点和欲保护点是什么</strong> <a class="header-anchor" href="#_3、本发明的技术关键点和欲保护点是什么" aria-label="Permalink to &quot;**3、本发明的技术关键点和欲保护点是什么**&quot;">​</a></h2><p>（1）通过服务端流量精准控制，合理关闭指定客户端UDP数据转发，实现MIPS架构测试机无人值守安装镜像，从而实现MIPS架构对每日构建镜像的自动化安装和自动化测试。</p><p>（2）本技术方案可应用于所有架构，实现不依赖启动项管理工具，精准控制测试机启动方式。</p><h2 id="_4、附件" tabindex="-1"><strong>4、附件：</strong> <a class="header-anchor" href="#_4、附件" aria-label="Permalink to &quot;**4、附件：**&quot;">​</a></h2><p>参考文献（如专利/论文/标准等）</p><p>l PXE简介及使用说明：</p><p><a href="https://blog.csdn.net/jiangwei0512/article/details/99993949" target="_blank" rel="noreferrer"><em>https://blog.csdn.net/jiangwei0512/article/details/99993949</em></a></p><p>l OEM镜像定制说明:</p><p><a href="https://wikidev.uniontech.com/OEM%E9%95%9C%E5%83%8F%E5%AE%9A%E5%88%B6%E8%AF%B4%E6%98%8E" target="_blank" rel="noreferrer"><em>https://wikidev.uniontech.com/OEM%E9%95%9C%E5%83%8F%E5%AE%9A%E5%88%B6%E8%AF%B4%E6%98%8E</em></a></p><p>l 用efibootmgr管理UEFI启动项:</p><p><a href="https://blog.csdn.net/mdykj33/article/details/99716705" target="_blank" rel="noreferrer"><em>https://blog.csdn.net/mdykj33/article/details/99716705</em></a></p>',55),l=[r];function o(h,p,d,c,g,k){return e(),a("div",null,l)}const u=t(n,[["render",o]]);export{b as __pageData,u as default};
