import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';

import PageTitle from '../components/PageTitle';
import FieldContainer from '../components/fields/FieldContainer';
import SubmitButton from '../components/buttons/SubmitButton';

const Home = () => {
  const [movie, setMovie] = useState('');
  const [city, setCity] = useState('');
  const [cinema, setCinema] = useState('');
  const [date, setDate] = useState(new Date());
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(movie);
    console.log(city);
    console.log(cinema);
    console.log(date);
  };

  useEffect(() => {
    if (movie || city || cinema) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <PageTitle text="Let's find something interesting" />
      <FieldContainer
        id="movie"
        type="text"
        entity="movie"
        label="Movie Title"
        value={movie}
        handleChange={setMovie}
      />
      <FieldContainer
        id="city"
        type="text"
        entity="city"
        label="Where do you live?"
        value={city}
        handleChange={setCity}
      />
      <FieldContainer
        id="cinema"
        type="select"
        entity="cinema"
        label="Choose Cinema"
        value={cinema}
        handleChange={setCinema}
      />
      <FieldContainer
        id="date"
        type="date"
        entity="date"
        label="Choose Date"
        value={date}
        handleChange={setDate}
      />
      <SubmitButton
        text="Search"
        icon={<SearchIcon />}
        disabled={buttonDisabled}
      />
    </form>
  );
};

export default Home;
