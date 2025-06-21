import { Request, Response } from 'express';
import * as BorrowService from './borrow.service';
import { sendResponse } from '../../app/utils/sendResponse';

export const createBorrow = async (req: Request, res: Response) => {
  const borrow = await BorrowService.createBorrow(req.body);

  sendResponse(res, {
    success: true,
    message: 'Book borrowed successfully',
    data: borrow,
  });
};

export const getBorrowSummary = async (req: Request, res: Response) => {
  const summary = await BorrowService.getBorrowSummary();

  sendResponse(res, {
    success: true,
    message: 'Borrowed books summary retrieved successfully',
    data: summary,
  });
};
