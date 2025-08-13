interface ImportMetaEnvPublic {
  readonly PUBLIC_EMAIL: string;
  readonly PRIVATE_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnvPublic;
}
