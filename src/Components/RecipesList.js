import {useEffect, useState} from "react";

import {Link} from "react-router-dom";
import {Button, ButtonGroup, Container, Table} from "reactstrap";


const RecipesList=()=>{
    const [ recipes, setRecipes ] = useState([])

    useEffect(()=>{
        fetch('/recipes')
            .then(response=> response.json())
            .then(data => setRecipes(data))
    },[])

    const remove = async(id)=> {
        await fetch(`/recipes/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedRecipes = [...recipes].filter(i => i.id !== id);
            setRecipes(updatedRecipes);
        });
    }

    const recipeList = recipes.map(recipe => {
        return <tr key={recipe.id}>
            <td style={{whiteSpace: 'nowrap'}}> <img src={recipe.image} alt="FoodImage" class="rounded-circle img-fluid"/>   </td>
            <td>{recipe.name}</td>
            <td>{recipe.description}</td>
            <td>
                <ButtonGroup>
                    <Button size="sm" color="primary" tag={Link} to={"/recipes/" + recipe.id}>Edit</Button>
                    <Button size="sm" color="danger" onClick={() => remove(recipe.id)}>Delete</Button>
                </ButtonGroup>
            </td>
        </tr>
    });
    return(
        <>
            <Container fluid>
                <div className="float-right">
                    <Button color="success" tag={Link} to="/recipes/new">Add Recipe</Button>
                </div>
                <h3>Recipes</h3>
                <Table className="mt-4 text-center">
                    <thead>
                    <tr>
                        <th width="15%">Image</th>
                        <th width="30%">Name</th>
                        <th width="30%">Description</th>
                        <th width="30%">Edit/Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {recipeList}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}
export default RecipesList;