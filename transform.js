module.exports = function transform({ source }, { jscodeshift: j } /*, options */) {
  let root = j(source);

  // Figure out how we're importing the various mocha methods
  let mochaImportMap = {};
  root
    .find(j.ImportDeclaration)
    .filter(({ node }) => {
      // Find only imports that are importing from mocha
      return node.source.value === 'mocha' ||
             node.source.value === 'ember-mocha';
    })
    .forEach(({ node }) => {
      node.specifiers.forEach((specifier) => {
        mochaImportMap[specifier.imported.name] = specifier.local.name;
        console.log(`Found mocha import for ${specifier.imported.name} as variable ${specifier.local.name}`);
      });
    });

  ['describe', 'it'].forEach((requiredImport) => {
    if (!mochaImportMap.hasOwnProperty(requiredImport)) {
      throw new Error(`Could not find find import '${requiredImport}'`);
    }
  });

  // Transform the imports to QUnit imports
  root
    .find(j.CallExpression, { callee: { name: mochaImportMap.describe } })
    .replaceWith((a) => console.log(a));

  // Find Mocha describes and transform them to QUnit modules

  // Find Mocha its and transform them to QUnit tests

  // TODO: .skip, .only modifiers
  // beforEach/before, afterEach/after

  return source;
}
