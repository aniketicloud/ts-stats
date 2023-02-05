import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

// STEP 1: Create an object that satisfies the `DataReader` interface
const csvFileReader = new CsvFileReader("football.csv");

// STEP 2: Create an instance of `MatchReader` and pass in something satisfying
// the `DataReader` interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();


console.log(`Man United won ${manUnitedWins} games`);
