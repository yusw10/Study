package com.example.webviewexample;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.KeyEvent;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends AppCompatActivity {

    private WebView webView;
    private String url = "https://www.daum.net";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        webView = findViewById(R.id.webView);
        webView.getSettings().setJavaScriptEnabled(true); // 자바스크립트 허가
        webView.loadUrl(url); //특정 url을 로드해줘라
        webView.setWebChromeClient(new WebChromeClient()); //크롬 환경에 맞춰주기
        webView.setWebViewClient(new WebViewClientClsas());

    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        //특정 키들을 입력했을 때 어떤 동작할지 지정해주는것
        if ((keyCode == KeyEvent.KEYCODE_BACK) && webView.canGoBack()) {// 뒤로가기 누르고 웹뷰가 뒤로갈 수 있다면.
            webView.goBack();
            return true;
        }
        return super.onKeyDown(keyCode, event);
    }

    private class WebViewClientClsas extends WebViewClient {
        @Override
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
            view.loadUrl(url);
            return true;
        }
    }
}