// load module dependencies
import constants from './../conf/constants'

export default {

  /**
   * generate a new error callback object
   * @param  {Object} error        the text or error object that should be returnes as error (usually generated by the error factory)
   * @param  {String} responseType the type of response (from constants)
   * @return {Object}              the callback object
   */
  error (error, responseType) {
    // load error callback scheme
    let scheme = constants.callbacks.scheme_error

    // set error (if defined)
    if (error !== undefined && error !== '') {
      scheme.data[0].attributes.error = error
    }

    // set responseType (if defined)
    if (responseType !== undefined && responseType !== '') {
      scheme.data[0].type = responseType
    }

    // return callback object
    return scheme
  }
}
