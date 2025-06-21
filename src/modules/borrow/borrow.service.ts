import { Borrow } from './borrow.model';

export const createBorrow = async (data: any) => {
  return await Borrow.create(data);
};

export const getBorrowSummary = async () => {
  const summary = await Borrow.aggregate([
    {
      $group: {
        _id: '$book',
        totalQuantity: { $sum: '$quantity' },
      },
    },
    {
      $lookup: {
        from: 'books',
        localField: '_id',
        foreignField: '_id',
        as: 'bookDetails',
      },
    },
    {
      $unwind: '$bookDetails',
    },
    {
      $project: {
        book: {
          title: '$bookDetails.title',
          isbn: '$bookDetails.isbn',
        },
        totalQuantity: 1,
      },
    },
  ]);

  return summary;
};
