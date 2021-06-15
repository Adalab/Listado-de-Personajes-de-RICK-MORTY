import React from "react";

const Filter = () => {
  return (
    <section>
      <form>
        <FilterByName />

        <label htmlFor="gender">Género:</label>

        <select name="gender" id="gender">
          <option value="">Cerda</option>
          <option value="">Cerdo</option>
        </select>

        <label htmlFor="location">Ciudad:</label>
        <p>
          <input type="checkbox" name="location" value="all" />
          Todas
        </p>
        <p>
          <input type="checkbox" name="location" value="all" />
          Madrid
        </p>
        <p>
          <input type="checkbox" name="location" value="all" />
          Barcelona
        </p>
      </form>
    </section>
  );
};

export default Filter;
