import fs from "fs";
import { MatchResult } from "./MatchResult";

// tuple for one row data
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

export abstract class CsvFileReader<T> {
  // data is 2d array [][]
  data: T[] = [];
  constructor(public filename: string) {}
  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(this.mapRow);
  }
}
