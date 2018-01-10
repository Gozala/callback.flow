/* @flow */

export interface Callback<error, value = void> {
  (error): void;
  (void | null, value): void;
}

declare var callback: Callback<Error>
