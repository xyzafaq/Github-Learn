# How to use Github?
<br>
Following are instructions to use github account.

Remote = Repository in github website <br>
Local = Repository in local machine <br>

***********CLONE A GITHUB REPOSITORY*********** <br>
git clone <repo link> (Clone repo from remote to local) <br>
git add . (Load changes to be ready for commit) <br>
git commit --m (Add a stage of commit) <br>
git push origin main (Push all commits to github repo) <br>
git push -u origin main (set origin main by default once =>next time=> git push ) <br>
git status <br>
git config --list (Show account details) <br>
 <br>
***********ADD REMOTE REPOSITORY TO YOUR NEW LOCAL Directory*********** <br>
git init (Initialize git) <br>
git remote add origin <repo link> (Connect remote directory with local) <br>
git remote -v (check which remote is connected to local) <br>
git branch (to check brance) <br>
git branch -M main (to rename branch to main) <br>
git push origin main <br>

***********BRANCHES*********** <br>
git branch (check branch) <br>
git branch -M main (rename branch) <br>
it checkout <branch name> (to navigate) <br>
git checkout -b <new branch name> (to create new branch) <br>
git branch -d <branch name> (to delete branch) <br>
****MERGING CODE**** <br>
git diff <branch name> (to compare branch to current branch) <br>
1) git merge <branch name> (merge two branches) <br>

2) When git pull & merge on github is done to merge codes of a branch with main. <br>
   It will appear as new commit on github but we have to download the code using: <br>
   => git pull origin main (Download the current code) <br>
****UNDO CHANGES**** <br>
Case 1: staged changes (git add .) <br>
	git reset <File name> <br>
	git reset <br>
Case 2: commited changes (for one commit) <br>
	git reset Head~1 <br>
Case 3: commited changes (for many commites) <br>
	git reset <commit hash> <br>
	git reset --hard <commit hash> <br>
	 <br>