class BaseModel {    

  validateSetter(val) {
    if ((val === undefined) | (!val instanceof Object) | (val === null))
      return false;
    return true;
  }

  set firebaseError(val) {
    if (this.validateSetter(val))
      return (this._firebaseError = new Error("object cannot be null"));
    return (this.firebaseError = val);
  }

  get firebaseError() {
    return this._firebaseError;
  }

  set firebaseResponse(res) {
    if (this.validateSetter(res))
      return (this._firebaseResponse = new Error("object cannot be null"));

    return (this._firebaseResponse = res);
  }

  get firebaseResponse() {
    return this._firebaseResponse;
  }

}

export default BaseModel;
