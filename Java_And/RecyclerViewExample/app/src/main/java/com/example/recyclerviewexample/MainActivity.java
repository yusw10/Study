package com.example.recyclerviewexample;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    private ArrayList<MainData> arrayList;
    private MainAdapter mainAdapter;
    private RecyclerView recyclerView;
    private LinearLayoutManager linearLayoutManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        
        recyclerView = findViewById(R.id.rv);
        linearLayoutManager = new LinearLayoutManager(this);

        
        arrayList = new ArrayList<>();
        mainAdapter = new MainAdapter(arrayList);

        recyclerView.setAdapter(mainAdapter);
        recyclerView.setLayoutManager(linearLayoutManager);

        Button btn_add  = findViewById(R.id.btn_add);
        btn_add.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                MainData mainData = new MainData(R.drawable.ic_launcher_background, "앙 ~ 기모디", "리사이클러뷰");
                arrayList.add(mainData);
                mainAdapter.notifyDataSetChanged(); //새로고침
                //add remove modify 하면 전부 새로고침 해야한다.
            }
        });
    }
}