module.exports = {
  name: 'ui-material-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/material-ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
