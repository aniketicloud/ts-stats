import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { Summary } from "./Summary";

// STEP 1: Create an object that satisfies the `DataReader` interface
const csvFileReader = new CsvFileReader("football.csv");

// STEP 2: Create an instance of `MatchReader` and pass in something satisfying
// the `DataReader` interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis("Man United"),
  new HtmlReport("ManUnitedSummary")
);

summary.buildAndPrintReport(matchReader.matches);
