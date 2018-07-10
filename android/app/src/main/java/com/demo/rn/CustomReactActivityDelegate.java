
package com.demo.rn;

import android.app.Activity;
import android.os.Bundle;
import android.support.v4.app.FragmentActivity;

import com.facebook.react.ReactActivityDelegate;

import javax.annotation.Nullable;

/**
 * @author yy_cping
 * 继承 {@link ReactActivityDelegate}.
 * 重新获取bundle 传递参数给rn的代码
 *
 */


public class CustomReactActivityDelegate extends ReactActivityDelegate {
private Activity mActivity;
  public CustomReactActivityDelegate(Activity activity, @Nullable String mainComponentName) {
    super(activity, mainComponentName);
    mActivity=activity;
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

  }

  public CustomReactActivityDelegate(FragmentActivity fragmentActivity, @Nullable String mainComponentName) {
    super(fragmentActivity, mainComponentName);
  }

  @Nullable
  @Override
  protected Bundle getLaunchOptions() {
    Bundle bundle = new Bundle();
    bundle.putString("flag1","home");
    return bundle;
  }
}
