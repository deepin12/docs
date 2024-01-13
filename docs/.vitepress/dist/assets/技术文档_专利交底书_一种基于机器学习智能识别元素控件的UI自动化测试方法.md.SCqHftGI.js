import{_ as t,c as a,o as e,U as r,am as n}from"./chunks/framework.-9Q_U4ls.js";const u=JSON.parse('{"title":"一种基于机器学习智能识别元素控件的UI自动化测试方法","description":"","frontmatter":{},"headers":[],"relativePath":"技术文档/专利交底书/一种基于机器学习智能识别元素控件的UI自动化测试方法.md","filePath":"技术文档/专利交底书/一种基于机器学习智能识别元素控件的UI自动化测试方法.md","lastUpdated":1705116614000}'),o={name:"技术文档/专利交底书/一种基于机器学习智能识别元素控件的UI自动化测试方法.md"},s=r(`<h1 id="一种基于机器学习智能识别元素控件的ui自动化测试方法" tabindex="-1">一种基于机器学习智能识别元素控件的UI自动化测试方法 <a class="header-anchor" href="#一种基于机器学习智能识别元素控件的ui自动化测试方法" aria-label="Permalink to &quot;一种基于机器学习智能识别元素控件的UI自动化测试方法&quot;">​</a></h1><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># =============================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Author : mikigo</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># =============================</span></span></code></pre></div><h2 id="_0、缩略语和关键术语定义" tabindex="-1"><strong>0、缩略语和关键术语定义</strong> <a class="header-anchor" href="#_0、缩略语和关键术语定义" aria-label="Permalink to &quot;**0、缩略语和关键术语定义**&quot;">​</a></h2><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;"></th><th style="text-align:center;"></th></tr></thead><tbody><tr><td style="text-align:center;"><strong>缩写</strong></td><td style="text-align:center;"><strong>全称</strong></td><td style="text-align:center;"><strong>描述</strong></td></tr><tr><td style="text-align:center;">Opencv</td><td style="text-align:center;">Open Source Computer Vision Library</td><td style="text-align:center;">一个计算机视觉库，是一个基于BSD许可（开源）发行的跨平台计算机视觉和机器学习软件库，可以运行在Linux、Windows、Android和Mac OS操作系统上。。</td></tr><tr><td style="text-align:center;">WebM</td><td style="text-align:center;">WebM</td><td style="text-align:center;">一种视频文件格式，可用于实时录制和实时读取。</td></tr><tr><td style="text-align:center;">Tensorflow</td><td style="text-align:center;">Tensorflow</td><td style="text-align:center;">一个开源机器学习工具，是一个基于数据流编程的符号数学系统，被广泛应用于各类机器学习算法的编程实现。由谷歌人工智能团队谷歌大脑（Google Brain）开发和维护。</td></tr><tr><td style="text-align:center;">Pytorch</td><td style="text-align:center;">Pytorch</td><td style="text-align:center;">一个开源的Python机器学习库，基于Torch，用于自然语言处理等应用程序。</td></tr></tbody></table><h2 id="_1、相关技术背景-背景技术-与本发明最相近似的现有实现方案-现有技术" tabindex="-1">1、相关技术背景（背景技术），与本发明最相近似的现有实现方案（现有技术） <a class="header-anchor" href="#_1、相关技术背景-背景技术-与本发明最相近似的现有实现方案-现有技术" aria-label="Permalink to &quot;1、相关技术背景（背景技术），与本发明最相近似的现有实现方案（现有技术）&quot;">​</a></h2><p>在Linux桌面应用UI自动化测试的实施过程中，元素控件的定位经常会依赖于图像识别，通过识别目标控件在屏幕中的位置，从而控制鼠标键盘在此位置进行操作，最后再通过图像识别判断用例是否执行成功。</p><h3 id="_1-1、与本发明相关的现有技术一" tabindex="-1"><strong>1.1、与本发明相关的现有技术一</strong> <a class="header-anchor" href="#_1-1、与本发明相关的现有技术一" aria-label="Permalink to &quot;**1.1、与本发明相关的现有技术一**&quot;">​</a></h3><h4 id="_1-1-1、现有技术一的技术方案" tabindex="-1"><strong>1.1.1、现有技术一的技术方案</strong> <a class="header-anchor" href="#_1-1-1、现有技术一的技术方案" aria-label="Permalink to &quot;**1.1.1、现有技术一的技术方案**&quot;">​</a></h4><p>基于Opencv提供的模板匹配功能，对比目标小图和屏幕大图，计算出在屏幕中的位置。</p><h4 id="_1-1-2、现有技术一的缺点" tabindex="-1"><strong>1.1.2、现有技术一的缺点</strong> <a class="header-anchor" href="#_1-1-2、现有技术一的缺点" aria-label="Permalink to &quot;**1.1.2、现有技术一的缺点**&quot;">​</a></h4><p>（1）使用Opencv的模板匹配功能做目标元素定位和自动化用例断言时，如果UI发生细微变化都会出现识别失败，导致自动化用例不够健壮，而自动化测试人员，需要频繁的去更换图片资源，增加了自动化用例的维护成本。</p><p>（2）Opencv在ARM和MIPS上没有对应的官方包，存在无法使用pip安装Opencv的问题，在搭建自动化测试环境的时候，比较费时间。</p><p>（3）在自动化测试项目中需要保存大量的图片资源，在自动化测试后期，对图片资源的管理和维护将成为一个难点。</p><h3 id="_1-2、与本发明相关的现有技术二" tabindex="-1"><strong>1.2、与本发明相关的现有技术二</strong> <a class="header-anchor" href="#_1-2、与本发明相关的现有技术二" aria-label="Permalink to &quot;**1.2、与本发明相关的现有技术二**&quot;">​</a></h3><h4 id="_1-2-1、现有技术二的技术方案" tabindex="-1"><strong>1.2.1、现有技术二的技术方案</strong> <a class="header-anchor" href="#_1-2-1、现有技术二的技术方案" aria-label="Permalink to &quot;**1.2.1、现有技术二的技术方案**&quot;">​</a></h4><p>通过应用属性获取应用的元素坐标，比如：</p><p>（1）Web端，可以通过获取html的标签属性，从而获取在浏览器中的位置。</p><p>（2）桌面应用端，可以通过基于Accessibility对Qt应用的元素控件添加ObjectName，从而定位到元素控件的坐标。</p><p>（3）App端，可以通过应用的标签属性获取到元素控件的坐标。</p><p>这些都可以统称为通过属性的方式去获取坐标的技术方案。</p><h4 id="_1-2-2、现有技术二的缺点" tabindex="-1"><strong>1.2.2、现有技术二的缺点</strong> <a class="header-anchor" href="#_1-2-2、现有技术二的缺点" aria-label="Permalink to &quot;**1.2.2、现有技术二的缺点**&quot;">​</a></h4><p>（1）定位不稳定，Web端网络请求需要时间，采用属性定位存在概率性失败的情况。</p><p>（2）速度慢，通过属性定位时，其实都是通过整个属性标签的树形结构去寻找，如果属性的数量很大，并且树形结构层级很多，定位的速度会很慢。</p><p>（3）元素定位方案存在局限，如果某个元素控件没有添加属性标签，采用相对定位或者索引定位的方案，会增加自动化脚本后期的维护难度。</p><h2 id="_2、本发明技术方案的详细阐述" tabindex="-1"><strong>2、本发明技术方案的详细阐述</strong> <a class="header-anchor" href="#_2、本发明技术方案的详细阐述" aria-label="Permalink to &quot;**2、本发明技术方案的详细阐述**&quot;">​</a></h2><h3 id="_2-1、本发明所要解决的技术问题" tabindex="-1"><strong>2.1、本发明所要解决的技术问题</strong> <a class="header-anchor" href="#_2-1、本发明所要解决的技术问题" aria-label="Permalink to &quot;**2.1、本发明所要解决的技术问题**&quot;">​</a></h3><p>（1）在UI自动化测试过程中，由于需求迭代时UI细节变化频繁和受到环境影响导致的断言准确性问题。</p><p>（2）在UI自动化测试过程中，采用图像识别的定位方案时，需要频繁的维护图片资源，自动化用例维护成本高。</p><p>（3）在UI自动化测试过程中，采用属性定位元素控件时不稳定、效率不高的问题。</p><h3 id="_2-2、本发明提供的完整技术方案" tabindex="-1"><strong>2.2、本发明提供的完整技术方案</strong> <a class="header-anchor" href="#_2-2、本发明提供的完整技术方案" aria-label="Permalink to &quot;**2.2、本发明提供的完整技术方案**&quot;">​</a></h3><p>在UI自动化测试的过程中，测试机上的画面通过视频采集手段实时传输到服务器上，服务器基于机器学习和训练模型对实时传输过来的视频画面做识别。</p><p>智能识别模块，通过对大量图片素材进行数据标注，用于训练智能识别模型库，然后基于TensorFlow或Pytorch等机器学习框架，识别视频中应用的元素控件，最后将识别的坐标返回出来。</p><p>服务器通过智能化分析，如果测试结果与预期一致，将下一步操作指令通过USB模拟鼠标键盘串口设备发送给测试机，从而实现控制测试机执行自动化用例；如果测试结果与预期不一致将会进入中断处理及异常结果输出，继续执行后续场景，直至所有用例测试完成。</p><p><img src="`+n+'" alt=""></p><p>图（一）智能识别自动化测试方案流程图</p><h4 id="_2-2-1测试机与服务器连接及通讯方式" tabindex="-1"><strong>2.2.1测试机与服务器连接及通讯方式</strong> <a class="header-anchor" href="#_2-2-1测试机与服务器连接及通讯方式" aria-label="Permalink to &quot;**2.2.1测试机与服务器连接及通讯方式**&quot;">​</a></h4><p>（1）测试机上的画面通过视频采集手段实时转发到服务器上，服务器上通过视频录制软件实时获取到测试机上的画面视频，将视频格式设置为WebM格式，可以实时录制实时读取。</p><p>（2）测试机与服务器在同一个局域网内，采用USB模拟鼠标键盘串口设备连接，用于服务器在智能识别到目标元素之后，给测试机下发下一步操作指令。</p><h4 id="_2-2-2-智能识别-ui自动化测试" tabindex="-1"><strong>2.2.2 智能识别+UI自动化测试</strong> <a class="header-anchor" href="#_2-2-2-智能识别-ui自动化测试" aria-label="Permalink to &quot;**2.2.2 智能识别+UI自动化测试**&quot;">​</a></h4><p>智能识别主要使用Tensorflow或Pytorch流行的开源深度学习框架，实现目标检测的功能，找到目标的坐标位置（x，y），然后将获取到的坐标，作为参数传递给自动化测试脚本。</p><p>自动化测试脚本中通过USB模拟鼠标键盘串口设备，将操作指令发送给测试机，实现鼠标和键盘的基本操作：</p><p>（1） click 左键单击</p><p>（2） right_click 右键单击</p><p>（3） double_click 左键双击</p><p>（4） drag_to 拖拽到（绝对位置）</p><p>（5） drag_relative 拖拽距离（相对位置）</p><p>（6） input 输入</p><p>所有的基本操作使用Python语言封装接口，支持传参传递，在自动化测试执行过程中，将智能识别获取到的坐标，传递给封装的键鼠操作接口，最后执行操作脚本即可实现在测试机上执行测试用例步骤。</p><p>比如：在智能识别一个控件的时候，识别到的坐标为（100, 100），需要左键点击时，将代码组装为：</p><table><thead><tr><th></th></tr></thead><tbody><tr><td>click(100, 100)</td></tr></tbody></table><p>运行脚本，实现服务器下发指令到测试机执行点击动作。</p><h4 id="_2-2-3-智能识别目标元素" tabindex="-1"><strong>2.2.3 智能识别目标元素</strong> <a class="header-anchor" href="#_2-2-3-智能识别目标元素" aria-label="Permalink to &quot;**2.2.3 智能识别目标元素**&quot;">​</a></h4><p>智能识别元素的方案可以使用基于深度学习的目标检测方案，从而定位到，目标出现在图像的位置。</p><p>目前常用的目标检测算法按照阶段分类主要有两种：</p><p>一种是tow stage目标检测算法有：R-CNN、SPP-Net、Fast R-CNN、Faster R-CNN和R-FCN等。原理是先进行特征提取，然后对目标做预框选，最后定位位置。</p><p>另一个种是one stage目标检测算法有：OverFeat、YOLOv1、YOLOv2、YOLOv3、SSD和RetinaNet等。原理是先进行特征提取，然后直接进行回归定位位置。</p><p>通过训练智能识别的模型，目标检测算法就可以定位到目标控件的坐标位置。</p><h4 id="_2-2-4-训练识别模型" tabindex="-1"><strong>2.2.4 训练识别模型</strong> <a class="header-anchor" href="#_2-2-4-训练识别模型" aria-label="Permalink to &quot;**2.2.4 训练识别模型**&quot;">​</a></h4><p>通过对数据标注好的图片进行模型训练，可以生成智能识别所需要的模型库。</p><h4 id="_2-2-5-目标元素特征标注" tabindex="-1"><strong>2.2.5 目标元素特征标注</strong> <a class="header-anchor" href="#_2-2-5-目标元素特征标注" aria-label="Permalink to &quot;**2.2.5 目标元素特征标注**&quot;">​</a></h4><p>使用labelme或labelImg等数据标注软件对图片素材进行数据标注，比如使用labelme，使用鼠标对目标进行框选，类似于PS抠图，圈出目标图案之后保存会生成一个json文件，文件中保存的就是训练模型所要用到的特征数据。</p><h3 id="_2-3、本发明技术方案带来的有益效果" tabindex="-1"><strong>2.3、本发明技术方案带来的有益效果</strong> <a class="header-anchor" href="#_2-3、本发明技术方案带来的有益效果" aria-label="Permalink to &quot;**2.3、本发明技术方案带来的有益效果**&quot;">​</a></h3><p>（1）基于机器学习的技术方案，通过对大量图片资源训练智能识别的模型，提升元素识别的准确性，解决传统UI自动化测试中元素控件定位、断言不稳定性和准确性问题，提升了UI自动化测试在目标元素定位和断言的灵活性。</p><p>（2）采用设备分离的设计方案，所有数据由服务器来处理，处理速度极快，解决传统UI自动化测试中定位元素速度慢的问题，测试用例执行慢的问题，提升了自动化测试执行的效率。</p><p>（3）解决UI自动化测试中，受到需求迭代、环境因素导致UI变化，导致自动化用例失败的健壮性问题，减少了自动化用例代码及测试资源的维护成本。</p><h3 id="_2-4、针对上述技术方案-是否还有替代方案同样能完成发明目的" tabindex="-1"><strong>2.4、针对上述技术方案，是否还有替代方案同样能完成发明目的</strong> <a class="header-anchor" href="#_2-4、针对上述技术方案-是否还有替代方案同样能完成发明目的" aria-label="Permalink to &quot;**2.4、针对上述技术方案，是否还有替代方案同样能完成发明目的**&quot;">​</a></h3><p>暂无</p><h2 id="_3、本发明的技术关键点和欲保护点是什么" tabindex="-1"><strong>3、本发明的技术关键点和欲保护点是什么</strong> <a class="header-anchor" href="#_3、本发明的技术关键点和欲保护点是什么" aria-label="Permalink to &quot;**3、本发明的技术关键点和欲保护点是什么**&quot;">​</a></h2><p>（1）采用设备分离的技术方案，通过视频采集设备将测试机上的画面转发输出到服务器，服务器捕获视频画面并进行智能识别，所有测试用例在服务器上执行，通过USB模拟鼠标键盘串口设备下发测试指令给测试机，从而完成UI自动化测试。</p><p>（2）对国产化操作系统进行UI自动化测试时，采用基于机器学习的目标检测技术，用于自动化测试中的元素定位，再使用鼠标键盘在坐标位置操作，从而实现智能自动化测试的技术方案。</p><h2 id="_4、附件" tabindex="-1"><strong>4、附件：</strong> <a class="header-anchor" href="#_4、附件" aria-label="Permalink to &quot;**4、附件：**&quot;">​</a></h2><p>参考文献</p>',72),l=[s];function i(h,p,d,c,_,g){return e(),a("div",null,l)}const x=t(o,[["render",i]]);export{u as __pageData,x as default};
