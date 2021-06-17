import React from "react";

const Filters = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
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
