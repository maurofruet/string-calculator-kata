/**
 * Enum for the messages of the exceptions thrown by the parser.
 * @readonly
 * @enum {string}
 */
enum ParserExceptionMessages {
  MISSING_DELIMITER = 'The delimiter has not been specified',
  MISSING_DELIMITER_AND_STRING = 'The delimiter and the string have not been specified'
}

export default ParserExceptionMessages;
