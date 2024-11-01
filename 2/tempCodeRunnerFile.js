  // deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', err => {
      if (err) {
        console.log(err);
      }
      console.log('file deleted');
    });
  }