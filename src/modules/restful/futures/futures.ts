import { Constructor } from '../../../setters/types';
import { FuturesMethods } from './methods';
import {
  accountBalanceV2Response,
  accountInformationV2Response,
} from './types';

export function mixinFutures<T extends Constructor>(
  base: T,
): Constructor<FuturesMethods> & T {
  return class extends base {
    /**
     * Get current account information. (USER_DATA) {@link https://binance-docs.github.io/apidocs/futures/en/#futures-account-balance-v2-user_data}
     */
    async accountInformationV2(): Promise<accountInformationV2Response> {
      const url = this.prepareSignedPath('/fapi/v2/account');
      return this.makeRequest('GET', url);
    }

    async accountBalanceV2(): Promise<accountBalanceV2Response> {
      const url = this.prepareSignedPath('/fapi/v2/balance');
      return this.makeRequest('GET', url);
    }
  };
}
