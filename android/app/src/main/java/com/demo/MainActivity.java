package com.demo;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;

import com.demo.rn.CustomReactActivityDelegate;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;


public class MainActivity extends ReactActivity {

    public static String REACTVALUE="reactValue";
    public static void goRn(Activity activity){
        Intent intent= new Intent(activity,MainActivity.class);
        Bundle bundle=new Bundle();
        bundle.putString(MainActivity.REACTVALUE,activity.getClass().getSimpleName());
        intent.putExtras(bundle);
        activity.startActivity(intent);
    }
    //重写 ReactActivityDelegate
    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new CustomReactActivityDelegate(this, getMainComponentName());
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */


    @Override
    protected String getMainComponentName() {
        return "demo";
    }

}
