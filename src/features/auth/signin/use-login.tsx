import { loginAction } from "./login.action";
import { LoginSchema } from "./login.schema";

export function useLogin() {
  async function onSubmit(data: LoginSchema) {
    return loginAction(data);
  }
  return { onSubmit };
}
