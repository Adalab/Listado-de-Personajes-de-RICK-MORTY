import React from "react";

const Filters = (props) => {
  const handleChange = (ev) => {
    props.handleFilter(ev.target.value, "name");
  };
  return (
    <section>
      <form>
        <input
          className="form__input-text"
          type="text"
          name="name"
          placeholder="Ric"
          id="name"
          onChange={handleChange}
        />
      </form>
    </section>
  );
};

export default Filters;
