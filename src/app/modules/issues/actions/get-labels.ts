
import { sleep } from "@helpers/sleep";
import { GitHubLabel } from "../interfaces";

export const getLabels = async(): Promise<GitHubLabel[]> => {

  await sleep(1500);

  try {

    const resp = await fetch(`https://api.github.com/repos/angular/angular/labels`);

    if(!resp.ok) throw "Can't load labels";

    const labels: GitHubLabel[] = await resp.json();

    console.log({labels});


    return labels;

  } catch (error) {
    throw "Can't load labels";
  }

}
