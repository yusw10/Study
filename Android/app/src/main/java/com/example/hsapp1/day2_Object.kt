package com.example.hsapp1

//singleton Pattern
object CarFactory{
    val cars :MutableList<Car> = mutableListOf<Car>()
    fun makeCar(horsePower: Int):Car{
        val car = Car(horsePower)
        cars.add(car)
        return car
    }

}
data class Car(val horsePower:Int)

fun main() {
    val car1 = CarFactory.makeCar(10)
    val car2 = CarFactory.makeCar(20)

    println(car1)
    println(car2)
    println(CarFactory.cars.size.toString())



}