import { signinAction } from "./signin.action";
import { LoginSchema } from "./signin-schema";

export function useSignin() {
  async function onSubmit(data: LoginSchema) {
    return signinAction(data);
  }
  return { onSubmit };
}
