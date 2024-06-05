import { Octokit } from "octokit";
import "dotenv/config";

async function main() {
  if (!process.env.GITHUB_ACCESS_TOKEN) {
    console.log("dupa");
    return;
  }
  const octokit = new Octokit({
    auth: process.env.GITHUB_ACCESS_TOKEN,
  });

  console.log("Burger type?");

  try {
    const {
      data: { login },
    } = await octokit.rest.users.getAuthenticated();
    console.log("Well done.");
    console.log(login);
  } catch (err) {
    console.log(err);
  }
}
main();
