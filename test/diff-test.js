const fs = require('fs');
const path = require('path');

const TEST_DIR = 'test';

let testDirectories = fs.readdirSync(TEST_DIR).filter(isTestDirectory);

testDirectories.forEach((file) => {
  describe(file, function() {
    it('should correctly transform', function(done) {

    });
  });
});

function isTestDirectory(file) {
  return fs.statSync(path.join(TEST_DIR, file)).isDirectory();
}
