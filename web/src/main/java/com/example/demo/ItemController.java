package com.example.demo;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/items")
public class ItemController {

    @GetMapping("/list")
    public List<Item> getItemList() throws Exception {

        // for demo purpose hard coding the list ideally it fetch the list using service -> repository -> database calls
        List<Item> items = new ArrayList<>();
        items.add(new Item("11111111111", "1st item date coming from backend"));
        items.add(new Item("22222222222", "2nd item date coming from backend"));
        items.add(new Item("33333333333", "3rd item date coming from backend"));
        return items;
    }

    @GetMapping("/{number}")
    public Item getLastReceivedDate(@PathVariable("number") String number) throws Exception {
        // for demo purpose hard coding the detail ideally it fetch the list using service -> repository -> database calls
        return new Item("44444444444444", "item detail date coming from backend");
    }
}

