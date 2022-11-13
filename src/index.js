export class ArrayBufferConverter {
  // load the buffer to Uint16Array
  load(buffer) {
    this.buffer = new Uint16Array(buffer);
  }

  // from code to char
  toString() {
    let resultStr = '';
    for (let i = 0; i < this.buffer.byteLength; i += 1) {
      resultStr += String.fromCharCode(this.buffer[i]);
    }
    return resultStr;
  }
}

export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}
