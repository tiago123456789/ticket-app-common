import { Request, Response, NextFunction } from "express";
export declare const handleException: (error: Error, request: Request, response: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
