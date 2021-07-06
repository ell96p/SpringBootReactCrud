package com.example.RecipesCrud.Controller;

import com.example.RecipesCrud.DAO.RecipeRepository;
import com.example.RecipesCrud.Entity.Recipe;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/recipes")
public class RecipeController {

    private final RecipeRepository recipeRepository;

    public RecipeController(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    @GetMapping
    public List<Recipe> getRecipes() {return recipeRepository.findAll();
    }

    @GetMapping("/{id}")
    public Recipe getRecipe(@PathVariable Long id) {
        return recipeRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createRecipe(@RequestBody Recipe recipe) throws URISyntaxException {
        Recipe savedRecipe = recipeRepository.save(recipe);
        return ResponseEntity.created(new URI("/recipes/" + savedRecipe.getId())).body(savedRecipe);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateRecipe(@PathVariable Long id, @RequestBody Recipe recipe) {
        Recipe currentRecipe = recipeRepository.findById(id).orElseThrow(RuntimeException::new);
        currentRecipe.setName(recipe.getName());
        currentRecipe.setDescription(recipe.getDescription());
        currentRecipe.setRecipe(recipe.getRecipe());
        currentRecipe.setImage(recipe.getImage());
        currentRecipe.setPrepareLength(recipe.getPrepareLength());
        currentRecipe = recipeRepository.save(recipe);

        return ResponseEntity.ok(currentRecipe);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteRecipe(@PathVariable Long id) {
        recipeRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}