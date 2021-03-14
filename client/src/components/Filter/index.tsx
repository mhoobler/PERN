import React, { useState } from "react";

type Props = {
  id: number
}

const Filter: React.FC<Props> = ({id}) => {
  const [inputs, setInputs] = useState<FilterInputs>({
    name: "",
    description: "",
    tags: ""
  });

  const handleChange = (evt: any) => {
    const { name, value } = evt.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="TagName"
        data-testid="filter-name"
        value={inputs.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Tag Description"
        data-testid="filter-description"
        value={inputs.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="tags"
        placeholder="Tag1, Tag2"
        data-testid="filter-tags"
        value={inputs.tags}
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
