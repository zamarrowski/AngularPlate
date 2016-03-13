'use strict';
let writer = require('./../common/Writer.js');
let JavaScriptGenerator = require('./../common/JavaScriptGenerator.js');

class ControllerBuilder {
  constructor(controllerName, properties, dependencies, entityName) {
    this.controllerName = controllerName;
    this.propertyList = properties;
    this.dependencies = dependencies;
    this.dependencies.push('$scope');
    this.entityName = entityName;
  }

  createTemplate() {
    writer.writeTemplate(`${this.controllerName}.js`, this._getTemplate());
  }

  _getTemplate() {
    let template = `(function() {
  app.controller('${JavaScriptGenerator.getPascalCamelCaseName(this.controllerName)}', ${this.controllerName});
  ${this.controllerName}.$inject = [${JavaScriptGenerator.getQuotedDependencies(this.dependencies)}];
  function ${this.controllerName}(${JavaScriptGenerator.getDependencies(this.dependencies)}) {
    ${this._getProperties(this.propertyList)}
    ${this._getCRUDMethods(this.entityName)}
  }
})();
`;
    return template;
  }

  _getProperties(propertyList) {
    let properties = '';
    let iterations = 0;
    propertyList.map((property) => {
      if (!property.value || property.type == 'number' || property.type == 'boolean') {
        if (iterations > 0) {
          properties += `
    $scope.${property.name} = ${property.value};`;
        } else {
          properties += `$scope.${property.name} = ${property.value};`;
        }
      }
      else if(property.type == 'string') {
        if (iterations > 0) {
          properties += `
    $scope.${property.name} = '${property.value}';`;
        } else {
          properties += `$scope.${property.name} = '${property.value}';`;
        }
      }
      else if(property.type == 'array') {
        if (iterations > 0) {
          properties += `
    $scope.${property.name} = [${JavaScriptGenerator.getQuotedPropertiesFromArray(property.value)}];
    $scope.selected${property.name} = $scope.${property.name}[0];`;
        } else {
          properties += `$scope.${property.name} = [${JavaScriptGenerator.getQuotedPropertiesFromArray(property.value)}];
    $scope.selected${property.name} = $scope.${property.name}[0];`;
        }
      }
      iterations++;
    });
    return properties;
  }

  _getCRUDMethods(entityName) {
    let template = '';
    if (entityName) {
      let serviceName = `${JavaScriptGenerator.getPascalCamelCaseName(entityName)}Services`;
      template = `
    $scope.get${JavaScriptGenerator.getPascalCamelCaseName(entityName)} = function(id) {
      ${serviceName}.get${JavaScriptGenerator.getPascalCamelCaseName(entityName)}(id).then(function(response) {
        console.log(response);
      });
    };

    $scope.create${JavaScriptGenerator.getPascalCamelCaseName(entityName)} = function(${entityName}) {
      ${serviceName}.create${JavaScriptGenerator.getPascalCamelCaseName(entityName)}(${entityName}).then(function(response) {
        console.log(response);
      });
    };

    $scope.update${JavaScriptGenerator.getPascalCamelCaseName(entityName)} = function(${entityName}) {
      ${serviceName}.update${JavaScriptGenerator.getPascalCamelCaseName(entityName)}(${entityName}).then(function(response) {
        console.log(response);
      });
    };

    $scope.delete${JavaScriptGenerator.getPascalCamelCaseName(entityName)} = function(id) {
      ${serviceName}.delete${JavaScriptGenerator.getPascalCamelCaseName(entityName)}(id).then(function(response) {
        console.log(response);
      });
    };`;
    }

    return template;

  }

}

module.exports = ControllerBuilder;
