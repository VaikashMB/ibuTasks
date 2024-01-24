package com.example.Sum;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SumController {
    @PostMapping("/calculate")
    public int calculateSum(@RequestBody Inputs inputs){
        return inputs.getNumber1() + inputs.getNumber2();
    }
}
