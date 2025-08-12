//

export interface iParams<T> {
  params: Promise<{ [key: string]: T }>;
}
