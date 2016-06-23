import gulp from 'gulp';
import mocha from 'gulp-mocha';
import path from 'path';
import '../test/helper';

const MOCHA_CONFIG = {
  globals: ['chai', 'chaiHttp', 'should', 'chaiAsPromised', 'sinon', 'sinonChai'],
  reporter: process.env.MOCHA_REPORTER || 'spec',
  timeout: 3000,
  bail: false,
};

gulp.task('mocha:test', ['build'], () => (
  gulp
    .src(path.join(TEST_ROOT, '**/*.spec.js'))
    .pipe(mocha(MOCHA_CONFIG))
));
