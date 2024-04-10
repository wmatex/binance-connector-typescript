import {
  accountBalanceV2Response,
  accountInformationV2Response,
} from './types';

export interface FuturesMethods {
  accountInformationV2(): Promise<accountInformationV2Response>;
  accountBalanceV2(): Promise<accountBalanceV2Response>;
}
