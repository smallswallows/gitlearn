git学习
git是分布式版本管理工具

git 每次 git commit -m "本次提交说明" 都需要先 git add 文件名

版本退回
git reset --hard HEAD^ 退回上一版本
git reset --hard HEAD^^ 退回上上一个版本
git reset --hard HEAD~100 退回往上100个版本

版本恢复
git reflog  查看每一次提交的commit id
git reset --hard commit_id   恢复到指定版本