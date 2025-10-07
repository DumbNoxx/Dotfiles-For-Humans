import type { ApiExp, Exp } from "src/models/expBlock.type";

export const BackendExpApiAdapter = (url: ApiExp): Exp => {
  const { background, expertise, approach } = url;
  return {
    background,
    expertise,
    approach,
  }
}
