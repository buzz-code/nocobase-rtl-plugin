import { Plugin } from '@nocobase/client';

const isRTL = (lang) => ['ar', 'he', 'fa', 'ps', 'ur'].some((l) => lang.startsWith(l));

export class RtlSupportClient extends Plugin {
  async afterAdd() { }

  async beforeLoad() { }

  async load() {
    if (isRTL(this.app.i18n.language)) {
      document.body.setAttribute('dir', 'rtl');
    }
  }
}

export default RtlSupportClient;
