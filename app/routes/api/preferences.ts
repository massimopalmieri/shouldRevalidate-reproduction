import {ActionArgs, json} from '@remix-run/server-runtime';

export async function action() {
  return json({
    data: "Successfully ran action",
  });
}
