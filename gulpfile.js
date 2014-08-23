"use strict"

// -- DEPENDENCIES -------------------------------------------------------------
var gulp    = require('gulp');
var coffee  = require('gulp-coffee');
var concat  = require('gulp-concat');
var connect = require('gulp-connect');
var header  = require('gulp-header');
var uglify  = require('gulp-uglify');
var gutil   = require('gulp-util');
var stylus  = require('gulp-stylus');
var yml     = require('gulp-yml');
var pkg     = require('./package.json');

// -- FILES --------------------------------------------------------------------
var assets     = './www/assets';

var source = {
  coffee :[ 'source/*.coffee',
            'source/*.*.coffee',
            'source/entity/**/*.coffee',
            'source/atom/**/*.coffee',
            'source/molecule/**/*.coffee',
            'source/organism/**/*.coffee'],
  styl   :[ 'source/style/__init.styl',
            'source/style/app.styl',
            'source/style/app.*.styl',
            'source/style/atoms.app.theme/atom.*.styl',
            'source/style/atoms.app.theme/molecule.*.styl',
            'source/style/atoms.app.theme/organism.*.styl'],
  yml    :[ 'source/scaffold/*.yml']};

var dependencies = {
   js    :[ 'bower_components/quojs/quo.standalone.js',
            'bower_components/bower.hope/hope.js',
            'bower_components/atoms/atoms.standalone.js',
            'bower_components/atoms/atoms.app.js',
            'bower_components/momentjs/moment.js',
            'bower_components/momentjs/locale/en-gb.js',
            'bower_components/sailor-client/dist/sailor.js'],
   css  :[  'bower_components/atoms/atoms.app.css',
            'bower_components/atoms-icons/atoms.icons.css'],
   fonts:[  'bower_components/atoms-icons/fonts/*']};

var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link    <%= pkg.homepage %>',
  ' * @author  <%= pkg.author.name %> (<%= pkg.author.site %>)',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

// -- TASKS --------------------------------------------------------------------
gulp.task('dependencies', function() {
  gulp.src(dependencies.js)
    .pipe(concat('dependencies.' + pkg.name + '.js'))
    .pipe(uglify({mangle: false}))
    .pipe(header(banner, {pkg: pkg}))
    .pipe(gulp.dest(assets + '/js'));

  gulp.src(dependencies.css)
    .pipe(concat('dependencies.' + pkg.name + '.css'))
    .pipe(header(banner, {pkg: pkg}))
    .pipe(gulp.dest(assets + '/css'));

  gulp.src(dependencies.fonts)
    .pipe(gulp.dest(assets + '/css/fonts'));
});

gulp.task('coffee', function() {
  gulp.src(source.coffee)
    // .pipe(concat('atoms.' + pkg.name + '.coffee'))
    .pipe(concat('atoms.' + pkg.name + '.coffee'))
    .pipe(coffee().on('error', gutil.log))
    .pipe(uglify({mangle: false}))
    .pipe(header(banner, {pkg: pkg}))
    .pipe(gulp.dest(assets + '/js'))
    .pipe(connect.reload());
});

gulp.task('styl', function() {
  gulp.src(source.styl)
    .pipe(concat('atoms.' + pkg.name + '.styl'))
    .pipe(stylus({compress: true, errors: true}))
    .pipe(header(banner, {pkg: pkg}))
    .pipe(gulp.dest(assets + '/css'))
    .pipe(connect.reload());
});

gulp.task('yml', function() {
  console.log(source.yml);
  gulp.src(source.yml)
    .pipe(yml().on('error', gutil.log))
    .pipe(gulp.dest(assets + '/scaffold'))
    .pipe(connect.reload());
});

gulp.task('webserver', function() {
  connect.server({ port: 8000, root: 'www/', livereload: true });
});

gulp.task('production', function() {
  connect.server({ port: process.env.PORT || 8000, root: 'www/'});
});

gulp.task('init', function() {
  gulp.run(['dependencies', 'coffee', 'styl', 'yml']);
});

gulp.task('default', function() {
  gulp.run(['dependencies', 'coffee', 'styl', 'yml', 'webserver']);
  gulp.watch(source.coffee, ['coffee']);
  gulp.watch(source.styl, ['styl']);
  gulp.watch(source.yml, ['yml']);
  gulp.watch('bower_components/sailor-client/dist/sailor.js', ['dependencies']);
});
