import execa from 'execa';

export async function canUseGit() {
  try {
    await execa('git', ['--version'], { env: process.env });
    return true;
  } catch (e) {
    return false;
  }
}

export async function isInGitRepo(cwd: string) {
  try {
    await execa('git', ['rev-parse', '--is-inside-work-tree'], {
      env: process.env,
      cwd,
    });
    return true;
  } catch (e) {
    return false;
  }
}

export async function initGitRepo(cwd: string, defaultBranch: string) {
  await execa('git', ['init', `--initial-branch=${defaultBranch}`], {
    env: process.env,
    cwd,
  });
}

export async function gitAdd(cwd: string) {
  await execa('git', ['add', '-A'], {
    env: process.env,
    cwd,
  });
}

export async function gitCommit(cwd: string, commitMessage: string) {
  await execa('git', ['commit', '-m', commitMessage, '--no-verify'], {
    env: process.env,
    cwd,
  });
}
