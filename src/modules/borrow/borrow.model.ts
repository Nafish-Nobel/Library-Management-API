import { Schema, model, Types } from 'mongoose';
import { Book } from '../book/book.model';

const borrowSchema = new Schema(
  {
    book: { type: Types.ObjectId, ref: 'Book', required: true },
    quantity: { type: Number, required: true, min: 1 },
    dueDate: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

// Post-save logic: Update book copies and availability
borrowSchema.post('save', async function () {
  const borrow = this;

  const book = await Book.findById(borrow.book);
  if (book) {
    book.copies -= borrow.quantity;
    book.available = book.copies > 0;
    await book.save();
  }
});

export const Borrow = model('Borrow', borrowSchema);
