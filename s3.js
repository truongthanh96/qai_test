function(/* context */) {
        var bucket                = this.readConfig('bucket');
        var prefix                = this.readConfig('prefix');
        var acl                   = this.readConfig('acl');
        var cacheControl          = this.readConfig('cacheControl');
        var revisionKey           = this.readConfig('revisionKey');
        var distDir               = this.readConfig('distDir');
        var filePattern           = this.readConfig('filePattern');
        var gzippedFiles          = this.readConfig('gzippedFiles');
        var allowOverwrite        = this.readConfig('allowOverwrite');
        var serverSideEncryption  = this.readConfig('serverSideEncryption');
        var filePath              = joinUriSegments(distDir, filePattern);

        var options = {
          bucket: bucket,
          prefix: prefix,
          acl: acl,
          cacheControl: cacheControl,
          filePattern: filePattern,
          filePath: filePath,
          revisionKey: revisionKey,
          gzippedFilePaths: gzippedFiles,
          allowOverwrite: allowOverwrite
        };

        if (serverSideEncryption) {
          options.serverSideEncryption = serverSideEncryption;
        }

        this.log('preparing to upload revision to S3 bucket `' + bucket + '`', { verbose: true });

        var s3 = new this.S3({ plugin: this });
        return s3.upload(options);
      }
