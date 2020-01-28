module.exports = {
  name: 'fitness-tracker-chemistry',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/fitness-tracker/chemistry',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
