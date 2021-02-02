package com.example.hsapp1


//기본 생성자를 이러케 함수 이름 부분에 미리 지정해준다.

// init 하고 컨스트럭터(부생성자) 실행된다. 이때 this를 가지고 주생성자로부터 위임받는다.
open class Human constructor(val name: String = "Annoymous") {
    //생성자도 자바랑 약간 다름


    //프로퍼티도 그냥 동일하게
    //프러퍼티 네임이랑 생성자인자랑 동일하니까 중복하지말라고 에러뜸
    //val name: String = name


    init { // 주 생성자
        // 생성자 처럼 사용가능한. 처음 시작될때 할 수 있다.
        println("New Human has been born")
    }
    //오버로딩을 이용해서 부 생성자를 사용하여 여러 생성자를 사용 할 수 있엇는데 코틀린에서는 constructo로 할 수 잇음

    constructor(name: String, age: Int) : this(name) {
        println("Name : ${name}, and age : $age")
    }

    //함수도 쌉가능
    fun eatingCake() {
        println("This is so YUMMY!~")
    }

    open fun singASong() {
        println("누구보다 빠르게 난 남들과는 다르게")
    }
}

//코틀린 클래스는 기본적으로 final타입임.
//그래서 위에 Human class에 open이라는 명령어를 써서 권한을 열어줄 수 있다.
class Korean : Human() {
    override fun singASong(){
        super.singASong()
        println("라라라라라")
    }
}

fun main() {
    val human3 = Human("yhs", 15)
    val korean1 = Korean()

    korean1.singASong()

    //println("This human's name is ${human3.name}, ${human3.age}")
}