/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

export interface ISubtleCrypto {
    getRandomValues(dataBuffer: Uint8Array): Uint8Array;
    generateKey(algorithm: RsaHashedKeyGenParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKeyPair>;
    exportKey(format: string, key: CryptoKey): Promise<JsonWebKey>;
    importKey(format: string, keyData: JsonWebKey, algorithm: RsaHashedImportParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    sign(algorithm: AlgorithmIdentifier, key: CryptoKey, data: ArrayBuffer): Promise<ArrayBuffer>;
    digest(algorithm: AlgorithmIdentifier, data: Uint8Array): Promise<ArrayBuffer>;
}