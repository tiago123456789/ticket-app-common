import jwt from "jsonwebtoken";
export declare class TokenUtils {
    get(payload: {
        [key: string]: any;
    }): never;
    decode(token: string): jwt.Jwt & jwt.JwtPayload & void;
}
