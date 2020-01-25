module.exports = {
  name: 'fitness-tracker-auth',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/fitness-tracker/auth',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
