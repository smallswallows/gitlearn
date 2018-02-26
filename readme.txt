git学习
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

 git remote add origin https://github.com/smallswallows/gitlearn.git 关联远程库之后
 使用 git push -u origin master 第一次推送master分支所有内容；以后的每一次提交可以使用命令 git push origin master 推送最新版
