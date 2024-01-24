package com.example.sum3;

import org.springframework.web.bind.annotation.*;

@RequestMapping("/sum")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SumController2 {
    @PostMapping("/calculate")
    public int calculateSum(@RequestBody InputNumber inputNumber){
        return inputNumber.getNumber1() + inputNumber.getNumber2();
    }
}
