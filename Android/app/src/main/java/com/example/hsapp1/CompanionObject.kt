package com.example.hsapp1

//companion 은 java의 static역할

//private constructor 쓰면 다른곳에서는 이 book을 만들지 못한다,
class Book private constructor(val id:Int, val name:String){
    //안쪽에서 팩토리를만들자
    //얘는 상속도가능
    companion object BookFactory : IdProvider{
        val myBook = "name"

        fun create() = Book(getId(), myBook)
        override fun getId(): Int {
            return 444
        }
    }
}

interface IdProvider{
    fun getId() :Int
}

fun main() {
    //val book = Book() 원래는 이렇게 해야할거같은데 안댐
    //val book = Book.Companion.create()
    val book = Book.create()//생략가능 > 자바 static{} 역할
    println("${book.id} ${book.name}")
}