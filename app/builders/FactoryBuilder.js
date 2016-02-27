'use strict';
let writer = require('./../common/Writer.js');
let JavaScriptGenerator = require('./../common/JavaScriptGenerator.js');

class FactoryBuilder {
  constructor(factoryName, properties, dependencies) {
    this.factoryName = factoryName;
    this.properties = properties;
    this.dependencies = dependencies;
  }

  createTemplate() {
    writer.writeTemplate(`${this.factoryName}.js`, this._getTemplate());
  }

  _getTemplate() {
    let template = `(function() {
  app.factory('${JavaScriptGenerator.getFactorPascalCamelCaseName(this.factoryName)}', ${this.factoryName});
  ${this.factoryName}.$inject = [${JavaScriptGenerator.getQuotedDependencies(this.dependencies)}];
  function ${this.factoryName}(${JavaScriptGenerator.getDependencies(this.dependencies)}) {
    var ${this.factoryName} = {
      ${JavaScriptGenerator.getProperties(this.properties)}
    };

    return ${this.factoryName};
  }
})();
`;
    return template;
  }

}

module.exports = FactoryBuilder;
