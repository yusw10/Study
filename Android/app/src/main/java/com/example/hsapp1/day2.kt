package com.example.hsapp1


/**
 * 1. lambda
우리가 value처럼 다룰수 있는 익명함수이다.
이말은?
1) 메소드의 파라미터로 넘길 수 있다. fun maxBy(a:Int)
2) return 값으로 사용할 수 있다.

람다의 기본 정의
val lamdaName : Type = {argumentList -> codeBody}
 */
//인풋 -> 아웃풋= {입력인자 : 타입 -> 연산식}
val square: (Int) -> (Int) = { number: Int -> number * number }
val nameAge: (String, Int) -> String = { name: String, age: Int ->
    "My Name is ${name} and age is ${age}"
}


/**
 * 확장함수
 *
 */


val pizzaIsGreat: String.() -> String = { this + " Pizza is the best" }

fun extendString(name: String, age: Int): String {
    // 파라미터 한개면 it으로 지칭 가능
    val introduceMySelf: String.(Int) -> String = { "I am ${this} and ${it} years old" }
    return name.introduceMySelf(age)
}

//람다의리턴?
val calculateGrade: (Int) -> String = {
    when (it) {
        in 0..40 -> "fail"
        in 41..70 -> "pass"
        in 71..100 -> "perfect"
        else -> "ERROR"
        //else가없으면 람다가 String리턴한댓는데... 리턴이없어서 에러임
        //무조건 리턴을 해야함
    }
}

//람다표현방법
fun invokeLamda(lamda: (Double) -> Boolean): Boolean {
    return lamda(5.2343)
}
//익명 내부함수?


//코틀린 인터페이스가 아닌 자바인터페이스
//그 인터페이스는 딱 하나의메소드만 가져야한다.





fun main() {
    println(square(12))
    println(nameAge("hansuk", 25))
    val a = "hansuk said"
    println(a.pizzaIsGreat())
    println(extendString("kim", 28))
    println(calculateGrade(89))
    val lamda = { number: Double -> number == 4.3213 }
    println(invokeLamda(lamda))
    println(invokeLamda({ it > 3.22 }))
}