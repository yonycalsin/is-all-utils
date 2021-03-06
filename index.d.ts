declare const is: <T = any>(type?: any) => (value: T) => boolean;
export declare const isNumber: (value: any) => boolean;
export declare const isInteger: (value: number) => boolean;
export declare const isFloat: (value: number) => boolean;
export declare const isObj: (value: any) => boolean;
export declare const isObject: (value: any) => boolean;
export declare const isArray: (value: any) => boolean;
export declare const isString: (value: any) => boolean;
export declare const isRegExp: (value: any) => boolean;
export declare const isBoolean: (value: any) => boolean;
export declare const isBool: (value: any) => boolean;
export declare const isMap: (value: any) => boolean;
export declare const isWeakMap: (value: any) => boolean;
export declare const isSet: (value: any) => boolean;
export declare const isWeakSet: (value: any) => boolean;
export declare const isUndefined: (value: any) => boolean;
export declare const isNull: (value: any) => boolean;
export declare const isNil: (value: any) => boolean;
export declare const isFunction: (value: any) => boolean;
export declare const isAsyncFunction: (value: any) => boolean;
export declare const isFn: (value: any) => boolean;
export declare const isSymbol: (value: any) => boolean;
export declare const isClass: (value: any) => boolean;
export declare const isError: (value: any) => boolean;
export declare const isDate: (value: any) => boolean;
export declare const isPromise: (value: any) => boolean;
export { is };
