export declare const timeout = 2000000;
export declare const maxContentLength = 200000000;
export declare const withCredentials = false;
export declare function handleRequestError(error: any): void;
export declare function clientParam(apiURL: any): import('axios').AxiosInstance;
export declare function apiClientParam(apiURL: any): import('axios').AxiosInstance;
export declare function fetchSearchDataPointManageList(
  params: any,
): Promise<import('axios').AxiosResponse<any>>;
export declare function fetchSearchReactStackList(
  params: any,
): Promise<import('axios').AxiosResponse<any>>;
export declare function fetchDataSourceList(
  params: any,
): Promise<import('axios').AxiosResponse<any>>;
export declare function fetchPerceptualPointList(
  params: any,
): Promise<import('axios').AxiosResponse<any>>;
export declare const tranRSA: (params: any) => any;
export declare const loginSZGC: () => Promise<unknown>;
