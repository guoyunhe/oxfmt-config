export interface OxfmtConfigOptions {
  lastNameUpperCase?: boolean;
}

export function oxfmtConfig(firstName: string, lastName: string, options?: OxfmtConfigOptions) {
  if (options?.lastNameUpperCase) {
    return `${firstName} ${lastName.toLocaleUpperCase()}`;
  }
  return `${firstName} ${lastName}`;
}
