package com.demo.rn;

import android.content.Intent;

import com.demo.Main2Activity;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created  on 2018/7/9.
 *
 * @author CPing
 *         Email yy_cping@163.com
 *         edit androidStudio
 */

public class OpenNativeModule extends ReactContextBaseJavaModule {

    private ReactContext mReactContext;

    public OpenNativeModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mReactContext=reactContext;
    }

    @Override
    public String getName() {
        return "OpenNativeModule";
    }

    //可以带参数
    @ReactMethod
    public void openNativeVC(String value) {
        Intent intent = new Intent();
        intent.putExtra(Main2Activity.NativePutValue,value);
        intent.setClass(mReactContext, Main2Activity.class);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        mReactContext.startActivity(intent);
    }

}
