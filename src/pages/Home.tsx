import * as React from 'react';

import Layout from './../components/Layout';
import PageTitle from './../components/PageTitle';
import SearchField from './../components/SearchField';
import SubmitButton from './../components/SubmitButton';

const { useState, useEffect } = React;

const Home = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(movie);
    console.log(city);
    console.log(cinema);
  };

  const [movie, setMovie] = useState('');
  const [city, setCity] = useState('');
  const [cinema, setCinema] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (movie !== '' || city !== '' || cinema !== '') {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  });

  return (
    <Layout>
      <form>
        <PageTitle text="Let's find something interesting" />
        <SearchField
          id="movie"
          type="text"
          entity="movie"
          label="Movie Title"
          value={movie}
          handleChange={setMovie}
        />
        <SearchField
          id="city"
          type="text"
          entity="city"
          label="Where do you live?"
          value={city}
          handleChange={setCity}
        />
        <SearchField
          id="cinema"
          type="select"
          entity="cinema"
          label="Choose Cinema"
          value={cinema}
          handleChange={setCinema}
        />
        <SubmitButton
          text="Search"
          handleClick={handleSubmit}
          disabled={buttonDisabled}
        />
      </form>
    </Layout>
  );
};

export default Home;
