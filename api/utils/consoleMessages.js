module.exports = function consoleMessage(validation, request_type, route) {
  const error_validation = validation ? '**  Success **' : '!!  Error !!';
  console.log(`
  ${error_validation}
  Request type: ${request_type}
  Route: ${route}
  `);
};
