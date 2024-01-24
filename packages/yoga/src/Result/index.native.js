import Result from './native';
import ResultDetails from './native/Details';
import ResultButton from './native/ResultButton';
import ResultTags from './native/Tags';

const ExportResult = Object.assign(Result, {
  Details: ResultDetails,
  Button: ResultButton,
  Tags: ResultTags,
});

export default ExportResult;
