# Extract all videos from given source path

    nano gulpfile

    #  Change the variables: 
    #    - SOURCE
    #    - DESCTINATION 
    #  to your needs.

    npm install

    cd source
    
    # copy all files from which you want to extract only videos
    cp -R /source/path/to/your/files/ . 
    
    cd ..
    
    npm run extract
