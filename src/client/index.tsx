import { Plugin } from '@nocobase/client';
import React from 'react';
import { ConfigProvider } from 'antd';

const isRTL = (lang: string) => ['ar', 'he', 'fa', 'ps', 'ur'].some((l) => lang.startsWith(l));

const ConfigRtlProvider = ({ children }) => (
  <ConfigProvider direction="rtl">
    {children}
  </ConfigProvider>
);

export class RtlSupportClient extends Plugin {
  async afterAdd() { }

  async beforeLoad() { }

  async load() {
    if (isRTL(this.app.i18n.language)) {
      this.app.use(ConfigRtlProvider);
      document.body.setAttribute('dir', 'rtl');
    }
  }
}

export default RtlSupportClient;
