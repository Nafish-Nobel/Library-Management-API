import { ErrorRequestHandler } from 'express';

export const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = 'Something went wrong';
  let error = err;

  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = 'Validation failed';
  }

  res.status(statusCode).json({
    success: false,
    message,
    error,
  });
};
