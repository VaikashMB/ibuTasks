package com.example.sum3;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/sum")
@CrossOrigin(origins = "http://localhost:3000")
public class SumController {
    @GetMapping("/{number1},{number2}")
    public int calculateSum(@PathVariable int number1,@PathVariable int number2){
        return number1+number2;

    }
}
