process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {  
    
    var input = process.stdin.read();
    if(input != null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/version':
                process.stdout.write('Node version: ' + process.versions.node + '\n');
                break;
            case '/lang':
                process.stdout.write('OS language: ' + process.env.LANG + '\n');
                break;
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
            default:
                process.stderr.write('Wrong instruction\n');
                break;
        }
    }

});