import { ApiProperty } from '@nestjs/swagger';

export class PlainBodyDto implements String {
  readonly [index: number]: string;
  toString(): string {
    throw new Error('Method not implemented.');
  }
  charAt(pos: number): string {
    throw new Error('Method not implemented.');
  }
  charCodeAt(index: number): number {
    throw new Error('Method not implemented.');
  }
  concat(...strings: string[]): string {
    throw new Error('Method not implemented.');
  }
  indexOf(searchString: string, position?: number): number {
    throw new Error('Method not implemented.');
  }
  lastIndexOf(searchString: string, position?: number): number {
    throw new Error('Method not implemented.');
  }
  localeCompare(that: string): number;
  localeCompare(
    that: string,
    locales?: string | string[],
    options?: Intl.CollatorOptions
  ): number;
  localeCompare(that: any, locales?: any, options?: any): number {
    throw new Error('Method not implemented.');
  }
  match(regexp: string | RegExp): RegExpMatchArray;
  match(matcher: {
    [Symbol.match](string: string): RegExpMatchArray;
  }): RegExpMatchArray;
  match(matcher: any): RegExpMatchArray {
    throw new Error('Method not implemented.');
  }
  replace(searchValue: string | RegExp, replaceValue: string): string;
  replace(
    searchValue: string | RegExp,
    replacer: (substring: string, ...args: any[]) => string
  ): string;
  replace(
    searchValue: {
      [Symbol.replace](string: string, replaceValue: string): string;
    },
    replaceValue: string
  ): string;
  replace(
    searchValue: {
      [Symbol.replace](
        string: string,
        replacer: (substring: string, ...args: any[]) => string
      ): string;
    },
    replacer: (substring: string, ...args: any[]) => string
  ): string;
  replace(searchValue: any, replacer: any): string {
    throw new Error('Method not implemented.');
  }
  search(regexp: string | RegExp): number;
  search(searcher: { [Symbol.search](string: string): number }): number;
  search(searcher: any): number {
    throw new Error('Method not implemented.');
  }
  slice(start?: number, end?: number): string {
    throw new Error('Method not implemented.');
  }
  split(separator: string | RegExp, limit?: number): string[];
  split(
    splitter: { [Symbol.split](string: string, limit?: number): string[] },
    limit?: number
  ): string[];
  split(splitter: any, limit?: any): string[] {
    throw new Error('Method not implemented.');
  }
  substring(start: number, end?: number): string {
    throw new Error('Method not implemented.');
  }
  toLowerCase(): string {
    throw new Error('Method not implemented.');
  }
  toLocaleLowerCase(locales?: string | string[]): string {
    throw new Error('Method not implemented.');
  }
  toUpperCase(): string {
    throw new Error('Method not implemented.');
  }
  toLocaleUpperCase(locales?: string | string[]): string {
    throw new Error('Method not implemented.');
  }
  trim(): string {
    throw new Error('Method not implemented.');
  }
  length: number;
  substr(from: number, length?: number): string {
    throw new Error('Method not implemented.');
  }
  valueOf(): string {
    throw new Error('Method not implemented.');
  }
  codePointAt(pos: number): number {
    throw new Error('Method not implemented.');
  }
  includes(searchString: string, position?: number): boolean {
    throw new Error('Method not implemented.');
  }
  endsWith(searchString: string, endPosition?: number): boolean {
    throw new Error('Method not implemented.');
  }
  normalize(form: 'NFC' | 'NFD' | 'NFKC' | 'NFKD'): string;
  normalize(form?: string): string;
  normalize(form?: any): string {
    throw new Error('Method not implemented.');
  }
  repeat(count: number): string {
    throw new Error('Method not implemented.');
  }
  startsWith(searchString: string, position?: number): boolean {
    throw new Error('Method not implemented.');
  }
  anchor(name: string): string {
    throw new Error('Method not implemented.');
  }
  big(): string {
    throw new Error('Method not implemented.');
  }
  blink(): string {
    throw new Error('Method not implemented.');
  }
  bold(): string {
    throw new Error('Method not implemented.');
  }
  fixed(): string {
    throw new Error('Method not implemented.');
  }
  fontcolor(color: string): string {
    throw new Error('Method not implemented.');
  }
  fontsize(size: number): string;
  fontsize(size: string): string;
  fontsize(size: any): string {
    throw new Error('Method not implemented.');
  }
  italics(): string {
    throw new Error('Method not implemented.');
  }
  link(url: string): string {
    throw new Error('Method not implemented.');
  }
  small(): string {
    throw new Error('Method not implemented.');
  }
  strike(): string {
    throw new Error('Method not implemented.');
  }
  sub(): string {
    throw new Error('Method not implemented.');
  }
  sup(): string {
    throw new Error('Method not implemented.');
  }
  padStart(maxLength: number, fillString?: string): string {
    throw new Error('Method not implemented.');
  }
  padEnd(maxLength: number, fillString?: string): string {
    throw new Error('Method not implemented.');
  }
  trimEnd(): string {
    throw new Error('Method not implemented.');
  }
  trimStart(): string {
    throw new Error('Method not implemented.');
  }
  trimLeft(): string {
    throw new Error('Method not implemented.');
  }
  trimRight(): string {
    throw new Error('Method not implemented.');
  }
  matchAll(regexp: RegExp): IterableIterator<RegExpMatchArray> {
    throw new Error('Method not implemented.');
  }
  [Symbol.iterator](): IterableIterator<string> {
    throw new Error('Method not implemented.');
  }
  at(index: number): string {
    throw new Error('Method not implemented.');
  }
}
