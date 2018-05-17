import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
var forge = require('node-forge');
var CryptoJS = require("crypto-js");
var SHA256 = require("crypto-js/sha256");
var CryptoJS = require("crypto-js");

/**
 * 加密工具类
 */
class EncryptUti {

    //mde 加密
    static encryptMd5PWDStr(param) {

        return new Promise(function (resolve, reject) {

            let encryptStr = param;
            /*用户密码MD5加密*/
            var md2 = forge.md.md5.create();
            md2.update(encryptStr);
            let encryptResultStr = md2.digest().toHex();

            if (encryptResultStr) {
                resolve(encryptResultStr);
            } else {
                reject('出错了');
            }
        });

    }
    //Base64 加密
    static encryptBase64PWDStr(param ,hashDigest ,privateKey) {//aes加密
        return Base64.stringify(hmacSHA512(param + hashDigest, privateKey));
    }

    //aes 加密
    static encryptAESPWDStr(param) {//aes加密
        return CryptoJS.AES.encrypt(param, 'secret key 123');
    }

    /**
     *
     * @param cipherText 需要解密value
     * @returns {string} 返回的解密字符串
     */
    static decryptAESPWDStr(cipherText) {//aes解密
        var bytes = CryptoJS.AES.decrypt(cipherText.toString(), 'secret key 123');
        var plaintext = bytes.toString(CryptoJS.enc.Utf8);
        return plaintext;
    }

    //SHA256 加密
    static encryptSHA256PWDStr(param) {
        let str = "";//混合加密字符串
        return SHA256(param + str);
    }

    //SHA1 加密
    static encryptCryptoJSPWDStr(param) {
        let key = "";//密钥
        return CryptoJS.HmacSHA1(param, key);
    }
}

export default EncryptUti;