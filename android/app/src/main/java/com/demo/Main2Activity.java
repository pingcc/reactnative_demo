package com.demo;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.TextView;


public class Main2Activity extends AppCompatActivity {
    public static String NativePutValue = "nativePutValue";

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
        ((TextView) findViewById(R.id.tv_text)).setText(
                "r传递回来的值:" +
                        getIntent().getStringExtra(NativePutValue));
    }

    public void goRn(View view) {//跳转到下一个RN界面
        MainActivity.goRn(this);
    }
}
