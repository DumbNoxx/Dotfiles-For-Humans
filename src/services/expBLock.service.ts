import { BackendExpApiAdapter } from "@/adapters"

export const BackendApi = async (api: string) => {
  return fetch(api)
    .then(res => res.json())
    .then(res => BackendExpApiAdapter(res[0]))
}

