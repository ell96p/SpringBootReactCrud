package com.example.RecipesCrud.Entity;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "recipes")
public class Recipe {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String description;
    private String prepareLength;
    private String recipe;
    private String image;

    public Recipe(String name, String description, String prepareLength, String recipe, String image) {
        this.name = name;
        this.description = description;
        this.prepareLength = prepareLength;
        this.recipe = recipe;
        this.image = image;
    }

    public Recipe() {

    }
}