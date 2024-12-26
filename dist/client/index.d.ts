import { Plugin } from '@nocobase/client';
export declare class RtlSupportClient extends Plugin {
    afterAdd(): Promise<void>;
    beforeLoad(): Promise<void>;
    load(): Promise<void>;
}
export default RtlSupportClient;
