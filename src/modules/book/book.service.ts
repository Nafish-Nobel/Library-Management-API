import { Book } from './book.model';
import { FilterQuery } from 'mongoose';

export const createBook = async (payload: any) => {
  return await Book.create(payload);
};

export const getBooks = async (
  genreFilter?: string,
  sortBy: string = 'createdAt',
  sort: 'asc' | 'desc' = 'desc',
  limit: number = 10
) => {
  const filter: FilterQuery<typeof Book> = {};
  if (genreFilter) filter.genre = genreFilter;

  return await Book.find(filter)
    .sort({ [sortBy]: sort === 'asc' ? 1 : -1 })
    .limit(limit);
};

export const getSingleBook = async (id: string) => {
  return await Book.findById(id);
};

export const updateBook = async (id: string, data: any) => {
  return await Book.findByIdAndUpdate(id, data, { new: true });
};

export const deleteBook = async (id: string) => {
  return await Book.findByIdAndDelete(id);
};
