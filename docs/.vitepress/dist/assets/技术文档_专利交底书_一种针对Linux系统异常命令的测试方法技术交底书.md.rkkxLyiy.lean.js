import{_ as s,c as a,o as l,U as e,m as t,aC as p,aD as r,aE as o,aF as i,aG as n,aH as u}from"./chunks/framework.-9Q_U4ls.js";const A=JSON.parse('{"title":"一种针对Linux系统异常命令的测试方法技术交底书","description":"","frontmatter":{},"headers":[],"relativePath":"技术文档/专利交底书/一种针对Linux系统异常命令的测试方法技术交底书.md","filePath":"技术文档/专利交底书/一种针对Linux系统异常命令的测试方法技术交底书.md","lastUpdated":1705116614000}'),_={name:"技术文档/专利交底书/一种针对Linux系统异常命令的测试方法技术交底书.md"},d=e("",39),h=t("table",{rm:"","-f":"",testfile1:""},[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}})])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},'#!/usr/bin/env bats setup(){ echo True > testfile1} # 用例1@test "test1" { run cat testfile1 | grep True [ $status -eq 0 ]} # 用例2@test "test2" { run cat testfile1 | grep False [ $status -ne 0 ]} # 用例3@test "test3" { run cat testfile2 | grep False [ $status -ne 0 ]} # 用例4@test "test4" { run cat testfile1 | sed ‘s/True/False/g’ [ $status -ne 0 ]} # 用例5@test "test5" { run cat testfile2 | sed ‘s/True/False/g’ [ $status -ne 0 ]} teardown()')])])],-1),q=t("p",null,"执行测试结果如下：",-1),g=t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}})])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"✗ test1 (in test file test1.bats, line 11) `run cat testfile1 | grep True' failed ✗ test2 (in test file test1.bats, line 18) `run cat testfile1 | grep False' failed ✗ test3 (in test file test1.bats, line 25) `run cat testfile2 | grep False' failed ✗ test4 (in test file test1.bats, line 32) `[ $status -eq 0 ]' failed with status 2 ✗ test5 (in test file test1.bats, line 38) `[ $status -eq 0 ]' failed with status 2 5tests, 5 failures")])])],-1),c=t("p",null,"可以看到所有测试命令的结果均为失败，很明显测试命令中包含管道时，会影响框架对测试结果的判断，这里就限制了很多测试场景了，部分用例将命令状换后去掉管道再进行测试（用例4、用例5主要描述管道问题，由于无法使用，这里直接去掉）：",-1),f=t("table",{rm:"","-f":"",testfile1:""},[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}})])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},'#!/usr/bin/env bats setup(){ echo True > testfile1} # 用例1@test "test1" { run grep True testfile1 [ $status -eq 0 ]} # 用例2@test "test2" { run grep False testfile1 [ $status -ne 0 ]} # 用例3@test "test3" { run grep False testfile2 [ $status -ne 0 ]} teardown()')])])],-1),b=e("",139),x=[d,h,q,g,c,f,b];function m(y,E,T,$,k,F){return l(),a("div",null,x)}const C=s(_,[["render",m]]);export{A as __pageData,C as default};
