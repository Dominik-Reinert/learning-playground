const path = require("path");
const findGitRoot = require("find-git-root");

const hiddenGitFolderUrl = findGitRoot(path.resolve("./base_url.js"));
const gitRootUrl = hiddenGitFolderUrl.slice(
  0,
  hiddenGitFolderUrl.lastIndexOf("\\") + 1
);

const BaseUrls = {
  gitRoot: gitRootUrl
};

module.exports = { getGitRoot: () => BaseUrls.gitRoot };
