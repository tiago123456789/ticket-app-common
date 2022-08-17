import { Request, Response, NextFunction } from "express";
export declare const authorizator: (request: Request, response: Response, next: NextFunction) => void | Response<any, Record<string, any>>;
