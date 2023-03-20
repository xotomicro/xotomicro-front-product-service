# UPDATE GIT REPO
function gitUpdate() {
	git add . && git commit -m "blast off 🚀"
	git push
}

# INIT REPO
function gitInit() {
	git tag -l | xargs -n 1 git push --delete origin
	git tag | xargs git tag -d
	default_branch=$(basename $(git symbolic-ref --short refs/remotes/origin/HEAD)) # get default name
	git checkout --orphan tmp                                                       # create branch
	git add -A                                                                      # add all files and commit them
	git commit -m "blast off 🚀"                                                     # temp message
	git branch -D $default_branch                                                   # deletes the default branch
	git branch -m $default_branch                                                   # rename the current branch to default
	git push -f origin $default_branch                                              # force push default branch to github
	git gc --aggressive --prune=all                                                 # remove the old files
}

$1
