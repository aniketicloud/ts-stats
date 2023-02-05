import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { Summary } from "./Summary";

// STEP 1: Create an object that satisfies the `DataReader` interface
const csvFileReader = new CsvFileReader("football.csv");

// STEP 2: Create an instance of `MatchReader` and pass in something satisfying
// the `DataReader` interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport("Man United");

summary.buildAndPrintReport(matchReader.matches);
