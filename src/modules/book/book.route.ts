import express from 'express';
import {
  createBook,
  deleteBook,
  getBooks,
  getSingleBook,
  updateBook,
} from './book.controller';

const router = express.Router();

router.post('/', createBook);
router.get('/', getBooks);
router.get('/:bookId', getSingleBook);
router.put('/:bookId', updateBook);
router.delete('/:bookId', deleteBook);

export const BookRoutes = router;
