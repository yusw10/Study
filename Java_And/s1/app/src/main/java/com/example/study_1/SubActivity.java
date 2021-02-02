package com.example.study_1;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class SubActivity extends AppCompatActivity {
    private Button btn_move_main;
    private TextView tv_sub;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sub);

        Intent intent = getIntent();
        String str = intent.getStringExtra("str");


        btn_move_main = findViewById(R.id.btn_move_main);
        tv_sub = findViewById(R.id.tv_sub);
        tv_sub.setText(str);

        btn_move_main.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
//                Intent intent = new Intent(MainActivity.this, SubActivity.class); // 현재 activity , 이동하고자 하는 activity
//                startActivity(intent);//액티비티 이동
                Intent intent = new Intent(SubActivity.this, MainActivity.class);
                startActivity(intent);
            }
        });
    }
}