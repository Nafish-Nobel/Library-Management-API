import { Response } from 'express';

type ResponseType = {
  success: boolean;
  message: string;
  data: any;
};

export const sendResponse = (res: Response, data: ResponseType) => {
  res.status(200).json(data);
};
