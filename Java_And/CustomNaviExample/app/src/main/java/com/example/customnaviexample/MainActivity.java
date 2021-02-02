package com.example.customnaviexample;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.drawerlayout.widget.DrawerLayout;

import android.os.Bundle;
import android.view.MotionEvent;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {
    private DrawerLayout drawerLayout;
    private View drawerView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        drawerLayout = findViewById(R.id.drawer_layout);
        drawerView = findViewById(R.id.drawer);
        Button btn_open = findViewById(R.id.btn_open);

        btn_open.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                drawerLayout.openDrawer(drawerView);
            }
        });

        drawerLayout.addDrawerListener(listener);
        drawerView.setOnTouchListener(new View.OnTouchListener() {
            @Override
            public boolean onTouch(View v, MotionEvent event) {
                return true;
            }
        });

        Button btn_close = findViewById(R.id.btn_close);
        btn_close.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                drawerLayout.closeDrawers();
            }
        });
    }
    //Drawer를 가져 왔을 때 할 일들
    DrawerLayout.DrawerListener listener = new DrawerLayout.DrawerListener() {
        @Override // 슬라이드하면
        public void onDrawerSlide(@NonNull View drawerView, float slideOffset) {

        }

        @Override // 오픈된상태
        public void onDrawerOpened(@NonNull View drawerView) {

        }

        @Override // 닫힐떄
        public void onDrawerClosed(@NonNull View drawerView) {

        }

        @Override // 어떤 상태가 변경댈떄
        public void onDrawerStateChanged(int newState) {

        }
    };
}