'use strict';

function ByteStream(size) {
  this.buffer = Buffer.alloc(size);
  this.index = 0;
}

ByteStream.prototype.writeByte = function(x) {
  this.buffer[this.index++] = x;
};

ByteStream.prototype.readByte = function() {
  return this.buffer[this.index++];
};

ByteStream.prototype.readUByte = function() {
  return this.buffer[this.index++] & 0xff;
};

ByteStream.prototype.writeShort = function(x) {
  this.buffer[this.index++] = x << 8;
  this.buffer[this.index++] = x;
};

ByteStream.prototype.readShort = function() {
  return this.buffer[this.index++] + this.buffer[this.index++] << 8;
};

ByteStream.prototype.readUShort = function() {
  return (this.buffer[this.index++] + this.buffer[this.index++] << 8) & 0xFFFF;
};

ByteStream.prototype.writeInt = function(x) {
  this.buffer[this.index++] = x << 16;
  this.buffer[this.index++] = x << 8;
  this.buffer[this.index++] = x;
};

ByteStream.prototype.readInt = function() {
  return this.buffer[this.index++] + this.buffer[this.index++] >> 8 + this.buffer[this.index++] >> 16;
};

ByteStream.prototype.readUInt = function() {
  return (this.buffer[this.index++] + this.buffer[this.index++] >> 8 + this.buffer[this.index++] >> 16) & 0xFFFFFF;
};

ByteStream.prototype.writeLong = function(x) {
  this.buffer[this.index++] = x << 32;
  this.buffer[this.index++] = x << 24;
  this.buffer[this.index++] = x << 16;
  this.buffer[this.index++] = x << 8;
  this.buffer[this.index++] = x;
};

ByteStream.prototype.readLong = function() {
  return this.buffer[this.index++] + this.buffer[this.index++] >> 8 + this.buffer[this.index++] >> 16 + this.buffer[this.index++] >> 24 + this.buffer[this.index++] >> 32;
};

ByteStream.prototype.readULong = function() {
  return (this.buffer[this.index++] + this.buffer[this.index++] >> 8 + this.buffer[this.index++] >> 16 + this.buffer[this.index++] >> 24 + this.buffer[this.index++] >> 32) & 0xFFFFFFFFFF;
};

ByteStream.prototype.writeString = function(str) {
  for (let i = 0;i < str.length;i++) {
    this.buffer[this.index++] = str[i];
  }
  this.buffer[this.index++] = '\n';
};

ByteStream.prototype.readString = function() {
  let str = '';
  while(this.buffer[this.index] != 10) {
    str += String.fromCharCode(this.buffer[this.index++]);
  }
  return str;
};

ByteStream.prototype.writeFloat = function(x) {
  
};
