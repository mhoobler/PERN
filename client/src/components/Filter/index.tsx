import React, { useState } from "react";

type Inputs = {
  tags: string;
};

const Filter: React.FC = () => {
  const [inputs, setInputs] = useState<Inputs>({
    tags: "",
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
