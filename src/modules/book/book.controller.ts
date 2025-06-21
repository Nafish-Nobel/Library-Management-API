import { Request, Response } from 'express';
import * as BookService from './book.service';
import { sendResponse } from '../../app/utils/sendResponse';

export const createBook = async (req: Request, res: Response) => {
  const book = await BookService.createBook(req.body);
  sendResponse(res, {
    success: true,
    message: 'Book created successfully',
    data: book,
  });
};

export const getBooks = async (req: Request, res: Response) => {
  const { filter, sortBy, sort, limit } = req.query;

  const books = await BookService.getBooks(
    filter as string,
    sortBy as string,
    (sort as 'asc' | 'desc') || 'desc',
    Number(limit) || 10
  );

  sendResponse(res, {
    success: true,
    message: 'Books retrieved successfully',
    data: books,
  });
};

export const getSingleBook = async (req: Request, res: Response) => {
  const book = await BookService.getSingleBook(req.params.bookId);
  sendResponse(res, {
    success: true,
    message: 'Book retrieved successfully',
    data: book,
  });
};

export const updateBook = async (req: Request, res: Response) => {
  const book = await BookService.updateBook(req.params.bookId, req.body);
  sendResponse(res, {
    success: true,
    message: 'Book updated successfully',
    data: book,
  });
};

export const deleteBook = async (req: Request, res: Response) => {
  await BookService.deleteBook(req.params.bookId);
  sendResponse(res, {
    success: true,
    message: 'Book deleted successfully',
    data: null,
  });
};
