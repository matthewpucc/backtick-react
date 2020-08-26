import React from 'react';
import ResultCard from '../ResultCard/ResultCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  results: {
    margin: '10px 10px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
}));

export default function ResultsContainer({ searchData }) {
  const { results, query, offset, total } = searchData;

  const style = useStyles();

  return (
    <div className={style.results}>
      {results
        ? results.map((result, index) => (
            <div key={'result-card-' + index}>
              <ResultCard result={result} />
            </div>
          ))
        : ''}
      {results === null ? <p>No Results</p> : ''}
    </div>
  );
}