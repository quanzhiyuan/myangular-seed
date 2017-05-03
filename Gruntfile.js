module.exports = function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        // uglify:{
        //     options:{
        //         banner:'/*zyquan*/'
        //     },
        //     build:{
        //         src:'Scripts/product/test.js',
        //         dest:'dist/js/<%=pkg.name%>.min.js'
        //     }
        // },
        // cssmin:{
        //     options:{
        //         banner:'/*测试数据*/'
        //     },
        //     build:{
        //         src:'Content/product/*.css',
        //         dest:'dist/js/<%=pkg.name%>.min.css'
        //     }
        // },
        jshint:{
            options:{

            },

        },
        postcss:{
            options:{
                processors:[
                    require('autoprefixer')
                ]
            },
            dist:{
                src:'app/Css/*.css'
            }
        },
        sass:{
            dist: {
                files: {
                    'app/Css/index.css': 'app/sass/index.scss'
                }
            }
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['app/sass/variables.scss', 'app/sass/sass.scss', 'app/sass/minx/*.scss'],
                dest: 'app/sass/index.scss',
            },
        },
        browserSync:{
            dev:{
                bsFiles:{
                    src:[
                        'app/Css/*.css',
                        './app/*.html',
                        './app/Scripts/components/*.html'
                    ],
                    options:{
                        watchTask:true,
                        server:'./app'
                    }
                }
            }
        },
        watch:{
            // concatsass:{
            //    files: ['app/sass/*.scss', 'app/sass/minx/*.scss'],
            //     tasks:['concat','sass'],
            //     options: {
            //         debounceDelay: 250,
            //     },
            // },
            autoprefixer:{
               files: ['app/Css/app.css'],
                tasks:['postcss'],
                options: {
                    debounceDelay: 250,
                },
            },
            // configFiles: {
            //     files: [ 'Gruntfile.js', 'config/*.js' ],
            //     options: {
            //         reload: true
            //     }
            // }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('create',['uglify','cssmin']);
    grunt.registerTask('default',['browserSync','watch']);

}
