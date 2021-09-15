import React from 'react';
import GetUrlBlock from '../Components/Atoms/GetUrlBlock';

const HomeScreen = () => {
  return (
    <main>
      <div className='container'>
        <section className='hero-section'>
          <h1>React Egzam 3 dalis</h1>
          <img
            src='https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png'
            alt='chucknoris.png'
            className='chuck-img'
          />
        </section>
        <section className='content-section'>
          <div className='content-div'>
            <h3>Get all Jokes</h3>
            <GetUrlBlock url='https://last-try-chuck-noris-sl-lv.herokuapp.com/api/jokes/' />
            <p>
              By using GET method you can get all jokes. This url above is an
              api with all 10 handpicked best jokes about Chuck Norris.
            </p>
          </div>
          <div className='content-div'>
            <h3>Get x amount of Jokes</h3>
            <GetUrlBlock url='https://last-try-chuck-noris-sl-lv.herokuapp.com/api/jokes/amount/4' />
            <p>
              By adding '/amount/' and the number of jokes to the first url you
              want you can get the number of jokes fom all 10 handpicked best
              jokes about Chuck Norris.
            </p>
          </div>
          <div className='content-div'>
            <h3>Get Jokes by category</h3>
            <GetUrlBlock url='https://last-try-chuck-noris-sl-lv.herokuapp.com/api/jokes/theology' />
            <p>
              By adding a category to the first url as seen above you can get
              only those joke who belong to given category from all 10
              handpicked best jokes about Chuck Norris. Categories to choose
              from: education, theology, sports, animals
            </p>
          </div>
          <div className='content-div'>
            <h3>Get x amount of Jokes by category</h3>
            <GetUrlBlock url='https://last-try-chuck-noris-sl-lv.herokuapp.com/api/jokes/theology/1' />
            <p>
              By adding a amount to the previous url you can get the needed
              amount of jokes by category from all 10 handpicked best jokes
              about Chuck Norris.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomeScreen;
