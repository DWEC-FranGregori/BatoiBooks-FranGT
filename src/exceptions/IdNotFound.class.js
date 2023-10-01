function IdNotFound() {
  const error = new Error("Id no encontrado");
  return error;
}

CustomException.prototype = Object.create(Error.prototype);
