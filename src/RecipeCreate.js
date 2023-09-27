import React, { useState } from "react";

function RecipeCreate({addRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const initInputs = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  }
  const [inputs, setInputs] = useState({...initInputs})
  const handleChange = ({target}) => {
    setInputs((prevState) => ({...prevState, [target.name]: target.value}))
  }
  const handleSubmit = (evt) => {
    evt.preventDefault()
    addRecipe({...inputs})
    setInputs(initInputs)
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                  name="name"
                  placeholder="Name"
                  type="text"
                  value={inputs.name}
                  onChange={handleChange}
              />
            </td>
            <td>
              <input
                  name="cuisine"
                  placeholder="Cuisine"
                  type="text"
                  value={inputs.cuisine}
                  onChange={handleChange}
              />
            </td>
            <td>
              <input
                  name="photo"
                  placeholder="URL"
                  type="url"
                  value={inputs.photo}
                  onChange={handleChange}
              />
            </td>
            <td>
              <textarea
                  name="ingredients"
                  placeholder="Ingredients"
                  value={inputs.ingredients}
                  onChange={handleChange}
              />
            </td>
            <td>
              <textarea
                  name="preparation"
                  placeholder="Preparation"
                  value={inputs.preparation}
                  onChange={handleChange}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
