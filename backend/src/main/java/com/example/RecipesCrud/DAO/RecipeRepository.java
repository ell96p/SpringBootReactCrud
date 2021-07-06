package com.example.RecipesCrud.DAO;

import com.example.RecipesCrud.Entity.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {
}