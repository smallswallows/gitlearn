﻿git学习
git是分布式版本管理工具

电脑看到的目录属于工作区gitlearn
版本库是.git 不属于工作区 暂存区在该文件夹

git add  把文件添加到暂存区
git commit 一次性把暂存区所有提交到分支，如果提交后，没对工作区做修改，工作区是干净的 clean


git 每次 git commit -m "本次提交说明" 都需要先 git add 文件名

版本退回
git reset --hard HEAD^ 退回上一版本
git reset --hard HEAD^^ 退回上上一个版本
git reset --hard HEAD~100 退回往上100个版本

版本恢复
git reflog  查看每一次提交的commit id
git reset --hard commit_id   恢复到指定版本


远程仓库
github中创建相同文件夹
创建成功之后，提示代码复制粘贴
  origin:默认仓库名
git remote add origin https://github.com/smallswallows/gitlearn.git 关联远程库之后
 使用 git push -u origin master 第一次推送master分支所有内容；以后的每一次提交可以使用命令 git push origin master 推送最新版


git pull add origin  下载代码



分支管理
git checkout -b 分支名  b参数表示创建dev分支并切换分支
 相当于
git branch 分支名 查看分支  git checkout 分支名 切换分支

git branch -d 分支名  删除分支

git merge 分支名  合并到mastergit


创建分支gitdev1

切换到分支master

提交时分支冲突被git标记出来之后需要手动修改不同的地方，然后在提交


创建标签（版本号）
git tag v1.0

git tag 查看标签
git show v0.0  查看标签文字

git tag -d v0.0 删除标签

如何与码云建立连接
git remote rm origin  取消与远程库的关联

 git remote add origin https://gitee.com/smallswallows/gitlearn.git

git push -u origin master

同时关联码云与github 两者的仓库名区分开来，其它不变

git remote rm origin
先关联github,
git remote add github https://github.com/smallswallows/gitlearn.git
关联码云
git remote add gitee https://gitee.com/smallswallows/gitlearn.git

git remote -v 查看远程库信息

推送至 github   git push github master
推送至 码云      git push gitee master

