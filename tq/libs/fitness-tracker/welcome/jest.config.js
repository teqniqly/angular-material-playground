module.exports = {
  name: 'fitness-tracker-welcome',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/fitness-tracker/welcome',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
