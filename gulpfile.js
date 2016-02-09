/**
 * Created by ESiwady on 09/02/2016.
 */
var coverageEnforcer = require("gulp-istanbul-enforcer");

gulp.task('enforce-coverage', function () {
  var options = {
    thresholds : {
      statements : 100,
      branches : 100,
      lines : 100,
      functions : 100
    },
    coverageDirectory : 'coverage',
    rootDirectory : ''
  };
  return gulp
    .src('.')
    .pipe(coverageEnforcer(options));
});
