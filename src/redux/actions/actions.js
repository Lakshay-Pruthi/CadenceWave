import { APP_TOKEN } from "./action-types";

export const app_token = (token) => ({
  type: APP_TOKEN,
  payload: token,
});
