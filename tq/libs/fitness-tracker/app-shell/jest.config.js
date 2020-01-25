module.exports = {
  name: 'fitness-tracker-app-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/fitness-tracker/app-shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
