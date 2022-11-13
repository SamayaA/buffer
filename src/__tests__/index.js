import { ArrayBufferConverter, getBuffer } from '../index';

test(
  'test converter for buffer',
  () => {
    const dataBuffer = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    const buffer = getBuffer();
    const converter = new ArrayBufferConverter();
    converter.load(buffer);
    expect(converter.toString()).toEqual(dataBuffer);
  },
);
