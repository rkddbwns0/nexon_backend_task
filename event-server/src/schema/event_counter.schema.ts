import { Schema } from 'mongoose';

export const CounterSchema = new Schema({
  _id: String,
  seq: { type: Number, default: 0 },
});
