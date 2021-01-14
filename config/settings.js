export const upload = {
  /**
   * {Boolean} Patch request body to Node's ctx.req, default false
   *
   * Note: You can patch request body to Node or Koa in same time if you want.
   */
  patchNode: false,

  /**
   * {Boolean} Patch request body to Koa's ctx.request, default true
   *
   * Note: You can patch request body to Node or Koa in same time if you want.
   */
  patchKoa: true,

  /**
   * {String|Integer} The byte (if integer) limit of the JSON body, default 1mb
   */
  jsonLimit: '1mb',

  /**
   * {String|Integer} The byte (if integer) limit of the form body, default 56kb
   */
  formLimit: '1024mb',

  /**
   * {String|Integer} The byte (if integer) limit of the text body, default 56kb
   */
  textLimit: '1024mb',

  /**
   * {String} Sets encoding for incoming form fields, default utf-8
   */
  encoding: 'utf-8',

  /**
   * {Boolean} Parse multipart bodies, default false
   */
  multipart: true,

  /**
   * {Boolean} Parse urlencoded bodies, default true
   */
  urlencoded: true,

  /**
   * {Boolean} Parse text bodies, default true
   */
  text: true,

  /**
   * {Boolean} Parse json bodies, default true
   */
  json: true,

  /**
   * Toggles co-body strict mode, if true, only parses arrays or objects, default true
   */
  jsonStrict: true,

  /**
   * Toggles co-body returnRawBody mode, if true,
   * the raw body will be available using a Symbol for 'unparsedBody'.
   *
   * ```
   // Either:
   const unparsed = require('koa-body/unparsed.js'),
   const unparsed = Symbol.for('unparsedBody'),

   // Then later, to access:
   ctx.request.body[unparsed]
  ```
  * default false
  */
  includeUnparsed: false,

  /**
   * {Object} Options to pass to the formidable multipart parser
   */
  formidable: {
    /**
     * {Integer} Limits the amount of memory all fields together (except files) can allocate in bytes. If this value is exceeded, an 'error' event is emitted. The default size is 20MB (20 * 1024 * 1024).
     */
    maxFileSize: 20 * 1024 * 1024,

    /**
     * {Integer} Limits the number of fields that the querystring parser will decode, default 1000
     */
    maxFields: 1000,

    /**
     * {Integer} Limits the amount of memory all fields together (except files) can allocate in bytes.
     * If this value is exceeded, an 'error' event is emitted, default 2mb (2 * 1024 * 1024)
     */
    maxFieldsSize: 2 * 1024 * 1024,

    /**
     * {String} Sets the directory for placing file uploads in, default os.tmpDir()
     */
    // uploadDir: os.tmpDir(),

    /**
     * {Boolean} Files written to uploadDir will include the extensions of the original files, default false
     */
    keepExtensions: false,

    /**
     * {String} If you want checksums calculated for incoming files, set this to either 'sha1' or 'md5', default false
     */
    hash: 'md5',

    /**
     * {Boolean} Multiple file uploads or no, default true
     */
    multiples: true

    /**
     * {Function} Special callback on file begin. The function is executed directly by formidable.
     * It can be used to rename files before saving them to disk. See https://github.com/felixge/node-formidable#filebegin
     */
    // onFileBegin: (name: string, file: any) => void,
  }

  /**
   * {Function} Custom error handle, if throw an error, you can customize the response - onError(error, context), default will throw
   */
  // onError: (err: Error, ctx: Koa.Context) => void,

  /**
   * {Boolean} If enabled, don't parse GET, HEAD, DELETE requests, deprecated.
   *
   * GET, HEAD, and DELETE requests have no defined semantics for the request body,
   * but this doesn't mean they may not be valid in certain use cases.
   * koa-body is strict by default
   *
   * see http://tools.ietf.org/html/draft-ietf-httpbis-p2-semantics-19#section-6.3
   */
  // strict: true

  /**
   * {String[]} What HTTP methods to enable body parsing for, should be used in preference to strict mode.
   *
   * GET, HEAD, and DELETE requests have no defined semantics for the request body,
   * but this doesn't mean they may not be valid in certain use cases.
   * koa-body will only parse HTTP request bodies for POST, PUT, and PATCH by default
   *
   * see http://tools.ietf.org/html/draft-ietf-httpbis-p2-semantics-19#section-6.3
   */
  // parsedMethods: string[],
}

export default upload
