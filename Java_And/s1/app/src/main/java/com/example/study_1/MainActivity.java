package com.example.study_1;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    EditText et_id;
    Button btn_test;
    private String input_str;
    private Button btn_move_sub;
    ImageView iv_test;

    private ListView list;


    @Override
    protected void onCreate(Bundle savedInstanceState) { //초기에 실행한다 static{}같은거인듯?
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //find view
        et_id = findViewById(R.id.et_id);// 생명주기를 불어넣어준다. main.xml의 etid를 이렇게 해서 매칭 하는것.
        btn_test = findViewById(R.id.btn_test);
        btn_move_sub = findViewById(R.id.btn_move_sub);
        iv_test = findViewById(R.id.iv_test);
        list = findViewById(R.id.list);

        List<String> data = new ArrayList<String>();
        //리스트 뷰랑 리스트를 연결해주는 어댑터라는 친구가 필요함.
        //this를 적으면 현재 액티비티 , 양식, 데이터
        ArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, data);
        list.setAdapter(adapter);

        data.add("앙 일모띠~");
        data.add("앙 이모띠~");
        data.add("앙 삼모띠~");
        adapter.notifyDataSetChanged(); // 마지막에 이거를 해줘야 저장이 된다.
        http:
//m.inven.co.kr/board/maple/2299/5960667
        //onclick list
        iv_test.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(getApplicationContext(), "커피먹고싶다.", Toast.LENGTH_SHORT).show(); // 본인의 Main 액티비티에서
            }
        });
        btn_test.setOnClickListener(new View.OnClickListener() { // 이 버튼을 클릭했을때 어떤 행동을 취할 지 정한다.
            @Override
            public void onClick(View v) {
                et_id.setText("왁끼띠");
            }
        });

        btn_move_sub.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                input_str = et_id.getText().toString();
                Intent intent = new Intent(MainActivity.this, SubActivity.class); // 현재 activity , 이동하고자 하는 activity
                intent.putExtra("str", input_str);
                startActivity(intent);//액티비티 이동
            }
        });

    }
}