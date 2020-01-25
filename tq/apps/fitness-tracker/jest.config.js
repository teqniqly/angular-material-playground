module.exports = {
  name: 'fitness-tracker',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/fitness-tracker',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
