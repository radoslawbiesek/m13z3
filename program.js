process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {

    process.stdout.write('Node version: ' + process.versions.node + '\n');
    process.stdout.write('OS language: ' + process.env.LANG + '\n');

    var input = process.stdin.read();
    if(input != null) {
        var instruction = input.toString().trim();
        if( instruction === '/exit') {
            process.stdout.write('Quitting app!\n');
            process.exit();
        }
        process.stderr.write('Wrong instruction\n');
    }
    
});