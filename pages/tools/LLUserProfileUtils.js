

import LLStorage from './LLStorage'

/**
 * sve user info utils
 */
class LLUserProfileUtils {

    static saveUserProfile(param){
        if (!param)return;

        LLStorage.update('Avatar',param.Avatar);
        LLStorage.update('ID',param.ID);
        LLStorage.update('MemberId',param.MemberId);
        LLStorage.update('NickName',param.NickName);
        LLStorage.update('Phone',param.Phone);
        LLStorage.update('RealName',param.RealName);
        LLStorage.update('TenantId',param.TenantId);
        LLStorage.update('UserId',param.UserId);
        LLStorage.update('SessionKey',param.SessionKey);
        return new Promise((resolve ,reject)=>{
            LLStorage.update('SessionKey',param.SessionKey).then(
                resolve(true)
            ).catch(err=>{
                reject(err)
            });
        })
    }

    static ClearUserInfo(){
        LLStorage.delete('SessionKey');
        LLStorage.delete('Avatar');
        LLStorage.delete('MemberId');
        LLStorage.delete('NickName');
        LLStorage.delete('Phone');
        LLStorage.delete('RealName');
        LLStorage.delete('UserId');
        LLStorage.delete('TenantID');
    }

    static isUserLogin(){
        return new Promise((resolve,reject)=>{
            LLStorage.get('SessionKey').then(userToken=>{
                resolve(userToken != null)
            })
        })
    }

    static UserToken(){
        return new Promise((resolve ,reject)=>{
            LLStorage.get('SessionKey').then(userToken=>{
                resolve(userToken!=null?userToken:'')
            })
        })
    }
}


export default LLUserProfile;
