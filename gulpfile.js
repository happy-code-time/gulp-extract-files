const gulp = require('gulp');

/**
 * Paths
 */
const SOURCE = './source';
const DESTINATION = './public';

/**
 * Types to extract
 */
const TYPES = 'mp4,MP4,m4p,M4P,m4v,M4V,avchd,AVCHD,flv,FLV,swf,SWF,wmv,WMV,qt,QT,avi,AVI,mp3,MP3,mov,MOV,3gp,3GP,ogg,OGG,webm,WEBM,mpg,MPG,mp2,MP2,mpeg,MPEG,mpe,MPE,mpv,MPV';

gulp.task('extract', () => {
  return gulp.src(`${SOURCE}/**/*.{${TYPES}}`)
  .pipe(gulp.dest(DESTINATION));
});
