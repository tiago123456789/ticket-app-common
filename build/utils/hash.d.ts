export declare class HashUtils {
    getHash(value: string): Promise<string>;
    compare(value: string, hash: string): Promise<boolean>;
}
