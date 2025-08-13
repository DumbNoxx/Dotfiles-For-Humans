import { ApiExp, Exp } from "src/models/expBlock.type";

export const BackendExpApiAdapter = (url: ApiExp): Exp => {
  return {
    background: url.background,
    expertise: url.expertise,
    approach: url.approach,
  }
}
