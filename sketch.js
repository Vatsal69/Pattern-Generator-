let row = parseInt(prompt('Enter how many lines? '));

// Generating pattern
for (let i = 1; i <= row; i++) {
    
    // for increasing pattern
    for (let j = 1; j <= i; j++) {
        process.stdout.write(j.toString());
    }
    
    // for decreasing pattern 
    for (let j = i - 1; j > 0; j--) {
        process.stdout.write(j.toString());
    }
    
    // Moving to next line
    console.log();
}
