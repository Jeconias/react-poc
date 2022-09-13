declare module 'named-urls' {
  interface Routes {
    [path: string]: string | Routes;
  }
  interface ReverseParams {
    [path: string]: number | string | undefined;
  }

  function include<B, R>(base: B, routes: R): { toString(): string } & R;
  function reverse(pattern: string, params?: ReverseParams): string;
  function reverseForce(pattern: string, params?: ReverseParams): string;
}
