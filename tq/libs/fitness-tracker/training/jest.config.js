module.exports = {
  name: 'fitness-tracker-training',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/fitness-tracker/training',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
