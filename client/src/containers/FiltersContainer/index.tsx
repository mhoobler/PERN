import React from 'react';

import Filter from '../../components/Filter';

type Props = {
  filters: AppContextType['filters']
}

const FiltersContainer: React.FC<Props> = ({filters}) => {
  const keys = Object.keys(filters);

  return (
    <div>
      {keys.map( (e: string) => {
        return <Filter id={parseInt(e)} key={e} />
      })}
    </div>
  );
}

export default FiltersContainer;
