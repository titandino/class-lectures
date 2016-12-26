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
  return this.readByte() & 0xff;
};

ByteStream.prototype.writeShort = function(x) {
  this.buffer[this.index++] = x >> 8;
  this.buffer[this.index++] = x;
};

ByteStream.prototype.readShort = function() {
  return this.readByte() + this.readByte() << 8;
};

ByteStream.prototype.readUShort = function() {
  return this.readUByte() + this.readUByte() << 8;
};

ByteStream.prototype.writeInt = function(x) {
  this.writeByte(x >> 24);
  this.writeByte(x >> 16);
  this.writeByte(x >> 8);
  this.writeByte(x);
};

ByteStream.prototype.readInt = function() {
  return this.readByte() + this.readByte() << 8 + this.readByte() << 16 + this.readByte() << 24;
};

ByteStream.prototype.readUInt = function() {
  return this.readUByte() + this.readUByte() << 8 + this.readUByte() << 16 + this.readUByte() << 24;
};

ByteStream.prototype.writeLong = function(x) {
  this.writeByte(x >> 56);
  this.writeByte(x >> 48);
  this.writeByte(x >> 40);
  this.writeByte(x >> 32);
  this.writeByte(x >> 24);
  this.writeByte(x >> 16);
  this.writeByte(x >> 8);
  this.writeByte(x);
};

ByteStream.prototype.readLong = function() {
  return this.readByte() + this.readByte() << 8 + this.readByte() << 16 + this.readByte() << 24 + this.readByte() << 32 + this.readByte() << 40 + this.readByte() << 48 + this.readByte() << 56;
};

ByteStream.prototype.readULong = function() {
  return this.readUByte() + this.readUByte() << 8 + this.readUByte() << 16 + this.readUByte() << 24 + this.readUByte() << 32 + this.readUByte() << 40 + this.readUByte() << 48 + this.readUByte() << 56;
};

ByteStream.prototype.write36BitLong = function(x) {
  this.writeByte(x >> 32);
  this.writeByte(x >> 24);
  this.writeByte(x >> 16);
  this.writeByte(x >> 8);
  this.writeByte(x);
};

ByteStream.prototype.writeString = function(str) {
  for (let i = 0;i < str.length;i++) {
    this.writeShort(str[i]);
  }
  this.writeByte(10);
};

ByteStream.prototype.readString = function() {
  let str = '';
  while(this.buffer[this.index] != 10) {
    str += String.fromCharCode(this.readShort());
  }
  return str;
};
